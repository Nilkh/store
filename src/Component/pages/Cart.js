import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProductParent from '../ProductParent'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
export default function Cart({
	cartItem,
	handleAddProductToCart,
	handleRemoveProduct,
    }) {
	const navigate = useNavigate()
	const totalPrice = cartItem.reduce(
		(price, item) => price + item.quantity * item.price,
		0
	)
	
	return (
		<>
			<Button
				onClick={() => navigate('/ProductParent')}
				variant='outline-dark'
				size='md'
				style={{ marginTop: '1rem', color: 'withe' }}>
				Back
			</Button>

			<Container
				style={{
					margin: ' 30px auto',
					width: '60rem',
					border: '2px solid black ',
					borderRadius: '5px',
				}}>
				<Card
					style={{
						// display: 'flex',
						// alignItems: 'center',
						// paddingTop: '20px',
						// paddingLeft: '20px',
						// paddingBottom: '20px',
						// fontSize: '20px',
						// fontWeight: '700',
						// marginLeft: '1rem',
						border: 'none',
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
							height: '50px',
							borderBottom: '2px solid black ',
							borderRight: '5px',
						}}>
						Cart Items
					</div>
					{cartItem.length === 0 && (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '20px',
								fontWeight: '700',
								paddingTop: '20px',
								paddingBottom: '20px',
							}}>
							No items are added.
						</div>
					)}
					<div>
						{cartItem.map((item) => {
							return (
								<div
									key={item.id}
									style={{
										display: 'flex',
										alignItems: 'center',
										paddingTop: '20px',
										paddingLeft: '1rem',
										paddingBottom: '20px',
										fontSize: '20px',
										fontWeight: '700',
										marginLeft: '5%',
									}}>
									<Card.Img
										style={{
											width: '100px',
											height: 'auto',
											border: '2px solid black',
											marginRight: '1rem',
										}}
										variant='top'
										src={item.images}
										alt={item.name}
									/>

									<Card.Title
										style={{
											display: 'flex',
											alignItems: 'center',
											height: '50px',
										}}>
										<div style={{ marginRight: '2rem' }}>{item.title}</div>
									</Card.Title>

									<Card.Text
										style={{
											fontFamily:
												'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
											marginTop: '0,1rem',
										}}>
										<div style={{ marginTop: '1rem', marginRight: '1rem' }}>
											{item.quantity} * ${item.price}
										</div>
									</Card.Text>
									<Button
										style={{
											marginRight: '1rem',
											fontWeight: '700',

											fontSize: '1rem',
										}}
										variant='outline-dark'
										onClick={() => handleRemoveProduct(item)}>
										-
									</Button>

									<Button
										style={{
											marginRight: '1rem',
											fontWeight: '700',
											fontSize: '1rem',
											transform: 'translateY(3px)',
										}}
										variant='outline-dark'
										onClick={() => handleAddProductToCart(item)}>
										+
									</Button>
								</div>
							)
						})}
					</div>
				</Card>
				<Card.Text
					style={{
						fontFamily:
							'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
					}}>
					<div
						style={{
							display: 'flex',
							paddingTop: '20px',
							paddingLeft: '1rem',
							paddingBottom: '20px',
							fontSize: '20px',
							fontWeight: '700',
							marginLeft: '5%',
							borderTop: '2px solid black ',
							fontFamily:
								'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
						}}>
						Total price:
						<Button
							variant='outline-dark'
							size='lg'
							style={{
								color: 'withe',
								marginLeft: '20rem',
							}}>
							Pay
						</Button>
						<div
							style={{
								fontFamily:
									'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
								display: 'flex',
								paddingLeft: '20rem',
							}}>
							${totalPrice}
						</div>
					</div>
				</Card.Text>
			</Container>
		</>
	)
}
