import React from 'react';
import styled from 'styled-components';
import Note from './Note'
import { useApp } from "../overmind"

const Tuner = props => {
    const { className, string } = props;
    const { state } = useApp();

    const note = state.strings[string].frets[0];

    const prevNoteColor = () => {
        return state.strings[string].frets[23].color
    }

    const nextNoteColor = () => {
        return state.strings[string].frets[0].color
    }

    const genNotes = () => {
        const out = [];
        for (let i = 0; i < state.numStrings; i++) {
            out.push(<Note note={ state.strings[i].frets[0] } prevNoteColor={ () => prevNoteColor(i) } nextNoteColor={ () => nextNoteColor(i) } />)
        }
        return out;
    }

    return (
        <div className={ className }>
            <Note string={ string } fret={ 0 } prevNoteColor={ prevNoteColor } nextNoteColor={ nextNoteColor } note={ note } />
        </div>
    )
};

const StyledTuner = styled(Tuner)`
    display: flex;
`

export default StyledTuner;