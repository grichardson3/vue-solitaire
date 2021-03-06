export default {
    async registerFlippedCard (context, data) {
        context.commit('addFlippedCard', data);
    },
    async deleteSingleSelectedFlippedCard (context, data) {
        context.commit('deleteSelectedFlippedCard', data.id);
    },
    async deleteAllFlippedCards(context){
        context.commit('deleteAllFlippedCards');
    },
    async loadFlippedCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setFlippedCards', []);
        context.commit('setFetchTimestamp');
    },
    async deleteSingleFlippedCard(context){
        context.commit('deleteFlippedCard');
    },
};