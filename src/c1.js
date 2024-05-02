import React from "react";

export default function ResearchTreatmentCards() {
  const cards = [
    {
      id: 1,
      title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb.",
      subtitle: "Le surnom nejaka8y kiy",
      target: "The target is to raise xxxxxx $",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb.",
      subtitle: "Le surnom nejaka8y kiy",
      target: "The target is to raise xxxxxx $",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb.",
      subtitle: "Le surnom nejaka8y kiy",
      target: "The target is to raise xxxxxx $",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 4,
      title: "Le sujet ta3 had ljunivrebj vhbjvhb vhbfh bvhfb.",
      subtitle: "Le surnom nejaka8y kiy",
      target: "The target is to raise xxxxxx $",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="text-center p-5">
        <h1 className="text-xl font-bold text-blue-600">
          Recherche et Traitement des Maladies
        </h1>
        <p className="mt-2 text-gray-600">
          Vos dons permettent de soutenir la recherche innovante et les
          traitements de maladies. Du progrès contre le cancer aux traitements
          des maladies infectieuses, votre aide apporte une différence tangible.
        </p>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt="Image descriptive"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-1">{card.subtitle}</p>
              <span className="text-xs text-blue-600">{card.target}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
