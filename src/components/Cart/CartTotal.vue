<script setup lang="ts">
import { computed } from "vue";

const { items } = defineProps({
  items: {
    type: Array<any>,
    default: [],
  },
});

const totalPrice = computed(() => {
  let total = 0;
  items.forEach(({ price, quantity }) => (total += price * quantity));
  return total.toFixed(2);
});
</script>

<template>
  <div class="container">
    <p class="label">Order Total</p>
    <p class="amount">${{ totalPrice }}</p>
  </div>
</template>

<style scoped>
.container {
  padding: 32px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 14px;
    color: #c3a59e;
  }
  .amount {
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
