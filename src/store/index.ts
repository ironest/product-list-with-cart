import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      cartItems: <any>[],
      menu: <any>[],
      modal: {
        isOpen: false,
        instance: null,
      },
    };
  },

  mutations: {
    increaseQuantity(state, payload) {
      const existing = state.cartItems.find(
        (item: any) => item.name === payload.name
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }
    },
    setModal(state, payload) {
      state.modal.isOpen = payload.state;
      state.modal.instance = payload.instance;
    },

    decreaseQuantity(state, payload) {
      const existingIndex = state.cartItems.findIndex(
        (item: any) => item.name === payload.name
      );

      const existing = state.cartItems[existingIndex];
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.cartItems.splice(existingIndex, 1);
      }
    },

    removeFromCart(state, payload) {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.name !== payload.name
      );
    },

    setMenu(state, payload) {
      state.menu = payload;
    },

    reset(state) {
      state.cartItems = [];
      state.modal.isOpen = false;
      state.modal.instance = null;
    },
  },
  actions: {
    async loadMenu(context) {
      const response = await fetch("/api/data.json");
      const json = await response.json();
      context.commit("setMenu", json);
    },

    openModal(ctx, instance) {
      console.log("action > openModal");
      ctx.commit("setModal", { state: true, instance });
      document.body.classList.add("no-scroll");
    },

    closeModal(ctx) {
      ctx.commit("setModal", { state: false });
      document.body.classList.remove("no-scroll");
    },
    reset(ctx) {
      ctx.commit("reset");
      document.body.classList.remove("no-scroll");
    },
  },
  getters: {
    availableMenu(state) {
      return state.menu;
    },
  },
});
