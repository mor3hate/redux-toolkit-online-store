import { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'

import styles from './Cart.module.scss'
import { IShopItem } from '../../../types/shop.types'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../store/reducers/CartSlice'

const CartProduct: FC<{ cartProduct: IShopItem }> = ({ cartProduct }) => {
	const dispatch = useDispatch()

	return (
		<div className={styles.cart_item}>
			<img src={cartProduct.image} alt={cartProduct.title} />
			<div>
				<span>{cartProduct.title}</span>
				<span>{cartProduct.price}$</span>
			</div>
			<AiFillDelete
				onClick={() => dispatch(removeItem(cartProduct))}
				size='1.2rem'
				style={{ marginLeft: 'auto', cursor: 'pointer' }}
			/>
		</div>
	)
}

export default CartProduct
