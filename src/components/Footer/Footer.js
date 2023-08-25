import "./Footer.scss";
import footerLogo from '../../assets/Royal_Caribbean_Group_footer_Logo.jpg';

function Footer() {

    return (
        <>
        <div className="footer">
            <div className="footer__logos">

                <img src={footerLogo} className="footer__image" alt="Royal Footer Logo"></img>



            </div>

        </div>
        </>
    )
}

export default Footer;