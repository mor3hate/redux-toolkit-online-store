import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import styles from './Cart.module.scss'
import CartProduct from './CartProduct'

const Cart: FC = () => {
	const { cart } = useTypedSelector(state => state)
	return (
		<>
			<div className={styles.cart}>
				<h2>Your cart</h2>
				{cart.map(item => (
					<CartProduct cartProduct={item} key={item.id} />
				))}
				<button className={styles.cart_btn}>
					<Link to='/checkout'>Checkout</Link>
				</button>
			</div>
			<div className={styles.overlay}></div>
		</>
	)
}

export default Cart
