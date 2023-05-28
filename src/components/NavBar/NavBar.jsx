import './NavBar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container className='justify-content-start'>

                <Link to="/" className='text-decoration-none custom-link'>
                    <Nav.Link as='span' href='/'>Home</Nav.Link>
                </Link>

                <Link to="/gallery" className='text-decoration-none custom-link'>
                    <Nav.Link as='span' href='/gallery'>Gallery</Nav.Link>
                </Link>

            </Container>
        </Navbar>
    )
}

export default NavBar