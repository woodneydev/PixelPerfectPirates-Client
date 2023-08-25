import ActionButton from "../ActionButton/ActionButton";
import exitIcon from "../../assets/images/icons/close-icon-blue.svg"
import "./PopupCard.scss";

function PopupCard({handeExitClick, handleFormChange, formData}) {

    return (
        <div className="popup-container">
            <div className="popup">
                <div className="popup__img">
                    <div className="popup__img-exit" onClick={handeExitClick}><img className="popup__img-exit-icon" src={exitIcon} /> </div>
                </div>
                <h3 className="popup__headline">Sign up and recieve $50 OFF your next sailing!</h3>
                <p className="popup__details popup__details--one">Plus, get access to exclusive discounts, promotions and special rates</p>
                <div className="popup__interact">
                    <label className="popup__interact-label">
                        <span className="popup__interact-label-text">Enter your email address</span>
                    <input className="popup__interact-label-input" name="email" onChange={handleFormChange} value={formData.email} />  
                    </label>
                    
                    <ActionButton innerText={"Sign up"} />
                </div>
            </div>
        </div>
    )
}

export default PopupCard;