import React from "react";
import styled from "styled-components";
import { useApp } from "../../app/";
import shortid from "shortid";

const Header = props => {
    const { className } = props;
    const { state, actions } = useApp();
    return (
        <div data-role="appbar" className={ className }>
            <input
                type="checkbox"
                data-role="switch"
                data-caption="Sharps"
                checked={ state.showPrimary }
                onChange={ actions.togglePrimary }
            />
            <input
                type="checkbox"
                data-role="switch"
                data-caption="Flats"
                checked={ state.showSecondary }
                onChange={ actions.toggleSecondary }
            />
            <select
                data-role="select"
                value={ state.currTuning }
                onChange={ actions.setCurrTuning }
            >
                { Object.keys(state.tunings).map(item =>
                    <option value={ item } key={ shortid.generate() }>
                        { item }
                    </option>
                ) }
            </select>
        </div>
    );
};

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    * {
        margin: 0 10px;
    }
    .select {
        width: 200px;
    }
`;

export default StyledHeader;
