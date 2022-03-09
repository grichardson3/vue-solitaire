export default {
    addFieldCardsToFirstRow(state, payload) {
        state.fieldCards[0].push(payload);
    },
    addFieldCardsToSecondRow(state, payload) {
        state.fieldCards[1].push(payload);
    },
    addFieldCardsToThirdRow(state, payload) {
        state.fieldCards[2].push(payload);
    },
    addFieldCardsToFourthRow(state, payload) {
        state.fieldCards[3].push(payload);
    },
    addFieldCardsToFifthRow(state, payload) {
        state.fieldCards[4].push(payload);
    },
    addFieldCardsToSixthRow(state, payload) {
        state.fieldCards[5].push(payload);
    },
    addFieldCardsToSeventhRow(state, payload) {
        state.fieldCards[6].push(payload);
    },
    setFieldCards(state, payload) {
        state.fieldCards = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}