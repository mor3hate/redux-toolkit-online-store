import { FC, PropsWithChildren } from 'react'
import Header from './Navigation/Header/Header'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
