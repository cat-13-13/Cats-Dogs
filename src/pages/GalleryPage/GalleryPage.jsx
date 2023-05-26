import { useEffect, useState } from "react"
import catService from "../../services/services"
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import './GalleryPage.css'

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
        <>
            <article className="cat-gallery">

                <h2>GALLERY</h2>

                {!cat ? <p>Loading...</p> :

                    !cat.length ?

                        <img src={cat.url} alt="random cat" />

                        :

                        cat.map((elm, i) => {
                            return < img key={i} src={elm.url} alt="random cat" />
                        })

                }

            </article>

            <hr />

            <ButtonGroup loadCat={loadCat} loadTenCats={loadTenCats} />


        </>
    )
}

export default GalleryPage