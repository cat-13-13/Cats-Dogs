import { Container, Navbar } from 'react-bootstrap'
import NavLink from '../NavLink/NavLink'


const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>

            <Container className='justify-content-start'>

                <NavLink path={'/'} text={'Home'} />
                <NavLink path={'/cats'} text={'Cats'} />
                <NavLink path={'/dogs'} text={'Dogs'} />

            </Container>

        </Navbar>

    )
}

export default NavBar