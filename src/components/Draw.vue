<template>
    <div>
        <button
            v-on:click="selectPileCard"
            v-bind:class="{ card: true, selected: $store.state.selectedCard.selectedCard.isSelected }"
        >{{ 
            $store.state.flippedCards.flippedCards.length > 0 ?
            $store.state.flippedCards.flippedCards[$store.state.flippedCards.flippedCards.length - 1].readableValue :
            "No cards"
        }}
        </button>
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
            !this.$store.state.selectedCard.selectedCard.isSelected ? this.isSelected = true : this.isSelected = false;
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

