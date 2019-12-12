import React, { useState } from 'react';
import { useApp } from '../../app/'
import Note from '../Note'
import styled from 'styled-components'

const Tuning = props => {
    const { className, note } = props;
    const [active, setActive] = useState("");
    const { state, actions } = useApp();

    return (
        <div className={ className }>
            <span className="mif-arrow-left mif-lg" onClick={ () => actions.decreaseTuning(note) }></span>
            <Note note={ state.strings[note].note } />
            <span className="mif-arrow-right mif-lg" onClick={ () => actions.increaseTuning(note) }></span>
        </div>
    );
};

const StyledTuning = styled(Tuning)`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export default StyledTuning;