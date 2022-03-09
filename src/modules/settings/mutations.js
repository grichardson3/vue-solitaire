export default {
    registerPost(state, payload) {
        state.settings.push(payload);
    },
    setSettings(state, payload) {
        state.settings = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}