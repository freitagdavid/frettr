import shortid from 'shortid'
import { memoize } from "../helpers/memoize"
import { notes } from "../data/notes"
import { action } from 'overmind'
// export const increaseTuning = ({ state }, string) => {
//     if (state.currTuning !== "custom") {
//         state.currTuning = "custom"
//     }
//     if (state.tunings["custom"].notes[string] < 11) {
//         state.tunings["custom"].notes[string]++
//     } else {
//         state.tunings["custom"].notes[string] = 0;
//     }
// }

// export const decreaseTuning = ({ state }, string) => {
//     if (state.currTuning !== "custom") {
//         state.currTuning = "custom"
//     }
//     if (state.tunings["custom"].notes[string] > 0) {
//         state.tunings["custom"].notes[string]--
//     } else {
//         state.tunings["custom"].notes[string] = 11;
//     }
// }

// export const toggleHighlight = ({ state }, payload) => {
//     const [string, fret] = payload;
//     state.strings[string].frets[fret].highlighted = state.strings[string].frets[fret].highlighted ? false : true
// }

// export const togglePrimary = ({ state }) => {
//     state.showPrimary = !state.showPrimary;
// }

// export const toggleSecondary = ({ state }) => {
//     state.showSecondary = !state.showSecondary;
// }

// export const setCurrTuning = ({ state }, e) => {
//     state.tunings['custom'] = { ...state.tunings['E Standard'] };
//     state.currTuning = e.target.value;
// }

// export const generateFrets = ({ state }) => {
//     const { numStrings, tunings, currTuning, notes } = state;
//     const strings = []
//     const out = Array(numStrings).map((item, string) => {
//         return Array(12).map((item, fret) => {
//             return {
//                 ...notes[(tunings[currTuning].notes[string] + fret + 1) % 12],
//                 index: (tunings[currTuning].notes[string] + fret + 1) % 12,
//                 highlighted: false
//             }
//         })
//     })
//     console.log(out);
//     state.strings = out;
//     // return out;
// }

// export const updateFrets = ({ state }) => {
//     const { tunings, currTuning, notes } = state;
// }

export const generateStrings = ({ state, actions }) => {
    const { keys, currKey, noteInfo, numStrings } = state
    const out = [];
    for (let i = 0; i < state.numStrings; i++) {
        out[i] = { get frets() { return actions.getFrets(i) } }
    }
    state.strings = out;
}

export const getNoteInfo = ({ state }, noteId) => {
    return state.noteInfo[noteId];
}

export const getFrets = ({ state, actions }, string) => {
    const { keys, currKey, numStrings } = state;
    const frets = [];
    for (let i = 0; i < 24; i++) {
        frets.push(
            {
                get noteInfo() { return state.noteInfo[(keys[numStrings][currKey][string] + i) % 12] },
                highlighted: false,
                overRideColor: null,
                get color() { return this.overRideColor !== null ? this.overRideColor : state.noteInfo[this.noteInfo.id].color },
                sharpDisabled: false,
                flatDisabled: false,
                coords: [string, i]
            }
        )
    }
    return frets;
}

export const populateString = memoize(({ actions }, stringNote) => {

    const frets = [];
    for (let i = 0; i < 24; i++) {
        frets.push(
            {
                get noteInfo() { return notes[(stringNote + i) % 12] },
                highlighted: false,
                color: null,
                sharpEnabled: true,
                flatEnabled: true,
                coords: [stringNote, i]
            }
        )
    }
    return frets;
})

export const toggleHighlight = ({ state }, payload) => {
    const { string, fret } = payload;
    state.strings[string].frets[fret].highlighted = !state.strings[string].frets[fret].highlighted;
}

export const changeFretColor = ({ state }, string, fret, color) => {
    state.strings[string].frets[fret].overRideColor = color;
}

export const incrementStrings = ({ state, actions }) => {
    state.numStrings++;
    state.keys = { ...state.keys, [state.numStrings]: { ...state.keys[state.numStrings], custom: Array(state.numStrings).fill(0) } };
    state.currKey = "custom";
    state.strings.push(actions.populateString(0))
}

export const incrementOffset = ({ state }) => {
    state.offset++
}

export const decrementOffset = ({ state }) => {
    state.offset--
}

export const saveKey = ({ state }, name) => {
    state.keys[state.numStrings][name] = state.keys[state.numStrings].custom;
}

export const saveChord = ({ state }, name) => {
    state.chords[state.currKey][name] = state.chords[state.currKey].custom
}

export const changeAllNoteColor = ({ state }, color, note) => {
    state.noteInfo[note].color = color;
}

export const decrementStrings = ({ state }) => {
    state.numStrings--;
    state.keys = { ...state.keys, [state.numStrings]: { ...state.keys[state.numStrings], custom: Array(state.numStrings).fill(0) } };
    state.currKey = "custom";
    state.strings.pop();
}

export const getFret = ({ state }, payload) => {
    const { string, fret } = payload;
    return state.strings[string].frets[fret]
}

export const getPrevFret = ({ state, actions }, payload) => {
    const { string, fret } = payload;
    if (actions.getFret({ string, fret: fret - 1 })) {
        return actions.getFret({ string, fret: fret - 1 })
    }
    return actions.getFret({ string, fret: 23 });
}

export const getNextFret = ({ state, actions }, payload) => {
    const { string, fret } = payload;
    if (actions.getFret({ string, fret: fret + 1 })) {
        return actions.getFret({ string, fret: fret + 1 })
    }
    return actions.getFret({ string, fret: 0 });
}

export const increaseTuning = ({ state, actions }, payload) => {
    const { string } = payload;
    if (state.currKey !== "custom") {
        state.keys[state.numStrings].custom = [...state.keys[state.numStrings][state.currKey]];
        state.currKey = "custom";
    }

    if (state.keys[state.numStrings].custom[string] === 11) {
        state.keys[state.numStrings].custom[string] = 0;
    } else {
        state.keys[state.numStrings].custom[string]++;
    }

    actions.generateStrings();
}

export const decreaseTuning = ({ state, actions }, payload) => {
    const { string } = payload;
    if (state.currKey !== "custom") {
        state.keys[state.numStrings].custom = [...state.keys[state.numStrings][state.currKey]];
        state.currKey = "custom";
    }

    if (state.keys[state.numStrings].custom[string] === 0) {
        state.keys[state.numStrings].custom[string] = 11;
    } else {
        state.keys[state.numStrings].custom[string]--;
    }

    actions.generateStrings();
}