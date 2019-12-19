export const onInitialize = ({ state, actions, effects }, instance) => {
    const loaded = effects.storage.loadState();

    loaded.forEach(item => {
        if (item.data !== null) {
            state[item.field] = item.data;
        }
    })

    if (state.strings.length === 0) {
        actions.generateStrings();
    }

    instance.reaction(
        ({ keys }) => keys,
        keys => effects.storage.persistState('keys', keys),
        { nested: true }
    )

    instance.reaction(
        ({ currentPage }) => currentPage,
        currentPage => effects.storage.persistState('currentPage', currentPage),
        { nested: false }
    )

    instance.reaction(
        ({ chords }) => chords,
        chords => effects.storage.persistState('chords', chords),
        { nested: true }
    )

    instance.reaction(
        ({ currKey }) => currKey,
        currKey => effects.storage.persistState('currKey', currKey),
        { nested: false }
    )

    instance.reaction(
        ({ numStrings }) => numStrings,
        numStrings => effects.storage.persistState('numStrings', numStrings),
        { nested: false }
    )

    instance.reaction(
        ({ showFlats }) => showFlats,
        showFlats => effects.storage.persistState('showFlats', showFlats),
        { nested: false }
    )

    instance.reaction(
        ({ showSharps }) => showSharps,
        showSharps => effects.storage.persistState('showSharps', showSharps),
        { nested: false }
    )

    instance.reaction(
        ({ offset }) => offset,
        offset => effects.storage.persistState('offset', offset),
        { nested: false }
    )

    instance.reaction(
        ({ strings }) => strings,
        strings => effects.storage.persistState('strings', strings),
        { nested: true }
    )
}