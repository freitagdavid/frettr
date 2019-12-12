import React from "react";
import Strings from "./components/Strings";
import styled from "styled-components";
import Tunings from "./components/Tunings";
import Header from "./components/Header";
import "./App.css";

function App(props: { className: string }) {
    const { className } = props;
    return (
        <div className={`App ${className}`}>
            <header>
                <Header />
            </header>
            <div className="container">
                <Tunings />
                <Strings />
            </div>
        </div>
    );
}

const StyledApp = styled(App)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    display: flex;
    margin: 0 auto;
  }
`;

export default StyledApp;
