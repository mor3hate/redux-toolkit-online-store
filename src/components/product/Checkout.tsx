import { FC } from 'react'
import Layout from '../layout/Layout'

const Checkout: FC = () => {
	return (
		<Layout>
			<div className='checkout-text'>
				<h1>Your order is placed</h1>
				<p>Thank you!</p>
			</div>
		</Layout>
	)
}

export default Checkout
