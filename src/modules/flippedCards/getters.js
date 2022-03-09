export default {
    flippedCards(state) {
      return state.flippedCards;
    },
    hasflippedCards(state) {
      return state.flippedCards && state.flippedCards.length > 0;
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