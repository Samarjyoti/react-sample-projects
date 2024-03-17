import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./Maincontent"
import React from "react"
import ReactDOM from "react-dom/client"
import './style.css'

 function App() {
    return (
        <div className="page">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)