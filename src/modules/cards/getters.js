export default {
    cards(state) {
      return state.cards;
    },
    hasCards(state) {
      return state.cards && state.cards.length > 0;
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