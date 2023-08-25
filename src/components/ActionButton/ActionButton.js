import { Link } from "react-router-dom"
import "./ActionButton.scss";

function ActionButton({innerText, color = "blue", handleButtonClick = false, link = false, }) {

    const defaultClass = color === "blue" ? "action-button blue" : "action-button yellow"

    if (link) {
        return <Link to={link}><button className={defaultClass} >{innerText}</button></Link> 
    }
    
    if (handleButtonClick) {
        return <button className={defaultClass} onClick={handleButtonClick}>{innerText}</button>
    }

    return (
        <button className={defaultClass} >{innerText}</button>
    )
}

export default ActionButton;