export default {
    fieldCards(state) {
      return state.fieldCards;
    },
    hasCards(state) {
      return state.fieldCards && state.fieldCards.length > 0;
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