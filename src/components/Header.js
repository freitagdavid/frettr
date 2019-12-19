import React from 'react';
import styled from 'styled-components'

const Header = props => {
    return (
        <div data-role="appbar" data-expand-point="md">
            <a href="#" class="brand no-hover">
                Frettr
            </a>
            <ul class="app-bar-menu">
                <li><a href="#">Chord Chart</a></li>
            </ul>
        </div>
    );
};

const StyledHeader = styled(Header)``

export default StyledHeader;