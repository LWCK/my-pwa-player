import React from 'react'
import './CarrouselComponent.css'

import { Carousel } from 'react-bootstrap'

const CarrouselComponent: React.FC<any> = ({ i, event }: any) => {

    const handleClick = event

    const carrouselList = i?.map((i: any) =>
        <Carousel.Item key={i.id}>

            <img
                className="d-block"
                src={i.fields.image[0].url ? i.fields.image[0].url : '/banner.png'}
                alt="slide"
                onClick={() => handleClick(i)}
            />
            {/* <Carousel.Caption className='font'>
                <h3><span className='shadowed'>{i.fields.title}</span></h3>
                <p><span className='shadowed'>{i.fields.artist}</span></p>
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