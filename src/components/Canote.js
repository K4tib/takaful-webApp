import "./Canote.css";
import { Container, Image, ProgressBar } from "react-bootstrap";

const Canote = (props) => {
  let x = props.percentage;
  return (
    <Container
      style={{
        width: "500px",
        height: "500px",
        top: "1094px",
        left: "145px",
        border: "1px solid #ccc",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "50%",
          display: "flex",
          borderRadius: "30px 50px 91px 51px",
        }}
      >
        <Image src={props.imageUrl} style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ flex: "50%", padding: "10px" }}>
        <h1>{props.title}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={props.profileImageUrl}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <h2 style={{ marginLeft: "10px" }}>{props.ProfileName}</h2>
        </div>
        {/* Add custom CSS class to the ProgressBar */}
        <ProgressBar
          className="custom-progress-bar"
          style={{ height: "70px", backgroundColor: "rgba(33, 158, 188, 0.39" }}
          now={x}
        />
      </div>
    </Container>
  );
};

export default Canote;
