import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/product/Checkout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
