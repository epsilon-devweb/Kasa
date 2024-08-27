import { Link } from "react-router-dom"
import "../../scss/style.scss"

export default function Header() {
    return(
        <header className="header">
            <img className="header_img" src="../../assets/images/logo-header.svg" alt="header_logo"/>
            <div className="header_link">
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            </div>
        </header>
    )
}