<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const addQuantity = () => {
  store.commit("increaseQuantity", product);
};

const removeQuantity = () => {
  store.commit("decreaseQuantity", product);
};

const quantity = computed(() => {
  const existing = store.state.cartItems.find(
    (item: any) => item.name === product.name
  );
  if (existing) {
    return existing.quantity;
  }
  return 0;
});

const formattedPrice = computed(() => {
  return `$${parseFloat(product.price).toFixed(2)}`;
});
</script>

<template>
  <div class="card">
    <img
      class="image-mobile"
      :src="product.image.mobile"
      :alt="product.name"
      :class="{ selected: quantity > 0 }"
    />
    <img
      class="image-desktop"
      :src="product.image.desktop"
      :alt="product.name"
      :class="{ selected: quantity > 0 }"
    />
    <div class="action">
      <button @click="addQuantity" v-if="quantity === 0">
        <img src="/assets/images/icon-add-to-cart.svg" alt="" />
        Add to Cart
      </button>

      <div class="selector" v-if="quantity > 0">
        <img
          src="/assets/images/icon-decrement-quantity.svg"
          alt=""
          @click="removeQuantity"
        />
        {{ quantity }}
        <img
          src="/assets/images/icon-increment-quantity.svg"
          alt=""
          @click="addQuantity"
        />
      </div>
    </div>

    <p class="category">{{ product.category }}</p>
    <p class="name">{{ product.name }}</p>
    <p class="price">{{ formattedPrice }}</p>
  </div>
</template>

<style scoped>
.card {
  .image-mobile,
  .image-desktop {
    width: 100%;
    border-radius: 10px;
  }

  .image-desktop {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .image-mobile {
      display: none;
    }

    .image-desktop {
      display: block;
      max-width: 250px;
    }
  }

  img.selected {
    border: 3px solid #c83b0e;
  }

  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -28px;
    button {
      font-size: 14px;
      border-radius: 22px;
      border: 1px solid #a39394;
      width: 160px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      background-color: white;
      cursor: pointer;

      &:hover {
        background-color: #f6cdc1;
      }
    }
  }

  .selector {
    font-size: 14px;
    border-radius: 22px;
    width: 160px;
    height: 44px;
    background-color: #c83b0e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 12px;
    img {
      border: 1px solid white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      padding: 3px;
      cursor: pointer;

      &:hover,
      &:active {
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.2);
        width: 22px;
        height: 22px;
        margin: 0 -2px;
      }
    }
  }

  .category {
    font-size: 14px;
    margin-top: 16px;
    color: #756d6b;
  }
  .name {
    font-size: 16px;
    font-weight: 600;
    margin-top: 6px;
  }
  .price {
    font-size: 16px;
    color: #b2411f;
    font-weight: 600;
    margin-top: 4px;
  }

  @media only screen and (min-width: 1200px) {
    & {
      max-width: 250px;
    }
  }
}
</style>
