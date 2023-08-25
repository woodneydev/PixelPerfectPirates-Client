import { Link } from "react-router-dom"
import "./ActionButton.scss";

function ActionButton({innerText, color = "blue", link = false, handleButtonClick = false}) {

    const defaultClass = color === "blue" ? "action-button blue" : "action-button yellow"

    if (link) {
        return <Link to={Link}><button className={defaultClass} >{innerText}</button></Link> 
    }
    
    if (handleButtonClick) {
        return <button className={defaultClass} onClick={handleButtonClick}>{innerText}</button>
    }

    return (
        <button className={defaultClass} >{innerText}</button>
    )
}

export default ActionButton;