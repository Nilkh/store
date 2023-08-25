import React from "react"
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function AllCategories({category}) {
	console.log(category)
	const navigate = useNavigate()
	return (
		<>
			<Card
				border='secondary'
				style={{
					width: '18rem',
					margin: '5rem',
					textAlign: 'center',
					positionA: 'center',
				}}>
				<Card.Img variant='top' src={category.image} />
				<Card.Body>
					<Card.Title style={{ color: 'ffff' }}></Card.Title>
					<Card.Text>{category.name}</Card.Text>
				</Card.Body>
				<Button
					variant='outline-dark'
					size='sm'
					onClick={() => navigate('/ProductParent')}>
					Start
				</Button>
			</Card>
		</>
	)
}