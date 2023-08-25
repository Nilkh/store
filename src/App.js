import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './Component/index'
import 'atropos/css'
import NavbarBar from './Component/pages/Navbar'
import Home from './Component/pages/Home'
import Contact from './Component/pages/Contact'
import About from './Component/pages/About'
import Cart from './Component/pages/Cart'
import ProductParent from './Component/ProductParent'
import React, { useState, useEffect } from 'react'
import ComponentFooter from './Component/pages/ComponentFooter'

function App() {
	const [cartItem , setCartItem] = useState([])
   function handleAddProductToCart(product) {
			const productExist = cartItem.find((item) => item.id === product.id)
			if (productExist) {
				setCartItem(
					cartItem.map((item) =>
						item.id === product.id
							? { ...productExist, quantity: productExist.quantity + 1 }
							: item
					)
				)
			} else {
				setCartItem([...cartItem, { ...product, quantity: 1 }])
			}
		};

		function handleRemoveProduct(product){
         const productExist = cartItem.find((item) => item.id === product.id)
		 if(productExist.quantity === 1){
			setCartItem(cartItem.filter((item) =>  item.id !== product.id));
		 }else{
			setCartItem(
				cartItem.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity -1}: item)
			)
		 }
		}

	return (
		<>
			<NavbarBar cartItem={cartItem} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/Index' element={<Index />} />
				<Route
					path='/Cart'
					element={
						<Cart
							cartItem={cartItem}
							handleAddProductToCart={handleAddProductToCart}
							handleRemoveProduct={handleRemoveProduct}
						/>
					}
				/>
				<Route
					path='/ProductParent'
					element={
						<ProductParent
							cartItem={cartItem}
							handleAddProductToCart={handleAddProductToCart}
							handleRemoveProduct={handleRemoveProduct}
						/>
					}
				/>
			</Routes>

			<ComponentFooter />
		</>
	)	
}
export default App
