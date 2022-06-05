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
    deleteSelectedFlippedCard(state, payload){
        console.log(payload.id);
        /*state.flippedCards.forEach((card) => {
            if (card.id === payload.id) {
                console.log(card.id);
            }
        });*/
        state.flippedCards.filter(card => card.id !== payload.id); // FILTER STATEMENT NOT REMOVING FROM PILE FOR SOME REASON
        console.log(state.flippedCards);
    },
    deleteAllFlippedCards(state) {
        state.flippedCards = [];
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}