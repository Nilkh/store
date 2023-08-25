function getCategories() {
	return fetch('https://api.escuelajs.co/api/v1/categories')
		.then((res) => {
			return res.json()
		})
		.then((res) => (res))
		.catch((error) => console.error(error))
    
}


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
	}

// function postCategories() {
// 		return fetch('https://api.escuelajs.co/api/v1/categories', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				name: 'Women Fashion',
// 				image:
// 					'https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-f:1773444830497059832&th=189c8aad5e87b3f8&view=att&disp=safe',
// 				}),
// 		})
// 			.then((res) => {
// 				return res.json()
// 			})
// 			.then((data) => data)
// 			.catch((error) => console.error(error))
//  }