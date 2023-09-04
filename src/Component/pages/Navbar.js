import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import CategoriesParent from '../CategoriesParent'
export default function NavbarBar({ cartItem, category }) {
	// console.log(cartItem)
	const navigate = useNavigate()
	return (
		<>
			<Navbar expand='xxl' className='bg-body-tertiary mb-3'>
				<Container fluid>
					<Navbar.Toggle aria-controls='offcanvasNavbar' />
					<Navbar.Offcanvas
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id='offcanvasNavbarLabel'>
								Palacio
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<Nav.Link href='/Home'>Home</Nav.Link>
								<Nav.Link href='/Index'>Electronics</Nav.Link>
								<Nav.Link href='/Index'>Jewelry</Nav.Link>
								<Nav.Link href='/Index'>Man's Clothing</Nav.Link>
								<Nav.Link href='/Index'>Women Clothing</Nav.Link>
								<Nav.Link href='/Index'>All categories</Nav.Link>
								<NavDropdown title='Dropdown' id='offcanvasNavbarDropdown'>
									<NavDropdown.Item href='#action3'></NavDropdown.Item>
									<NavDropdown.Item href='#action4'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action5'>
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className='d-flex'>
								<Form.Control
									type='search'
									placeholder='Search'
									className='me-2'
									aria-label='Search'
								/>
								<Button variant='outline-success'>Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>

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
				</Container>
			</Navbar>
		</>
	)
}
