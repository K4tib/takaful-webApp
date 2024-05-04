import Canote from "./Canote";
const CanoteList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100% ",
      }}
    >
      {/* First pair of Canote components */}
      <div style={{ margin: "20px" }}>
      <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="another-image-url"
            title="Another Category Title"
            profileImageUrl="another-avatar-icon-url"
            ProfileName="Another Person Name"
            percentage={50}
          />
        </div>
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="another-image-url"
            title="Another Category Title"
            profileImageUrl="another-avatar-icon-url"
            ProfileName="Another Person Name"
            percentage={10}
          />
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        {/* Second pair of Canote components */}
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="another-image-url"
            title="Another Category Title"
            profileImageUrl="another-avatar-icon-url"
            ProfileName="Another Person Name"
            percentage={77}
          />
        </div>
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="another-image-url"
            title="Another Category Title"
            profileImageUrl="another-avatar-icon-url"
            ProfileName="Another Person Name"
            percentage={25}
          />
        </div>
      </div>
      {/* Add more pairs of Canote components as needed */}
    </div>
  );
};
export default CanoteList;
