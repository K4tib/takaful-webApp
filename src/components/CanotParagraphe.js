import React from "react";

const CanotParagraphe = () => {
  return (
    <div
      style={{
        margin: "50px 20px 0px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", // Align items vertically
      }}
    >
      <div style={{ flexBasis: "50%", paddingRight: "20px" }}>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "37px",
            fontWeight: 300,
            lineHeight: "75px",
            letterSpacing: "-0.015em",
            textAlign: "left",
            backgroundColor: "rgba(2,48,71,0.3)",
            borderRadius: "30px 50px 91px 51px",
          }}
        >
          Your donation can make a world of difference to those struggling with
          poverty. By offering a helping hand, you're not just alleviating
          immediate suffering but also empowering communities to break the cycle
          of poverty and build a brighter future.
        </p>
      </div>
      <div style={{ flexBasis: "50%" }}>
        <img
          style={{
            width: "726px",
            height: "491px",
            top: "487px",
            left: "914px",
            borderRadius: "50px 50px 191px 191px",
            opacity: "0px",
          }}
          src="https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CanotParagraphe;
