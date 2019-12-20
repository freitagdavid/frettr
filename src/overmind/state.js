import { notes } from "../data/notes"

export const state = {
    noteInfo: notes,
    currKey: "E Standard",
    chords: {
    },
    keys: {
        6: {
            "E Standard": [7, 0, 5, 10, 2, 7],
            custom: [0, 0, 0, 0, 0, 0]
        }
    },
    workingKey: [0, 0, 0, 0, 0, 0],
    numStrings: 6,
    flatsEnabled: true,
    sharpsEnabled: true,
    wholeEnabled: true,
    offset: 0,
    strings: [],
    currentPage: "home"
};
