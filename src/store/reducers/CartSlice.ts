import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IShopItem } from '../../types/shop.types'

const initialState: IShopItem[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IShopItem>) => {
			state.push(action.payload)
		},
		removeItem: (state, action: PayloadAction<{ id: number }>) => {
			return state.filter(s => s.id !== action.payload.id)
		},
	},
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
