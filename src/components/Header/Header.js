import "./Header.scss";
import companyLogo from "../../assets/images/logo/logo.png";
import hamburger from "../../assets/images/icons/hamburger.svg";
import phone from "../../assets/images/icons/phone.svg";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <ul className="nav">
                <li className="nav__item nav__item--hamburger"><img className="nav__item-hamburger" src={hamburger} alt="hamburger menu" /></li>
                <li className="nav__item nav__item--logo"><Link to="/"><img className="nav__item-logo" src={companyLogo} alt="logo" /></Link></li>
                <li className="nav__item nav__item--phone"><img className="nav__item-hamburger" src={phone} alt="phone menu" /> </li>
            </ul>
        </header>
    )
}

export default Header;