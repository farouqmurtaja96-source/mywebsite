// Auto-generated refactor: keeps original logic mostly intact.
// NOTE: This module assigns key objects/functions to window to keep cross-file references working.

import * as CONST from '../core/constants.js';
import { defaultLessons as importedDefaultLessons } from '../lessons/index.js';
import * as Cloud from '../cloud/lessonsCloud.js';

// Re-create original constant names in module scope
const LS_STUDENTS_KEY = CONST.LS_STUDENTS_KEY;
const LS_LESSON_PREFIX = CONST.LS_LESSON_PREFIX;
const LS_FONT_SIZE_KEY = CONST.LS_FONT_SIZE_KEY;
const LS_CUSTOM_UNITS_KEY = CONST.LS_CUSTOM_UNITS_KEY;
const LS_BACKUP_SETTINGS_KEY = CONST.LS_BACKUP_SETTINGS_KEY;
const LS_WHITEBOARD_PREFIX = CONST.LS_WHITEBOARD_PREFIX;
const LS_USER_ROLE_KEY = CONST.LS_USER_ROLE_KEY;
const LESSON_ID_GREETING = CONST.LESSON_ID_GREETING;
const LESSON_ID_DAILY_ROUTINE = CONST.LESSON_ID_DAILY_ROUTINE;
const LESSON_ID_FOOD_DRINK = CONST.LESSON_ID_FOOD_DRINK;
const LESSON_ID_FAMILY = CONST.LESSON_ID_FAMILY;
const LESSON_ID_TRANSPORT = CONST.LESSON_ID_TRANSPORT;
const LESSON_ID_WORK_STUDY = CONST.LESSON_ID_WORK_STUDY;
const LESSON_ID_HEALTH = CONST.LESSON_ID_HEALTH;
const LESSON_ID_APARTMENT = CONST.LESSON_ID_APARTMENT;
const LESSON_ID_SHOPPING = CONST.LESSON_ID_SHOPPING;
const LESSON_ID_WEATHER = CONST.LESSON_ID_WEATHER;
const LESSON_ID_OPINIONS = CONST.LESSON_ID_OPINIONS;
const LESSON_ID_COMPLAINTS = CONST.LESSON_ID_COMPLAINTS;
const LESSON_ID_PLANS_FUTURE = CONST.LESSON_ID_PLANS_FUTURE;
const LESSON_ID_FEELINGS = CONST.LESSON_ID_FEELINGS;
const LESSON_ID_HOBBIES = CONST.LESSON_ID_HOBBIES;
const BASE_PROGRESS_TEMPLATE = CONST.BASE_PROGRESS_TEMPLATE;

// Match original variable name used throughout the legacy code
const defaultLessons = importedDefaultLessons;
const getServerTimestamp = Cloud.getServerTimestamp;
const loadLessonsFromCloudOnce = Cloud.loadLessonsFromCloudOnce;
const subscribeLessonsFromCloud = Cloud.subscribeLessonsFromCloud;
const saveLessonToCloud = Cloud.saveLessonToCloud;
const deleteLessonFromCloud = Cloud.deleteLessonFromCloud;
const startLessonCloudSync = Cloud.startLessonCloudSync;
const stopLessonCloudSync = Cloud.stopLessonCloudSync;
const syncLessonsNow = Cloud.syncLessonsNow;
const setLessonSyncForScreen = Cloud.setLessonSyncForScreen;

const lessons = {};
// Expose for cloud module and other modules
window.lessons = lessons;


let cloudSaveTimer = null;

function scheduleCloudSave() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(() => {
        saveStudentsToCloud().catch(console.error);
    }, 600); // نصف ثانية بعد آخر تغيير
}

// ========================= STATE =========================
const appState = {
    students: [],
    currentStudentId: null,
    currentLessonId: LESSON_ID_GREETING,
    teacherMode: false,
    currentTab: "overview",
    lessonFontSize: 1,
    vocabCoreVisited: {},
};
window.appState = appState;
let backupSettings = {
    frequency: "off",      // "off" | "daily" | "2d" | "weekly"
    lastBackupAt: null,    // ISO string
};

const exportContext = {
    lessonId: null,
    studentName: "",
    source: "", // "lesson-view" أو "teacher-dashboard"
};
let customUnits = {
    Beginner: [],
    "Pre-Intermediate": [],
    Intermediate: [],
};
// =============== SECONDARY AUTH APP (لإنشاء الطلاب فقط) ===============
let secondaryAuth = null;

function getSecondaryAuth() {
    if (secondaryAuth) return secondaryAuth;

    if (typeof firebase === "undefined" || typeof firebaseConfig === "undefined") {
        console.warn("Firebase or firebaseConfig not available for secondary app.");
        return null;
    }

    // نحاول نلقى app باسم "teacherAdmin" لو موجود
    let secondaryApp = firebase.apps.find((a) => a.name === "teacherAdmin");
    if (!secondaryApp) {
        secondaryApp = firebase.initializeApp(firebaseConfig, "teacherAdmin");
    }

    secondaryAuth = secondaryApp.auth();
    return secondaryAuth;
}

// ================= AUTH UI =================
function updateAuthUI() {
    const authStatus = document.getElementById("authStatus");
    const btnLogin = document.getElementById("btnLogin");
    const btnLogout = document.getElementById("btnLogout");

    const navTeacher = document.querySelector(
        '.top-nav__link[data-nav="teacher-dashboard-screen"]'
    );
    const navProfiles = document.querySelector(
        '.top-nav__link[data-nav="students-screen"]'
    );

    if (!appState.currentUser) {
        if (authStatus) authStatus.textContent = "Not signed in";
        if (btnLogin) btnLogin.style.display = "inline-flex";
        if (btnLogout) btnLogout.style.display = "none";

        // أي حد مش مسجّل → ما يشوف Teacher Dashboard
        if (navTeacher) navTeacher.style.display = "none";
        // لو حابة تخلي Profiles ظاهر قبل تسجيل الدخول، خليه هيك:
        if (navProfiles) navProfiles.style.display = "inline-flex";
        return;
    }

    const { email, role } = appState.currentUser;

    if (authStatus) authStatus.textContent = `${role.toUpperCase()} – ${email}`;
    if (btnLogin) btnLogin.style.display = "none";
    if (btnLogout) btnLogout.style.display = "inline-flex";

    if (role === "teacher") {
        if (navTeacher) navTeacher.style.display = "inline-flex";
        if (navProfiles) navProfiles.style.display = "inline-flex";
    } else {
        // student
        if (navTeacher) navTeacher.style.display = "none";
        // الطالب ما يشوف صفحة البروفايلات
        if (navProfiles) navProfiles.style.display = "none";
    }
}

// =============== AUTH STATE LISTENER =================
auth.onAuthStateChanged(async (user) => {
    if (!user) {
        appState.currentUser = null;
        updateAuthUI();
        // رجّعيه للصفحة الرئيسية
        showScreen("home-screen");
        return;
    }

    try {
        const snap = await db.collection("users").doc(user.uid).get();
        const data = snap.data() || {};

        // نحاول نقرأ الدور من Firestore، ولو مش موجود من localStorage
        let savedRole = null;
        try {
            savedRole = localStorage.getItem(LS_USER_ROLE_KEY);
        } catch (e) {
            console.warn("Could not read role from localStorage", e);
        }

        const role = data.role || savedRole || "student";

        appState.currentUser = {
            uid: user.uid,
            email: user.email,
            role,
        };

        // نحدّث الـ localStorage بالدور النهائي
        try {
            localStorage.setItem(LS_USER_ROLE_KEY, role);
        } catch (e) {
            console.warn("Could not save role to localStorage", e);
        }

        updateAuthUI();

        if (role === "teacher") {
            await syncTeacherStudentsFromCloud?.();
            renderStudents();
            renderTeacherPicker();
            goToTeacherDashboard();
        } else {
            appState.students = [
                {
                    id: user.uid,
                    name: user.email,
                    level: "Beginner",
                    goals: [],
                    progress: {},
                    homeworkNotes: {},
                },
            ];
            appState.currentStudentId = user.uid;
            goToLevels();
        }
    } catch (err) {
        console.error("auth.onAuthStateChanged error:", err);
    }
});

// =======================
// Translation Sentence Generator (from lesson vocabulary)
// =======================

function normalizeText(s) {
    return (s || "").toString().trim();
}

function pickRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function uniqBy(arr, keyFn) {
    const seen = new Set();
    const out = [];
    for (const x of arr) {
        const k = keyFn(x);
        if (!k || seen.has(k)) continue;
        seen.add(k);
        out.push(x);
    }
    return out;
}

// Try to detect nouns / greetings / misc from vocabulary (very lightweight)
function bucketVocabulary(vocabItems) {
    const items = (Array.isArray(vocabItems) ? vocabItems : [])
        .map((it) => ({
            ...it,
            ar: normalizeText(it.ar),
            en: normalizeText(it.en),
            hint: normalizeText(it.hint),
            exampleAr: normalizeText(it.exampleAr),
            exampleEn: normalizeText(it.exampleEn),
        }))
        .filter((it) => it.ar || it.en);

    // greetings / common phrases: heuristics by english keywords OR arabic starts
    const greetingKeywords = [
        "hello",
        "hi",
        "good morning",
        "good evening",
        "goodbye",
        "welcome",
        "nice to meet",
        "please",
        "thanks",
        "thank you",
    ];

    const greetings = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        return (
            greetingKeywords.some((k) => en.includes(k)) ||
            ar.includes("مرحبا") ||
            ar.includes("أهلا") ||
            ar.includes("صباح") ||
            ar.includes("مساء") ||
            ar.includes("مع السلامة") ||
            ar.includes("تشرف")
        );
    });

    // nouns: heuristic - english contains "my" forms or common noun list in hint
    // (Not perfect; we also just keep "others" as nouns candidates.)
    const nounCandidates = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        // If it looks like a noun (contains "/" or is a single word) we allow it
        const enWords = en.split(/\s+/).filter(Boolean);
        return enWords.length <= 3 || ar.length <= 12;
    });

    // verbs: if forms.present has content OR english starts with "to "
    const verbs = items.filter((it) => {
        const en = it.en.toLowerCase();
        const hasForms =
            it.forms &&
            ((it.forms.present && Object.keys(it.forms.present).length > 0) ||
                (it.forms.past && Object.keys(it.forms.past).length > 0) ||
                (it.forms.future && Object.keys(it.forms.future).length > 0));
        return hasForms || en.startsWith("to ");
    });

    const others = items;

    return {
        all: items,
        greetings: uniqBy(greetings, (x) => x.id || x.ar || x.en),
        nouns: uniqBy(nounCandidates, (x) => x.id || x.ar || x.en),
        verbs: uniqBy(verbs, (x) => x.id || x.ar || x.en),
        others: uniqBy(others, (x) => x.id || x.ar || x.en),
    };
}

/**
 * Generate translation sentences (not word=word) from lesson vocabulary
 * @param {object} lesson - the lesson object (has vocabulary)
 * @param {number} count - how many translation items to generate
 * @returns {Array} translation items [{id,type,textAr,textEn}]
 */
function generateTranslationFromVocab(lesson, count = 10) {
    const vocabCore = lesson?.vocabulary?.core || [];
    const vocabExtra = lesson?.vocabulary?.extra || [];
    const vocab = bucketVocabulary([...vocabCore, ...vocabExtra]);

    const results = [];

    // Some reusable fillers to make sentences natural
    const names = ["سارة", "أحمد", "لينا", "كريم", "نابل", "هبة"];
    const timesAr = ["اليوم", "هلّق", "بكرا"];
    const timesEn = ["today", "now", "tomorrow"];

    function addPair(en, ar) {
        const textEn = normalizeText(en);
        const textAr = normalizeText(ar);
        if (!textEn || !textAr) return;

        // avoid duplicates
        const key = (textEn + "||" + textAr).toLowerCase();
        if (results.some((r) => (r.textEn + "||" + r.textAr).toLowerCase() === key)) return;

        // alternate directions roughly half/half
        const type = results.length % 2 === 0 ? "enToAr" : "arToEn";

        results.push({
            id: `auto_t_${results.length + 1}`,
            type,
            textEn,
            textAr,
        });
    }

    // ---------- Template 1: Greeting + name ----------
    // "Hello, I'm X." / "مرحبا، أنا X."
    if (vocab.greetings.length) {
        const g = pickRandom(vocab.greetings);
        const helloAr = g?.ar || "مرحبا";
        const helloEn = g?.en || "Hello";
        const name = pickRandom(names);

        addPair(`${helloEn}! I'm ${name}.`, `${helloAr}! أنا ${name}.`);
    } else {
        const name = pickRandom(names);
        addPair(`Hello! I'm ${name}.`, `مرحبا! أنا ${name}.`);
    }

    // ---------- Template 2: How are you? + I'm fine ----------
    // "How are you today? I'm fine." / "كيفك اليوم؟ أنا منيح/منيحة."
    // If you have "كيفك" or "منيح" in vocab, use them, else fallback
    const howAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("كيف")))?.ar || "كيفك";
    const howEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("how are")))?.en ||
        "How are you";
    const fineAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("منيح") || x.ar.includes("منيحة")))
            ?.ar || "منيح";
    const fineEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("fine")))
            ?.en || "I’m fine";

    const tA = pickRandom(timesAr);
    const tE = timesEn[timesAr.indexOf(tA)] || "today";
    addPair(`${howEn} ${tE}? ${fineEn}.`, `${howAr} ${tA}؟ أنا ${fineAr}.`);

    // ---------- Template 3: Nice to meet you ----------
    // "Nice to meet you, X." / "تشرفنا يا X."
    const meetAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("تشرف")))?.ar || "تشرفنا";
    const meetEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("nice to meet")))
            ?.en || "Nice to meet you";
    const name2 = pickRandom(names);
    addPair(`${meetEn}, ${name2}.`, `${meetAr} يا ${name2}.`);

    // ---------- Template 4: Want + noun (biddi + noun) ----------
    // We'll pick a noun candidate; if none, use "قهوة" (coffee)
    const noun = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
    // Natural sentence:
    // "I want a coffee, please." / "بدي قهوة، لو سمحت."
    addPair(
        `I want ${noun.en || "coffee"}, please.`,
        `بدي ${noun.ar || "قهوة"}، لو سمحت.`
    );

    // ---------- Template 5: Do you have + noun? ----------
    // "Do you have ___?" / "عندك ___؟"
    const noun2 = pickRandom(shuffle(vocab.nouns)) || { ar: "مي", en: "water" };
    addPair(`Do you have ${noun2.en || "water"}?`, `عندك ${noun2.ar || "مي"}؟`);

    // ---------- Template 6: My family / my work / my study style ----------
    // If you have family nouns, use them, otherwise use generic
    const familyWord =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family") || x.ar.includes("عيلة")))
            ?.ar || "عيلتي";
    const familyEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family")))
            ?.en || "My family";

    addPair(`${familyEn} is big.`, `${familyWord} كبيرة.`);

    // ---------- Template 7: Goodbye + see you tomorrow ----------
    const byeAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("مع السلامة") || x.ar.includes("الله معك")))
            ?.ar || "مع السلامة";
    const byeEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("goodbye")))
            ?.en || "Goodbye";
    addPair(`${byeEn}, see you tomorrow.`, `${byeAr}، بشوفك بكرا.`);

    // ---------- Bonus: Use existing example sentences from vocab (if present) ----------
    // These are already full sentences and strongly "from the lesson"
    // We add a few of them if they exist, to reach target count.
    const examplePairs = vocab.all
        .filter((it) => it.exampleAr && it.exampleEn)
        .map((it) => ({ en: it.exampleEn, ar: it.exampleAr }));

    for (const ex of shuffle(examplePairs)) {
        if (results.length >= count) break;
        addPair(ex.en, ex.ar);
    }

    // If still not enough, generate variations with different nouns/times
    while (results.length < count) {
        const n = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
        const ta = pickRandom(timesAr);
        const te = timesEn[timesAr.indexOf(ta)] || "today";
        addPair(
            `I want ${n.en || "coffee"} ${te}.`,
            `بدي ${n.ar || "قهوة"} ${ta}.`
        );
    }

    return results.slice(0, count);
}

