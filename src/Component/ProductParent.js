import { getProducts } from './api'
import React, { useState, useEffect ,useContext} from 'react'
import ProductChild from './ProductChild'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function ProductParent({ handleAddProductToCart, }) {
	const [product, setProduct] = useState({})

	useEffect(() => {
		getProducts().then((data) => {
			// console.log(data)
			setProduct(data)
		})
	}, [])

	return (
		<>
			<Container>
				<Row>
					{Object.values(product).map((item) => {
						return (
							<ProductChild
								product={item}
								key={item.id}
								handleAddProductToCart={handleAddProductToCart}
							></ProductChild>
						)
					})}
				</Row>
			</Container>
		</>
	)
}
