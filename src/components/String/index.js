import React from 'react';
import styled from 'styled-components'
import NotesList from '../NotesList'

const String = ({ className, note }) => {
    return (
        <>
            <div className={ className }>
                <span className="line">
                    <hr />
                </span>
                <NotesList note={ note } />
            </div>
        </>
    );
};

const StyledString = styled(String)`
    height: 70px;
    display: flex;
    align-items: center;
    .line {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        position: absolute;
    }
    hr {
        width: 100%;
        background-color: black;
        border: solid black 2px;
    }
`

export default StyledString;