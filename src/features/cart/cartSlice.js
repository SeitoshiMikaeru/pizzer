import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [
        // {
        //     pizzaId: 12,
        //     name: "Mid",
        //     quantity: 2,
        //     unitPrice: 16,
        //     totalPrice: 32,
        // }
    ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload is the new Item
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload is a pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            // payload is a pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            // payload is a pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalAmount = (state) => state.cart.cart.reduce((prev, curr) => prev + curr.quantity, 0);
export const getTotalPrice = (state) => state.cart.cart.reduce((prev, curr) => prev + curr.totalPrice, 0);
export const getCart = (state) => state.cart.cart;
export const getCurrentPizzaQuantityById = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;