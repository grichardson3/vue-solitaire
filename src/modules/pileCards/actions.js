export default {
    async loadPileCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setPileCards', [[], [], [], []]);
        context.commit('setFetchTimestamp');
    }
}