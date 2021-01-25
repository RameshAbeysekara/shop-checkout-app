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
        shipping: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          addressLine1: "",
          addressLine2: "",
        },
        payment: {
          cardNumber: "",
          expireDate: "",
          cvCode: "",
          cardName: "",
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
    addShippingDetails(state, payload) {
      state.order.shipping.firstName = payload.value.firstName;
      state.order.shipping.lastName = payload.value.lastName;
      state.order.shipping.phoneNumber = payload.value.phoneNumber;
      state.order.shipping.addressLine1 = payload.value.addressLine1;
      state.order.shipping.addressLine2 = payload.value.addressLine2;
    },
    addPaymentDetails(state, payload) {
      state.order.payment.cardNumber = payload.value.cardNumber;
      state.order.payment.expireDate = payload.value.expireDate;
      state.order.payment.cvCode = payload.value.cvCode;
      state.order.payment.cardName = payload.value.cardName;
    },
  },
  getters: {
    currentOrder(state) {
      return state.order;
    },
  },
});

export default store;
