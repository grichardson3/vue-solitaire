export default {
    deleteCard(state){
        // state.cards.filter(card => card !== id);
        state.cards.pop();
    },
    registerCard(state, payload) {
        state.cards.push(payload);
    },
    setCards(state, payload) {
        state.cards = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}