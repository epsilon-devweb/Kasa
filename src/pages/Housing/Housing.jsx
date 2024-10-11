import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HousingContent from "../../components/HousingContent/HousingContent";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";

export default function Housing() {

    const { houseId } = useParams();
    const [housing, setHousing] = useState(null)

    useEffect(() => {
        const housingData = data.find((house) => house.id === houseId);
        if (housingData) {
            setHousing(housingData);
        }
    }, [houseId])

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



