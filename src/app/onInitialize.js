export const onInitialize = ({ state, actions, effects }, instance) => {
    const loaded = { tunings: effects.storage.loadTunings() }
    loaded.currTuning = effects.storage.loadCurrTuning();

    state.tunings = loaded.tunings !== null ? loaded.tunings : state.tunings;
    state.currTuning = loaded.currTuning !== null ? loaded.currTuning : state.currTuning;

    actions.generateFrets();

    instance.reaction(
        ({ currTuning }) => currTuning,
        currTuning => effects.storage.persistState('currTuning', currTuning),
        { nested: false }
    )

    instance.reaction(
        ({ tunings }) => tunings,
        tunings => effects.storage.persistState('tunings', tunings),
        { nested: true }
    )
}