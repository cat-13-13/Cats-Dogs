import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <div>
            <h1>THIS IS A CATS WEB</h1>

            <hr />

            <img src="https://i.pinimg.com/736x/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg" alt="cat with computer" />

            <div className="btn-group">

                <Link to='/gallery' className="btn">Do you want to see our cats?</Link>

            </div>


        </div>
    )
}

export default HomePage