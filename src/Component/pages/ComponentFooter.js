import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import GitHub from './GitHub'
function ComponentFooter() {
	return (
		<div
			style={{
				backgroundColor: '#F8F8F8',
				borderTop: '1px solid #E7E7E7',
				textAlign: 'left',
				padding: '20px',
				position: 'flex',
				left: '0',
				bottom: '0',
				height: '60px',
				width: '100%',
			}}>
			<Container>
				<Row>
					<Col
						style={{
							color: '#E7E7E7',
						}}>
						Maker: NK
					</Col>
				
						{/* <GitHub /> */}
					
				</Row>
			</Container>
		</div>
	)
}

export default ComponentFooter
