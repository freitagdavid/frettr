export const storage = {
    persistState(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    loadState() {
        return [
            { field: 'keys', data: JSON.parse(localStorage.getItem('keys')) },
            { field: 'chords', data: JSON.parse(localStorage.getItem('chords')) },
            { field: 'currKey', data: JSON.parse(localStorage.getItem('currKey')) },
            { field: 'numStrings', data: JSON.parse(localStorage.getItem('numStrings')) },
            { field: 'showFlats', data: JSON.parse(localStorage.getItem('showFlats')) },
            { field: 'showSharps', data: JSON.parse(localStorage.getItem('showSharps')) },
            { field: 'offset', data: JSON.parse(localStorage.getItem('offset')) },
            { field: 'strings', data: JSON.parse(localStorage.getItem('strings')) },
            { field: 'currentPage', data: JSON.parse(localStorage.getItem('currentPage')) },
            { field: 'workingKey', data: JSON.parse(localStorage.getItem('workingKey')) }
        ]
    }
}