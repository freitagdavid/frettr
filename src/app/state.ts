interface Note {
    semi: boolean;
    primary: string;
    secondary: string;
    color?: string;
}

interface Tuning {
    strings: number;
}

interface State {
    notes: Array<Note>;
    tunings: {
        [key: string]: {
            strings: number;
            notes: Array<number>;
        };
    };
    currTuning: string;
    numStrings: number;
    showPrimary: boolean;
    showSecondary: boolean;
    strings: any;
}

export const state: State = {
    notes: [
        {
            semi: false,
            primary: "A",
            secondary: "A",
            color: "maroon"
        },
        {
            semi: true,
            primary: "A♯",
            secondary: "B♭"
        },
        {
            semi: false,
            primary: "B",
            secondary: "B",
            color: "olive"
        },
        {
            semi: false,
            primary: "C",
            secondary: "C",
            color: "brown"
        },
        {
            semi: true,
            primary: "C♯",
            secondary: "D♭"
        },
        {
            semi: false,
            primary: "D",
            secondary: "D",
            color: "teal"
        },
        {
            semi: true,
            primary: "D♯",
            secondary: "E♭"
        },
        {
            semi: false,
            primary: "E",
            secondary: "E",
            color: "purple"
        },
        {
            semi: false,
            primary: "F",
            secondary: "F",
            color: "violet"
        },
        {
            semi: true,
            primary: "F♯",
            secondary: "G♭"
        },
        {
            semi: false,
            primary: "G",
            secondary: "G",
            color: "navy"
        },
        {
            semi: true,
            primary: "G♯",
            secondary: "A♭"
        }
    ],
    tunings: {
        "E Standard": {
            strings: 6,
            notes: [7, 0, 5, 10, 2, 7]
        },
        custom: {
            strings: 6,
            notes: [7, 0, 5, 10, 2, 7]
        }
    },
    currTuning: "E Standard",
    numStrings: 6,
    showPrimary: true,
    showSecondary: true,
    strings: ({ numStrings, currTuning, tunings, notes }: any) => {
        const out: any = [];
        for (let i = 0; i < numStrings; i++) {
            out.push({
                note: {
                    ...notes[tunings[currTuning].notes[i]],
                    index: tunings[currTuning].notes[i]
                }
            });
        }
        out.map((item: any, string: any) => {
            const frets = [];
            for (let i = 0; i < 12; i++) {
                frets.push({
                    ...notes[(tunings[currTuning].notes[string] + i + 1) % 12],
                    index: (tunings[currTuning].notes[string] + i + 1) % 12,
                    highlighted: false
                });
            }
            out[string].frets = frets;
        });
        return out;
    }
};
