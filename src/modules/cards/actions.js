import CardData from "./cardData";

export default {
    async deleteSingleCard(context){
        context.commit('deleteCard');
    },
    async registerCard(context, payload) {
        context.commit('registerCard', payload);
    },
    async loadCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setCards', CardData);
        context.commit('setFetchTimestamp');
    }
};