<template>
  <div ref="main" id="container" class="container">
    <div id="topContainer" class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <deck-container></deck-container>
          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <draw-container></draw-container>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <!--<place-container index="0" suite="hearts" />-->
            <button 
                v-if="$store.state.pileCards.pileCards[0].length === 0"
                v-on:click="placeCard(0)"
                ref="place"
                class="cardPlace"
                id="heartsPlace"
            >Hearts</button>
            <button
                v-else
                v-on:click="placeCard(0)"
                ref="place"
                class="cardPlace"
                id="heartsPlace"
            >
                {{
                    $store.state.pileCards.pileCards[0].length !== 0 ?
                    $store.state.pileCards.pileCards[0][$store.state.pileCards.pileCards[0].length - 1].readableValue :
                    "Hearts"
                }}
            </button>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <!--<place-container index="1" suite="diamonds" />-->
            <button 
                v-if="$store.state.pileCards.pileCards[1].length === 0"
                v-on:click="placeCard(1)"
                ref="place"
                class="cardPlace"
                id="diamondsPlace"
            >Diamonds</button>
            <button
                v-else
                v-on:click="placeCard(1)"
                ref="place"
                class="cardPlace"
                id="diamondsPlace"
            >
                {{
                    $store.state.pileCards.pileCards[1].length !== 0 ?
                    $store.state.pileCards.pileCards[1][$store.state.pileCards.pileCards[0].length - 1].readableValue :
                    "Diamonds"
                }}
            </button>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <!--<place-container index="2" suite="clubs" />-->
            <button 
                v-if="$store.state.pileCards.pileCards[2].length === 0"
                v-on:click="placeCard(2)"
                ref="place"
                class="cardPlace"
                id="clubsPlace"
            >Clubs</button>
            <button
                v-else
                v-on:click="placeCard(2)"
                ref="place"
                class="cardPlace"
                id="clubsPlace"
            >
                {{
                    $store.state.pileCards.pileCards[2].length !== 0 ?
                    $store.state.pileCards.pileCards[2][$store.state.pileCards.pileCards[0].length - 1].readableValue :
                    "Clubs"
                }}
            </button>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <!--<place-container index="3" suite="spades" />-->
            <button 
                v-if="$store.state.pileCards.pileCards[3].length === 0"
                v-on:click="placeCard(3)"
                ref="place"
                class="cardPlace"
                id="spadesPlace"
            >Spades</button>
            <button
                v-else
                v-on:click="placeCard(3)"
                ref="place"
                class="cardPlace"
                id="spadesPlace"
            >
                {{
                    $store.state.pileCards.pileCards[3].length !== 0 ?
                    $store.state.pileCards.pileCards[3][$store.state.pileCards.pileCards[0].length - 1].readableValue :
                    "Spades"
                }}
            </button>
          </div>
        </div>
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
// import Place from "./Place.vue";
import PlayMat from "./PlayMat.vue";

export default {
  components: {
    "deck-container": Deck,
    "draw-container": Draw,
    // "place-container": Place,
    "playmat-container": PlayMat,
  },
  methods: {
    placeCard(index){
      // console.log("Card being placed:", this.suite);
      // console.log("Selected Card: ", this.$store.state.selectedCard.selectedCard);
      if (this.$store.state.selectedCard.selectedCard.isSelected) {
        switch (index) {
          case 0:
            if (this.$store.state.pileCards.pileCards[0].length === 0 &&
            this.$store.state.selectedCard.selectedCard.value === 1 && 
            this.$store.state.selectedCard.selectedCard.suite === "hearts") {
              const promise = new Promise((resolve) => {
                this.$store.dispatch(
                  "pileCards/registerPileCardAsHearts",
                  this.$store.state.selectedCard.selectedCard
                );
                resolve("Success");
              });
              promise.then(() => {
                this.$store.dispatch("flippedCards/deleteSingleSelectedFlippedCard", this.$store.state.selectedCard.selectedCard);
              })
              .then(() => {
                this.$store.dispatch("selectedCard/deleteSingleSelectedCard");
              });
            }
            // console.log(this.$store.state.pileCards.pileCards);
            break;
          case 1:
            (this.$store.state.pileCards.pileCards[1].length === 0 &&
            this.$store.state.selectedCard.selectedCard.value === 1 &&
            this.$store.state.selectedCard.selectedCard.suite === "diamonds")
            ? this.$store.dispatch(
              "pileCards/registerPileCardAsDiamonds",
              this.$store.state.selectedCard.selectedCard
            )
            : null;
            // console.log(this.$store.state.pileCards.pileCards);
            break;
          case 2:
            (this.$store.state.pileCards.pileCards[2].length === 0 &&
            this.$store.state.selectedCard.selectedCard.value === 1 &&
            this.$store.state.selectedCard.selectedCard.suite === "clubs")
            ? this.$store.dispatch(
                "pileCards/registerPileCardAsClubs",
                this.$store.state.selectedCard.selectedCard
            )
            : null;
            // console.log(this.$store.state.pileCards.pileCards);
            break;
          case 3:
            (this.$store.state.pileCards.pileCards[3].length === 0 &&
            this.$store.state.selectedCard.selectedCard.value === 1 &&
            this.$store.state.selectedCard.selectedCard.suite === "spades")
            ? this.$store.dispatch(
                "pileCards/registerPileCardAsSpades",
                this.$store.state.selectedCard.selectedCard
            )
            : null;
            // console.log(this.$store.state.pileCards.pileCards);
            break;
          }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  height: 200px;
}
</style>
