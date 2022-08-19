import React from 'react'
import './Header.css'
import NavbarComponent from '../NavbarComponent/NavbarComponent'

const Header: React.FC<any> = ({ title }: any) => {

    return (
        <NavbarComponent title={title} />
    )
}

export default Header