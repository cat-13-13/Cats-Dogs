import './ButtonGroup.css'
import { Button } from "react-bootstrap"


const ButtonGroup = ({ loadCat, loadTenCats }) => {

    return (

        <div className="btn-container">

            <Button variant="dark" onClick={loadCat}>I WANT TO SEE ANOTHER ONE!</Button>

            <Button variant="dark" onClick={loadTenCats}>OKAY, I NEED TO SEE 10 OF THEM</Button>

        </div>
    )
}

export default ButtonGroup