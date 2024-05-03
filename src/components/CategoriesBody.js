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
      <CanotParagraphe
        imageUrl=""
        CanotParagraphe="Your donation can make a world of difference to those struggling with
          poverty. By offering a helping hand, you're not just alleviating
          immediate suffering but also empowering communities to break the cycle
          of poverty and build a brighter future."
      />
      <CanoteList />
    </div>
  );
};

export default CategoriesBody;
