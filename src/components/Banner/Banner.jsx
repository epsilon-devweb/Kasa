import bannerHome from '../../assets/images/banner-home.webp';
import bannerAbout from '../../assets/images/banner-about.webp';

export default function Banner(props) {
    
    const imgSrc = props.title ? bannerHome : bannerAbout;
    const bannerClass = props.title ? 'HomeBanner' : 'AboutBanner';
    
    return(
        <div className={bannerClass}>
            <img className="banner_img" src={imgSrc} alt="banner_logo"/>
            {props.title && <p>{props.title}</p>}
        </div>
    )
}