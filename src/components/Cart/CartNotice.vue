<script setup lang="ts"></script>

<template>
  <div class="container">
    <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
    <p>This is a <span class="important">carbon-neutral</span> delivery</p>
  </div>
</template>

<style scoped>
.container {
  padding: 15px;
  margin-top: 5px;
  background-color: #fcf8f5;
  display: flex;
  justify-content: center;
  column-gap: 6px;
  border-radius: 6px;

  p {
    font-size: 14px;
    .important {
      font-weight: 500;
    }
  }
}
</style>
