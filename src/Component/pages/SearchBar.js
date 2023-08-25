import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
	return (
		<>
			<Form
				className='d-flex'
				style={{ marginTop: '2rem', position: 'relative' }}>
				<Form.Control
					type='search'
					placeholder='Search'
					style={{
						paddingLeft: '30px', // Add left padding to accommodate the icon
					}}
					className='me-1'
					aria-label='Search'
				/>
				<span
					style={{
						position: 'absolute',
						top: '50%',
						left: '10px',
						transform: 'translateY(-50%)',
					}}>
					<FontAwesomeIcon icon={faSearch} size='1x' />
				</span>
				<Button
					variant='outline-success'
					style={{
						marginTop: '0rem',
						fontFamily: 'IBM Plex Mono, monospace, Roboto, sans-serif',
						borderRadius: '10px',
						textTransform: 'uppercase',
                       marginLeft: '1px'
					}}>
					Search
				</Button>
			</Form>
		</>
	)
}
