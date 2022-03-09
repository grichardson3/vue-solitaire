<template>
  <button>Flip Card</button>
  <card-component></card-component>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    "card-component": Card,
  },
};
</script>
