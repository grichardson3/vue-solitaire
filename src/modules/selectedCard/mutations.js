export default {
    deleteSelectedCard(state){
        state.selectedCard = {};
    },
    addSelectedCard(state, payload) {
        state.selectedCard = payload;
    },
    setSelectedCard(state, payload) {
        state.selectedCard = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}