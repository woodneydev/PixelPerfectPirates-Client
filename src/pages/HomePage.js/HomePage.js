import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import CruiseBookCards from "../../components/CruiseBookCards/CruiseBookCards";
import { useEffect, useState } from "react";
import PopupCard from "../../components/PopupCard/PopupCard";
function HomePage() {

    const [newUser, setNewUser] = useState(false);
    const [displayPopup, setDisplayPopup] = useState(false);


    useEffect(() => {
        setTimeout( () => {
            setDisplayPopup(true)
        } , 10000)
    }, [])

    const handeExitClick = () => {
        setDisplayPopup(prev => !prev);
    }

    const handleEmailSubmit = (event) => {
        event.PreventDefault()
    }

    const cardsList = [
        {subhead: "PERFECT DAY AT COCOCAY", head: "WEEKEND GETAWAYS", subfoot: "STARTING FROM", price: "$221", stylingClass: "cococay"},
        {subhead: "7 NIGHT", head: "CARRIBBEAN CRUISES", subfoot: "STARTING FROM", price: "$447", stylingClass: "caribbean"},
        {subhead: "2023-2024", head: "EUROPE CRUISES", subfoot: "STARTING FROM", price: "$168", stylingClass: "europe"},
        {subhead: "2023-2024", head: "ALASKA CRUISES", subfoot: "STARTING FROM", price: "$270", stylingClass: "alaska"},
    ]

    const cardElemts = cardsList.map(destination => {
        return (
            <section className="cruise-cards-container">
              <CruiseBookCards destination={destination} />  
            </section>
            
    
        )
    })

    return (
        <>
            <Hero />
            {cardElemts}
            <form className="form" onSubmit={handleEmailSubmit}>
                {displayPopup ? <PopupCard handeExitClick={handeExitClick} /> : null }
            </form>
            
        </>
    )
}

export default HomePage;