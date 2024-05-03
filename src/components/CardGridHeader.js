const CardGridHeader = (props) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "20px 20px 20px 0", // Reduce right padding to move the content to the left
        height: "200px",
        backgroundColor: "#219EBC",
        color: "white",
        display: "flex",
        justifyContent: "space-between", // Adjusted to evenly space the h1 and image
        alignItems: "center",
        fontSize: "30px",
        boxShadow: "0 8px 8px rgba(0,0,0,0.4)",
        position: "relative", // Add position relative to position the image
      }}
    >
      {/* Style for the h1 */}
      <h1
        style={{
          width: "840px",
          height: "156px",
          fontFamily: "Roboto",
          fontSize: "78px",
          fontWeight: 700,
          lineHeight: "88px",
          letterSpacing: "-0.015em",
          textAlign: "left",
          position: "absolute",
          left: "20px", // Adjusted to move the h1 to the far left
        }}
      >
        {props.headerTitle}
      </h1>
      {/* Style for the image */}
      <img
        src={props.imageUrl}
        alt=""
        style={{
          width: "196.43px",
          height: "177px",
          position: "absolute",
          top: "0",
          right: "20px", // Adjusted to move the image to the far right
          gap: "0px",
          opacity: "0px",
          borderRadius: "100px",
        }}
      />
    </div>
  );
};

export default CardGridHeader;
