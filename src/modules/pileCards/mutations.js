export default {
    addPileCard(state, payload) {
        state.pileCards.push(payload);
    },
    addPileCardAsHearts(state, payload) {
        state.pileCards[0].push(payload);
    },
    addPileCardAsDiamonds(state, payload) {
        state.pileCards[1].push(payload);
    },
    addPileCardAsClubs(state, payload) {
        state.pileCards[2].push(payload);
    },
    addPileCardAsSpades(state, payload) {
        state.pileCards[3].push(payload);
    },
    setPileCards(state, payload) {
        state.pileCards = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}