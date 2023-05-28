import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import './NavLink.css'


const NavLink = ({ path, text }) => {

    return (

        <Link to={path} className='text-decoration-none custom-link'>
            <Nav.Link as='span' href={path}>{text}</Nav.Link>
        </Link>

    )

}

export default NavLink