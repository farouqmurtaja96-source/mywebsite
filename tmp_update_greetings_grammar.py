from pathlib import Path
import re
path = Path(r"c:\Users\hp\OneDrive\Desktop\backup\New folder (2) - Copy\js\lessons\beginner\greetings.js")
text = path.read_text(encoding="utf-8")
pattern = r"\n\s*grammar:\s*\[[\s\S]*?\n\s*microChecks:"
block = r"""
    grammar: [
        {
            id: "pronouns_nominal",
            title: "Pronouns (أنا، إنت، هو)",
            short: "Pronouns replace names in simple sentences.",
            description:
                `Pronouns tell us who we are talking about.\nIn spoken Palestinian Arabic, we use them directly with names, adjectives, and countries.\n\nGolden Rule:\nUse pronouns to avoid repeating a name.`,
            table: {
                title: "Independent Pronouns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["أنا", "ana", "I", "Speaker"],
                    ["إنتَ", "inta", "You (m)", "Male listener"],
                    ["إنتِ", "inti", "You (f)", "Female listener"],
                    ["هو", "howwa", "He", "Male third person"],
                    ["هي", "hiyye", "She", "Female third person"]
                ]
            },
            examples: [
                { ar: "أنا طالب", arabeezy: "ana taaleb", en: "I am a student." },
                { ar: "إنتَ منيح", arabeezy: "inta mnee7", en: "You are good. (m)" },
                { ar: "إنتِ من مصر", arabeezy: "inti min masr", en: "You are from Egypt. (f)" },
                { ar: "هو تعبان", arabeezy: "howwa ta3ban", en: "He is tired." },
                { ar: "هي فلسطينية", arabeezy: "hiyye falastiniyyeh", en: "She is Palestinian." }
            ],
            teacherNotes:
                `Spoken often drops the formal MSA feel: “هو تعبان” not “إنه متعب”.\nPronouns are used more frequently in spoken for clarity.\nMSA may use “أنا طالبٌ” with case endings; spoken drops them.\nKeep focus on pronouns + short sentences only.`,
            commonMistakes: [
                "Mixing إنتَ and إنتِ",
                "Adding a verb ‘to be’ (هو يكون تعبان)",
                "Using MSA pronunciation (أنتَ) instead of spoken إنتَ",
            ],
            functionalUse:
                "Used in greetings and introductions to identify who you are and describe yourself or others.",
        },
        {
            id: "nominal_sentence",
            title: "Nominal Sentence (no ‘to be’ in present)",
            short: "Present tense ‘to be’ is not spoken in Arabic.",
            description:
                `In Palestinian Arabic, we don’t say “am/is/are” in the present.\nWe connect a subject directly to a noun or adjective.\n\nGolden Rule:\nSubject + adjective/noun = complete sentence.`,
            table: {
                title: "Nominal Sentence Patterns",
                headers: ["Arabic", "Arabeezy", "English", "Usage Note"],
                rows: [
                    ["أنا + صفة", "ana + sifah", "I am + adjective", "Feelings"],
                    ["هو/هي + اسم", "howwa/hiyye + ism", "He/She is + noun", "Identity"],
                    ["إنتَ/إنتِ + من + بلد", "inta/inti + min + balad", "You are from + country", "Origin"],
                    ["أنا + جنسية", "ana + jinsiyyeh", "I am + nationality", "Identity"],
                ]
            },
            examples: [
                { ar: "أنا منيح", arabeezy: "ana mnee7", en: "I am fine." },
                { ar: "إنتِ تعبانة", arabeezy: "inti ta3baaneh", en: "You are tired. (f)" },
                { ar: "هو أستاذ", arabeezy: "howwa ustaz", en: "He is a teacher." },
                { ar: "هي من الأردن", arabeezy: "hiyye min el-ordon", en: "She is from Jordan." },
                { ar: "أنا فلسطيني", arabeezy: "ana falastini", en: "I am Palestinian." }
            ],
            teacherNotes:
                `MSA also drops “to be” in the present, but spoken is shorter and faster.\nIn spoken, “أنا طالب” is enough without case endings.\nAvoid over-explaining grammar terms; model sentences.\nDrill with substitutions: pronoun + adjective/noun.`,
            commonMistakes: [
                "Adding ‘am/is/are’ (أنا أكون منيح)",
                "Using full MSA endings (طالبٌ, فلسطينيٌّ)",
                "Forgetting feminine adjective endings",
            ],
            functionalUse:
                "Used for introductions, describing feelings, jobs, and nationalities in everyday speech.",
        },
    ],

    microChecks:"""
new_text, count = re.subn(pattern, "\n" + block, text, count=1)
if count != 1:
    raise SystemExit("grammar block not replaced")
path.write_text(new_text, encoding="utf-8")
print("updated grammar")
