import CanoteList from "./CanoteList";
import CanotParagraphe from "./CanotParagraphe";
import "./CategoriesBody.css";
import { useEffect,useState } from "react";

const CategoriesBody = (props) => {
  const [canotes, setCanotes] = useState([]);

  useEffect(() => {
    // Fetch Canote data from an API
    const fetchData = async () => {
      const result = await fetch("https://your-api-url.com/canotes");
      const data = await result.json();
      setCanotes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="categories-body">
      <CanotParagraphe
        imageUrl={props.bimageUrl}
        CanotParagraphe={props.CanotParagraphe}
      />
      <CanoteList canotes={canotes} />
    </div>
  );
};

export default CategoriesBody;