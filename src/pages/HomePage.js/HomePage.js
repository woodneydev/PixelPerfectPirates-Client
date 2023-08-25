import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import CruiseBookCards from "../../components/CruiseBookCards/CruiseBookCards";
import { useEffect, useState } from "react";
import PopupCard from "../../components/PopupCard/PopupCard";
import axios from "axios";
import NewToCard from "../../components/NewToCard/NewToCard";


function HomePage() {

    const initialState = {
        email: "",
    }

    const [newUser, setNewUser] = useState(false);
    const [displayPopup, setDisplayPopup] = useState(false);
    const [formData, setFormData] = useState({initialState})

    const postUrl = `http://localhost:8080/users/user`

    useEffect(() => {
        setTimeout( () => {
            setDisplayPopup(true)
        } , 10000)
    }, [])

    const handeExitClick = () => {
        setDisplayPopup(prev => !prev);
    }

    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log(formData)
    }

    const handleEmailSubmit = (event) => {
        event.preventDefault()

        const postObj = {
            email: formData.email
        }

        axios.post(postUrl, postObj)
            .then(response => {
                console.log(response)

                setFormData(initialState)
                setDisplayPopup(false)
                
            })
            .catch(error => {
                console.log(error.response.data)
                if (error.response.data.message.includes("not found")) {
                    setNewUser (true)
                }
                
                setFormData(initialState)
                setDisplayPopup(false)
            })
    }

    const travelTerminology = newUser ? "WEEKEND TRAVEL" : "WEEKEND GETAWAYS";

    const cardsList = [
        {subhead: "PERFECT DAY AT COCOCAY", head: travelTerminology, subfoot: "STARTING FROM", price: "$221", stylingClass: "cococay"},
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
            <NewToCard />
            {cardElemts}
            <form className="form" onSubmit={handleEmailSubmit}>
                {displayPopup ? <PopupCard formData={formData} handeExitClick={handeExitClick} handleFormChange={handleFormChange} /> : null }
            </form>
            
        </>
    )
}

export default HomePage;