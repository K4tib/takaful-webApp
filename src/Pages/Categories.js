import CardGridHeader from "../components/CardGridHeader.js";
import CategoriesBody from "../components/CategoriesBody";

const Categories = (props) => {
  return (
    <div>
      <CardGridHeader
        headerTitle={props.headerTitle}
        imageUrl={props.imageUrl}
      />
      <CategoriesBody
        imageUrl={props.imageUrl}
        CanotParagraphe={props.CanotParagraphe}
      />
    </div>
  );
};

export default Categories;
