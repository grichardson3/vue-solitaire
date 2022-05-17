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
            <place-container suite="hearts"></place-container>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <place-container suite="diamonds"></place-container>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <place-container suite="clubs"></place-container>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <place-container suite="spades"></place-container>
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
import Place from "./Place.vue";
import PlayMat from "./PlayMat.vue";

export default {
  components: {
    "deck-container": Deck,
    "draw-container": Draw,
    "place-container": Place,
    "playmat-container": PlayMat,
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  height: 200px;
}
</style>
