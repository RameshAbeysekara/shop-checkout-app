import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      order: {
        item: {
          id: "0T123",
          color: "",
          size: "",
          quantity: "",
        },
        payment: {
          amount: "",
        },
        shipping: {
          address: "",
        },
      },
    };
  },
  mutations: {
    addItemDetails(state, payload) {
      state.order.item.color = payload.value.color;
      state.order.item.size = payload.value.color;
      state.order.item.quantity = payload.value.color;
    },
  },
  getters: {
    currentOrder(state) {
      return state.order;
    },
  },
});

export default store;
