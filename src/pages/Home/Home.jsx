import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import data from '../../data/logements.json';

export default function Home() {
    return(
        <>
            <Banner />
            <div className="card_container">
                <HousingList />
            </div>
        </>
    )
}

function HousingList() {
    return(
        data.map(housing => (
        <Card key={housing.id} title={housing.title} cover={housing.cover} id={housing.id}/>
    )))
}
