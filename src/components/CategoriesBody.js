import CanoteList from "./CanoteList";
import CanotParagraphe from "./CanotParagraphe";

const CategoriesBody = () => {
  return (
    <div
      style={{
        width: "calc(100% - 120px)",
        margin: "0 auto",
        padding: "0 60px",
      }}
    >
      <CanotParagraphe />
      <CanoteList />
    </div>
  );
};

export default CategoriesBody;
