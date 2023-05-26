import { Link } from "react-router-dom"


const ButtonGroup = ({ loadCat, loadTenCats }) => {

    return (

        <div className="btn-group">

            <Link className="btn"> <button onClick={loadCat} >I WANT TO SEE ANOTHER ONE!</button></Link>

            <Link className="btn"> <button onClick={loadTenCats} >OKAY, I NEED TO SEE 10 OF THEM</button></Link>

            <Link to='/' className="btn">GO BACK TO HOME PAGE</Link>

        </div>
    )
}

export default ButtonGroup