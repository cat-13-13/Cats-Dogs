import './HomePage.css'
import { Button, Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


const HomePage = () => {

    return (

        <Container>

            <h1>CATS <span>&</span> DOGS</h1>

            <div className='centered-hr-container'>
                <hr />
            </div>

            <Row className='d-flex justify-content-center'>

                <Col>
                    <img src="https://cats.com/wp-content/uploads/2022/09/cute-kitten-sit-on-laptop-compressed.jpg"
                        alt="cat with computer" />

                    <Link to='/cats' className="d-block home-btn">
                        <Button variant="dark">Do you want to see cats?</Button>
                    </Link>
                </Col>

                <Col>
                    <img src="https://img.freepik.com/premium-photo/dog-using-computer-nerd-glasses-laptop-keyboard_67473-1841.jpg?w=2000"
                        alt="dog with computer" />

                    <Link to='/dogs' className="d-block home-btn">
                        <Button variant="dark">Or do you prefer dogs?</Button>
                    </Link>
                </Col >

            </Row>

        </Container>
    )
}

export default HomePage