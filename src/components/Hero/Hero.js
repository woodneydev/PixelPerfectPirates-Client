import ActionButton from "../ActionButton/ActionButton";
import "./Hero.scss";

function Hero() {

    // action button props 
    // {innerText, color = "blue", link = false, handleButtonClick = false}

    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__content-tagline">
                    <p className="hero__content-tagline-sub">Book Ahead & Save</p>
                    <h2 className="hero__content-tagline-header">My Royal Cruise</h2>
                </div>
                <div className="hero__content-btn">
                    <ActionButton innerText={"SIGN IN"} />
                </div>
            </div>
        </section>
    )
}

export default Hero;