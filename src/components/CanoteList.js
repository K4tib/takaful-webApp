import React, { useState, useEffect } from "react";
import axios from "axios";
import Canote from "./Canote";

const CanoteList = () => {
  const [canotes, setCanotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-api-url.com/canotes")
      .then((response) => {
        setCanotes(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <div className="canote-list">
      {canotes.map((canote) => (
        <div style={{ flexBasis: "calc(50% - 20px)", margin: "10px" }}>
          <Canote
            imageUrl={canote.imageUrl}
            title={canote.title}
            profileImageUrl={canote.profileImageUrl}
            ProfileName={canote.ProfileName}
            percentage={canote.percentage}
          />
        </div>
      ))}
    </div>
  );
};

export default CanoteList;