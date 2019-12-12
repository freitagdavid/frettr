import React, { useState } from 'react';
import styled from 'styled-components'
import { useApp } from '../../app/'

const Note = props => {
    const { className, note, index, string } = props;
    const [active, setActive] = useState("");
    const { state, actions } = useApp();

    const toggleActive = () => {
        setActive(active === "" ? "active" : "");
    }

    const prevNoteColor = () => {
        return state.notes[note.index - 1].color
    }

    const nextNoteColor = () => {
        if (state.notes[note.index + 1]) {
            return state.notes[note.index + 1].color
        }
        return state.notes[0].color
    }

    const contextMenu = (e) => {
        e.preventDefault();
        toggleActive();
    }

    const buttonType = () => {
        if (state.showPrimary && state.showSecondary && note.semi) {
            return (
                <button className={ `action-button fg-white double-note` }
                    style={ {
                        background: `linear-gradient(90deg, ${prevNoteColor()} 50%, ${nextNoteColor()} 50%, ${nextNoteColor()} 50%)`
                    } }
                    onClick={ () => actions.toggleHighlight([string, index]) }
                >
                    <div className="primary-text">{ note.primary }</div>
                    <div className="secondary-text">{ note.secondary }</div>
                </button >
            )
        } else {
            return (
                <button
                    className={ `action-button fg-white ${active} ${note.highlighted ? "highlighted" : null}` }
                    onContextMenu={ contextMenu }
                    onClick={ () => actions.toggleHighlight([string, index]) }
                    style={ { background: `${note.color}` } }>
                    <span>{ state.showPrimary ? note.primary : note.secondary }</span>
                </button>
            )
        }
    }

    return (
        <>
            <div className={ `multi-action ${className}` }>
                { buttonType() }
                <ul className="actions drop-right" onClick={ toggleActive }>
                    <li className="bg-blue"><a href="#"><span className="mif-palette" /></a></li>
                </ul>
            </div>
        </>
    );
};

const StyledNote = styled(Note)`
    .action-button {
        position: relative;
    }

    .active + ul {
        z-index: 3;
    }

    span {
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 0.5px;
        font-size: 1.3rem;
    }

    /* .double-note {
        background: ${props => ``}
        background-image: linear-gradient(to right, red 50%, blue 50%);
    } */

    margin: 0 30px;

    .double-note {
        display: flex;
        justify-content: space-around;
        text-align: unset;
        line-height: unset;
        div {
            font-size: 1.1rem;
        }
        .primary-text {
            margin-bottom: 30%;
        }
        .secondary-text {
            margin-top: 30%;
        }
    }

    box-shadow: ${(props) => console.log(props.highlighted)}
`

export default StyledNote;