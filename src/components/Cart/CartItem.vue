<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    orderMode: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    const onRemoveItem = () => {
      store.commit("removeFromCart", props.item);
    };

    const formattedPrice = computed(() => {
      return props.item.price.toFixed(2);
    });

    const formattedTotal = computed(() => {
      return (props.item.quantity * props.item.price).toFixed(2);
    });

    return {
      onRemoveItem,
      formattedPrice,
      formattedTotal,
      item: props.item,
      orderMode: props.orderMode,
    };
  },
};
</script>

<template>
  <div class="container" :class="{ 'dark-background': orderMode === 'close' }">
    <img
      v-if="orderMode === 'close'"
      class="thumbnail"
      :src="item.image.thumbnail"
      :alt="item.name"
    />
    <div class="info">
      <p class="name">{{ item.name }}</p>
      <p class="description">
        <span class="quantity">{{ item.quantity }}x</span>
        <span class="price">@ ${{ formattedPrice }}</span>
        <span v-if="orderMode === 'open'" class="total"
          >${{ formattedTotal }}</span
        >
      </p>
    </div>
    <div class="action">
      <button v-if="orderMode === 'open'" @click="onRemoveItem">
        <img src="/assets/images/icon-remove-item.svg" alt="" />
      </button>
      <span v-if="orderMode === 'close'" class="total"
        >${{ formattedTotal }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0 18px;
  border-bottom: 1px solid #c3a59e;
  column-gap: 16px;

  &.dark-background {
    background-color: #fcf8f5;
    border-radius: 6px;
    padding: 20px 25px;
  }

  .thumbnail {
    width: 48px;
    height: 48px;
  }

  .info {
    .name {
      font-size: 14px;
      font-weight: 500;
    }
    .description {
      margin-top: 8px;
      font-size: 14px;
      color: #c3a59e;
      display: flex;

      .quantity {
        font-weight: 500;
        color: #b2411f;
        min-width: 28px;
      }
      .price {
        min-width: 58px;
      }
      .total {
        font-weight: 500;
      }
    }
  }
  .action {
    margin-left: auto;

    button {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid #c3a59e;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: #f6cdc1;
        border: 2px solid #b2411f;
      }
    }
    .total {
      font-size: 14px;
      margin-left: auto;
      font-weight: 500;
    }
  }
}
</style>
