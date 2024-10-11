import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card"
import data from "../../data/logements.json";


function HousingList() {
    return(
        data.map(housing => (
        <Card key={housing.id} title={housing.title} cover={housing.cover} id={housing.id}/>
    )))
}

export default function Home() {
    return(
        <>
            <Banner title="Chez vous, partout et ailleurs"/>
            <div className="card_container">
                <HousingList />
            </div>
        </>
    )
}

