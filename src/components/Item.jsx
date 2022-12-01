import {} from "@mui/material";

const textStyle = {
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  fontWeight: "600",
};

function Item({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
        style={{
          marginTop: "32px",
          paddingTop: "40px",
          width: "100%",
          height: "80vh",
          borderRadius: "10px",
        }}
      />
      <div style={textStyle}>{item.title}</div>
    </div>
  );
}

export default Item;
