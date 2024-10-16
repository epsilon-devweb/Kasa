import React from 'react';
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

export default function About() {
    return (
        <>
            <Banner/>
            <div className="AboutCollapseContainer">
                <Collapse title="Fiabilité">
                    <div>Les annonces postées sur Kasa garantissent un fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les information sont régulièrement vérifiées par nos équipes.</div>
                </Collapse>
                <Collapse title="Respect">
                    <div>La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
                </Collapse>
                <Collapse title="Service">
                    <div>La qualité est au coeur de notre engagement chez Kasa.
                        Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</div>
                </Collapse>
                <Collapse title="Sécurité">
                    <div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
                </Collapse>
            </div>
        </>
    );
}


