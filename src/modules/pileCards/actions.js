export default {
    async registerPileCard (context, data) {
        context.commit('addPileCard', data);
    },
    async registerPileCardAsHearts (context, data) {
        context.commit('addPileCardAsHearts', data);
    },
    async registerPileCardAsDiamonds (context, data) {
        context.commit('addPileCardAsDiamonds', data);
    },
    async registerPileCardAsClubs (context, data) {
        context.commit('addPileCardAsClubs', data);
    },
    async registerPileCardAsSpades (context, data) {
        context.commit('addPileCardAsSpades', data);
    },
    async loadPileCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setPileCards', [[], [], [], []]);
        context.commit('setFetchTimestamp');
    }
}