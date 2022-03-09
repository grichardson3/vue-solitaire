export default {
    registerPileCards(state, payload) {
        state.pileCards.push(payload);
    },
    setPileCards(state, payload) {
        state.pileCards = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}