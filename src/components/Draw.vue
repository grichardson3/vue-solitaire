<template>
    <div>
        <span v-if="$store.state.flippedCards.flippedCards.length > 0">{{ $store.state.flippedCards.flippedCards[$store.state.flippedCards.flippedCards.length - 1].readableValue}}</span>
        <span v-else>No cards</span>
    </div>
</template>
