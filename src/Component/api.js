function getCategories() {
	return fetch('https://api.escuelajs.co/api/v1/categories')
		.then((res) => {
			return res.json()
		})
		.then((res) => res)
		.catch((error) => console.error(error))
    
}

// function postCategories() {
// 	return fetch('https://fakestoreapi.com/products/7', {
// 		method: 'PUT',
// 		body: JSON.stringify({
// 			id: 21,
// 			title: 'test product',
// 			price: 13.5,
// 			description: 'lorem ipsum set',
// 			image:
// 				'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-f:1773444830497059832&th=189c8aad5e87b3f8&view=att&disp=safe',
// 			category: 'electronic',
// 		}),
// 	})
// 		.then((res) => res.json())
// 		.then((json) => console.log(json))
// }



function getProducts() {
	return fetch('https://api.escuelajs.co/api/v1/products')
		.then((res) => {
			return res.json()
		})
		.then((res) => res)
		.catch((error) => console.error(error))
}



   module.exports = {
		getCategories,
		getProducts,
		// postCategories
	}
// fetch('https://fakestoreapi.com/products', {
// 	method: 'PUT',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		title: 'test product',
// 		price: 13.5,
// 		description: 'lorem ipsum set',
// 		image:
// 			'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-f:1773444830497059832&th=189c8aad5e87b3f8&view=att&disp=safe',
// 		category: 'electronic',

// 		// title: 'Women Fashion',
// 		// image:
// 		// 	'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-f:1773444830497059832&th=189c8aad5e87b3f8&view=att&disp=safe',
// 		// price: 12.99,
// 	}),
// })
// 	.then((res) => {
// 		return res.json()
// 	})
// 	.then((data) => data)
// 	.catch((error) => console.error(error))