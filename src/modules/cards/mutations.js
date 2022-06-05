export default {
    deleteTopCard(state){
        // state.cards.filter(card => card !== id);
        state.cards.pop();
    },
    deleteCard(state, data){
        // console.log(state.cards);
        state.cards.filter(card => card.id !== data.id);
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