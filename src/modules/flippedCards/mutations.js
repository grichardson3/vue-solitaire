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
    deleteSelectedFlippedCard(state, id){
        console.log("Payload: ", id);
        /*state.flippedCards.filter(card => id !== card.id); // FILTER STATEMENT NOT REMOVING FROM PILE FOR SOME REASON
        console.log("Flipped Cards: ", state.flippedCards);*/
        state.flippedCards.pop();
    },
    deleteAllFlippedCards(state) {
        state.flippedCards = [];
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}