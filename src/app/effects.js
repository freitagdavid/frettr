export const storage = {
    persistState(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    loadCurrTuning() {
        return JSON.parse(localStorage.getItem('currTuning'))
    },
    loadTunings() {
        return JSON.parse(localStorage.getItem('tunings'))
    }
}