import React from 'react';
import styled from 'styled-components';
import Note from './Note'
import { useApp } from "../overmind"

const Tuner = props => {
    const { className, string } = props;
    const { state } = useApp();

    const note = state.strings[string].frets[0];
    console.log(note)

    const prevNoteColor = () => {
        return state.strings[string].frets[23].color
    }

    const nextNoteColor = () => {
        return state.strings[string].frets[1].color
    }

    return (
        <div className={ className }>
            <Note prevNoteColor={ prevNoteColor } nextNoteColor={ nextNoteColor } note={ note } />
        </div>
    )
};

const StyledTuner = styled(Tuner)`
    display: flex;
`

export default StyledTuner;