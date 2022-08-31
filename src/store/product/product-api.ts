import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IShopItem } from '../../types/shop.types'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: builder => ({
		getAllProducts: builder.query<IShopItem[], number>({
			query: (limit = 6) => `products?limit=${limit}`,
		}),
	}),
})

export const { useGetAllProductsQuery } = productApi
