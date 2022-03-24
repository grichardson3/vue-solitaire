<template>
    <div>
        <button
            v-if="$store.state.flippedCards.flippedCards.length > 0"
            v-on:click="selectPileCard"
            v-bind:class="{ card: true, selected: isSelected }"
        >{{ $store.state.flippedCards.flippedCards[$store.state.flippedCards.flippedCards.length - 1].readableValue}}
        </button>
        <button
            v-else
            class="card"
        >No cards</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isSelected: false
        }
    },
    methods: {
        selectPileCard(){
            !this.isSelected ? this.isSelected = true : this.isSelected = false;
            if (!this.isSelected) {
                this.$store.dispatch("selectedCard/deleteSingleSelectedCard");
                console.log("Selected Card:", this.$store.state.selectedCard.selectedCard);
            } else {
                this.$store.dispatch(
                    "selectedCard/registerSelectedCard",
                    this.$store.state.flippedCards.flippedCards[this.$store.state.flippedCards.flippedCards.length - 1]
                );
                console.log("Selected Card:", this.$store.state.selectedCard.selectedCard);
            }
        }
    }
}
</script>

