import React from "react";
import "./App.css";
import Header from "./components/Header"
import ChordChart from "./pages/ChordChart"

function App(props) {
    const { className } = props;

    return (
        <div className={ `App` }>
            <Header />
            <ChordChart />
        </div>
    )
}

export default App;
