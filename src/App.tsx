import Layout from './components/layout/Layout'
import { useGetAllProductsQuery } from './store/product/product-api'
import ProductItem from './components/product/ProductItem'

function App() {
	const { data, isLoading, error } = useGetAllProductsQuery(6)

	return (
		<div className='App'>
			<Layout>
				<div className='card_container'>
					{data?.map(item => (
						<ProductItem product={item} key={item.id} />
					))}
				</div>
			</Layout>
		</div>
	)
}

export default App
