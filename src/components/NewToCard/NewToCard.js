import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./NewToCard.scss";
import GuideExperimental from "../GuideExperimental.js/GuideExperimental";

function NewToCard() {

    let [count, setCount] = useState(0);

    //button props
    //innerText, color = "blue", link = false, handleButtonClick = false

    const handleButtonClick = () => {
        setCount(prev => prev + 1)
    }

    if (count > 0) {
        return (
            <div className="new-to">
                <GuideExperimental />
            </div>
        )
    }

    return (
        <div className="new-to">
            <h2 className="new-to__title">New To Royal?</h2>
            <ActionButton innerText={"GET STARTED"} color={"yellow"} handleButtonClick={handleButtonClick} />
        </div>
    )
}

export default NewToCard;