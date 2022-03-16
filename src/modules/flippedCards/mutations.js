export default {
    addFlippedCard(state, payload) {
        state.flippedCards.push(payload);
    },
    setFlippedCards(state, payload) {
        state.flippedCards = payload;
    },
    deleteFlippedCard(state, payload){
        state.flippedCards = payload; // not final
    },
    deleteAllFlippedCards(state) {
        state.flippedCards = [];
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}