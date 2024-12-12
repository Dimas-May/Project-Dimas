import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:  Iproduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
}

export const productSlice = createSlice ({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            return action.payload
        }
    }
})

export const {setProduct} = productSlice.actions
export default productSlice.reducer
