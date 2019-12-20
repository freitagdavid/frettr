import React from 'react';
import { useApp } from '../overmind'
import styled from "styled-components"

const FretNumbers = props => {
    const { className } = props;
    const { state, actions } = useApp();

    const fretNumbers = () => {
        let out = [];
        for (let i = 0; i < 12; i++) {
            out.push(<><li>{ state.offset + i + 1 }</li><span /></>)
        }
        return out;
    }

    return (
        <div className={ className }>
            <div className="spacer"></div>
            <div className="numbers">
                <span className="mif-arrow-left" onClick={ () => actions.decrementOffset() } />
                <ul>
                    { fretNumbers() }
                </ul>
                <span className="mif-arrow-right" onClick={ () => actions.incrementOffset() } />
            </div>
        </div>
    );
};

const StyledFretNumbers = styled(FretNumbers)`
    display: grid;
    grid-template-columns: 8% auto;
    .numbers {
        width: 100%;
        display: flex;
        position: relative;
        & > span {
            align-self: center;
            position: absolute;
            width: 0;
        }
        .mif-arrow-left {
            left: 0%;
        }
        .mif-arrow-right {
            /* top: 25%; */
            right: 3%;
        }
        ul {
            margin: 0;
            display: grid;
            width: 100%;
            list-style: none;
            justify-content: space-between;
            grid-template-columns: repeat(24, auto);
            span {
                width: 5px;
            }
            li {
                display: flex;
                width: 56px;
                height: 56px;
                align-items: center;
                justify-content: center;
            }
        }
    }
`
export default StyledFretNumbers;