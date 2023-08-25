import "./Footer.scss";
import footerLogo from '../../assets/images/logo/Royal_Caribbean_Group_Logo.jpg';
import footerWhite from '../../assets/images/logo/royal-caribbean-logo-white.svg';
import celebrityCruises from '../../assets/images/logo/celebrity-cruises-logo.svg';
import silverSea from '../../assets/images/logo/silversea-logo-white.svg';

function Footer() {

    return (
        <>
        <div className="footer">
            <div className="footer__logos">

                <div className="footer__logos--container">

                <img src={footerLogo} className="footer__image" alt="Royal Footer Logo"></img>


                <img src={footerWhite} className="footer__image2" alt="Another Logo"></img>

                <img src={celebrityCruises} className="footer__image3" alt="Another Logo Logo"></img>
           
                <img src={silverSea} className="footer__image4" alt="Last Logo"></img>

                </div>

            </div>

        </div>
        </>
    )
}

export default Footer;