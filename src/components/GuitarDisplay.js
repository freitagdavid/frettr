import React from 'react';
import styled from 'styled-components'
import String from './String'
import { useApp } from '../overmind'

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
                { strings() }
            </div>
        </div>
    );
};

const StyledGuitarDisplay = styled(GuitarDisplay)`
            width: 80%;
            height: 60%;
            outline: red 1px solid;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            display: flex;
            .strings {
                width: 100%;
            }
        `

export default StyledGuitarDisplay;