import React from 'react';
import Note from '../Note'
import { useApp } from '../../overmind';
import shortid from 'shortid'
const NotesList = props => {

    const { note } = props;
    const { state } = useApp();

    return (
        <>
            { state.strings[note].frets.map((item, index) => <Note note={ item } index={ index } string={ note } highlighted={ item.highlighted } key={ shortid.generate() } />) }
        </>
    );
};

export default NotesList;