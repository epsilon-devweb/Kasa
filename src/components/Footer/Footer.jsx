import footerLogo from '../../assets/images/logo-footer.svg';

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer_content">
                <img className="footer_img" src={footerLogo} alt='footerLogo'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}