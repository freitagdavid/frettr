import React, { useState } from 'react';
import styled from "styled-components"
import String from "../String"
import { useApp } from "../../app/"
import shortid from 'shortid';
const Strings = props => {
    const { className } = props;
    const [numStrings, setNumStrings] = useState(6);
    const { state } = useApp()

    return (
        <>
            <div className={ className }>
                { state.strings.map((item, index) => <String note={ index } key={ shortid.generate() } />) }
            </div>
        </>
    );
};

const StyledStrings = styled(Strings)`
    width: fit-content;
    margin: 0 auto;
    outline: solid red 1px;
`

export default StyledStrings;