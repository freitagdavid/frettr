import { notes } from "../data/notes"

export const state = {
    currKey: "E Standard",
    keys: {
        "E Standard": {
            strings: 6,
            notes: [7, 0, 5, 10, 2, 7]
        },
        custom: {
            strings: 6,
            notes: [7, 0, 5, 10, 2, 7]
        }
    },
    numStrings: 6,
    showFlats: true,
    showSharps: true,
    offset: 0,
    strings: [
        {
            noteId: notes.someID.noteID,
            frets: [[notes.someID]]
        }
    ],
    notes: {
        someID: {
            noteId: 0,
            color: "violet",
            sharpEnabled: true,
            flatEnabled: true,
            enabled: true,
            highlighted: true,
            highlightColor: "gold"
        }
    }
};
