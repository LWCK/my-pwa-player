import React from 'react'
import './NavbarComponent.css'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent: React.FC<any> = ({ title }: any) => {

    return (
        <Navbar id="NavbarComponent" bg="dark" variant="dark" key={'sm'} expand={'sm'} className="px-3">
            <Navbar.Brand href="/" className='titleHeaderCanva'>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-sm'} />
            <Navbar.Offcanvas
                id='offcanvasNavbar-expand-sm'
                aria-labelledby='offcanvasNavbarLabel-expand-sm'
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm' className='titleHeaderCanva'>
                        {title}
                    </Offcanvas.Title>
                </Offcanvas.Header >
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 nav-link">
                        <Navbar.Text><Link to="/" className='mx-2'><span>Home</span></Link></Navbar.Text>
                        <Navbar.Text><Link to="/Player" className='mx-2'><span>Player</span></Link></Navbar.Text>
                        <Nav.Link href='https://airtable.com/shrtWpyUK1yXzEDWO' target='_blank' className='desktop'><span>Ajouter un titre ?</span></Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas >
        </Navbar >
    )
}

export default NavbarComponent