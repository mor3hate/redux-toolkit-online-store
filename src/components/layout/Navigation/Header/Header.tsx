import { FC } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useOutside } from '../../../../hooks/useOutside'
import Cart from '../../../product/cart/Cart'

const Header: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const cartShowHandler = () => {
		setIsShow(!isShow)
	}

	return (
		<header ref={ref}>
			<Link to='/'>E-commerce</Link>
			<button onClick={cartShowHandler} style={{ zIndex: '2' }}>
				<AiOutlineShopping size='1.5rem' />
			</button>
			{isShow ? <Cart /> : null}
		</header>
	)
}

export default Header
