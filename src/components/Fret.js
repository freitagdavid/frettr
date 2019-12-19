import React, { useState } from 'react';
import styled from 'styled-components'
import { useApp } from '../overmind'
import Note from './Note'

const Fret = props => {
    const { className, string, fret } = props;
    const [active, setActive] = useState("");
    const { state, actions } = useApp();
    const note = state.strings[string].frets[fret];

    const toggleActive = () => {
        setActive(active === "" ? "active" : "");
    }

    const prevNoteColor = () => {
        if (state.strings[string].frets[fret - 1]) {
            return state.strings[string].frets[fret - 1].color
        }
        return state.strings[string].frets[23].color
    }

    const nextNoteColor = () => {
        if (state.strings[string].frets[fret + 1]) {
            return state.strings[string].frets[fret + 1].color
        }
        return state.strings[string].frets[0].color
    }

    return (
        <div className={ `multi-action ${className}` }>
            <Note onClick={ () => actions.toggleHighlight({ string, fret }) } note={ note } prevNoteColor={ prevNoteColor } nextNoteColor={ nextNoteColor } />
        </div>
    );
};

const StyledFret = styled(Fret)`
    .action-button {
        position: relative;
    }

    /* margin: 0 30px; */
`

export default StyledFret;