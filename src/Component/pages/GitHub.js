
import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GitHub() {
	return (
		<div
			style={{
				borderRadius: '50%',
				overflow: 'hidden',
				display: 'inline-block',
			}}>
			<Button
				variant='secondary'
				href='https://github.com/Nilkh'
				target='_blank'
				size='sm'
				style={{ transformOrigin: '0 0' }}>
				<FontAwesomeIcon icon={faGithub} size='1x' />
			</Button>
		</div>
	)
}
