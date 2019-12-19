import React from 'react';
import { useApp } from '../../overmind'
import styled from 'styled-components'
import Tuning from '../Tuning'
import shortid from 'shortid';

const Tunings = props => {
    const { className } = props;
    const { state } = useApp();

    return (
        <div className={ className }>
            { state.strings.map((item, index) => <Tuning note={ index } key={ shortid.generate() } />) }
        </div>
    );
};

const StyledTunings = styled(Tunings)`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: column;
`

export default StyledTunings;