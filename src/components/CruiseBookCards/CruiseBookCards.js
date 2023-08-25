import "./CruiseBookCards.scss"
import ActionButton from "../ActionButton/ActionButton";

function CruiseBookCards({destination}) {
    return (
        <section key={destination.head} className={`cruise-card ${destination.stylingClass}`}>
            <div>
                <p className="cruise-card__subhead">{destination.subhead}</p>
                <h2 className="cruise-card__head">{destination.head}</h2>
                <p className="cruise-card__subfoot">{destination.subfoot}</p>
                <h3 className="cruise-card__price">{destination.price}</h3>
            </div>
        
        <ActionButton innerText={"Book Now"} color="yellow" />
    </section>
    )
}

export default CruiseBookCards;