import { useEffect, useState } from "react"
import catService from "../../services/services"
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import './GalleryPage.css'
import { Container } from "react-bootstrap"


const GalleryPage = () => {

    const [cat, setCat] = useState()

    useEffect(() => {
        loadCat()
    }, [])

    const loadCat = () => {
        catService
            .getRandomCat()
            .then(({ data }) => {
                setCat(...data)
            })
            .catch(err => console.log(err))
    }

    const loadTenCats = () => {
        catService
            .getTenCats()
            .then(({ data }) => {
                setCat(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <article className="cat-gallery">

                <h2>GALLERY</h2>

                <div class='centered-hr-gallery'>
                    <hr />
                </div>

                {!cat ? <p>Loading...</p> :

                    !cat.length ?

                        <img src={cat.url} alt="random cat" />

                        :

                        cat.map((elm, i) => {
                            return < img key={i} src={elm.url} alt="random cat" />
                        })

                }

            </article>

            <ButtonGroup loadCat={loadCat} loadTenCats={loadTenCats} />

        </Container>
    )
}

export default GalleryPage