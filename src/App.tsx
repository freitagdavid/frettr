import React from "react";
import styled from "styled-components";
import "./App.css";

function App(props: { className: string }) {
    const { className } = props;
    return <div className={`App ${className}`} />;
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
