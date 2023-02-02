import React from 'react'
import { Link } from 'react-router-dom'
import About from '../About/About'
import './Header.css'
function Header() {
    return (
        <div className='header_container'>
            <div className='header_content'>
                <div className='header_content_logo header_text'><Link to="/">React Food</Link></div>
                <div className='header_content_links'>
                    <div className='header_content_about header_text'><Link to="/about/">Обо мне</Link></div>
                    <div className='header_content_contacts header_text'><Link to="/contacts">Контакты</Link></div>
                    <div className='header_content_projects header_text'><Link to="https://maksim-ash.ru/#6">Проекты</Link></div>
                </div>
            </div>

        </div>
    )
}

export default Header