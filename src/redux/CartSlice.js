import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action)=>{
        state.push(action.payload)
    },
    del: (state, action)=>{
        return state.filter((item) => 
            item.id !== action.payload
        )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, del} = CartSlice.actions

export default CartSlice.reducer