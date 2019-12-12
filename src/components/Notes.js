import React, { useState, useEffect } from 'react';
import { Stage, Layer, Line, Circle, Text, RegularPolygon } from 'react-konva'

const Notes = props => {
    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;
    const [numStrings, setNumStrings] = useState(6);
    const [stringSpacing, setStringSpacing] = useState(-50)

    const [tuning, setTuning] = useState([7, 0, 5, 10, 2, 7])

    const notes = {
        0: {
            semi: false,
            primary: "A",
            secondary: "A"
        },
        1: {
            semi: true,
            primary: "A♯",
            secondary: "B♭"
        },
        2: {
            semi: false,
            primary: "B",
            secondary: "B"
        },
        3: {
            semi: false,
            primary: "C",
            secondary: "C"
        },
        4: {
            semi: true,
            primary: "C♯",
            secondary: "D♭"
        },
        5: {
            semi: false,
            primary: "D",
            secondary: "D"
        },
        6: {
            semi: true,
            primary: "D♯",
            secondary: "E♭"
        },
        7: {
            semi: false,
            primary: "E",
            secondary: "E"
        },
        8: {
            semi: false,
            primary: "F",
            secondary: "F"
        },
        9: {
            semi: true,
            primary: "F♯",
            secondary: "G♭"
        },
        10: {
            semi: false,
            primary: "G",
            secondary: "G"
        },
        11: {
            semi: true,
            primary: "G♯",
            secondary: "A♭"
        }
    }

    const percentWidth = (percent) => percent / 100 * stageWidth
    const percentHeight = (percent) => percent / 100 * stageHeight

    useEffect(() => {
        setStringSpacing(-percentHeight(4))
    }, [])

    const tuningSelect = () => {
        let out = [];
        for (let x = 0; x < numStrings; x++) {
            out.push(<Circle x={ percentWidth(29) } y={ percentHeight(40) } radius={ percentWidth(0.9) } fill="red" stroke="black" strokeWidth={ 4 } offsetY={ x * stringSpacing } />)
            out.push(<Text x={ percentWidth(28.6) } y={ percentHeight(39.1) } text={ notes[tuning[x]].primary } fontSize={ percentWidth(1.1) } fill="white" stroke="black" strokeWidth={ 0.5 } offsetY={ x * stringSpacing } />)
            out.push(<RegularPolygon sides={ 3 } fill="red" stroke="black" strokeWidth={ 3 } width={ percentWidth(0.9) } x={ percentWidth(27) } y={ percentHeight(40) } rotation={ 270 } offsetX={ x * percentHeight(4) } />)
            out.push(<RegularPolygon sides={ 3 } fill="red" stroke="black" strokeWidth={ 3 } width={ percentWidth(0.9) } x={ percentWidth(31) } y={ percentHeight(40) } rotation={ 90 } offsetX={ x * -percentHeight(4) } />)
        }
        return out
    }

    const genLines = () => {
        let out = [];
        for (let x = 0; x < numStrings; x++) {
            out.push(<Line points={ [percentWidth(32), percentHeight(40), percentWidth(68), percentHeight(40)] } stroke='black' strokeWidth={ 4 } offsetY={ x * stringSpacing } />)
            for (let i = 0; i < 12; i++) {
                out.push(<Circle x={ percentWidth(33.5) } y={ percentHeight(40) } radius={ percentWidth(0.9) } fill="red" stroke='black' strokeWidth={ 4 } offsetX={ -percentWidth(3) * i } offsetY={ x * stringSpacing } />)
                out.push(<Text
                    x={ percentWidth(32.6) }
                    y={ percentHeight(39.1) }
                    height={ percentWidth(1.8) }
                    width={ percentWidth(1.8) }
                    text={ notes[(tuning[x] + i + 1) % 12].primary }
                    fontSize={ percentWidth(1.1) }
                    offsetX={ -percentWidth(3) * i }
                    fill="white"
                    stroke="black"
                    strokeWidth={ 0.5 }
                    offsetY={ x * stringSpacing }
                    align="center"></Text>)
                out.push(<Line points={ [percentWidth(35), percentHeight(39.8), percentWidth(35), percentHeight(35.9) - (numStrings * stringSpacing)] } stroke="black" strokeWidth={ 4 } offsetX={ i * -percentWidth(3) }></Line>)
            }
        }
        return out
    }

    const String = props => {
        return (
            <>
                { genLines() }
                { tuningSelect() }
            </>
        )
    }

    return (
        <h1>test</h1>
    )

    // return (
    //    <>
    //        <Stage width={ window.innerWidth } height={ window.innerHeight }>
    //            <Layer background="white">
    //                <String></String>
    //            </Layer>
    //        </Stage>
    //    </>
    //);
};

export default Notes;