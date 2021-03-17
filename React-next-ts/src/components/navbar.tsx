import styles from '../styles/pages/Home.module.css'
import React from 'react'
import api from '../services/api';

export function Navbar() {

    function logout() {
        localStorage.removeItem("Authorization")
        return window.location.replace("/login")
    }

    return (
        <header className={styles.navbarFormat}>
            <nav className="navbar navbar-expand-sm format-nav">
                <div className="container">
                    <a href="/insert-words" className={"navbar-brand"}>MyWords</a>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/who-we-are" className="nav-link">Quem somos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={logout} className="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}