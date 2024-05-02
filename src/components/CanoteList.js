import Canote from "./Canote";
const CanoteList = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* First pair of Canote components */}
      <div style={{ margin: "20px" }}>
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="your-image-url"
            title="Category Title"
            profileImageUrl="avatar-icon-url"
            ProfileName="Person Name"
            percentage={75}
          />
        </div>
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="another-image-url"
            title="Another Category Title"
            profileImageUrl="another-avatar-icon-url"
            ProfileName="Another Person Name"
            percentage={50}
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
            percentage={50}
          />
        </div>
        <div style={{ flexBasis: "50%", margin: "20px" }}>
          <Canote
            imageUrl="your-image-url"
            title="Category Title"
            profileImageUrl="avatar-icon-url"
            ProfileName="Person Name"
            percentage={75}
          />
        </div>
      </div>
      {/* Add more pairs of Canote components as needed */}
    </div>
  );
};
export default CanoteList;
