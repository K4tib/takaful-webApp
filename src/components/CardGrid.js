import React from 'react';
import Card from './Card';
import CardGridHeader from './CardGridHeader';
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardGrid = () => {
  const cards = [
    { id: 1, title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb", description: "Le surnom nejaka8y kiy", imageUrl: "https://via.placeholder.com/400x250", target: "xxxxxx $" },
    { id: 2, title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb", description: "Le surnom nejaka8y kiy", imageUrl: "https://via.placeholder.com/400x250", target: "xxxxxx $" },
    { id: 3, title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb", description: "Le surnom nejaka8y kiy", imageUrl: "https://via.placeholder.com/400x250", target: "xxxxxx $" },
    { id: 4, title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb", description: "Le surnom nejaka8y kiy", imageUrl: "https://via.placeholder.com/400x250", target: "xxxxxx $" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-5">
      <CardGridHeader title="Recherche et Traitement des Maladies" icon={<FontAwesomeIcon icon={faNotesMedical} />} />
      <div className="grid grid-cols-2 gap-4">
        {cards.map(card => <Card key={card.id} {...card} />)}
      </div>
    </div>
  );
};

export default CardGrid;
