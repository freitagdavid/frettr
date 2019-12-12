import shortid from 'shortid'
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

export const generateStrings = ({ state }) => {
    const out = [];
    for (let i = 0; i < state.numStrings; i++) {
        for (let j = 0; j < state.numStrings; j++) {

        }
    }
} 