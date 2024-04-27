import { createSlice } from "@reduxjs/toolkit"


const initialState = []
const Card = createSlice({
    name: "card",
    initialState,
    // function يزود العدد //
    reducers: {
        addProducts: (state, action) => {
            const product = state.find(item => item.id == action.payload.id)
            if (product) {

                product.count++

            } else {
                state.push({ ...action.payload, count: 1 })

            }
        },
        // function  يخفي ال card //
        removProducts: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        //function يقلل العدد ثم يخفيه //
        removeSpecificProduct: (state, action) => {

            const exproduct = state.findIndex(item => item.id === action.payload.id)
            if (exproduct !== -1) {

                const product = state[exproduct]

                if (product.count > 1) {
                    product.count--

                }
                else {
                    state.splice(exproduct, 1)
                }

            }
        }
    },
})
export const { addProducts, removProducts, removeSpecificProduct } = Card.actions
export default Card.reducer
