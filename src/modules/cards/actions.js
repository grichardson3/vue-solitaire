import CardData from "./cardData";

export default {
    async deleteSingleCard(context){
        context.commit('deleteCard');
    },
    async registerCards(context, payload) {
        console.log(payload);
        /*const postData = {
            postAuthor: data.post_author,
            postContent: data.post_content,
            postFeaturePhoto: data.post_featurephoto,
            postTag: data.post_tag,
            postTitle: data.post_title,
            postViews: 0
        };
        context.commit('registerPost', {
            ...postData
        });*/
    },
    async loadCards(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setCards', CardData);
        context.commit('setFetchTimestamp');
    }
};