export default {
    async loadFlippedCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setFlippedCards', [{}, {}, {}]);
        context.commit('setFetchTimestamp');
    }
};