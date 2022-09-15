import React from 'react'
import './CarrouselComponent.css'

import { Carousel } from 'react-bootstrap'

const CarrouselComponent: React.FC<any> = ({ i, event }: any) => {

    const handleClick = event
    // console.log(i[0].fields.image[0].url)

    const carrouselList = i?.map((param: any) =>
        <Carousel.Item key={param.id}>
            <img
                className="d-block"
                src={param.fields.image[0].url}
                alt="slide"
                onClick={() => handleClick(i)}
            />
            {/* <Carousel.Caption className='font'>
                <h3><span className='shadowed'>{param.fields.title}</span></h3>
                <p><span className='shadowed'>{param.fields.artist}</span></p>
            </Carousel.Caption> */}
        </Carousel.Item>
    )

    return (
        <Carousel className="carlist" indicators>
            {i && carrouselList}
        </Carousel>
    )
}

export default CarrouselComponent