/**
 * Ensure lesson has translation items (auto-generate if empty)
 * Call this when opening a lesson or rendering the Translation tab.
 */
function ensureLessonTranslation(lesson, count = 10) {
    if (!lesson.practice) lesson.practice = {};
    if (!Array.isArray(lesson.practice.translation) || lesson.practice.translation.length === 0) {
        lesson.practice.translation = generateTranslationFromVocab(lesson, count);
    }
}
function safeArr(x) { return Array.isArray(x) ? x : []; }
function txt(x) { return (x ?? "").toString().trim(); }
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pick(arr) { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null; }
function uniqPairs(items) {
    const seen = new Set();
    return items.filter(it => {
        const key = (txt(it.textEn) + "||" + txt(it.textAr)).toLowerCase();
        if (!txt(it.textEn) || !txt(it.textAr)) return false;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}


function generateTranslationItemsFromLesson(lesson, minCount = 7) {
    const items = [];

    const vocab = lesson?.vocabulary || {};
    const core = safeArr(vocab.core);
    const extra = safeArr(vocab.extra);
    const allVocab = [...core, ...extra];

    // 1) أخذ أمثلة من vocabulary (أفضل مصدر لأنه جمل جاهزة من المنهج)
    for (const v of allVocab) {
        const ar = txt(v.exampleAr);
        const en = txt(v.exampleEn);
        if (ar && en) {
            items.push({ id: `ex_${txt(v.id) || Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 2) أخذ جمل من الحوار (كل سطر pair مع ترجمته)
    const lines = safeArr(lesson?.dialogue?.lines);
    for (const line of lines) {
        const ar = txt(line.ar);
        const en = txt(line.en);
        if (ar && en) {
            items.push({ id: `dlg_${Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 3) إذا لسه أقل من المطلوب: نولّد جمل بالقوالب
    const nouns = allVocab
        .map(v => ({ ar: txt(v.ar), en: txt(v.en) }))
        .filter(v => v.ar || v.en);

    const nameAr = ["سارة", "أحمد", "لينا", "كريم", "هبة", "نابل"];
    const nameEn = ["Sara", "Ahmad", "Lina", "Karim", "Hiba", "Nabil"];

    const getNoun = () => pick(nouns) || { ar: "قهوة", en: "coffee" };

    const templates = [
        () => {
            const i = Math.floor(Math.random() * nameAr.length);
            return { en: `Hello! I'm ${nameEn[i]}.`, ar: `مرحبا! أنا ${nameAr[i]}.` };
        },
        () => {
            return { en: `How are you today?`, ar: `كيفك اليوم؟` };
        },
        () => {
            const n = getNoun();
            return { en: `I want ${n.en || "coffee"}, please.`, ar: `بدي ${n.ar || "قهوة"}، لو سمحت.` };
        },
        () => {
            const n = getNoun();
            return { en: `Do you have ${n.en || "water"}?`, ar: `عندك ${n.ar || "مي"}؟` };
        },
        () => {
            const n = getNoun();
            return { en: `This is ${n.en || "it"}.`, ar: `هاد ${n.ar || "هاد"}.` };
        },
        () => {
            return { en: `Nice to meet you.`, ar: `تشرفنا.` };
        },
        () => {
            return { en: `Goodbye, see you tomorrow.`, ar: `مع السلامة، بشوفك بكرا.` };
        },
    ];

    let guard = 0;
    while (items.length < minCount && guard < 50) {
        const t = pick(templates);
        if (t) {
            const out = t();
            items.push({ id: `auto_${items.length + 1}`, textEn: out.en, textAr: out.ar });
        }
        guard++;
    }

    return uniqPairs(items).slice(0, Math.max(minCount, 7));
}


function ensureTranslationItems(lesson, minCount = 7) {
    if (!lesson.practice) lesson.practice = {};
    const list = safeArr(lesson.practice.translation);

    if (list.length > 0) return; // موجودة مسبقاً

    const generated = generateTranslationItemsFromLesson(lesson, minCount);

    // نحولها لصيغة القالب: type + textEn/textAr
    lesson.practice.translation = generated.map((it, idx) => ({
        id: it.id || `t_${idx + 1}`,
        type: idx % 2 === 0 ? "enToAr" : "arToEn",
        textEn: it.textEn,
        textAr: it.textAr,
    }));
}


// ========================= VOCAB MODAL STATE =========================
const vocabModalState = {
    list: [],       // array of items (core أو extra)
    index: 0,       // current index in list
    showExamples: true,// هل الأمثلة ظاهرة أو مخفية
    showAr: true,
    showEn: true,
    showArabeezy: true,
};
const translationState = {
    items: [],
    index: 0,
    hidePrompt: false,
    hideAnswer: false,
    shuffled: false,
};

// ========================= HELPERS =========================
// ========================= WHITEBOARD =========================
const whiteboardState = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    ctx: null,
    color: "#111827",
    size: 3,
};

function getWhiteboardKeyForCurrentLesson() {
    return LS_WHITEBOARD_PREFIX + (appState.currentLessonId || "no_lesson");
}

function saveWhiteboardToLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    try {
        const dataUrl = canvas.toDataURL("image/png");
        localStorage.setItem(getWhiteboardKeyForCurrentLesson(), dataUrl);
    } catch {
        // ignore
    }
}

function loadWhiteboardFromLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const dataUrl = localStorage.getItem(getWhiteboardKeyForCurrentLesson());
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!dataUrl) return;
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = dataUrl;
}

function initWhiteboardCanvas() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    whiteboardState.ctx = ctx;

    // إعدادات الرسم
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // تحميل أي رسم محفوظ
    loadWhiteboardFromLS();

    function getCanvasPos(evt) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (evt.touches && evt.touches.length > 0) {
            clientX = evt.touches[0].clientX;
            clientY = evt.touches[0].clientY;
        } else {
            clientX = evt.clientX;
            clientY = evt.clientY;
        }

        return {
            x: ((clientX - rect.left) / rect.width) * canvas.width,
            y: ((clientY - rect.top) / rect.height) * canvas.height,
        };
    }

    function startDrawing(evt) {
        evt.preventDefault();
        whiteboardState.isDrawing = true;
        const pos = getCanvasPos(evt);
        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function draw(evt) {
        if (!whiteboardState.isDrawing) return;
        evt.preventDefault();
        const pos = getCanvasPos(evt);
        ctx.strokeStyle = whiteboardState.color;
        ctx.lineWidth = whiteboardState.size;

        ctx.beginPath();
        ctx.moveTo(whiteboardState.lastX, whiteboardState.lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function stopDrawing(evt) {
        if (!whiteboardState.isDrawing) return;
        whiteboardState.isDrawing = false;
        saveWhiteboardToLS();
    }

    // Mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    // Touch events
    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);
}

// ========================= BACKUP SETTINGS =========================
function loadBackupSettings() {
    try {
        const raw = localStorage.getItem(LS_BACKUP_SETTINGS_KEY);
        if (!raw) {
            backupSettings = { frequency: "off", lastBackupAt: null };
            return;
        }
        const parsed = JSON.parse(raw);
        backupSettings = {
            frequency: parsed.frequency || "off",
            lastBackupAt: parsed.lastBackupAt || null,
        };
    } catch {
        backupSettings = { frequency: "off", lastBackupAt: null };
    }
}

function saveBackupSettings() {
    localStorage.setItem(LS_BACKUP_SETTINGS_KEY, JSON.stringify(backupSettings));
}

function backupFrequencyToDays(freq) {
    switch (freq) {
        case "daily":
            return 1;
        case "2d":
            return 2;
        case "weekly":
            return 7;
        default:
            return null; // off
    }
}

function checkBackupReminder() {
    const banner = document.getElementById("backupReminderBanner");
    const info = document.getElementById("backupLastInfo");
    if (!banner || !info) return;

    const daysLimit = backupFrequencyToDays(backupSettings.frequency);
    if (!daysLimit) {
        banner.classList.add("hidden");
        return;
    }

    if (!backupSettings.lastBackupAt) {
        // ما في ولا backup لسه
        banner.textContent =
            "You haven't created any backup yet. It's a good time to export your data now.";
        banner.classList.remove("hidden");
        info.textContent = "";
        return;
    }

    const last = new Date(backupSettings.lastBackupAt);
    const diffMs = Date.now() - last.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays >= daysLimit) {
        banner.textContent =
            `It has been about ${Math.round(diffDays)} day(s) since your last backup. ` +
            `Please export your data so you don't lose student progress.`;
        banner.classList.remove("hidden");
    } else {
        banner.classList.add("hidden");
    }

    info.textContent =
        "Last backup: " +
        last.toLocaleString() +
        "  |  Frequency: " +
        backupSettings.frequency;
}
// ========================= BACKUP EXPORT / IMPORT =========================
function buildBackupSnapshot() {
    return {
        version: 1,
        createdAt: new Date().toISOString(),
        students: appState.students || [],
        lessons: lessons || {},
        customUnits: customUnits || {},
        settings: {
            lessonFontSize: appState.lessonFontSize,
        },
    };
}

function downloadBackupFile(snapshot) {
    const json = JSON.stringify(snapshot, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    const date = new Date();
    const stamp =
        date.getFullYear().toString() +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getDate()).padStart(2, "0") +
        "_" +
        String(date.getHours()).padStart(2, "0") +
        String(date.getMinutes()).padStart(2, "0");

    a.href = url;
    a.download = `pal_arabic_backup_${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function handleExportBackup() {
    const snapshot = buildBackupSnapshot();
    downloadBackupFile(snapshot);

    // حدّث وقت آخر backup
    backupSettings.lastBackupAt = new Date().toISOString();
    saveBackupSettings();
    checkBackupReminder();
    alert("Backup exported successfully. Keep the JSON file in a safe place.");
}

function applyBackupSnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== "object") {
        alert("Invalid backup file.");
        return;
    }

    // students
    if (Array.isArray(snapshot.students)) {
        appState.students = snapshot.students;
        saveStudentsToLS();
    }

    // lessons (نمحي القديم ونحط الجديد)
    if (snapshot.lessons && typeof snapshot.lessons === "object") {
        // clear current lessons
        Object.keys(lessons).forEach((id) => {
            delete lessons[id];
        });

        // clear old lesson entries from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(LS_LESSON_PREFIX)) {
                localStorage.removeItem(key);
                i--; // لأن length تغير
            }
        }

        Object.keys(snapshot.lessons).forEach((id) => {
            lessons[id] = snapshot.lessons[id];
            saveLessonToLS(id);
        });
    }

    // custom units
    if (snapshot.customUnits && typeof snapshot.customUnits === "object") {
        customUnits = {
            Beginner: snapshot.customUnits.Beginner || [],
            "Pre-Intermediate": snapshot.customUnits["Pre-Intermediate"] || [],
            Intermediate: snapshot.customUnits.Intermediate || [],
        };
        saveCustomUnits();
    }

    // settings (زي حجم الخط)
    if (snapshot.settings) {
        if (typeof snapshot.settings.lessonFontSize === "number") {
            appState.lessonFontSize = snapshot.settings.lessonFontSize;
            applyFontSize();
            saveFontSize();
        }
    }

    // إعادة رسم الواجهات الرئيسية
    renderStudents();
    renderTeacherPicker();
    if (getCurrentStudent()) {
        renderLevels();
    }

    alert("Backup imported successfully.");
}

function handleImportBackupFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = e.target.result;
            const snapshot = JSON.parse(json);
            if (
                !confirm(
                    "Importing this backup will replace current students, lessons and units.\nAre you sure?"
                )
            ) {
                return;
            }
            applyBackupSnapshot(snapshot);
        } catch (err) {
            console.error(err);
            alert("Could not read backup file.");
        }
    };
    reader.readAsText(file);
}

const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));
function openExportModal(source, lessonId, studentName = "") {
    exportContext.lessonId = lessonId;
    exportContext.studentName = studentName;
    exportContext.source = source;

    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.add("modal--open");
}

function closeExportModal() {
    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.remove("modal--open");
}

async function saveStudentsToCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;

    const batch = db.batch();
    const ref = db.collection("teacherStudents");

    // نفضي كل طلاب هذا المعلم ثم نرفع من جديد (بسيطة مبدئيًا)
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();
    snap.forEach((doc) => batch.delete(doc.ref));

    appState.students.forEach((s) => {
        const docRef = ref.doc(s.id);
        batch.set(docRef, {
            teacherId: appState.currentUser.uid,
            name: s.name,
            level: s.level,
            goals: s.goals || [],
            progress: s.progress || {},
            homeworkNotes: s.homeworkNotes || {},
        });
    });

    await batch.commit();
}

function saveStudentsToLS({ skipCloud = false } = {}) {
    localStorage.setItem(LS_STUDENTS_KEY, JSON.stringify(appState.students));
    if (!skipCloud) scheduleCloudSave();
}


async function syncTeacherStudentsFromCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;

    const ref = db.collection("teacherStudents");
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();

    const loaded = [];
    snap.forEach((doc) => {
        const d = doc.data();
        loaded.push({
            id: doc.id, // أو خلي ID محلي منفصل
            name: d.name,
            level: d.level,
            goals: d.goals || [],
            progress: d.progress || {},
            homeworkNotes: d.homeworkNotes || {},
        });
    });

    appState.students = loaded;
    saveStudentsToLS({ skipCloud: true }); // نخزن نسخة محلية
}

function loadStudentsFromLS() {
    try {
        const raw = localStorage.getItem(LS_STUDENTS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function ensureStudentProgress(student, lessonId) {
    if (!student.progress) student.progress = {};
    if (!student.progress[lessonId]) {
        student.progress[lessonId] = { ...BASE_PROGRESS_TEMPLATE };
    }
}

function getCurrentStudent() {
    return appState.students.find((s) => s.id === appState.currentStudentId) || null;
}

function getStudentProgress(student, lessonId) {
    ensureStudentProgress(student, lessonId);
    return student.progress[lessonId];
}

function setStudentProgressField(sectionKey, value) {
    const student = getCurrentStudent();
    if (!student) return;
    ensureStudentProgress(student, appState.currentLessonId);
    student.progress[appState.currentLessonId][sectionKey] = value;
    saveStudentsToLS();
    updateProgressBar();
    updateSectionStatusBadge(sectionKey);
}

// lessons save/load
function loadLessonDataFromLS() {
    // start from defaults
    Object.keys(defaultLessons).forEach((id) => {
        lessons[id] = JSON.parse(JSON.stringify(defaultLessons[id]));
    });

    // then override / add from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(LS_LESSON_PREFIX)) {
            const id = key.slice(LS_LESSON_PREFIX.length);
            try {
                const data = JSON.parse(localStorage.getItem(key));
                lessons[id] = data;
            } catch {
                /* ignore */
            }
        }
    }

    // Sanitize/normalize lessons loaded from localStorage (old/partial/corrupted entries can exist)
    Object.keys(lessons).forEach((id) => {
        const lesson = lessons[id];
        if (!lesson || typeof lesson !== "object") {
            delete lessons[id];
            return;
        }
        if (!lesson.meta || typeof lesson.meta !== "object") lesson.meta = {};
        lesson.meta.level = (lesson.meta.level || "").trim();
        lesson.meta.unit = (lesson.meta.unit || "").trim();
        lesson.meta.lessonTitle = (lesson.meta.lessonTitle || "").trim();

        // If meta is still missing core fields, drop it (prevents runtime crashes in teacher picker)
        if (!lesson.meta.level || !lesson.meta.unit || !lesson.meta.lessonTitle) {
            delete lessons[id];
        }
    });
}
function markVocabularyDone() {
    // هذي الدالة تعتمد إنو عندك setStudentProgressField موجودة
    // وتشتغل على الدرس والطالب الحاليين
    try {
        setStudentProgressField("vocabulary", true);
    } catch (e) {
        console.warn("Could not mark vocabulary as done:", e);
    }
}

function saveLessonToLS(lessonId) {
    localStorage.setItem(LS_LESSON_PREFIX + lessonId, JSON.stringify(lessons[lessonId]));
}

// custom units
function loadCustomUnits() {
    try {
        const raw = localStorage.getItem(LS_CUSTOM_UNITS_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            customUnits = {
                Beginner: parsed.Beginner || [],
                "Pre-Intermediate": parsed["Pre-Intermediate"] || [],
                Intermediate: parsed.Intermediate || [],
            };
        }
    } catch {
        /* ignore */
    }
}
function saveCustomUnits() {
    localStorage.setItem(LS_CUSTOM_UNITS_KEY, JSON.stringify(customUnits));
}

// font size
function loadFontSize() {
    const raw = localStorage.getItem(LS_FONT_SIZE_KEY);
    if (!raw) {
        appState.lessonFontSize = 1;
    } else {
        const n = parseFloat(raw);
        appState.lessonFontSize = isNaN(n) ? 1 : n;
    }
    applyFontSize();
}
function saveFontSize() {
    localStorage.setItem(LS_FONT_SIZE_KEY, String(appState.lessonFontSize));
}
function applyFontSize() {
    const v = Math.max(0.85, Math.min(1.4, appState.lessonFontSize));
    document.documentElement.style.setProperty("--lesson-font-size", v + "rem");
}

// ========================= NAVIGATION =========================
function showScreen(id) {
    $all(".screen").forEach((sec) =>
        sec.classList.toggle("screen--active", sec.id === id)
    );
}

function goToHome() {
    persistResumeBeforeNav();
    // ندخل وضع الصفحة الرئيسية فقط
    document.body.classList.add("home-only");

    // نخلي بس الهوم screen هي الظاهرة
    showScreen("home-screen");
}
function goToStudents() {
    persistResumeBeforeNav();
    // لو المستخدم طالب أو مش مسجل → ما إله دخل في صفحة البروفايلات
    if (!appState.currentUser || appState.currentUser.role === "student") {
        goToLevels();
        return;
    }
    document.body.classList.remove("home-only");
    showScreen("students-screen");
    renderStudents();
}

function goToLevels() {
    persistResumeBeforeNav();
    document.body.classList.remove("home-only");
    if (!getCurrentStudent()) {
        goToStudents();
        return;
    }
    showScreen("levels-screen");
    $("#currentStudentNameLevels").textContent = getCurrentStudent().name;
    renderLevels();
}
function goToLessonView(opts = {}) {
    const { teacherMode = null } = opts;
    if (!getCurrentStudent()) {
        goToStudents();
        return;
    }
    showScreen("lesson-screen");
    if (teacherMode !== null) {
        appState.teacherMode = teacherMode;
        $("#teacherModeToggle").checked = teacherMode;
    }
    updateTeacherTabsVisibility();
    updateLessonTopBar();
    updateProgressBar();
    setActiveTab(appState.currentTab || "overview");

    // حاول يحمّل whiteboard حق هذا الدرس لو اللوحة مفتوحة
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    if (whiteboardPanel && !whiteboardPanel.classList.contains("hidden")) {
        initWhiteboardCanvas();
    }
}

function buildLessonExportHtml(lesson, options) {
    const {
        includeVocab,
        includeDialogue,
        includeGrammar,
        includeHomework,
        includeTeacherNotes,
        version,
        studentName,
    } = options;

    const escapeHtml = (str) =>
        String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // ========== Vocabulary ==========
    let vocabRows = "";
    if (includeVocab && lesson.vocabulary) {
        const allVocab = [
            ...(lesson.vocabulary.core || []),
            ...(lesson.vocabulary.extra || []),
        ];
        allVocab.forEach((w) => {
            vocabRows += `
            <tr>
                <td class="ar">${escapeHtml(w.ar)}</td>
                <td class="en">${escapeHtml(w.en)}</td>
                
                <td class="en">${escapeHtml(w.enArabeezy)}</td>
                <td class="en">
                    ${escapeHtml(w.exampleAr || "")}
                    ${w.exampleAr || w.exampleEn ? " — " : ""}
                    ${escapeHtml(w.exampleEn || "")}
                </td>
            </tr>`;
        });
    }

    // ========== Dialogue ==========
    let dialogueHtml = "";
    if (includeDialogue && lesson.dialogue && lesson.dialogue.lines) {
        dialogueHtml = lesson.dialogue.lines
            .map(
                (line) => `
                <div class="dialogue-line">
                    <span class="speaker">${escapeHtml(line.speaker)}:</span>
                    <span class="dialogue-ar">${escapeHtml(line.ar)}</span>
                    ${line.en
                        ? `<span class="dialogue-en">${escapeHtml(line.en)}</span>`
                        : ""
                    }
                </div>
            `
            )
            .join("");
    }

    // ========== Grammar ==========
    let grammarHtml = "";
    if (includeGrammar && lesson.grammar && lesson.grammar.length) {
        grammarHtml = lesson.grammar
            .map(
                (g) =>
                    `<div class="grammar-item">
                        <h4>${escapeHtml(g.title)}</h4>
                        <p>${escapeHtml(g.description)}</p>
                    </div>`
            )
            .join("");
    }

    // ========== Homework ==========
    let homeworkHtml = "";
    if (includeHomework && lesson.homework && lesson.homework.instructions) {
        homeworkHtml = `<p>${escapeHtml(lesson.homework.instructions)}</p>`;
    }

    // ========== Teacher Notes ==========
    let teacherNotesHtml = "";
    const notes = lesson.teacherNotes && lesson.teacherNotes.myNotes;
    if (includeTeacherNotes && version === "teacher" && notes) {
        teacherNotesHtml = `<p>${escapeHtml(notes)}</p>`;
    }

    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<title>Lesson Export – ${escapeHtml(lesson.meta.lessonTitle)}</title>
<style>
    body {
        font-family:
            "Amiri",
            "Scheherazade New",
            "IBM Plex Sans Arabic",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        margin: 20px;
        color: #111827;
        
      
    }
        .headtext{
         direction: center;
          text-align: center;
        }
    h1, h2, h3, h4 {
        margin: 0 0 6px;
        color: #0f172a;
    }
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
        
    }
    .meta {
        font-size: 12px;
        margin-bottom: 14px;
         direction: ltr;
    }
    .meta div {
        margin-bottom: 2px;
    }
    .section {
    
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid #e5e7eb;
        /* 🔴 مهم: شلنا page-break-inside: avoid; عشان ما يطير القسم كله لصفحة جديدة ويترك الهيدر لحاله */
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 11px;
        direction: rtl; /* الجدول نفسه RTL */
    }
    th, td {
        border: 1px solid #e5e7eb;
        padding: 4px 6px;
        vertical-align: top;
    }
    th {
        background: #e0f2fe;
    }
    .ar {
        direction: rtl;
        text-align: right;
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
        font-size: 20px;
    }
    .en {
        direction: ltr;
        text-align: left;
        font-size: 20px;
    }
    .small-note {
        font-size: 12px;
        color: #6b7280;
        margin-top: 4px;
        direction: ltr;
    }
    .grammar-item {
        margin-bottom: 8px;
        font-size: 18px;
        direction: ltr;
    }
    .grammar-item h4 {
        font-size: 18px;
        margin-bottom: 2px;
        direction: ltr;
    }
    .section-title {
        display:flex;
        justify-content:space-between;
        align-items:baseline;
        
    }
    .badge {
        font-size:10px;
        padding:2px 6px;
        border-radius:999px;
        background:#e5f9f5;
        color:#047857;
    }

    /* 🗨️ المحادثة RTL مع الإنجليزي تحت */
    .dialogue-line {
        margin-bottom: 6px;
        direction: rtl;
        text-align: right;
        font-size: 24px;
    }
    .speaker {
        font-weight: 700;
        margin-left: 4px;
    }
    .dialogue-ar {
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
    }
    .dialogue-en {
        display: block;
       
        font-size: 20px;
        color: #4b5563;
        margin-right: 2em; /* شوي مسافة عن اسم المتحدث */
    }

    @media print {
        body { margin: 10mm; }
        .small-note { display:none; }
    }
</style>
</head>
<body>
    <h1 class="headtext">Palestinian Arabic – ${escapeHtml(lesson.meta.lessonTitle)}</h1>
    <div class="meta" >
        <div><strong>Level:</strong> ${escapeHtml(lesson.meta.level)}</div>
        <div><strong>Unit:</strong> ${escapeHtml(lesson.meta.unit)}</div>
        ${studentName
            ? `<div><strong>Student:</strong> ${escapeHtml(studentName)}</div>`
            : ""
        }
        <div><strong>Version:</strong> ${version === "teacher" ? "Teacher" : "Student"
        }</div>
    </div>

    ${vocabRows
            ? `<div class="section">
                <div class="section-title">
                    <h2>المفردات – Vocabulary</h2>
                    <span class="badge">Core & Extra</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>العربي</th>
                            <th>English</th>
                            <th>enArabeezy</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vocabRows}
                    </tbody>
                </table>
            </div>`
            : ""
        }

    ${dialogueHtml
            ? `<div class="section">
                <h2>المحادثة – Dialogue</h2>
                ${dialogueHtml}
            </div>`
            : ""
        }

    ${grammarHtml
            ? `<div class="section">
                <h2>القواعد – Grammar</h2>
                ${grammarHtml}
            </div>`
            : ""
        }

    ${homeworkHtml
            ? `<div class="section">
                <h2>الواجب – Homework</h2>
                ${homeworkHtml}
            </div>`
            : ""
        }

    ${teacherNotesHtml
            ? `<div class="section">
                <h2>ملاحظات المعلم – Teacher Notes</h2>
                ${teacherNotesHtml}
            </div>`
            : ""
        }

    <p class="small-note">
        Generated from Palestinian Arabic Local LMS – you can print or save as PDF from your browser.
    </p>
</body>
</html>
        </div>
      </div>
    `;
}


