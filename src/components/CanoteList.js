import Canote from "./Canote";

const CanoteList = (props) => {
  const canotes = props.canotes.map((canoteProps, index) => {
    if (index % 2 === 0) {
      return (
        <div key={index} style={{ margin: "20px" }}>
          <div style={{ flexBasis: "50%", margin: "20px" }}>
            <Canote {...canoteProps} />
          </div>
          {props.canotes[index + 1] && (
            <div style={{ flexBasis: "50%", margin: "20px" }}>
              <Canote {...props.canotes[index + 1]} />
            </div>
          )}
        </div>
      );
    }
    return null;
  });

  return <div className="canote-list">{canotes}</div>;
};

export default CanoteList;