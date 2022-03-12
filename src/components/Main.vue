<template>
  <div ref="main" id="container" class="container">
    <div id="topContainer" class="row">
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <div v-on:click="flipCard">
          <deck-container></deck-container>
        </div>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <draw-container></draw-container>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <place-container></place-container>
      </div>
    </div>
    <div id="bottomContainer">
      <playmat-container></playmat-container>
    </div>
  </div>
</template>

<script>
import Deck from "./Deck.vue";
import Draw from "./Draw.vue";
import Place from "./Place.vue";
import PlayMat from "./PlayMat.vue";

export default {
  components: {
    "deck-container": Deck,
    "draw-container": Draw,
    "place-container": Place,
    "playmat-container": PlayMat,
  },
  methods: {
    flipCard() {

      for (let i = 0; i < 3; i++) {
        this.$store.dispatch(
          "flippedCards/registerFlippedCard",
          this.$store.state.cards.cards[this.$store.state.cards.cards.length - 1 - i]
        );
      }

      console.log("Draw Cards:", this.$store.state.flippedCards.flippedCards);

      if (this.$store.state.settings.settings.isThreeCards) {
        for (let i = 0; i < 3; i++) {
          this.$store.dispatch("cards/deleteSingleCard");
        }
      } else {
        this.$store.dispatch("cards/deleteSingleCard");
      }

      console.log("Deck Cards:", this.$store.state.cards.cards);
      
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  height: 200px;
}
</style>
