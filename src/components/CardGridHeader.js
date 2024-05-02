import React from 'react';
import PropTypes from "prop-types";

const CardGridHeader = ({ title, icon }) => {
  return (
    <div className="text-center p-5">
      <h1 className="text-xl font-bold text-blue-600">{title}</h1>
      <p className="mt-2 text-gray-600">Vos dons permettent de soutenir la recherche innovante et les traitements de maladies. Du progrès contre le cancer aux traitements des maladies infectieuses, votre aide apporte une différence tangible.</p>
    </div>
  );
};

CardGridHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default CardGridHeader;
