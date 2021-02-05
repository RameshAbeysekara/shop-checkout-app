import { createStore } from "vuex";

const store = createStore({
  state: {
    user: "",
    currentOrder: {
      item: {
        id: "",
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
    orders: [],
  },
  mutations: {
    addLoginDetails(state, payload) {
      state.user = payload.value;
      console.log("logged in user: ", state.user);
      localStorage.user = state.user;
    },
    logout(state) {
      state.user = "";
      localStorage.removeItem("user");
    },
    addItemDetails(state, payload) {
      state.currentOrder.item.id = payload.value.id;
      state.currentOrder.item.color = payload.value.color;
      state.currentOrder.item.size = payload.value.size;
      state.currentOrder.item.quantity = payload.value.quantity;
    },
    addShippingDetails(state, payload) {
      state.currentOrder.shipping.firstName = payload.value.firstName;
      state.currentOrder.shipping.lastName = payload.value.lastName;
      state.currentOrder.shipping.phoneNumber = payload.value.phoneNumber;
      state.currentOrder.shipping.addressLine1 = payload.value.addressLine1;
      state.currentOrder.shipping.addressLine2 = payload.value.addressLine2;
    },
    addPaymentDetails(state, payload) {
      state.currentOrder.payment.cardNumber = payload.value.cardNumber;
      state.currentOrder.payment.expireDate = payload.value.expireDate;
      state.currentOrder.payment.cvCode = payload.value.cvCode;
      state.currentOrder.payment.cardName = payload.value.cardName;
      state.orders.push(state.currentOrder);
      if (localStorage) {
        var orders;
        if (!localStorage["orders"]) orders = [];
        else orders = JSON.parse(localStorage["orders"]);
        if (!(orders instanceof Array)) orders = [];
        orders.push({
          user: localStorage.user,
          orderDetails: state.currentOrder,
        });
        localStorage.setItem("orders", JSON.stringify(orders));
      }
    },
  },
  getters: {
    currentOrder(state) {
      console.log(state.orders);
      return state.orders[0];
    },
  },
});

export default store;