function openPrintWindow(html) {
    const win = window.open("", "_blank");
    if (!win) {
        alert("Popup blocked – please allow popups to export PDF.");
        return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    // نعطيه وقت بسيط يرنّدر قبل الطباعة
    win.focus();
    setTimeout(() => {
        win.print();
    }, 300);
}

function goToTeacherDashboard() {
    persistResumeBeforeNav();
    // لو مش مسجل، أو مش مدرّس:
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        // بدل ما نعمل alert بس، نفتحه على مودال تسجيل دخول المدرّس
        if (typeof openAuthModal === "function") {
            openAuthModal("teacher");
        } else {
            alert("Teacher access only.");
        }
        return;
    }
    document.body.classList.remove("home-only")
    showScreen("teacher-dashboard-screen");
    renderTeacherPicker();
}




// ========================= STUDENTS =========================
function renderStudents() {
    const grid = $("#studentsGrid");
    const empty = $("#noStudentsMessage");
    grid.innerHTML = "";

    if (!appState.students.length) {
        empty.style.display = "block";
        return;
    }
    empty.style.display = "none";

    appState.students.forEach((student) => {
        const card = document.createElement("article");
        card.className = "student-card";

        const avatar = document.createElement("div");
        avatar.className = "student-card__avatar";
        avatar.textContent = student.name.charAt(0).toUpperCase();

        const nameEl = document.createElement("div");
        nameEl.className = "student-card__name";
        nameEl.textContent = student.name;

        const levelEl = document.createElement("div");
        levelEl.className = "student-card__level";
        levelEl.textContent = `Level: ${student.level}`;

        const goalsWrap = document.createElement("div");
        goalsWrap.className = "student-card__goals";

        const goals = student.goals || [];
        if (goals.length) {
            const map = {
                Travel: "✈️ Travel",
                Study: "🎓 Study",
                Family: "👨‍👩‍👧 Family",
                VisitPalestine: "🕌 Visit Palestine",
                Work: "💼 Work",
                Fun: "😊 For Fun",
            };
            goals.forEach((g) => {
                const tag = document.createElement("span");
                tag.className = "goal-tag";
                tag.textContent = map[g] || g;
                goalsWrap.appendChild(tag);
            });
        } else if (student.goal) {
            const tag = document.createElement("span");
            tag.className = "goal-tag";
            tag.textContent = student.goal;
            goalsWrap.appendChild(tag);
        }

        const footer = document.createElement("div");
        footer.className = "student-card__footer";

        const btnContinue = document.createElement("button");
        btnContinue.className = "btn btn--primary btn--sm";
        btnContinue.textContent = "Continue Learning";
        btnContinue.addEventListener("click", () => {
            appState.currentStudentId = student.id;
            // If teacher saved a resume spot for this student, go there
            if (!tryResumeStudent(student)) {
                goToLevels();
            }
        });

        const btnDelete = document.createElement("button");
        btnDelete.className = "student-card__delete";
        btnDelete.textContent = "❌";
        btnDelete.addEventListener("click", () => {
            if (!confirm(`Delete student "${student.name}"?`)) return;
            appState.students = appState.students.filter((s) => s.id !== student.id);
            saveStudentsToLS();
            if (appState.currentStudentId === student.id) appState.currentStudentId = null;
            renderStudents();
        });

        footer.appendChild(btnContinue);
        footer.appendChild(btnDelete);

        card.appendChild(avatar);
        card.appendChild(nameEl);
        card.appendChild(levelEl);
        card.appendChild(goalsWrap);
        card.appendChild(footer);

        grid.appendChild(card);
    });
}

// ========================= LEVELS & UNITS =========================
function findLessonIdFor(levelName, unitName) {
    return Object.keys(lessons).find(
        (id) =>
            lessons[id].meta &&
            lessons[id].meta.level === levelName &&
            lessons[id].meta.unit === unitName
    );
}

function renderLevels() {
    const container = $("#levelsContainer");
    container.innerHTML = "";

    const levelsDef = [
        {
            level: "Beginner",
            units: ["Greetings", "Daily Routine", "Food & Drink", "Family", "trans"],
        },
        {
            level: "Pre-Intermediate",
            units: ["Work & Study", "Health & Emergencies", "Shopping & Prices", "Weather & Small Talk", "Apartment & Problems"],
        },
        {
            level: "Intermediate",
            units: ["Opinions", "Complaints", "Plans & Future", "Free Time & Hobbies", "Feelings & Mental State"],
        },
    ];

    const student = getCurrentStudent();

    levelsDef.forEach((lvl) => {
        const card = document.createElement("article");
        card.className = "level-card";

        const titleRow = document.createElement("div");
        titleRow.className = "level-card__title";

        const title = document.createElement("h4");
        title.className = "td-lessonitem__title";
        title.textContent = lvl.level;

        const badge = document.createElement("span");
        badge.className = "badge badge--soft";
        badge.textContent = "Local track";

        titleRow.appendChild(title);
        titleRow.appendChild(badge);

        const unitsContainer = document.createElement("div");
        unitsContainer.className = "level-card__units";

        // default units
        const allUnits = [...lvl.units];

        // add custom units for this level
        if (customUnits[lvl.level] && customUnits[lvl.level].length) {
            customUnits[lvl.level].forEach((u) => {
                if (!allUnits.includes(u)) allUnits.push(u);
            });
        }

        allUnits.forEach((unitName) => {
            const pill = document.createElement("div");
            pill.className = "unit-pill";

            const nameSpan = document.createElement("span");
            nameSpan.className = "unit-pill__name";
            nameSpan.textContent = unitName;

            const statusSpan = document.createElement("span");
            statusSpan.className = "unit-pill__status";

            const lessonId = findLessonIdFor(lvl.level, unitName);

            if (lessonId) {
                pill.classList.add("unit-pill--clickable");
                if (student) {
                    const progress = getStudentProgress(student, lessonId);
                    const total = Object.keys(progress).length || 1;
                    const completed = Object.values(progress).filter(Boolean).length;
                    const percent = Math.round((completed / total) * 100);
                    statusSpan.textContent = `Progress: ${completed}/${total} sections`;

                    if (percent >= 80) {
                        pill.classList.add("unit-pill--done");
                    } else if (percent >= 30) {
                        pill.classList.add("unit-pill--mid");
                    } else {
                        pill.classList.add("unit-pill--low");
                    }
                } else {
                    statusSpan.textContent = "Open lesson";
                    pill.classList.add("unit-pill--low");
                }

                pill.addEventListener("click", () => {
                    appState.currentLessonId = lessonId;
                    appState.currentTab = "overview";
                    goToLessonView();
                });
            } else {
                pill.classList.add("unit-pill--nolesson");
                statusSpan.textContent = "No lesson template yet";
            }

            pill.appendChild(nameSpan);
            pill.appendChild(statusSpan);
            unitsContainer.appendChild(pill);
        });

        card.appendChild(titleRow);
        card.appendChild(unitsContainer);
        container.appendChild(card);
    });
}

