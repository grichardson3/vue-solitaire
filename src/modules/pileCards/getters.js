export default {
    pileCards(state) {
      return state.pileCards;
    },
    hasPileCards(state) {
      return state.pileCards && state.pileCards.length > 0;
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};