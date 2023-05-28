import './HomePage.css'
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const HomePage = () => {

    return (
        <Container>

            {/* <h1>THIS IS A CATS WEB</h1> */}
            <h1>CATS <span>&</span> DOGS</h1>


            <div class='centered-hr-container'>
                <hr />
            </div>

            <img src="https://i.pinimg.com/736x/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg" alt="cat with computer" />

            <Link to='/gallery' className="d-block home-btn">
                <Button variant="dark">Do you want to see our cats?</Button>
            </Link>

        </Container>
    )
}

export default HomePage