import React from 'react';
import GuitarDisplay from '../components/GuitarDisplay'
import styled from 'styled-components';

const ChordChart = props => {
    const { className } = props;
    return (
        <div className={ className }>
            <GuitarDisplay />
        </div>
    );
};

const StyledChordChart = styled(ChordChart)`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export default StyledChordChart;