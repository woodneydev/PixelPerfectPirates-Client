import ActionButton from "../ActionButton/ActionButton";
import "./NewToCard.scss";

function NewToCard() {

    //button props
    //innerText, color = "blue", link = false, handleButtonClick = false

    return (
        <div className="new-to">
            <h2 className="new-to__title">New To Royal?</h2>
            <ActionButton innerText={"GET STARTED"} color={"yellow"} link={"/"} />
        </div>
    )
}

export default NewToCard;