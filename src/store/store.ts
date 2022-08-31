import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './product/product-api'
import cartReducer from './reducers/CartSlice'

export const store = configureStore({
	reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
})

export type RootState = ReturnType<typeof store.getState>
