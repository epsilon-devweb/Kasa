import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../scss/style.scss"


export default function Layout(props) {
    const children = props.children
    return (
        <>
        <div className="container">
            <Header />
            {children}
        </div>
        <Footer />
    </>
    )
}