import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Linkedin() {
	return (
		<div
			style={{
				borderRadius: '50%',
				overflow: 'hidden',
				display: 'inline-block',
			}}>
			<Button
				variant='secondary'
				href='https://www.linkedin.com/in/nilofar-khsrawy-b4a724268/'
				size='sm'
				style={{ transformOrigin: '0 0' }}>
				<FontAwesomeIcon icon={faLinkedin} size='1x' />
			</Button>
		</div>
	)
}
