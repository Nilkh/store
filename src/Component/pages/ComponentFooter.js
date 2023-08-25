import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GitHub from './GitHub'
import Navbar from 'react-bootstrap/Navbar'
import Linkedin from './Linkedin'
import About from './About'
import Home from './Home'
import Contact from './Contact'
 export default function ComponentFooter() {
	return (
		<footer style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
			<Row>
				<Col
					style={{
						marginTop: '2rem',
						marginLeft: '3rem',
						marginBottom: '1rem',
					}}>
					<Navbar.Brand href='/Home'>Home</Navbar.Brand>
				</Col>
			</Row>
			<Row>
				<Col
					style={{
						marginTop: '2rem',
						marginLeft: '3rem',
						marginBottom: '1rem',
					}}>
					<Navbar.Brand href='/About'>About</Navbar.Brand>
				</Col>
			</Row>
			<Row>
				<Col
					style={{
						marginTop: '2rem',
						marginLeft: '3rem',
						marginBottom: '1rem',
					}}>
					<Navbar.Brand href='/Contact'>Contact</Navbar.Brand>
				</Col>
			</Row>

			<Row>
				<Col
					style={{
						borderTop: '2px solid grey',
						paddingTop: '6px',
						marginLeft: '4rem',
						marginRight: '4rem',
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginRight: '53rem',
							marginBottom: '1rem',
						}}>
						<GitHub />
						<Linkedin />
					</div>
				</Col>
			</Row>
		</footer>
	)
}