// ========================= LESSON VIEW =========================
function updateLessonTopBar() {
    const student = getCurrentStudent();
    const lesson = lessons[appState.currentLessonId];
    if (!student || !lesson) return;
    $("#lessonStudentName").textContent = student.name;
    $("#lessonMeta").textContent = `${lesson.meta.level} – ${lesson.meta.unit} – ${lesson.meta.lessonTitle}`;
}

function countCompletedSections(p) {
    return Object.values(p).filter(Boolean).length;
}
function updateProgressBar() {
    const student = getCurrentStudent();
    if (!student) {
        $("#lessonProgressFill").style.width = "0%";
        return;
    }
    const p = getStudentProgress(student, appState.currentLessonId);
    const c = countCompletedSections(p);
    const t = Object.keys(p).length || 1;
    const percent = Math.round((c / t) * 100);
    $("#lessonProgressFill").style.width = percent + "%";
}

function renderSectionStatus(container, sectionKey) {
    const student = getCurrentStudent();
    let done = false;
    if (student) {
        const p = getStudentProgress(student, appState.currentLessonId);
        done = !!p[sectionKey];
    }
    const div = document.createElement("div");
    div.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    div.dataset.sectionStatusKey = sectionKey;
    div.textContent = done ? "✓ Section completed" : "Section not completed yet";
    container.appendChild(div);
}
function updateSectionStatusBadge(sectionKey) {
    const badge = document.querySelector(
        `.section-status[data-section-status-key="${sectionKey}"]`
    );
    if (!badge) return;
    const student = getCurrentStudent();
    const p = student && getStudentProgress(student, appState.currentLessonId);
    const done = !!(p && p[sectionKey]);
    badge.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    badge.textContent = done ? "✓ Section completed" : "Section not completed yet";
}



function persistResumeBeforeNav() {
    // Only save if we are currently in a lesson with an active student
    try {
        if (appState && appState.currentLessonId && appState.currentStudentId) {
            saveResumeSpot({ silent: true });
        }
    } catch { }
}

// =======================
// Resume Last Spot (per student)
// =======================
function ensureStudentLastSeen(student) {
    if (!student) return;
    if (!student.lastSeen || typeof student.lastSeen !== "object") {
        student.lastSeen = null;
    }
}

function saveResumeSpot({ silent = false } = {}) {
    const student = getCurrentStudent();
    if (!student) return;
    ensureStudentLastSeen(student);

    student.lastSeen = {
        lessonId: appState.currentLessonId,
        tab: appState.currentTab || "overview",
        at: Date.now(),
    };

    saveStudentsToLS();
    // if teacher, also save student cloud snapshot (debounced)
    try { scheduleCloudSave(); } catch { }

    if (!silent) {
        toast("Saved! Next time this student will open right here.");
    }
}

function tryResumeStudent(student) {
    if (!student || !student.lastSeen) return false;
    const { lessonId, tab } = student.lastSeen || {};
    if (!lessonId || !lessons[lessonId]) return false;

    appState.currentLessonId = lessonId;
    appState.currentTab = tab || "overview";
    goToLessonView({ teacherMode: false });
    return true;
}

// Tabs
function setActiveTab(tabKey) {
    appState.currentTab = tabKey;
    // Auto-save student's last spot whenever they switch tabs
    try { saveResumeSpot({ silent: true }); } catch { }
    $all(".lesson-tab").forEach((btn) =>
        btn.classList.toggle("lesson-tab--active", btn.dataset.tab === tabKey)
    );

    const container = $("#lessonTabContent");
    container.innerHTML = "";
    const lesson = lessons[appState.currentLessonId];
    if (!lesson) return;

    switch (tabKey) {
        case "overview":
            renderOverviewTab(container, lesson);
            break;
        case "vocabulary":
            renderVocabularyTab(container, lesson);
            break;
        case "dialogue":
            renderDialogueTab(container, lesson);
            break;
        case "grammar":
            renderGrammarTab(container, lesson);
            break;
        case "practice":
            renderPracticeTab(container, lesson);
            break;
        case "homework":
            renderHomeworkTab(container, lesson);
            break;
        case "review":
            renderReviewTab(container, lesson);
            break;
        case "teacher-notes":
            renderTeacherNotesTab(container, lesson);
            break;
    }
}

// Overview
function renderOverviewTab(container, lesson) {
    const ov = lesson.overview;
    const h3 = document.createElement("h3");
    h3.textContent = ov.title;
    const p = document.createElement("p");
    p.textContent = ov.description;

    const goalsTitle = document.createElement("p");
    goalsTitle.textContent = "By the end of this lesson, the student can:";
    goalsTitle.style.fontWeight = "600";

    const ul = document.createElement("ul");
    ov.goals.forEach((g) => {
        const li = document.createElement("li");
        li.textContent = g;
        ul.appendChild(li);
    });

    const btn = document.createElement("button");
    btn.className = "btn btn--primary btn--sm";
    btn.textContent = "Mark Overview as Done";
    btn.addEventListener("click", () => setStudentProgressField("overview", true));

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(goalsTitle);
    container.appendChild(ul);
    container.appendChild(btn);
    renderSectionStatus(container, "overview");
}

// Vocabulary


function renderVocabModalFromState() {
    const item = vocabModalState.list[vocabModalState.index];
    if (!item) return;

    const elAr = $("#vocabModalWord");
    const elEn = $("#vocabModalMeaning");
    const elArabeezy = $("#vocabModalArabeezy");
    const elHint = $("#vocabModalHint"); // لو ما عندك هاد السطر ممكن تشيليه
    const exAr = $("#vocabModalExampleAr");
    const exEn = $("#vocabModalExampleEn");

    elAr.textContent = item.ar || "";
    elEn.textContent = item.en || "";
    elArabeezy.textContent = item.enArabeezy || "";
    if (elHint) elHint.textContent = item.hint || "";
    exAr.textContent = item.exampleAr || "";
    exEn.textContent = item.exampleEn || "";

    // show/hide based on state
    elAr.style.display = vocabModalState.showAr ? "" : "none";
    elEn.style.display = vocabModalState.showEn ? "" : "none";


    if (vocabModalState.showExamples) {
        exAr.style.display = "";
        elAr.style.display = "";
    } else {
        exAr.style.display = "none";
        elAr.style.display = "none";
    }
    if (vocabModalState.showEn) {
        exEn.style.display = "";
        elEn.style.display = "";
        elArabeezy.style.display = "";
    } else {
        exEn.style.display = "none";
        elEn.style.display = "none";
        elArabeezy.style.display = "none";
    }
    // تحديث نص الزر (Hide / Show) لكل حقل

    const btnEn = $("#vocabToggleEnBtn");
    const btnEx = $("#vocabToggleExamplesBtn");


    if (btnEn) {
        btnEn.textContent = vocabModalState.showEn ? "👁 Hide" : "👁 Show";
    }

    if (btnEx) {
        btnEx.textContent = vocabModalState.showExamples ? "👁 Hide" : "👁 Show";
    }
}



function openVocabModal(list, index) {
    vocabModalState.list = list || [];
    vocabModalState.index = index || 0;
    vocabModalState.showExamples = true;
    vocabModalState.showAr = true;
    vocabModalState.showEn = true;
    vocabModalState.showArabeezy = true;

    renderVocabModalFromState();
    $("#vocabModal").classList.add("modal--open");
}


function closeVocabModal() {
    $("#vocabModal").classList.remove("modal--open");
    vocabModalState.list = [];
}


function ensureVocabVisitedSet() {
    if (!appState.vocabCoreVisited[appState.currentLessonId]) {
        appState.vocabCoreVisited[appState.currentLessonId] = new Set();
    }
    return appState.vocabCoreVisited[appState.currentLessonId];
}
function maybeAutoCompleteVocab() {
    const lesson = lessons[appState.currentLessonId];
    const set = ensureVocabVisitedSet();
    const totalCore = lesson.vocabulary.core.length;
    if (totalCore && set.size >= totalCore) {
        setStudentProgressField("vocabulary", true);
    }
}

function renderVocabularyGroup(container, titleText, items, isCore) {
    const title = document.createElement("div");
    title.className = "vocab-group-title";
    title.textContent = titleText;
    container.appendChild(title);

    const list = document.createElement("div");
    list.className = "vocab-list";

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "vocab-item";

        const ar = document.createElement("div");
        ar.className = "vocab-item__ar";
        ar.textContent = item.ar;

        const en = document.createElement("div");
        en.className = "vocab-item__en";
        en.textContent = item.en;

        card.appendChild(ar);
        card.appendChild(en);

        card.addEventListener("click", () => {
            // ✅ نرسل الليست + index للمودال
            openVocabModal(items, index);

            // نفس منطق الـ progress القديم
            if (isCore) {
                const s = ensureVocabVisitedSet();
                s.add(item.id);
                maybeAutoCompleteVocab();
            }
        });

        list.appendChild(card);
    });

    container.appendChild(list);
}


function handleAddVocabItem(lesson, groupKey) {
    const ar = prompt("Arabic word (with vowels):");
    if (!ar) return;
    const en = prompt("English meaning:");
    if (!en) return;
    const hint = prompt("Optional hint / note:") || "";
    const exampleAr = prompt("Example sentence in Arabic (optional):") || "";
    const exampleEn = prompt("Example sentence in English (optional):") || "";
    lesson.vocabulary[groupKey].push({
        id: groupKey + "_" + Date.now(),
        ar,
        en,
        hint,
        exampleAr,
        exampleEn,
    });
    saveLessonToLS(appState.currentLessonId);
    saveLessonToCloud(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function handleEditVocabItems(lesson) {
    const all = [
        ...lesson.vocabulary.core.map((i) => ({ ...i, groupKey: "core" })),
        ...lesson.vocabulary.extra.map((i) => ({ ...i, groupKey: "extra" })),
    ];
    if (!all.length) {
        alert("No vocabulary to edit.");
        return;
    }
    const list = all.map((i, idx) => `${idx + 1}. ${i.ar} / ${i.en}`).join("\n");
    const indexStr = prompt(
        "Choose item number to edit/delete:\n" + list + "\n\nEnter number (or cancel):"
    );
    if (!indexStr) return;
    const index = Number(indexStr) - 1;
    if (isNaN(index) || index < 0 || index >= all.length) return;
    const item = all[index];

    const action = prompt(
        `Selected: ${item.ar} / ${item.en}\nType:\n  e = edit\n  d = delete`
    );
    if (!action) return;

    const group = lesson.vocabulary[item.groupKey];
    const idxInGroup = group.findIndex((x) => x.id === item.id);
    if (action.toLowerCase() === "d") {
        if (idxInGroup !== -1) group.splice(idxInGroup, 1);
    } else if (action.toLowerCase() === "e") {
        const ar = prompt("Arabic:", item.ar) || item.ar;
        const en = prompt("English:", item.en) || item.en;
        const hint = prompt("Hint:", item.hint || "") || item.hint || "";
        const exampleAr =
            prompt("Example Arabic:", item.exampleAr || "") || item.exampleAr || "";
        const exampleEn =
            prompt("Example English:", item.exampleEn || "") || item.exampleEn || "";
        if (idxInGroup !== -1) {
            group[idxInGroup] = { ...item, ar, en, hint, exampleAr, exampleEn };
        }
    }
    saveLessonToLS(appState.currentLessonId);
    saveLessonToCloud(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function renderVocabularyTab(container, lesson) {
    const hint = document.createElement("p");
    hint.className = "teacher-edit-note";
    hint.textContent =
        "Tap a card to see details and example sentences. When you finish reviewing, press 'Done' to complete this section.";
    container.appendChild(hint);

    // ✅ شريط "تم إنهاء القسم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneLabel = document.createElement("span");
    doneLabel.className = "section-done-text";


    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm section-done-btn";
    doneBtn.textContent = "Mark Vocabulary as Done";

    doneBtn.addEventListener("click", () => {
        markVocabularyDone();
    });

    doneBar.appendChild(doneLabel);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // ✅ باقي تبويب المفردات
    const vocab = lesson.vocabulary || {};
    const core = Array.isArray(vocab.core) ? vocab.core : [];
    const extra = Array.isArray(vocab.extra) ? vocab.extra : [];

    if (core.length) {
        renderVocabularyGroup(container, "Core Vocabulary", core, true);
    }
    if (extra.length) {
        renderVocabularyGroup(container, "Extra Vocabulary", extra, false);
    }
}



// Dialogue
function renderDialogueTab(container, lesson) {
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.gap = "8px";

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Model Dialogue";

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.gap = "6px";

    const btnToggleEnglish = document.createElement("button");
    btnToggleEnglish.className = "btn btn--ghost btn--sm";
    btnToggleEnglish.textContent = "Show/Hide English";

    const btnToggleArabic = document.createElement("button");
    btnToggleArabic.className = "btn btn--ghost btn--sm";
    btnToggleArabic.textContent = "Show/Hide Arabic";

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Dialogue as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("dialogue", true));

    controls.appendChild(btnToggleArabic);
    controls.appendChild(btnToggleEnglish);
    controls.appendChild(btnDone);

    header.appendChild(title);
    header.appendChild(controls);

    const layout = document.createElement("div");
    layout.className = "dialogue-layout";

    const enCol = document.createElement("div");
    enCol.className = "dialogue-col";

    const arCol = document.createElement("div");
    arCol.className = "dialogue-col dialogue-col--ar";

    lesson.dialogue.lines.forEach((line) => {
        const enLine = document.createElement("div");
        enLine.className = "dialogue-line";
        const enSpeaker = document.createElement("div");
        enSpeaker.className = "dialogue-speaker-en";
        enSpeaker.textContent = line.speaker;
        const enText = document.createElement("div");
        enText.className = "dialogue-text";
        enText.textContent = line.en;
        enLine.appendChild(enSpeaker);
        enLine.appendChild(enText);
        enCol.appendChild(enLine);

        const arLine = document.createElement("div");
        arLine.className = "dialogue-line";
        const arSpeaker = document.createElement("div");
        arSpeaker.className = "dialogue-speaker-ar";
        arSpeaker.textContent = line.speaker;
        const arText = document.createElement("div");
        arText.className = "dialogue-text";
        arText.textContent = line.ar;
        arLine.appendChild(arSpeaker);
        arLine.appendChild(arText);
        arCol.appendChild(arLine);
    });

    layout.appendChild(enCol);
    layout.appendChild(arCol);

    let englishVisible = true;
    let arabicVisible = true;

    function adjustLayout() {
        if (englishVisible && arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr) minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "block";
            enCol.style.margin = "0";
            arCol.style.margin = "0";
        } else if (englishVisible && !arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "none";
            enCol.style.margin = "0 auto";
        } else if (!englishVisible && arabicVisible) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "block";
            arCol.style.margin = "0 auto";
        } else {
            // لو الاثنين مخفيين، خليه فاضي لكن نحافظ على التخطيط
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "none";
        }
    }

    btnToggleEnglish.addEventListener("click", () => {
        englishVisible = !englishVisible;
        adjustLayout();
    });

    btnToggleArabic.addEventListener("click", () => {
        arabicVisible = !arabicVisible;
        adjustLayout();
    });

    // أول مرة
    adjustLayout();

    container.appendChild(header);
    container.appendChild(layout);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can edit the dialogue from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "dialogue");
}

