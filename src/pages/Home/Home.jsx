import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Card from "../../components/Card/Card"
import data from '../../data/logements.json';


export default function Home() {
    return(
        <>
            <HomeBanner />
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
