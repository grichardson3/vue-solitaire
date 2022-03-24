export default {
    selectedCard(state) {
      return state.selectedCard;
    },
    hasSelectedCard(state) {
      return state.selectedCard && state.selectedCard.length > 0;
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