// Grammar
function renderGrammarTab(container, lesson) {
    // هنا صار "Translation"
    ensureTranslationItems(lesson, 7);

    const list = safeArr(lesson?.practice?.translation);
    translationState.items = list;
    translationState.index = 0;
    translationState.hidePrompt = false;
    translationState.hideAnswer = false;
    translationState.shuffled = false;

    // زر "تم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneText = document.createElement("span");
    doneText.className = "translation-muted";
    doneText.textContent = "بعد ما تخلص ترجمة الجمل اضغط تم لإنهاء القسم.";

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm";
    doneBtn.textContent = "✓ تم إنهاء قسم الترجمة";
    doneBtn.addEventListener("click", () => {
        // لأن المفتاح الداخلي ما زال grammar
        setStudentProgressField("grammar", true);
    });

    doneBar.appendChild(doneText);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // Toolbar (إخفاء مرتب، مش معجوق)
    const toolbar = document.createElement("div");
    toolbar.className = "translation-toolbar";

    const left = document.createElement("div");
    left.className = "group";

    const btnHidePrompt = document.createElement("button");
    btnHidePrompt.className = "btn btn--ghost btn--sm";
    btnHidePrompt.textContent = "Hide prompt";

    const btnHideAnswer = document.createElement("button");
    btnHideAnswer.className = "btn btn--ghost btn--sm";
    btnHideAnswer.textContent = "Hide answer";

    const btnShuffle = document.createElement("button");
    btnShuffle.className = "btn btn--ghost btn--sm";
    btnShuffle.textContent = "Shuffle";

    const btnReset = document.createElement("button");
    btnReset.className = "btn btn--ghost btn--sm";
    btnReset.textContent = "Reset";

    left.appendChild(btnHidePrompt);
    left.appendChild(btnHideAnswer);
    left.appendChild(btnShuffle);
    left.appendChild(btnReset);

    const right = document.createElement("div");
    right.className = "group";

    const counter = document.createElement("span");
    counter.className = "translation-muted";
    counter.textContent = list.length ? `1 / ${list.length}` : "0 / 0";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "⬅ Prev";

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next ➡";

    right.appendChild(btnPrev);
    right.appendChild(btnNext);
    right.appendChild(counter);

    toolbar.appendChild(left);
    toolbar.appendChild(right);
    container.appendChild(toolbar);

    // Card container
    const cardHost = document.createElement("div");
    container.appendChild(cardHost);

    // Render function
    function renderTranslationCard() {
        cardHost.innerHTML = "";

        const item = translationState.items[translationState.index];
        if (!item) {
            const p = document.createElement("p");
            p.className = "translation-muted";
            p.textContent = "No translation items available.";
            cardHost.appendChild(p);
            return;
        }

        const type = item.type === "arToEn" ? "Arabic → English" : "English → Arabic";

        const card = document.createElement("div");
        card.className = "translation-card";

        const badge = document.createElement("span");
        badge.className = "translation-badge";
        badge.textContent = type;

        const prompt = document.createElement("div");
        prompt.className = "translation-prompt";

        const answer = document.createElement("div");
        answer.className = "translation-answer";

        // prompt/answer content
        if (item.type === "enToAr") {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `EN: ${txt(item.textEn)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `AR: ${txt(item.textAr)}`;
        } else {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `AR: ${txt(item.textAr)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `EN: ${txt(item.textEn)}`;
        }

        const btnShow = document.createElement("button");
        btnShow.className = "btn btn--outline btn--sm";
        btnShow.textContent = "Show answer";

        btnShow.addEventListener("click", () => {
            const isVisible = answer.classList.toggle("is-visible");
            btnShow.textContent = isVisible ? "Hide answer" : "Show answer";
        });

        const footer = document.createElement("div");
        footer.className = "translation-footer";

        const tip = document.createElement("span");
        tip.className = "translation-muted";
        tip.textContent = "Try to say it out loud before showing the answer.";

        footer.appendChild(tip);
        footer.appendChild(btnShow);

        card.appendChild(badge);
        card.appendChild(prompt);
        card.appendChild(footer);
        card.appendChild(answer);

        cardHost.appendChild(card);

        counter.textContent = `${translationState.index + 1} / ${translationState.items.length}`;

        // Update toolbar button text states
        btnHidePrompt.textContent = translationState.hidePrompt ? "Show prompt" : "Hide prompt";
        btnHideAnswer.textContent = translationState.hideAnswer ? "Show answer" : "Hide answer";
    }

    // toolbar actions
    btnHidePrompt.addEventListener("click", () => {
        translationState.hidePrompt = !translationState.hidePrompt;
        renderTranslationCard();
    });

    btnHideAnswer.addEventListener("click", () => {
        translationState.hideAnswer = !translationState.hideAnswer;
        renderTranslationCard();
    });

    btnShuffle.addEventListener("click", () => {
        translationState.items = shuffleArray(translationState.items);
        translationState.index = 0;
        translationState.shuffled = true;
        renderTranslationCard();
    });

    btnReset.addEventListener("click", () => {
        translationState.index = 0;
        translationState.hidePrompt = false;
        translationState.hideAnswer = false;
        renderTranslationCard();
    });

    btnPrev.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index - 1 + translationState.items.length) % translationState.items.length;
        renderTranslationCard();
    });

    btnNext.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index + 1) % translationState.items.length;
        renderTranslationCard();
    });

    renderTranslationCard();
}


// Practice
function renderPracticeTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Practice – Quiz & Role-play";

    const quizBlock = document.createElement("div");
    let correctCount = 0;

    lesson.practice.quiz.forEach((q) => {
        const qWrap = document.createElement("div");
        qWrap.className = "quiz-question";

        const qText = document.createElement("div");
        qText.className = "flashcard__ar";
        qText.style.direction = "rtl";
        qText.textContent = q.questionAr;

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "quiz-options";

        const feedback = document.createElement("div");
        feedback.className = "quiz-feedback";

        q.optionsEn.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => {
                if (idx === q.correctIndex) {
                    btn.classList.add("quiz-option--correct");
                    feedback.textContent = "✅ Correct!";
                    correctCount++;
                    if (correctCount >= 5 || correctCount >= lesson.practice.quiz.length) {
                        setStudentProgressField("practice", true);
                    }
                } else {
                    btn.classList.add("quiz-option--incorrect");
                    feedback.textContent = "❌ Not quite. Try again.";
                }
            });
            optionsWrap.appendChild(btn);
        });

        qWrap.appendChild(qText);
        qWrap.appendChild(optionsWrap);
        qWrap.appendChild(feedback);
        quizBlock.appendChild(qWrap);
    });

    const roleTitle = document.createElement("p");
    roleTitle.style.marginTop = "8px";
    roleTitle.style.fontWeight = "600";
    roleTitle.textContent = "Role-play prompts:";

    const ul = document.createElement("ul");
    ul.className = "roleplay-list";
    lesson.practice.rolePlays.forEach((rp) => {
        const li = document.createElement("li");
        li.textContent = rp;
        ul.appendChild(li);
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));

    container.appendChild(title);
    container.appendChild(quizBlock);
    container.appendChild(roleTitle);
    container.appendChild(ul);
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can adjust questions and role-plays from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "practice");
}

// Homework
function renderHomeworkTab(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Homework";

    const text = document.createElement("p");
    text.className = "homework-text";
    text.textContent = lesson.homework.instructions;

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "6px";
    wrap.style.marginBottom = "8px";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "homeworkAssignedCheckbox";
    check.checked = progress && progress.homework;

    const label = document.createElement("label");
    label.htmlFor = "homeworkAssignedCheckbox";
    label.textContent = "Homework assigned / completed";

    wrap.appendChild(check);
    wrap.appendChild(label);

    check.addEventListener("change", () => {
        setStudentProgressField("homework", check.checked);
    });

    const notesLabel = document.createElement("p");
    notesLabel.className = "teacher-edit-note";
    notesLabel.textContent = "Teacher notes for this student:";

    const notes = document.createElement("textarea");
    notes.className = "homework-notes";
    notes.placeholder = "E.g. Needs more practice with kifak/kifik.";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";

    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Homework as Done";
    btnDone.addEventListener("click", () => {
        check.checked = true;
        setStudentProgressField("homework", true);
    });

    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(wrap);
    container.appendChild(notesLabel);
    container.appendChild(notes);
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher Mode: You can edit the main homework instructions for this lesson from the Teacher Dashboard form (Edit Lesson Content).";
        container.appendChild(note);
    }

    renderSectionStatus(container, "homework");
}

// Quick review

function renderReviewTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Quick Review – Flashcards";

    const all = [...lesson.vocabulary.core, ...lesson.vocabulary.extra];
    if (!all.length) {
        const p = document.createElement("p");
        p.textContent = "No vocabulary available for review.";
        container.appendChild(title);
        container.appendChild(p);
        renderSectionStatus(container, "review");
        return;
    }

    let pool = shuffleArray(all).slice(0, Math.min(5, all.length));
    let index = 0;
    let showFront = true;

    const card = document.createElement("div");
    card.className = "flashcard";
    const arEl = document.createElement("div");
    arEl.className = "flashcard__ar";
    const enEl = document.createElement("div");
    enEl.className = "flashcard__en";

    function renderCard() {
        const item = pool[index];
        if (showFront) {
            arEl.textContent = item.ar;
            enEl.textContent = "(tap to reveal meaning)";
            enEl.style.color = "#6b7280";
        } else {
            arEl.textContent = item.ar;
            enEl.textContent = item.en;
            enEl.style.color = "#111827";
        }
    }

    card.appendChild(arEl);
    card.appendChild(enEl);
    card.addEventListener("click", () => {
        showFront = !showFront;
        renderCard();
    });

    const controlsRow = document.createElement("div");
    controlsRow.style.display = "flex";
    controlsRow.style.justifyContent = "space-between";
    controlsRow.style.alignItems = "center";
    controlsRow.style.marginTop = "6px";

    const navButtons = document.createElement("div");
    navButtons.style.display = "flex";
    navButtons.style.gap = "6px";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "Prev";
    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            showFront = true;
            renderCard();
        }
    });

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next";
    btnNext.addEventListener("click", () => {
        if (index < pool.length - 1) {
            index++;
            showFront = true;
            renderCard();
        } else {
            alert("Nice! Quick review completed.");
            setStudentProgressField("review", true);
        }
    });

    const btnRandom = document.createElement("button");
    btnRandom.className = "btn btn--outline btn--sm";
    btnRandom.textContent = "Random";
    btnRandom.addEventListener("click", () => {
        index = Math.floor(Math.random() * pool.length);
        showFront = true;
        renderCard();
    });

    navButtons.appendChild(btnPrev);
    navButtons.appendChild(btnNext);
    navButtons.appendChild(btnRandom);

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Quick Review as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("review", true));

    controlsRow.appendChild(navButtons);
    controlsRow.appendChild(btnDone);

    container.appendChild(title);
    container.appendChild(card);
    container.appendChild(controlsRow);

    renderCard();
    renderSectionStatus(container, "review");
}

// Teacher notes
function renderTeacherNotesTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Teacher Notes";

    const info = document.createElement("p");
    info.className = "teacher-edit-note";
    info.textContent =
        "Use this space to plan your flow, note common mistakes, or add extra prompts. Notes are saved locally on this device.";

    const textarea = document.createElement("textarea");
    textarea.className = "homework-notes";
    textarea.value = lesson.teacherNotes.myNotes || "";
    textarea.placeholder =
        "Lesson flow, timing, reminders about pronunciation, extra speaking prompts...";

    textarea.addEventListener("change", () => {
        lesson.teacherNotes.myNotes = textarea.value;
        saveLessonToLS(appState.currentLessonId);
        saveLessonToCloud(appState.currentLessonId);
    });

    container.appendChild(title);
    container.appendChild(info);
    container.appendChild(textarea);
}

// ========================= TEACHER MODE VISIBILITY =========================
function updateTeacherTabsVisibility() {
    const show = appState.teacherMode;
    $all(".lesson-tab--teacher-only").forEach((btn) => {
        btn.style.display = show ? "inline-flex" : "none";
    });
}

// ========================= TEACHER DASHBOARD =========================

function getLessonIdsSorted() {
    return Object.keys(lessons).sort((a, b) => {
        const la = lessons[a]?.meta?.level || "";
        const lb = lessons[b]?.meta?.level || "";
        const ua = lessons[a]?.meta?.unit || "";
        const ub = lessons[b]?.meta?.unit || "";
        const ta = lessons[a]?.meta?.lessonTitle || "";
        const tb = lessons[b]?.meta?.lessonTitle || "";
        return (la + ua + ta).localeCompare(lb + ub + tb);
    });
}

function getUniqueUnits() {
    const units = new Set();
    getLessonIdsSorted().forEach((id) => {
        const u = (lessons[id]?.meta?.unit || "").trim();
        if (u) units.add(u);
    });
    return Array.from(units).sort((a, b) => a.localeCompare(b));
}

function renderTeacherPicker() {
    const unitSel = document.getElementById("tdUnitSelect");
    const lessonSel = document.getElementById("tdLessonSelect");
    const sectionSel = document.getElementById("tdPickSection");
    const btnEdit = document.getElementById("tdEditSelected");
    const btnOpen = document.getElementById("tdOpenSelected");
    const btnDelete = document.getElementById("tdDeleteSelected");
    const btnSync = document.getElementById("tdSyncLessonsNow");

    // If picker UI isn't present, fall back to the full list
    if (!unitSel || !lessonSel || !sectionSel || !btnEdit || !btnOpen || !btnDelete) {
        // Avoid infinite recursion if the dashboard picker isn't in the DOM.
        // Fall back to rendering the long list if available.
        if (typeof renderTeacherLessonList === "function") {
            try { renderTeacherLessonList(); } catch { }
        }
        return;
    }

    // Hide the long list to reduce clutter (still present for compatibility)
    const listEl = document.getElementById("teacherLessonList");
    if (listEl) listEl.style.display = "none";

    const units = getUniqueUnits();
    const savedUnit = localStorage.getItem("td_selected_unit") || "";
    const savedLesson = localStorage.getItem("td_selected_lesson") || "";
    const savedPickSection = localStorage.getItem("td_pick_section") || "overview";

    // Fill unit select
    unitSel.innerHTML = "";
    const optAll = document.createElement("option");
    optAll.value = "";
    optAll.textContent = "All units";
    unitSel.appendChild(optAll);

    units.forEach((u) => {
        const opt = document.createElement("option");
        opt.value = u;
        opt.textContent = u;
        unitSel.appendChild(opt);
    });

    if (savedUnit && units.includes(savedUnit)) unitSel.value = savedUnit;

    // restore last picked section
    if (sectionSel) {
        sectionSel.value = savedPickSection;
        sectionSel.onchange = () => localStorage.setItem("td_pick_section", sectionSel.value || "overview");
    }

    function fillLessons() {
        const unit = unitSel.value;
        const ids = getLessonIdsSorted().filter((id) => {
            const u = (lessons[id]?.meta?.unit || "").trim();
            return !unit || u === unit;
        });

        lessonSel.innerHTML = "";
        const validIds = [];
        ids.forEach((id) => {
            const lesson = lessons[id];
            if (!lesson || !lesson.meta) return;
            const level = lesson.meta.level || "";
            const unitName = lesson.meta.unit || "";
            const title = lesson.meta.lessonTitle || "";
            if (!level || !unitName || !title) return;

            const opt = document.createElement("option");
            opt.value = id;
            opt.textContent = `${level} • ${unitName} • ${title}`;
            lessonSel.appendChild(opt);
            validIds.push(id);
        });

        // restore last selected lesson if still in filtered set
        if (savedLesson && validIds.includes(savedLesson)) lessonSel.value = savedLesson;
        else if (validIds.length) lessonSel.value = validIds[0];

        localStorage.setItem("td_selected_unit", unitSel.value || "");
        localStorage.setItem("td_selected_lesson", lessonSel.value || "");
    }

    fillLessons();

    unitSel.onchange = () => {
        localStorage.setItem("td_selected_unit", unitSel.value || "");
        fillLessons();
    };

    lessonSel.onchange = () => {
        localStorage.setItem("td_selected_lesson", lessonSel.value || "");
    };

    btnEdit.onclick = () => {
        const id = lessonSel.value;
        if (!id) return;
        const picked = (sectionSel && sectionSel.value) ? sectionSel.value : (localStorage.getItem("td_pick_section") || "overview");
        renderTeacherEditor(id, null, picked);
    };

    btnOpen.onclick = () => {
        const id = lessonSel.value;
        if (!id) return;
        appState.currentLessonId = id;
        goToLessonView({ teacherMode: false });
    };

    if (btnSync) {
        btnSync.onclick = async () => {
            await loadLessonsFromCloudOnce();
            // refresh picker lists
            renderTeacherPicker();
            alert("Synced lessons from online.");
        };
    }

    btnDelete.onclick = () => {
        const id = lessonSel.value;
        if (!id) return;
        if (!confirm("Delete this lesson template? This cannot be undone.")) return;
        delete lessons[id];
        localStorage.removeItem(LS_LESSON_PREFIX + id);
        try { deleteLessonFromCloud(id); } catch { }
        // refresh selects
        renderTeacherPicker();
        const editor = $("#teacherEditor");
        editor.style.display = "none";
        editor.innerHTML = "";
    };
}


