
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import ProductParent from '../ProductParent'

export default function NavbarBar({ cartItem }) {
	console.log(cartItem)
	const navigate = useNavigate()
	return (
		<div
			style={{
				background: 'rgb(242, 242, 242)',
				display: 'flex',
				fontSize: '1rem',
				position: 'flex',
				right: '0',
				top: '0',
				height: '60px',
			}}>
			<Navbar
				style={{
					background: 'rgb(242, 242, 242)',
					display: 'flex',
					fontSize: '1rem',
				}}>
				<Container
					style={{
						fontFamily: 'IBM Plex Sans Condensed, sans-serif',
						textJustify: '1rem',
					}}>
					<h4
						style={{
							fontFamily: 'Dancing Script, cursive',
							textJustify: '3rem',
							fontSize: '11px',
							marginRight: '1rem',
						}}
						onClick={() => navigate('/ProductParent')}>
						El Palacio
					</h4>
					<Navbar.Brand
						href='/Home'
						style={{
							fontFamily: 'IBM Plex Sans Condensed, sans-serif',
							textJustify: '3rem',
							fontSize: '11px',
							marginRight: '1rem',
						}}>
						Home
					</Navbar.Brand>
					<Navbar.Brand
						style={{
							fontFamily: 'IBM Plex Sans Condensed, sans-serif',
							textJustify: '3rem',
							fontSize: '11px',
							marginRight: '1rem',
						}}
						href='/About'>
						About
					</Navbar.Brand>
					<Navbar.Brand
						style={{
							fontFamily: 'IBM Plex Sans Condensed, sans-serif',
							textJustify: '3rem',
							fontSize: '11px',
							marginRight: '1rem',
						}}
						href='/Contact'>
						Contact
					</Navbar.Brand>
				</Container>
			</Navbar>

			{/* <div
				style={{
					marginLeft: ' rem',
					marginTop: '4rem',
					textAlign: 'center',
					fontFamily: 'IBM Plex Sans Condensed, sans-serif',
				}}></div> */}
			<div
				style={{
					marginLeft: '54rem',
					position: 'left',
				}}>
				<FontAwesomeIcon
					icon={faCartShopping}
					onClick={() => navigate('/Cart')}
				/>
				<span
					style={{
						margin: '3px',
						fontSize: '12px',
						fontWeight: '700',
						verticalAlign: 'super',
					}}>
					{cartItem.length === 0 ? '' : cartItem.length}
				</span>
			</div>
		</div>
	)
}
