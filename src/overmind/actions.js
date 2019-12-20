import { mutate, filter, pipe } from 'overmind';

export const generateStrings = ({ state, actions }) => {
    const { numStrings } = state
    const out = [];
    for (let i = 0; i < numStrings; i++) {
        out[i] = { get frets() { return actions.getFrets(i) } }
    }
    state.strings = out;
}

export const getNoteInfo = ({ state }, noteId) => {
    return state.noteInfo[noteId];
}

export const getFrets = ({ state, actions }, string) => {
    const { keys, workingKey, numStrings } = state;
    const frets = [];
    for (let i = 0; i < 25; i++) {
        frets.push(
            {
                get noteInfo() { return state.noteInfo[(workingKey[string] + i) % 12] },
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

export const toggleHighlight = ({ state }, payload) => {
    const { string, fret } = payload;
    state.strings[string].frets[fret].highlighted = !state.strings[string].frets[fret].highlighted;
}

export const changeFretColor = ({ state }, string, fret, color) => {
    state.strings[string].frets[fret].overRideColor = color;
}

export const incrementStrings = ({ state, actions }) => {
    state.numStrings++;
    state.workingKey = [...state.workingKey, 0];
    actions.createCustomKey(state.numStrings)
    state.currKey = "custom";
    state.strings = [...state.strings, { frets: actions.getFrets(state.numStrings - 1) }]
}

export const decrementStrings = ({ state, actions }) => {
    state.numStrings--;
    state.workingKey.pop();
    actions.createCustomKey(state.numStrings);
    state.currKey = "custom";
    state.strings.pop();
}

export const createCustomKey = ({ state }, strings) => {
    try {
        state.keys[strings]["custom"] = [...state.workingKey];
    } catch {
        state.keys[strings] = {};
        state.keys[strings].custom = [...state.workingKey];
    }
}

export const incrementOffset = pipe(
    filter(({ state }) => state.offset < 12),
    mutate(({ state }) => {
        state.offset += 1;
    })
)

export const decrementOffset = pipe(
    filter(({ state }) => state.offset > 0),
    mutate(({ state }) => {
        state.offset -= 1;
    })
)

export const saveKey = ({ state }, name) => {
    state.keys[state.numStrings][name] = state.keys[state.numStrings].custom;
}

export const saveChord = ({ state }, name) => {
    state.chords[state.currKey][name] = [...state.workingKey]
}

export const changeAllNoteColor = ({ state }, color, note) => {
    state.noteInfo[note].color = color;
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

    if (state.workingKey[string] === 11) {
        state.workingKey[string] = 0;
    } else {
        state.workingKey[string] += 1;
    }

    state.strings[string].frets = actions.getFrets(string);
}

export const decreaseTuning = ({ state, actions }, payload) => {
    const { string } = payload;
    if (state.currKey !== "custom") {
        state.keys[state.numStrings].custom = [...state.keys[state.numStrings][state.currKey]];
        state.currKey = "custom";
    }

    if (state.workingKey[string] === 0) {
        state.workingKey[string] = 11;
    } else {
        state.workingKey[string]--;
    }

    state.strings[string].frets = actions.getFrets(string);
}