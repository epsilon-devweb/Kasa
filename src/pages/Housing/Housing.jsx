import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HousingContent from "../../components/HousingContent/HousingContent";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

export default function Housing() {

    const { houseId } = useParams();
    const navigate = useNavigate();

    const [housing, setHousing] = useState(null)

    useEffect(() => {
        const housingData = data.find((house) => house.id === houseId);
        if (housingData) {
            setHousing(housingData);
        } else {
            navigate('/error404');
        }
    }, [houseId, navigate]) //a revoir avec le mentor

    if (!housing) {
        return <h1>Loading</h1>
    }

    return(
        <>
        {housing.pictures && <Slideshow images={housing.pictures} />}
        <HousingContent housing={housing} />
        </>
    )
}



