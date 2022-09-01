import Layout from './components/layout/Layout'
import { useGetAllProductsQuery } from './store/product/product-api'
import ProductItem from './components/product/ProductItem'
import SkeletonLoader from './shared/loaders/SkeletonLoader'

function App() {
	const { data, isLoading, error } = useGetAllProductsQuery(6)

	return (
		<div className='App'>
			<Layout>
				{error && <div>Something went wrong</div>}
				{isLoading ? (
					<div>
						<SkeletonLoader count={3} />
					</div>
				) : (
					<div className='card_container'>
						{data?.map(item => (
							<ProductItem product={item} key={item.id} />
						))}
					</div>
				)}
			</Layout>
		</div>
	)
}

export default App
