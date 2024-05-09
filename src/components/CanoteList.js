// CanoteList.js
import "./CanoteList.css";
import Canote from "./Canote";
import axios from "axios";
import { useEffect, useState } from "react";

const CanoteList = () => {
  const [canoteData, setCanoteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://your-api-url.com/canotes");
        setCanoteData(response.data);
      } catch (error) {
        console.error("Error fetching canotes: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="canote-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        canoteData.map((canote, index) => <Canote key={index} {...canote} />)
      )}
    </div>
  );
};

export default CanoteList;
