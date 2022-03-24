export default {
    async deleteSingleSelectedCard(context){
        context.commit('deleteSelectedCard');
    },
    async registerSelectedCard(context, payload) {
        context.commit('addSelectedCard', payload);
    },
    async loadSelectedCard(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setSelectedCard', {});
        context.commit('setFetchTimestamp');
    }
};