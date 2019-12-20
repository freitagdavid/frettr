import React from 'react';
import styled from 'styled-components'
import { useApp } from "../overmind"
import Fret from './Fret';
import Tuner from './Tuner'

const String = props => {
    const { className, string } = props;
    const { state, actions } = useApp();

    const frets = () => {
        const out = [];
        for (let i = 1; i < 13; i++) {
            out.push(<><Fret string={ string } fret={ i + state.offset } /><span className="verticalLine" /></>)
        }
        return out;
    }

    return (
        <div className={ className }>
            <div className="tuner">
                <span class="mif-arrow-left" onClick={ () => actions.decreaseTuning({ string }) }></span>
                <Tuner string={ string } />
                <span class="mif-arrow-right" onClick={ () => actions.increaseTuning({ string }) }></span>
            </div>
            <div className="string">
                <span className="line" />
                <div className="frets">{ frets() }</div>
            </div>
        </div>
    );
};

const StyledString = styled(String)`

    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: 8% auto;
    .tuner {
        justify-self: center;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        span {
            display: flex;
            width: 32px;
            height: 32px;
            align-items: center;
            justify-content: center;
        }
    }
    .string {
        display: flex;
        justify-items: space-around;
        padding: 10px 0;
        width: 100%;
        .line {
            position: absolute;
            top: 48%;
            border-top: solid black 5px;
            width: 100%;
        }
        .frets {
            display: grid;
            width: 100%;
            justify-content: space-between;
            grid-template-columns: repeat(24, auto);
            .verticalLine {
                border-right: black solid 5px;
                height: 150%;
            }
        }
    }
    /* border-top: red 1px solid; */
`

export default StyledString;