function renderTeacherLessonList() {
    const listEl = $("#teacherLessonList");
    listEl.innerHTML = "";
    const ids = Object.keys(lessons);
    const q = (document.getElementById("tdLessonSearch")?.value || "").trim().toLowerCase();
    if (!ids.length) {
        const p = document.createElement("p");
        p.className = "empty-state";
        p.textContent =
            "No lesson templates yet. Use “Add New Lesson Template” to create your first lesson.";
        listEl.appendChild(p);
        return;
    }

    ids
        .filter((id) => {
            if (!q) return true;
            const lesson = lessons[id] || {};
            const hay = `${id} ${lesson?.meta?.level || ""} ${lesson?.meta?.unit || ""} ${lesson?.meta?.lessonTitle || ""}`.toLowerCase();
            return hay.includes(q);
        })
        .forEach((id) => {
            const lesson = lessons[id];
            const card = document.createElement("article");
            card.className = "td-lessonitem" + (appState.currentLessonId === id ? " td-lessonitem--active" : "");

            const title = document.createElement("h4");
            title.className = "td-lessonitem__title";
            title.textContent = `${lesson.meta.level} – ${lesson.meta.unit}`;

            const meta = document.createElement("p");
            meta.className = "td-lessonitem__meta";
            meta.textContent = lesson.meta.lessonTitle;

            const badge = document.createElement("span");
            badge.className = "td-lessonitem__id";
            badge.textContent = `ID: ${id}`;

            const actions = document.createElement("div");
            actions.className = "td-lessonitem__actions";

            const btnEdit = document.createElement("button");
            btnEdit.className = "btn btn--primary btn--sm";
            btnEdit.textContent = "Edit Lesson Content";
            btnEdit.addEventListener("click", () => {
                appState.currentLessonId = id;
                renderTeacherEditor(id, card); // ⭐ مررنا الكارد
            });




            const btnOpen = document.createElement("button");
            btnOpen.className = "btn btn--outline btn--sm";
            btnOpen.textContent = "Open Lesson View";
            btnOpen.addEventListener("click", () => {
                appState.currentLessonId = id;
                appState.teacherMode = false;
                $("#teacherModeToggle").checked = false;
                goToLessonView({ teacherMode: false });
            });

            const btnDelete = document.createElement("button");
            btnDelete.className = "btn btn--ghost btn--sm";
            btnDelete.textContent = "Delete Template";
            btnDelete.addEventListener("click", () => {
                if (
                    !confirm(
                        `Delete lesson template "${lesson.meta.lessonTitle}"?\nThis does not delete students' progress, but the lesson won't be available anymore.`
                    )
                )
                    return;
                delete lessons[id];
                localStorage.removeItem(LS_LESSON_PREFIX + id);
                deleteLessonFromCloud(id);
                const editor = $("#teacherEditor");
                editor.style.display = "none";
                editor.innerHTML = "";
                renderTeacherPicker();
            });

            actions.appendChild(btnEdit);
            actions.appendChild(btnOpen);
            actions.appendChild(btnDelete);

            card.appendChild(title);
            card.appendChild(meta);
            card.appendChild(badge);
            card.appendChild(actions);

            listEl.appendChild(card);
        });
}

function createNewLessonTemplate() {
    const newId = "lesson_" + Date.now();
    lessons[newId] = {
        meta: {
            level: "Beginner",
            unit: "New Unit",
            lessonTitle: "New Lesson",
        },
        overview: {
            title: "New Lesson Overview",
            description: "",
            goals: [],
        },
        vocabulary: {
            core: [],
            extra: [],
        },
        dialogue: {
            lines: [],
        },
        grammar: [],
        practice: {
            quiz: [],
            rolePlays: [],
        },
        homework: {
            instructions: "",
        },
        teacherNotes: {
            myNotes: "",
        },
    };
    saveLessonToLS(newId);
    saveLessonToCloud(newId);
    renderTeacherPicker();
    renderTeacherEditor(newId);
}



function applyTeacherSectionFilter(sectionKey) {
    const sections = $all('.teacher-editor__section[data-td-section]');
    sections.forEach((sec) => {
        const key = sec.getAttribute('data-td-section');
        sec.classList.toggle('td-hidden-section', key !== sectionKey);
    });
    localStorage.setItem("td_selected_section", sectionKey);
}

function renderTeacherEditor(lessonId, anchorCard, preselectSection) {
    const lesson = lessons[lessonId];
    const editor = $("#teacherEditor");
    if (!lesson || !editor) return;

    // نحرك الفورم تحت الكارد اللي انضغط (Teacher Dashboard)
    editor.innerHTML = "";
    if (anchorCard) {
        anchorCard.insertAdjacentElement("afterend", editor);
    } else {
        const list = $("#teacherLessonList");
        if (list) list.insertAdjacentElement("afterend", editor);
    }
    editor.style.display = "block";

    editor.innerHTML = `
     <div class="teacher-editor__section">
     
      <div class="td-editor-buttons">
        
        <button id="tdCloseEditor" class="btn btn--ghost btn--sm">Close Editor</button>
      </div>
    </div>
    <h3>Editing: ${lesson.meta.level} – ${lesson.meta.unit} – ${lesson.meta.lessonTitle}</h3>
    <p class="teacher-edit-note">
      All changes here are saved locally and will apply to all students for this lesson.
    </p>

    <div class="td-sectionbar">
      <label for="tdSectionSelect">Edit section</label>
      <select id="tdSectionSelect" class="td-select">
        <option value="meta">Lesson Meta</option>
        <option value="overview">Overview</option>
        <option value="vocab">Vocabulary</option>
        <option value="dialogue">Dialogue</option>
        <option value="grammar">Grammar</option>
        <option value="practice">Practice</option>
        <option value="homework">Homework</option>
        <option value="notes">Teacher Notes</option>
      </select>
    </div>

    <div class="teacher-editor__section" data-td-section="meta">
      <h4>Lesson Meta</h4>
      <div class="form-field form-field--inline">
        <label for="tdMetaLevel">Level</label>
        <select id="tdMetaLevel">
          <option value="Beginner">Beginner</option>
          <option value="Pre-Intermediate">Pre-Intermediate</option>
          <option value="Intermediate">Intermediate</option>
        </select>
      </div>
      <div class="form-field">
        <label for="tdMetaUnit">Unit</label>
        <input id="tdMetaUnit" class="td-input" />
      </div>
      <div class="form-field">
        <label for="tdMetaTitle">Lesson Title</label>
        <input id="tdMetaTitle" class="td-input" />
      </div>
      <p class="section-header__subtitle">Lesson ID: <span id="tdMetaId"></span></p>
      <div class="td-editor-buttons">
        <button id="tdSaveMeta" class="btn btn--primary btn--sm">Save Meta</button>
      </div>
    </div>

    <div class="teacher-editor__section" data-td-section="overview">
      <h4>Overview</h4>
      <div class="form-field">
        <label for="tdOverviewTitle">Overview Title</label>
        <input id="tdOverviewTitle" class="td-input" />
      </div>
      <div class="form-field">
        <label for="tdOverviewDesc">Description</label>
        <textarea id="tdOverviewDesc" class="homework-notes" rows="3"></textarea>
      </div>
      <div class="form-field">
        <label>Goals</label>
        <div id="tdOverviewGoalsList"></div>
        <div class="td-editor-buttons">
          <button id="tdAddGoal" class="btn btn--outline btn--sm">Add Goal</button>
          <button id="tdSaveGoals" class="btn btn--primary btn--sm">Save Goals</button>
        </div>
      </div>
    </div>

    <!-- 🆕 Vocab Section -->
    <div class="teacher-editor__section" data-td-section="vocab">
      <h4>Vocabulary</h4>
      <p class="teacher-edit-note">
        Edit core and extra vocabulary for this lesson. These words تظهر في تبويب Vocabulary و Quick Review.
      </p>

      <h5>Core Vocabulary</h5>
      <div id="tdVocabCoreList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddVocabCore" class="btn btn--outline btn--sm">Add Core Word</button>
        <button id="tdSaveVocabCore" class="btn btn--primary btn--sm">Save Core</button>
      </div>

      <h5 style="margin-top: 10px;">Extra Vocabulary</h5>
      <div id="tdVocabExtraList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddVocabExtra" class="btn btn--outline btn--sm">Add Extra Word</button>
        <button id="tdSaveVocabExtra" class="btn btn--primary btn--sm">Save Extra</button>
      </div>
    </div>

    <div class="teacher-editor__section" data-td-section="dialogue">
      <h4>Dialogue</h4>
      <p class="teacher-edit-note">Edit each line: speaker, Arabic (RTL) and English.</p>
      <div id="tdDialogueList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddDialogueLine" class="btn btn--outline btn--sm">Add Line</button>
        <button id="tdSaveDialogue" class="btn btn--primary btn--sm">Save Dialogue</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Grammar Points</h4>
      <p class="teacher-edit-note">Short rules with descriptions.</p>
      <div id="tdGrammarList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddGrammar" class="btn btn--outline btn--sm">Add Rule</button>
        <button id="tdSaveGrammar" class="btn btn--primary btn--sm">Save Grammar</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Practice – MCQ</h4>
      <p class="teacher-edit-note">Edit quiz questions: Arabic question and 3 English options.</p>
      <div id="tdQuizList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddQuiz" class="btn btn--outline btn--sm">Add MCQ</button>
        <button id="tdSaveQuiz" class="btn btn--primary btn--sm">Save MCQ</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Practice – Role-play Prompts</h4>
      <p class="teacher-edit-note">Short speaking prompts for in-class practice.</p>
      <div id="tdRoleList"></div>
      <div class="td-editor-buttons">
        <button id="tdAddRole" class="btn btn--outline btn--sm">Add Prompt</button>
        <button id="tdSaveRole" class="btn btn--primary btn--sm">Save Prompts</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Homework Instructions</h4>
      <p class="teacher-edit-note">This text is shared for all students.</p>
      <textarea id="tdHomeworkText" class="homework-notes" rows="3"></textarea>
      <div class="td-editor-buttons">
        <button id="tdSaveHomework" class="btn btn--primary btn--sm">Save Homework</button>
      </div>
    </div>

    <div class="teacher-editor__section">
      <h4>Teacher Notes (Template)</h4>
      <textarea id="tdTeacherNotes" class="homework-notes" rows="3"></textarea>
      <div class="td-editor-buttons">
        <button id="tdSaveTeacherNotes" class="btn btn--primary btn--sm">Save Notes</button>
        <button id="tdCloseEditor" class="btn btn--ghost btn--sm">Close Editor</button>
      </div>
    </div>
  `;

    // Section filter: show only one editor section at a time
    const sectionSel = document.getElementById("tdSectionSelect");
    if (sectionSel) {
        const saved = localStorage.getItem("td_selected_section") || "meta";
        sectionSel.value = saved;
        applyTeacherSectionFilter(sectionSel.value);
        sectionSel.addEventListener("change", () => applyTeacherSectionFilter(sectionSel.value));
    } else {
        // if no selector, show all
        $all('.teacher-editor__section[data-td-section]').forEach((sec) => sec.classList.remove('td-hidden-section'));
    }


    // ========== Meta ==========
    $("#tdMetaLevel").value = lesson.meta.level;
    $("#tdMetaUnit").value = lesson.meta.unit;
    $("#tdMetaTitle").value = lesson.meta.lessonTitle;
    $("#tdMetaId").textContent = lessonId;

    $("#tdSaveMeta").addEventListener("click", () => {
        lesson.meta.level = $("#tdMetaLevel").value;
        lesson.meta.unit = $("#tdMetaUnit").value.trim() || "Unit";
        lesson.meta.lessonTitle = $("#tdMetaTitle").value.trim() || "Lesson";
        saveLessonToLS(lessonId);
        renderTeacherPicker();
        alert("Lesson meta saved.");
    });

    // ========== Overview ==========
    $("#tdOverviewTitle").value = lesson.overview.title || "";
    $("#tdOverviewDesc").value = lesson.overview.description || "";

    const goalsListEl = $("#tdOverviewGoalsList");
    function renderGoals() {
        goalsListEl.innerHTML = "";
        (lesson.overview.goals || []).forEach((g) => {
            const row = document.createElement("div");
            row.className = "td-role-row";
            const inp = document.createElement("input");
            inp.className = "td-input td-role-input";
            inp.value = g;
            const delBtn = document.createElement("button");
            delBtn.type = "button";
            delBtn.className = "btn btn--ghost btn--sm";
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", () => row.remove());
            row.appendChild(inp);
            row.appendChild(delBtn);
            goalsListEl.appendChild(row);
        });
    }
    renderGoals();

    $("#tdAddGoal").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.placeholder = "New goal...";
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        goalsListEl.appendChild(row);
    });

    $("#tdSaveGoals").addEventListener("click", () => {
        const rows = goalsListEl.querySelectorAll(".td-role-row");
        const newGoals = [];
        rows.forEach((r) => {
            const val = r.querySelector("input").value.trim();
            if (val) newGoals.push(val);
        });
        lesson.overview.title = $("#tdOverviewTitle").value.trim() || lesson.overview.title;
        lesson.overview.description =
            $("#tdOverviewDesc").value.trim() || lesson.overview.description;
        lesson.overview.goals = newGoals;
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Overview saved.");
    });

    // ========== 🆕 Vocabulary ==========

    const vocabCoreList = $("#tdVocabCoreList");
    const vocabExtraList = $("#tdVocabExtraList");


    function createVocabRow(item = {}, isCore = true) {
        const row = document.createElement("div");
        row.className = "td-quiz-row";
        row.dataset.itemId = item.id || "";

        row.innerHTML = `
          <div class="td-label">Arabic (with vowels)</div>
          <input class="td-input td-input--ar td-vocab-ar" value="${item.ar || ""}" />

          <div class="td-label">English meaning</div>
          <input class="td-input td-vocab-en" value="${item.en || ""}" />

          <div class="td-label">Hint (optional)</div>
          <input class="td-input td-vocab-hint" value="${item.hint || ""}" />

          <div class="td-label">Arabic example (optional)</div>
          <textarea class="td-input td-input--ar td-vocab-ex-ar" rows="2">${item.exampleAr || ""}</textarea>

          <div class="td-label">English example (optional)</div>
          <textarea class="td-input td-vocab-ex-en" rows="2">${item.exampleEn || ""}</textarea>
        `;

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(delBtn);

        return row;
    }

    function renderVocabGroup(listEl, items) {
        listEl.innerHTML = "";
        (items || []).forEach((item) => {
            listEl.appendChild(createVocabRow(item));
        });
    }

    renderVocabGroup(vocabCoreList, lesson.vocabulary.core || []);
    renderVocabGroup(vocabExtraList, lesson.vocabulary.extra || []);

    $("#tdAddVocabCore").addEventListener("click", () => {
        vocabCoreList.appendChild(createVocabRow({}, true));
    });

    $("#tdAddVocabExtra").addEventListener("click", () => {
        vocabExtraList.appendChild(createVocabRow({}, false));
    });

    function collectVocabFrom(listEl, isCore) {
        const rows = listEl.querySelectorAll(".td-quiz-row");
        const result = [];
        rows.forEach((row) => {
            const ar = row.querySelector(".td-vocab-ar").value.trim();
            const en = row.querySelector(".td-vocab-en").value.trim();
            const hint = row.querySelector(".td-vocab-hint").value.trim();
            const exampleAr = row.querySelector(".td-vocab-ex-ar").value.trim();
            const exampleEn = row.querySelector(".td-vocab-ex-en").value.trim();
            if (!ar || !en) return;
            let id = row.dataset.itemId;
            if (!id) {
                id = (isCore ? "core_" : "extra_") + Date.now() + "_" + Math.random().toString(16).slice(2);
            }
            result.push({ id, ar, en, hint, exampleAr, exampleEn });
        });
        return result;
    }

    $("#tdSaveVocabCore").addEventListener("click", () => {
        lesson.vocabulary.core = collectVocabFrom(vocabCoreList, true);
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Core vocabulary saved.");
    });

    $("#tdSaveVocabExtra").addEventListener("click", () => {
        lesson.vocabulary.extra = collectVocabFrom(vocabExtraList, false);
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Extra vocabulary saved.");
    });

    // ========== Dialogue ==========
    const dlgList = $("#tdDialogueList");
    dlgList.innerHTML = "";
    lesson.dialogue.lines.forEach((line) => {
        const row = document.createElement("div");
        row.className = "td-row td-dialogue-row";
        row.innerHTML = `
      <input class="td-input td-input--small td-speaker" value="${line.speaker || ""}" />
      <input class="td-input td-input--ar td-ar" value="${line.ar || ""}" />
      <input class="td-input td-input--en td-en" value="${line.en || ""}" />
      <button type="button" class="btn btn--ghost btn--sm td-delete">Delete</button>
    `;
        row.querySelector(".td-delete").addEventListener("click", () => row.remove());
        dlgList.appendChild(row);
    });

    $("#tdAddDialogueLine").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-row td-dialogue-row";
        row.innerHTML = `
      <input class="td-input td-input--small td-speaker" value="A" />
      <input class="td-input td-input--ar td-ar" value="" placeholder="Arabic line" />
      <input class="td-input td-input--en td-en" value="" placeholder="English line" />
      <button type="button" class="btn btn--ghost btn--sm td-delete">Delete</button>
    `;
        row.querySelector(".td-delete").addEventListener("click", () => row.remove());
        dlgList.appendChild(row);
    });

    $("#tdSaveDialogue").addEventListener("click", () => {
        const rows = dlgList.querySelectorAll(".td-dialogue-row");
        const newLines = [];
        rows.forEach((r) => {
            const speaker = r.querySelector(".td-speaker").value.trim() || "A";
            const ar = r.querySelector(".td-ar").value.trim();
            const en = r.querySelector(".td-en").value.trim();
            if (ar) newLines.push({ speaker, ar, en });
        });
        lesson.dialogue.lines = newLines;
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Dialogue saved.");
    });

    // ========== Grammar ==========
    const grammarList = $("#tdGrammarList");
    function renderGrammarRows() {
        grammarList.innerHTML = "";
        (lesson.grammar || []).forEach((g) => {
            const row = document.createElement("div");
            row.className = "td-quiz-row";
            row.innerHTML = `
        <div class="td-label">Rule title</div>
        <input class="td-input td-grammar-title" value="${g.title || ""}" />
        <div class="td-label">Description</div>
        <textarea class="td-input td-grammar-desc" rows="2">${g.description || ""}</textarea>
      `;
            const delBtn = document.createElement("button");
            delBtn.type = "button";
            delBtn.className = "btn btn--ghost btn--sm";
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", () => row.remove());
            row.appendChild(delBtn);
            grammarList.appendChild(row);
        });
    }
    renderGrammarRows();

    $("#tdAddGrammar").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";
        row.innerHTML = `
      <div class="td-label">Rule title</div>
      <input class="td-input td-grammar-title" placeholder="Rule title" />
      <div class="td-label">Description</div>
      <textarea class="td-input td-grammar-desc" rows="2" placeholder="Description / example"></textarea>
    `;
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(delBtn);
        grammarList.appendChild(row);
    });

    $("#tdSaveGrammar").addEventListener("click", () => {
        const rows = grammarList.querySelectorAll(".td-quiz-row");
        const newGrammar = [];
        rows.forEach((r) => {
            const title = r.querySelector(".td-grammar-title").value.trim();
            const desc = r.querySelector(".td-grammar-desc").value.trim();
            if (title) newGrammar.push({ id: "g_" + Date.now() + Math.random(), title, description: desc });
        });
        lesson.grammar = newGrammar;
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Grammar saved.");
    });

    // ========== Quiz ==========
    const quizList = $("#tdQuizList");
    quizList.innerHTML = "";
    lesson.practice.quiz.forEach((q) => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";

        const qLabel = document.createElement("div");
        qLabel.className = "td-label";
        qLabel.textContent = "Question (Arabic)";

        const qInput = document.createElement("textarea");
        qInput.className = "td-input td-input--ar td-quiz-question";
        qInput.rows = 2;
        qInput.value = q.questionAr || "";

        const optLabel = document.createElement("div");
        optLabel.className = "td-label";
        optLabel.textContent = "Options (English)";

        const optGrid = document.createElement("div");
        optGrid.className = "td-quiz-grid";

        const optInputs = [];
        for (let i = 0; i < 3; i++) {
            const inp = document.createElement("input");
            inp.className = "td-input";
            inp.value = q.optionsEn[i] || "";
            optGrid.appendChild(inp);
            optInputs.push(inp);
        }

        const correctWrap = document.createElement("div");
        correctWrap.style.marginTop = "4px";
        correctWrap.style.display = "flex";
        correctWrap.style.justifyContent = "space-between";
        correctWrap.style.alignItems = "center";

        const sel = document.createElement("select");
        sel.className = "td-select";
        ["Option 1", "Option 2", "Option 3"].forEach((lab, idx) => {
            const op = document.createElement("option");
            op.value = String(idx);
            op.textContent = lab;
            sel.appendChild(op);
        });
        sel.value = String(q.correctIndex || 0);

        const selLabel = document.createElement("span");
        selLabel.className = "td-label";
        selLabel.textContent = "Correct option:";

        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.flexDirection = "column";
        left.style.gap = "2px";
        left.appendChild(selLabel);
        left.appendChild(sel);

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());

        correctWrap.appendChild(left);
        correctWrap.appendChild(delBtn);

        row.appendChild(qLabel);
        row.appendChild(qInput);
        row.appendChild(optLabel);
        row.appendChild(optGrid);
        row.appendChild(correctWrap);

        quizList.appendChild(row);
    });

    $("#tdAddQuiz").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-quiz-row";

        row.innerHTML = `
      <div class="td-label">Question (Arabic)</div>
      <textarea class="td-input td-input--ar td-quiz-question" rows="2" placeholder="السؤال بالعربي"></textarea>
      <div class="td-label">Options (English)</div>
      <div class="td-quiz-grid">
        <input class="td-input" placeholder="Option 1" />
        <input class="td-input" placeholder="Option 2" />
        <input class="td-input" placeholder="Option 3" />
      </div>
    `;

        const correctWrap = document.createElement("div");
        correctWrap.style.marginTop = "4px";
        correctWrap.style.display = "flex";
        correctWrap.style.justifyContent = "space-between";
        correctWrap.style.alignItems = "center";

        const selLabel = document.createElement("span");
        selLabel.className = "td-label";
        selLabel.textContent = "Correct option:";

        const sel = document.createElement("select");
        sel.className = "td-select";
        ["Option 1", "Option 2", "Option 3"].forEach((lab, idx) => {
            const op = document.createElement("option");
            op.value = String(idx);
            op.textContent = lab;
            sel.appendChild(op);
        });

        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.flexDirection = "column";
        left.style.gap = "2px";
        left.appendChild(selLabel);
        left.appendChild(sel);

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());

        correctWrap.appendChild(left);
        correctWrap.appendChild(delBtn);

        row.appendChild(correctWrap);
        quizList.appendChild(row);
    });

    $("#tdSaveQuiz").addEventListener("click", () => {
        const rows = quizList.querySelectorAll(".td-quiz-row");
        const newQuiz = [];
        rows.forEach((row) => {
            const qInput = row.querySelector(".td-quiz-question");
            const questionAr = qInput.value.trim();
            if (!questionAr) return;
            const opts = Array.from(row.querySelectorAll(".td-quiz-grid .td-input")).map((i) =>
                i.value.trim()
            );
            if (!opts[0] || !opts[1] || !opts[2]) return;
            const sel = row.querySelector(".td-select");
            const correctIndex = Number(sel.value) || 0;
            newQuiz.push({
                id: "q_" + Date.now() + "_" + Math.random().toString(16).slice(2),
                questionAr,
                optionsEn: opts,
                correctIndex,
            });
        });
        lesson.practice.quiz = newQuiz;
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("MCQ saved.");
    });

    // ========== Role-play ==========
    const roleList = $("#tdRoleList");
    roleList.innerHTML = "";
    lesson.practice.rolePlays.forEach((rp) => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.value = rp;
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        roleList.appendChild(row);
    });

    $("#tdAddRole").addEventListener("click", () => {
        const row = document.createElement("div");
        row.className = "td-role-row";
        const inp = document.createElement("input");
        inp.className = "td-input td-role-input";
        inp.placeholder = "New speaking prompt...";
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn btn--ghost btn--sm";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => row.remove());
        row.appendChild(inp);
        row.appendChild(delBtn);
        roleList.appendChild(row);
    });

    $("#tdSaveRole").addEventListener("click", () => {
        const rows = roleList.querySelectorAll(".td-role-row");
        const newPrompts = [];
        rows.forEach((r) => {
            const txt = r.querySelector("input").value.trim();
            if (txt) newPrompts.push(txt);
        });
        lesson.practice.rolePlays = newPrompts;
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Role-play prompts saved.");
    });

    // ========== Homework ==========
    $("#tdHomeworkText").value = lesson.homework.instructions || "";
    $("#tdSaveHomework").addEventListener("click", () => {
        lesson.homework.instructions = $("#tdHomeworkText").value.trim();
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Homework instructions saved.");
    });

    // ========== Teacher Notes ==========
    $("#tdTeacherNotes").value = lesson.teacherNotes.myNotes || "";
    $("#tdSaveTeacherNotes").addEventListener("click", () => {
        lesson.teacherNotes.myNotes = $("#tdTeacherNotes").value.trim();
        saveLessonToLS(lessonId);
        // also sync online (shared)
        saveLessonToCloud(lessonId);
        alert("Teacher notes saved.");
    });

    $("#tdCloseEditor").addEventListener("click", () => {
        editor.style.display = "none";
        editor.innerHTML = "";
    });
}
// ================= AUTH MODAL HELPERS =================
function openAuthModal(forcedRole) {
    document.body.classList.remove("home-only");
    console.log("openAuthModal called with role:", forcedRole);
    const modal = document.getElementById("authModal");
    const roleSelect = document.getElementById("authRole");
    const errorBox = document.getElementById("authError");

    if (!modal) return;

    // مسح أي خطأ قديم
    if (errorBox) errorBox.textContent = "";

    // لو جاي من زر "أنا طالب" أو "أنا مدرس"
    if (forcedRole === "student" || forcedRole === "teacher") {
        modal.dataset.forcedRole = forcedRole;
        if (roleSelect) roleSelect.value = forcedRole;
    } else {
        // لو جاي من زر Login العادي
        delete modal.dataset.forcedRole;
    }

    modal.classList.add("modal--open");
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (!modal) return;
    modal.classList.remove("modal--open");
    delete modal.dataset.forcedRole;
}

