<script setup lang="ts"></script>

<template>
  <div class="container">
    <img src="/assets/images/illustration-empty-cart.svg" alt="" />
    <p class="description">Your added items will appear here</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .description {
    margin-top: 15px;
    color: #73615f;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
