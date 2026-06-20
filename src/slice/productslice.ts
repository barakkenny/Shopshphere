import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    productDefault: [{id: 1, name: 'lux soap'}]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action: any) {
            state.productDefault.push(action.payload)
        },
        // removeProduct(state, action){
        //     state.productDefault.filter((pro)=> pro.id !== action.payload)
        // }
    }
});

export const {addProduct} = productSlice.actions
export default productSlice.reducer;