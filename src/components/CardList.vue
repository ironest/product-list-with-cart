<script setup lang="ts">
import { onMounted } from "vue";
import Card from "./Card.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  store.dispatch("loadMenu");
});
</script>

<template>
  <div class="cards-container">
    <Card
      v-for="product in store.getters.availableMenu"
      :key="product.name"
      :product="product"
    />
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
</style>