// ========================= DOM READY =========================
document.addEventListener("DOMContentLoaded", () => {
    loadLessonDataFromLS();
    loadCustomUnits();
    loadFontSize();
    appState.students = loadStudentsFromLS();
    loadBackupSettings();

    // top nav
    $all(".top-nav__link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.nav;
            if (target === "home-screen") goToHome();
            else if (target === "students-screen") goToStudents();
            else if (target === "levels-screen") goToLevels();
            else if (target === "teacher-dashboard-screen") goToTeacherDashboard();
        });
    });

    // hero buttons
    // ===== HERO BUTTONS (أنا طالب / أنا مدرس) =====
    const btnHeroStudent = document.getElementById("btnHeroStudent");
    const btnHeroTeacher = document.getElementById("btnHeroTeacher");

    if (btnHeroStudent) {
        btnHeroStudent.addEventListener("click", () => {
            // الطالب → نفتح مودال تسجيل الدخول كـ STUDENT
            console.log("Student hero clicked");
            openAuthModal("student");
        });
    }

    if (btnHeroTeacher) {
        btnHeroTeacher.addEventListener("click", () => {
            // المدرّس → نفتح مودال تسجيل الدخول كـ TEACHER
            console.log("Teacher hero clicked");
            openAuthModal("teacher");
        });
    }

    // add student
    $("#addStudentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#studentName").value.trim();
        const level = $("#studentLevel").value;
        if (!name) return;

        const goalCheckboxes = document.querySelectorAll('input[name="goalOption"]:checked');
        const goals = Array.from(goalCheckboxes).map((c) => c.value);

        const student = {
            id: "s_" + Date.now(),
            name,
            goals,
            level,
            progress: {},
            homeworkNotes: {},
        };
        appState.students.push(student);
        saveStudentsToLS();
        $("#studentName").value = "";
        goalCheckboxes.forEach((c) => (c.checked = false));
        $("#studentLevel").value = "Beginner";
        renderStudents();
    });
    // ================= WHITEBOARD UI =================
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    const btnToggleWhiteboard = document.getElementById("btnToggleWhiteboard");
    const wbColorInput = document.getElementById("whiteboardColor");
    const wbSizeInput = document.getElementById("whiteboardSize");
    const wbSizeVal = document.getElementById("whiteboardSizeVal");
    const wbClearBtn = document.getElementById("whiteboardClear");
    const wbDownloadBtn = document.getElementById("whiteboardDownload");

    if (btnToggleWhiteboard && whiteboardPanel) {
        btnToggleWhiteboard.addEventListener("click", () => {
            const isHidden = whiteboardPanel.classList.contains("hidden");
            if (isHidden) {
                whiteboardPanel.classList.remove("hidden");
                // لما أفتح اللوحة، أهيّئ الكانفاس وأحمّل الرسمة
                initWhiteboardCanvas();
            } else {
                whiteboardPanel.classList.add("hidden");
            }
        });
    }

    if (wbColorInput) {
        wbColorInput.addEventListener("input", () => {
            whiteboardState.color = wbColorInput.value;
        });
    }

    if (wbSizeInput && wbSizeVal) {
        wbSizeInput.addEventListener("input", () => {
            const v = Number(wbSizeInput.value) || 3;
            whiteboardState.size = v;
            wbSizeVal.textContent = v + "px";
        });
        // قيمة ابتدائية
        whiteboardState.size = Number(wbSizeInput.value) || 3;
        wbSizeVal.textContent = whiteboardState.size + "px";
    }

    if (wbClearBtn) {
        wbClearBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas || !whiteboardState.ctx) return;
            if (!confirm("Clear this whiteboard for the current lesson?")) return;
            whiteboardState.ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveWhiteboardToLS();
        });
    }

    if (wbDownloadBtn) {
        wbDownloadBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas) return;
            const link = document.createElement("a");
            const lesson = lessons[appState.currentLessonId];
            const title = lesson ? lesson.meta.lessonTitle || "lesson" : "lesson";
            link.download = `whiteboard_${title.replace(/\s+/g, "_")}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    const btnExportLesson = document.getElementById("btnExportLessonPdf");
    if (btnExportLesson) {
        btnExportLesson.addEventListener("click", () => {
            const student = getCurrentStudent();
            const studentName = student ? student.name : "";
            const lessonId = appState.currentLessonId;
            if (!lessonId) {
                alert("No lesson selected.");
                return;
            }
            openExportModal("lesson-view", lessonId, studentName);
        });
    }
    const exportForm = document.getElementById("exportOptionsForm");
    if (exportForm) {
        exportForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const modal = document.getElementById("exportModal");
            const lessonId = exportContext.lessonId;
            const lesson = lessons[lessonId];
            if (!lesson) {
                alert("Lesson not found.");
                return;
            }

            const includeVocab = document.getElementById("expIncludeVocab").checked;
            const includeDialogue = document.getElementById("expIncludeDialogue").checked;
            const includeGrammar = document.getElementById("expIncludeGrammar").checked;
            const includeHomework = document.getElementById("expIncludeHomework").checked;
            let includeTeacherNotes =
                document.getElementById("expIncludeTeacherNotes").checked;

            const versionInput = exportForm.querySelector(
                'input[name="expVersion"]:checked'
            );
            const version = versionInput ? versionInput.value : "student";

            if (version === "student") {
                // مهما كان checkbox تبع Teacher Notes، نخفيه في Student version
                includeTeacherNotes = false;
            }

            const html = buildLessonExportHtml(lesson, {
                includeVocab,
                includeDialogue,
                includeGrammar,
                includeHomework,
                includeTeacherNotes,
                version,
                studentName: exportContext.studentName,
            });

            closeExportModal();
            openPrintWindow(html);
        });
    }
    // Backup buttons in Teacher Dashboard
    const btnExportBackup = document.getElementById("btnExportBackup");
    const btnImportBackup = document.getElementById("btnImportBackup");
    const backupFileInput = document.getElementById("backupFileInput");
    const backupFrequencySelect = document.getElementById("backupFrequencySelect");
    const backupLastInfo = document.getElementById("backupLastInfo");

    if (backupFrequencySelect) {
        backupFrequencySelect.value = backupSettings.frequency || "off";
        backupFrequencySelect.addEventListener("change", () => {
            backupSettings.frequency = backupFrequencySelect.value;
            saveBackupSettings();
            checkBackupReminder();
        });
    }

    if (backupLastInfo && backupSettings.lastBackupAt) {
        const last = new Date(backupSettings.lastBackupAt);
        backupLastInfo.textContent =
            "Last backup: " +
            last.toLocaleString() +
            "  |  Frequency: " +
            backupSettings.frequency;
    }

    if (btnExportBackup) {
        btnExportBackup.addEventListener("click", () => {
            handleExportBackup();
        });
    }

    if (btnImportBackup && backupFileInput) {
        btnImportBackup.addEventListener("click", () => {
            backupFileInput.click();
        });

        backupFileInput.addEventListener("change", () => {
            const file = backupFileInput.files[0];
            if (file) {
                handleImportBackupFile(file);
                backupFileInput.value = "";
            }
        });
    }

    // تشيك التذكير بعد ما نحمّل الإعدادات
    checkBackupReminder();

    // أزرار إغلاق المودال
    document
        .querySelectorAll("[data-close-export-modal], #exportCancelBtn")
        .forEach((el) => {
            el.addEventListener("click", () => closeExportModal());
        });

    // level & teacher buttons
    $("#btnSwitchProfile").addEventListener("click", () => {
        appState.currentStudentId = null;
        goToStudents();
    });
    $("#btnGoTeacherDashboard").addEventListener("click", () => {
        goToTeacherDashboard();
    });
    $("#btnBackToLevels").addEventListener("click", () => goToLevels());
    $("#btnBackToStudents").addEventListener("click", () => goToStudents());
    $("#btnTDBackLevels").addEventListener("click", () => goToLevels());
    $("#btnTDBackStudents").addEventListener("click", () => goToStudents());
    // ================= VOCAB MODAL CONTROLS =================
    const btnPrev = document.getElementById("vocabPrevBtn");
    const btnNext = document.getElementById("vocabNextBtn");
    const btnToggleExamples = document.getElementById("vocabToggleExamplesBtn");
    const btnToggleAr = document.getElementById("vocabToggleArBtn");
    const btnToggleEn = document.getElementById("vocabToggleEnBtn");
    const btnToggleArabeezy = document.getElementById("vocabToggleArabeezyBtn");
    function checkIfVocabDone() {
        if (!currentLesson || !currentLesson.vocabulary) return;

        const allVocab = [
            ...(currentLesson.vocabulary.core || []),
            ...(currentLesson.vocabulary.extra || []),
        ];

        const visited = ensureVocabVisitedSet();
        const allSeen = allVocab.every((v) => visited.has(v.id));

        if (allSeen) {
            // لما يمرّ على كل الكلمات مرة واحدة على الأقل
            markLessonSectionDone("vocabulary");
            updateLessonProgressUI();
        }
    }
    function updateLessonProgressUI() {
        // حدّث شريط التقدم
        updateProgressBar();

        // حدّث بادج قسم المفردات فقط
        updateSectionStatusBadge("vocabulary");
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;
            vocabModalState.index =
                (vocabModalState.index - 1 + vocabModalState.list.length) %
                vocabModalState.list.length;
            vocabModalState.showExamples = true; // نرجّع الأمثلة ظاهرة عند الانتقال
            renderVocabModalFromState();
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;

            vocabModalState.index =
                (vocabModalState.index + 1) % vocabModalState.list.length;

            renderVocabModalFromState();
        });
    }


    if (btnToggleExamples) {
        btnToggleExamples.addEventListener("click", () => {
            vocabModalState.showExamples = !vocabModalState.showExamples;
            renderVocabModalFromState();
        });
    }
    if (btnToggleAr) {
        btnToggleAr.addEventListener("click", () => {
            vocabModalState.showAr = !vocabModalState.showAr;
            renderVocabModalFromState();
        });
    }

    if (btnToggleEn) {
        btnToggleEn.addEventListener("click", () => {
            vocabModalState.showEn = !vocabModalState.showEn;
            renderVocabModalFromState();
        });
    }

    if (btnToggleArabeezy) {
        btnToggleArabeezy.addEventListener("click", () => {
            vocabModalState.showArabeezy = !vocabModalState.showArabeezy;
            renderVocabModalFromState();
        });
    }
    document.getElementById("btnLogin").addEventListener("click", openAuthModal);
    document
        .querySelectorAll("[data-close-auth]")
        .forEach((el) => el.addEventListener("click", closeAuthModal));

    document.getElementById("btnLogout").addEventListener("click", () => {
        auth.signOut();
    });

    document.getElementById("authForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("authEmail").value.trim();
        const password = document.getElementById("authPassword").value;
        const roleSelect = document.getElementById("authRole");
        const modal = document.getElementById("authModal");
        const errorBox = document.getElementById("authError");

        if (errorBox) errorBox.textContent = "";

        // الدور المقصود: لو جاي من زر Student / Teacher في الهيرو
        let role = roleSelect ? roleSelect.value : "student";
        if (modal && modal.dataset.forcedRole) {
            role = modal.dataset.forcedRole; // student أو teacher
        }

        try {
            let cred;

            if (role === "teacher") {
                // المدرّس: sign in ثم sign up لو مش موجود
                try {
                    cred = await auth.signInWithEmailAndPassword(email, password);
                } catch (err) {
                    if (err.code === "auth/user-not-found") {
                        // أول مرة → ننشئ حساب مدرس
                        cred = await auth.createUserWithEmailAndPassword(email, password);
                        await db.collection("users").doc(cred.user.uid).set({
                            email,
                            role: "teacher",
                            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        });
                    } else {
                        throw err;
                    }
                }
            } else {
                // الطالب: فقط تسجيل دخول بحساب جاهز
                try {
                    cred = await auth.signInWithEmailAndPassword(email, password);
                } catch (err) {
                    if (err.code === "auth/user-not-found") {
                        if (errorBox) {
                            errorBox.textContent =
                                "لا يوجد حساب بهذا الإيميل. تواصلي مع المدرّس ليعمل لك حساب.";
                        } else {
                            alert("لا يوجد حساب بهذا الإيميل. اسألي المدرس يعمل لك حساب.");
                        }
                        return;
                    }
                    throw err;
                }
            }

            // نقرأ بيانات المستخدم من Firestore
            const userDoc = await db.collection("users").doc(cred.user.uid).get();
            const data = userDoc.data() || {};

            const finalRole = data.role || role || "student";

            appState.currentUser = {
                uid: cred.user.uid,
                email: cred.user.email,
                role: finalRole,
            };

            // خزّن الدور محلياً عشان نرجع له بعد الـ refresh
            try {
                localStorage.setItem(LS_USER_ROLE_KEY, finalRole);
            } catch (e) {
                console.warn("Could not save role to localStorage", e);
            }

            closeAuthModal();
            updateAuthUI();


            // 🔁 توجيه حسب الدور
            if (finalRole === "teacher") {
                // نزامن بيانات الطلاب من السحابة ونفتح Teacher Dashboard
                await syncTeacherStudentsFromCloud();
                renderStudents();
                renderTeacherPicker();
                goToTeacherDashboard();
            } else {
                // STUDENT:
                // نحمّل بيانات الطالب / تقدمه من السحابة (لو عندك هذه الدالة)
                await loadStudentProgressFromCloud?.();

                // نربط الطالب الحالي بـ currentStudentId
                appState.students = [
                    {
                        id: appState.currentUser.uid,
                        name: appState.currentUser.email,
                        level: "Beginner",
                        goals: [],
                        progress: {},
                        homeworkNotes: {},
                    },
                ];
                appState.currentStudentId = appState.currentUser.uid;

                // مباشرة نفتح صفحة الوحدات
                goToLevels();
            }
        } catch (err) {
            console.error("Auth error:", err);
            if (errorBox) {
                if (err.code === "auth/wrong-password" || err.code === "auth/invalid-login-credentials") {
                    errorBox.textContent = "كلمة السر غير صحيحة. حاولي مرة ثانية.";
                } else {
                    errorBox.textContent = "مشكلة في تسجيل الدخول: " + err.message;
                }
            } else {
                alert("Auth error: " + err.message);
            }
        }
    });





    // Add Unit form
    $("#addUnitForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const level = $("#addUnitLevel").value;
        const name = $("#addUnitName").value.trim();
        if (!name) return;
        if (!customUnits[level]) customUnits[level] = [];
        if (!customUnits[level].includes(name)) {
            customUnits[level].push(name);
            saveCustomUnits();
        }
        $("#addUnitName").value = "";
        renderLevels();
    });

    // Teacher dashboard actions
    $("#btnTDAddLesson").addEventListener("click", () => {
        createNewLessonTemplate();
    });

    // lesson tabs
    $all(".lesson-tab").forEach((btn) => {
        btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
    });

    // teacher mode toggle
    $("#teacherModeToggle").addEventListener("change", (e) => {
        appState.teacherMode = e.target.checked;
        updateTeacherTabsVisibility();
        setActiveTab(appState.currentTab);
    });

    // font size
    $("#btnFontSmaller").addEventListener("click", () => {
        appState.lessonFontSize = Math.max(0.85, appState.lessonFontSize - 0.05);
        applyFontSize();
        saveFontSize();
    });
    $("#btnFontLarger").addEventListener("click", () => {
        appState.lessonFontSize = Math.min(1.4, appState.lessonFontSize + 0.05);
        applyFontSize();
        saveFontSize();
    });

    // vocab modal closes
    $all("[data-close-modal]").forEach((el) =>
        el.addEventListener("click", () => closeVocabModal())
    );


    const tdSyncNowBtn = document.getElementById("tdSyncNowBtn");
    if (tdSyncNowBtn) {
        tdSyncNowBtn.addEventListener("click", async () => {
            await syncLessonsNow();
        });
    }
    // initial
    renderStudents();
    renderTeacherPicker();
    goToHome();


    const btnLoginTop = document.getElementById("btnLogin");
    if (btnLoginTop) {
        btnLoginTop.addEventListener("click", () => openAuthModal());
    }


    const createStudentForm = document.getElementById("createStudentForm");
    if (createStudentForm) {
        createStudentForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // تأكيد أن المستخدم الحالي مدرّس
            if (!appState.currentUser || appState.currentUser.role !== "teacher") {
                alert("Only teachers can create students.");
                return;
            }

            const emailEl = document.getElementById("newStudentEmail");
            const passwordEl = document.getElementById("newStudentPassword");
            const msg = document.getElementById("createStudentMsg");

            const email = emailEl.value.trim();
            const password = passwordEl.value.trim();

            if (msg) {
                msg.textContent = "";
                msg.style.color = "#111827";
            }

            if (!email || !password) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Please enter student email and a temporary password.";
                }
                return;
            }

            if (password.length < 6) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Password must be at least 6 characters.";
                }
                return;
            }

            const submitBtn = createStudentForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Creating...";
            }

            try {
                const secAuth = getSecondaryAuth();
                if (!secAuth) {
                    if (msg) {
                        msg.style.color = "#b91c1c";
                        msg.textContent = "Secondary Firebase app is not available.";
                    }
                    return;
                }

                // 🧑‍🎓 إنشاء المستخدم الجديد باستخدام الـ secondary auth
                const cred = await secAuth.createUserWithEmailAndPassword(email, password);
                const uid = cred.user.uid;

                // كتابة بيانات الطالب في Firestore
                await db.collection("users").doc(uid).set({
                    email,
                    role: "student",
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    createdBy: appState.currentUser.uid || null, // المدرّس الذي أنشأه (اختياري)
                });

                // تسجيل خروج من الـ secondary auth فقط (ما يمس جلسة المدرّس)
                await secAuth.signOut();

                // تنظيف الحقول
                emailEl.value = "";
                passwordEl.value = "";

                if (msg) {
                    msg.style.color = "#15803d";
                    msg.textContent =
                        "Student account created successfully. Share the email and password with the student.";
                }
            } catch (err) {
                console.error("Create student error:", err);
                if (msg) {
                    msg.style.color = "#b91c1c";
                    if (err.code === "auth/email-already-in-use") {
                        msg.textContent = "This email is already in use. Pick another email for the student.";
                    } else if (err.code === "auth/invalid-email") {
                        msg.textContent = "Invalid email format.";
                    } else {
                        msg.textContent = "Error: " + err.message;
                    }
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Create Student";
                }
            }
        });
    }
});


async function handleCreateStudentSubmit(e) {
    e.preventDefault();
    console.log("Create student submitted");
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        alert("Only teachers can create students.");
        return;
    }

    const emailEl = document.getElementById("newStudentEmail");
    const passwordEl = document.getElementById("newStudentPassword");
    const msg = document.getElementById("createStudentMsg");

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (msg) {
        msg.textContent = "";
        msg.style.color = "#111827";
    }

    if (!email || !password) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Please enter student email and a temporary password.";
        }
        return;
    }

    if (password.length < 6) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Password must be at least 6 characters.";
        }
        return;
    }

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Creating...";
    }

    try {
        const secAuth = getSecondaryAuth();
        if (!secAuth) {
            if (msg) {
                msg.style.color = "#b91c1c";
                msg.textContent = "Secondary Firebase app is not available.";
            }
            return;
        }

        const cred = await secAuth.createUserWithEmailAndPassword(email, password);
        const uid = cred.user.uid;

        await db.collection("users").doc(uid).set({
            email,
            role: "student",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: appState.currentUser.uid || null,
        });

        await secAuth.signOut();

        emailEl.value = "";
        passwordEl.value = "";

        if (msg) {
            msg.style.color = "#15803d";
            msg.textContent =
                "Student account created successfully. Share the email and password with the student.";
        }
    } catch (err) {
        console.error("Create student error:", err);
        if (msg) {
            msg.style.color = "#b91c1c";
            if (err.code === "auth/email-already-in-use") {
                msg.textContent = "This email is already in use. Pick another email.";
            } else if (err.code === "auth/invalid-email") {
                msg.textContent = "Invalid email format.";
            } else {
                msg.textContent = "Error: " + err.message;
            }
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Create Student";
        }
    }
}








let __toastTimer = null;
function toast(message) {
    const existing = document.getElementById("toast");
    let el = existing;
    if (!el) {
        el = document.createElement("div");
        el.id = "toast";
        el.style.position = "fixed";
        el.style.left = "50%";
        el.style.bottom = "18px";
        el.style.transform = "translateX(-50%)";
        el.style.padding = "10px 12px";
        el.style.borderRadius = "12px";
        el.style.background = "rgba(17,24,39,.92)";
        el.style.color = "white";
        el.style.fontSize = ".9rem";
        el.style.zIndex = "9999";
        el.style.maxWidth = "92vw";
        el.style.boxShadow = "0 10px 20px rgba(0,0,0,.18)";
        document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = "1";
    if (__toastTimer) clearTimeout(__toastTimer);
    __toastTimer = setTimeout(() => {
        el.style.opacity = "0";
    }, 1800);
}




// ---- Expose key functions to window for cross-module access ----
try { Object.assign(window, { saveLessonToLS, toast, renderLesson, renderLevels }); } catch (e) { }
