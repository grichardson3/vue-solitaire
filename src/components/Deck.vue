<template>
  <div v-on:click="flipCard">
    <button>Flip Card</button>
  </div>
  <card-component></card-component>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    "card-component": Card,
  },
  methods: {
    flipCard() {
      if (this.$store.state.settings.settings.isThreeCards) {
        if (this.$store.state.cards.cards.length === 0) { // Resetting the deck
          this.$store.dispatch("selectedCard/deleteSingleSelectedCard");
          const promise = new Promise((resolve) => {
            for (let i = 0; i < this.$store.state.flippedCards.flippedCards.length; i++) {
              this.$store.dispatch(
                "cards/registerCard",
                this.$store.state.flippedCards.flippedCards[this.$store.state.flippedCards.flippedCards.length - 1 - i]
              );
            }
            resolve('Success');
          });
          promise.then(() => {
            this.$store.dispatch(
              "flippedCards/deleteAllFlippedCards",
              this.$store.state.flippedCards.flippedCards
            );
          });
          console.log("Deck Cards:", this.$store.state.cards.cards);
          console.log("Selected Card: ", this.$store.state.selectedCard.selectedCard);
        } else if (this.$store.state.cards.cards.length < 3) {

          this.$store.dispatch("selectedCard/deleteSingleSelectedCard");

          for (let i = 0; i < (this.$store.state.cards.cards.length - 1); i++) {
            this.$store.dispatch(
              "flippedCards/registerFlippedCard",
              this.$store.state.cards.cards[this.$store.state.cards.cards.length - 1 - i]
            );
          }
          if (this.$store.state.settings.settings.isThreeCards) {
            for (let i = 0; i < 3; i++) {
              this.$store.dispatch("cards/deleteSingleCard");
            }
          } else {
            this.$store.dispatch("cards/deleteSingleCard");
          }
          console.log("Deck Cards:", this.$store.state.cards.cards);
          console.log("Selected Card: ", this.$store.state.selectedCard.selectedCard);
        } else {

          this.$store.dispatch("selectedCard/deleteSingleSelectedCard");

          for (let i = 0; i < 3; i++) {
            this.$store.dispatch(
              "flippedCards/registerFlippedCard",
              this.$store.state.cards.cards[this.$store.state.cards.cards.length - 1 - i]
            );
          }
          if (this.$store.state.settings.settings.isThreeCards) {
            for (let i = 0; i < 3; i++) {
              this.$store.dispatch("cards/deleteSingleCard");
            }
          } else {
            this.$store.dispatch("cards/deleteSingleCard");
          }
          console.log("Deck Cards:", this.$store.state.cards.cards);
          console.log("Selected Card: ", this.$store.state.selectedCard.selectedCard);
        }
      } else {
        this.$store.dispatch(
          "flippedCards/registerFlippedCard",
          this.$store.state.cards.cards[this.$store.state.cards.cards.length - 1]
        );
      }
    }
  }
};
</script>
