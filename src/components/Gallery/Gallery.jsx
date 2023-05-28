import { Container } from "react-bootstrap"
import ButtonGroup from "../ButtonGroup/ButtonGroup"


const Gallery = ({ title, data, functionOne, functionMultiple }) => {

    return (

        <Container className="cat-gallery">

            <h2>{title} GALLERY</h2>

            <div className='centered-hr-gallery'>
                <hr />
            </div>

            {!data ? <p>Loading...</p> :

                !data.length ?

                    <>
                        <img src={title === `CAT'S` ? data.url : data.message} alt={title} />

                        <ButtonGroup loadImage={functionOne} loadImages={functionMultiple}
                            text1={'I WANT TO SEE ANOTHER ONE!'} text2={'OKAY, I NEED TO SEE MORE!'} />
                    </>

                    :

                    <>
                        {
                            title === `CAT'S` ?
                                data.map((elm, i) => {
                                    return < img key={i} src={elm.url} alt={title} />
                                })
                                :
                                data.map((elm, i) => {
                                    console.log(elm)
                                    return < img key={i} src={elm} alt={title} />
                                })

                        }

                        < ButtonGroup loadImage={functionOne} loadImages={functionMultiple}
                            text1={'THAT WAS TOO MUCH, SHOW ME JUST ONE'} text2={'NOW I WANT MORE!'} />
                    </>

            }

        </Container>

    )

}

export default Gallery