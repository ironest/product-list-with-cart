<script lang="ts">
import { computed } from "vue";
import CartItem from "./CartItem.vue";
import CartNotice from "./CartNotice.vue";
import CartTotal from "./CartTotal.vue";
import EmptyCart from "./EmptyCart.vue";

import { useStore } from "vuex";

export default {
  components: {
    CartItem,
    CartNotice,
    CartTotal,
    EmptyCart,
  },

  setup() {
    const store = useStore();

    const totalNumberOfItems = computed(() => {
      let total = 0;
      store.state.cartItems.forEach((item: any) => {
        total += item.quantity;
      });
      return total;
    });

    const confirmOrder = () => {
      store.dispatch("openModal", "order-confirmed");
    };

    return {
      store,
      totalNumberOfItems,
      confirmOrder,
    };
  },
};
</script>

<template>
  <div class="cart">
    <h3 class="title">Your Cart ({{ totalNumberOfItems }})</h3>

    <EmptyCart v-if="store.state.cartItems.length === 0" />

    <CartItem
      v-for="item in store.state.cartItems"
      :key="item.name"
      :item="item"
      order-mode="open"
    />

    <CartTotal
      v-if="store.state.cartItems.length"
      :items="store.state.cartItems"
    />
    <CartNotice v-if="store.state.cartItems.length" />

    <button
      class="confirm-order"
      v-if="store.state.cartItems.length"
      @click="confirmOrder"
    >
      Confirm Order
    </button>
  </div>
</template>

<style scoped>
.cart {
  margin-top: 40px;
  padding: 25px;
  background-color: white;
  border-radius: 10px;

  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 300px;
    margin: 0px;
    position: sticky;
    top: 40px;
  }

  .title {
    color: #b2411f;
    font-size: 24px;
    margin-bottom: 8px;
  }

  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin: 40px 0 15px;
    }

    .description {
      color: #73615f;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .confirm-order {
    background-color: #c83b0e;
    width: 100%;
    border: none;
    padding: 18px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    margin-top: 25px;
    cursor: pointer;
  }
}
</style>
