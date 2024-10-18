<template>
  <div class="modal-back-shadow" v-if="isOpen" @click.self="closeModal">
    <div class="modal-inner-content">
      <div v-if="instance === 'order-confirmed'" class="modal-order-confirmed">
        <h1 class="title">Order Confirmed</h1>
        <p class="sub-title">We hope you enjoy your food</p>
        <CartItem
          v-for="item in store.state.cartItems"
          :key="item.name"
          :item="item"
          order-mode="close"
        />
        <button class="new-order" @click="newOrder">Start New Order</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CartItem from "../components/Cart/CartItem.vue";

export default {
  components: { CartItem },
  setup() {
    const store = useStore();

    const closeModal = () => {
      store.dispatch("closeModal");
    };

    const newOrder = () => {
      store.dispatch("reset");
    };

    return {
      isOpen: computed(() => store.state.modal.isOpen),
      instance: computed(() => store.state.modal.instance),
      store,
      closeModal,
      newOrder,
    };
  },
};
</script>
<style scoped>
.modal-back-shadow {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (min-width: 600px) {
    align-items: center;
  }
}
.modal-inner-content {
  z-index: 51;
  background-color: white;
  width: 100%;
  padding: 25px;
  border-radius: 12px 12px 0 0;

  @media only screen and (min-width: 600px) {
    width: 500px;
    padding: 40px;
    border-radius: 12px;
  }

  .modal-order-confirmed {
    .title {
      font-size: 25px;
      margin-bottom: 20px;
    }

    .sub-title {
      font-size: 14px;
      margin-bottom: 35px;
    }

    .new-order {
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
}
</style>
