import React from "react"
import img from './assets/react-logo.png'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img src={img} className="nav-image"></img>
                <h2 id="heading1">ReactFacts</h2>
                <h3 id="heading2">React course - Project 1</h3>
            </nav>
        </header>
    )
}