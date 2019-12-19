import React, { useState } from 'react';
import styled from 'styled-components';
import { useApp } from '../overmind';


const Note = props => {
    const { className, onClick, note } = props;
    const { state } = useApp();
    const [active, setActive] = useState("");

    const toggleActive = () => {
        setActive(active === "" ? "active" : "");
    }

    const contextMenu = (e) => {
        console.log("test")
        e.preventDefault();
        toggleActive();
    }

    const button = () => {
        if (state.flatsEnabled && state.sharpsEnabled && note.noteInfo.semi) {
            return (
                <button className={ `action-button fg-white double-note ${active}` } onContextMenu={ contextMenu } onClick={ () => onClick() }>
                    <span className="primary-text">{ note.noteInfo.primary }</span>
                    <span className="secondary-text">{ note.noteInfo.secondary }</span>
                </button>
            )
        } else {
            return (
                <button
                    className={ `action-button single-note fg-white ${active}` }
                    onClick={ () => onClick() }
                    onContextMenu={ contextMenu }
                >
                    <span>{ state.wholeEnabled ? note.noteInfo.primary : note.noteInfo.secondary }</span>
                </button>)
        }
    }

    return (
        <div className={ `multi-action ${className}` }>
            { button() }
            <ul className="actions drop-right" onClick={ onclick }>
                <li className="bg-blue">
                    <span className="mif-palette" />
                </li>
            </ul>
        </div >
    );
};

const StyledNote = styled(Note)`
    
    .active + ul {
        width: fit-content;
        z-index: 3;
    }
    span {
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 0.5px;
        font-size: 1.1rem;
    }
    button {
        display: flex;
        text-align: unset;
        line-height: unset;
    }
    .single-note {
        align-content: center;
        justify-content: center;
    }
    .double-note {
        justify-content: space-around;
        background: ${props => `linear-gradient(90deg, ${props.prevNoteColor()} 50%, ${props.nextNoteColor()} 50%, ${props.nextNoteColor()} 50%)`};
    }
    .single-note {
        background: ${props => props.note.color};
    }
    box-shadow: ${props => console.log(props.note.highlighted)};
`

export default StyledNote;