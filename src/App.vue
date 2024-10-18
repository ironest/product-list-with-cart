<script setup lang="ts">
import CardList from "./components/CardList.vue";
import Cart from "./components/Cart/Cart.vue";
import Modals from "./components/Modals.vue";
</script>

<template>
  <Modals />

  <div class="app-container">
    <main>
      <div>
        <h1>Desserts</h1>
        <CardList />
      </div>
      <Cart />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

main {
  padding: 20px 24px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 800px) {
    & > div {
      max-width: 800px;
    }
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 35px;
    align-items: flex-start;
    justify-content: center;
  }

  h1 {
    font-size: 40px;
    margin: 0 0 30px;
  }
}
</style>
