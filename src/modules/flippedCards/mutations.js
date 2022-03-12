export default {
    addFlippedCard(state, payload) {
        state.flippedCards.push(payload);
    },
    setFlippedCards(state, payload) {
        state.flippedCards = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}