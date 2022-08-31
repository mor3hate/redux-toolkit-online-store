import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { addItem } from '../../store/reducers/CartSlice'
import { IShopItem } from '../../types/shop.types'

import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IShopItem }> = ({ product }) => {
	const { cart } = useTypedSelector(state => state)

	const dispatch = useDispatch()

	const existsInCart = cart.some(p => p.id === product.id)

	return (
		<div className={styles.card}>
			<img src={product.image} alt={product.title} />
			<div>
				<span>{product.title}</span>
				<span>{product.price}$</span>
			</div>
			<button onClick={() => !existsInCart && dispatch(addItem(product))}>
				{existsInCart ? 'Already in cart' : 'Add to cart'}
			</button>
		</div>
	)
}

export default ProductItem
