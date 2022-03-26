export default {
    deleteSelectedCard(state){
        state.selectedCard = { isSelected: false };
    },
    addSelectedCard(state, payload) {
        state.selectedCard = { ...payload, isSelected: true };
    },
    setSelectedCard(state, payload) {
        state.selectedCard = { ...payload, isSelected: false };
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}