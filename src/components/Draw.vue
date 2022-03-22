<template>
    <div>
        <button v-if="$store.state.flippedCards.flippedCards.length > 0">{{ $store.state.flippedCards.flippedCards[$store.state.flippedCards.flippedCards.length - 1].readableValue}}</button>
        <button v-else>No cards</button>
    </div>
</template>
