// Tiny helper to create a placeholder branching dialogue.
export function makePlaceholderDialogue({ dialogueId, level, unit, title }) {
  return {
    meta: { level, unit, title: title || `${unit} - Decisions` },
    startNodeId: 'n1',
    nodes: {
      n1: {
        speaker: 'System',
        ar: 'هالمحادثة لسه مش جاهزة. قريباً إن شاء الله ✅',
        en: 'This branching dialogue is not ready yet. Coming soon ✅',
        choices: [],
      },
    },
  };
}
