import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        incrementCounter(state, action){
            state.count += action.payload;
        },
        decrementCounter(state, action: PayloadAction<number>) {
             state.count--;
        },
        resetCounter(state, action){
             state.count = 0
        }
    }
})

export const { incrementCounter, decrementCounter,resetCounter } = countSlice.actions;
export default countSlice.reducer;
