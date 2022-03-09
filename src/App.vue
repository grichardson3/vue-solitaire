<template>
  <main ref="main">
    <main-container></main-container>
    <settings-container></settings-container>
  </main>
</template>

<script>
import Main from "./components/Main.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "Vue Solitaire",
  components: {
    "main-container": Main,
    "settings-container": Settings,
  },
  data() {
    return {
      cards: [],
      fieldCards: [],
      flippedCards: [],
      pileCards: [],
      settings: {},
      isLoading: false,
    };
  },
  created() {
    this.loadCards();
    this.initDealCards();
  },
  mounted() {
    this.loadUI();
  },
  methods: {
    loadCards(refresh = false) {
      this.isLoading = true;

      this.$store.dispatch("cards/loadCards", {
        forceRefresh: refresh,
      });
      this.$store.dispatch("fieldCards/loadFieldCards", {
        forceRefresh: refresh,
      });
      this.$store.dispatch("flippedCards/loadFlippedCards", {
        forceRefresh: refresh,
      });
      this.$store.dispatch("pileCards/loadPileCards", {
        forceRefresh: refresh,
      });
      this.$store.dispatch("settings/loadSettings", {
        forceRefresh: refresh,
      });

      this.cards = this.$store.state.cards.cards;
      this.fieldCards = this.$store.state.fieldCards.fieldCards;
      this.flippedCards = this.$store.state.flippedCards.flippedCards;
      this.pileCards = this.$store.state.pileCards.pileCards;
      this.settings = this.$store.state.settings.settings;

      this.isLoading = false;
    },
    loadUI() {
      this.$refs.main.style.height = window.innerHeight + "px";

      window.addEventListener("resize", () => {
        this.$refs.main.style.height = window.innerHeight + "px";
      });
    },
    initDealCards() {
      // Initial actions for dealing cards to the field
      console.log(this.$store.state.cards.cards);

      this.$store.dispatch(
        "fieldCards/initRegisterFieldCards",
        this.$store.state.cards.cards
      );

      for (let i = 0; i < 28; i++) {
        this.$store.dispatch("cards/deleteSingleCard", {});
      }

      console.log(this.$store.state.cards.cards);
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

main {
  background: #ccc;
  width: 100%;
  margin: 0;
}
</style>
