import React from 'react';
import styled from 'styled-components'
import String from './String'
import { useApp } from '../overmind'
import FretNumbers from './FretNumbers';

const GuitarDisplay = props => {
    const { className } = props;
    const { state } = useApp();
    const strings = () => {
        const out = [];
        for (let i = 0; i < state.numStrings; i++) {
            out.push(<String string={ i } />)
        }
        return out;
    }

    return (
        <div className={ className }>
            <div className="strings">
                { state.strings.map((item, index) => <String string={ index } />) }
                <FretNumbers />
            </div>
        </div>
    );
};

const StyledGuitarDisplay = styled(GuitarDisplay)`
            width: 80%;
            height: 60%;
            overflow: hidden;
            .strings {
                display: grid;
                width: 100%;
            }
        `

export default StyledGuitarDisplay;