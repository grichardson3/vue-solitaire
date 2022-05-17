<template>
    <div>
        <button 
            v-if="$store.state.pileCards.pileCards[2].length === 0"
            v-on:click="placeCard"
        >{{ suite }}</button>
        <button
            v-else
            v-on:click="placeCard"
        >{{ suite }}</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: 0
        }
    },
    props: {
        suite: String
    },
    methods: {
        placeCard(){
            console.log("Card being placed:", this.suite);
            console.log("Selected Card: ", this.$store.state.selectedCard.selectedCard);
            switch (this.suite) {
                case "hearts":
                    (this.$store.state.pileCards.pileCards[0].length === 0 &&
                    this.$store.state.selectedCard.selectedCard.value === 1)
                    ? this.$store.dispatch(
                        "pileCards/registerPileCardAsHearts",
                        this.$store.state.selectedCard.selectedCard
                    )
                    : console.log("false");
                    console.log(this.$store.state.pileCards.pileCards);
                    break;
                case "diamonds":
                    (this.$store.state.pileCards.pileCards[1].length === 0 &&
                    this.$store.state.selectedCard.selectedCard.value === 1)
                    ? this.$store.dispatch(
                        "pileCards/registerPileCardAsDiamonds",
                        this.$store.state.selectedCard.selectedCard
                    )
                    : null;
                    break;
                case "clubs":
                    (this.$store.state.pileCards.pileCards[2].length === 0 &&
                    this.$store.state.selectedCard.selectedCard.value === 1)
                    ? this.$store.dispatch(
                        "pileCards/registerPileCardAsClubs",
                        this.$store.state.selectedCard.selectedCard
                    )
                    : null;
                    break;
                case "spades":
                    (this.$store.state.pileCards.pileCards[3].length === 0 &&
                    this.$store.state.selectedCard.selectedCard.value === 1)
                    ? this.$store.dispatch(
                        "pileCards/registerPileCardAsSpades",
                        this.$store.state.selectedCard.selectedCard
                    )
                    : null;
                    break;
            }
            /*if (
                this.$store.state.pileCards.pileCards[0].length === 0 &&
                this.$store.state.selectedCard.selectedCard.value === 1 &&
                this.$store.state.selectedCard.selectedCard.suite === this.suite
            ) {
                // console.log("is suite");
                this.$store.dispatch(
                    "pileCards/registerPileCard",
                    this.$store.state.selectedCard.selectedCard
                );
                console.log(this.$store.state.pileCards.pileCards);
            }*/
        }
    }
}
</script>
