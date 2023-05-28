import './ButtonGroup.css'
import { Button } from "react-bootstrap"


const ButtonGroup = ({ loadImage, loadImages, text1, text2 }) => {

    return (

        <div className="btn-container">

            <Button variant="dark" onClick={loadImage}>{text1}</Button>

            <Button variant="dark" onClick={loadImages}>{text2}</Button>

        </div>
    )
}

export default ButtonGroup