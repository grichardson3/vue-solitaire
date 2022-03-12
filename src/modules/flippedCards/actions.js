export default {
    async registerFlippedCard (context, data) {
        context.commit('addFlippedCard', data);
    },
    async loadFlippedCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setFlippedCards', []);
        context.commit('setFetchTimestamp');
    }
};