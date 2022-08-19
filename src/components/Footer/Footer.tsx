import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

const Footer: React.FC<any> = () => {

    return (
        <Container fluid className="Footer py-3">
            <p>Si vous souhaitez ajouter des titres <br /> cliquez sur le <span><a href='https://airtable.com/shrtWpyUK1yXzEDWO' target='_blank'>LIEN</a></span></p>
            by <strong>iTAHITI LAB</strong>
        </Container>
    )
}

export default Footer