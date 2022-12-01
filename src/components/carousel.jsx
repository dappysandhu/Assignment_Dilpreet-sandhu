import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import images from "../helper/images.json";
import { Paper } from "@material-ui/core";
import { borderRadius } from "@mui/system";
function CustomCarousel() {
  return (
    <Paper style={{ borderRadius: "10px" }}>
      <Carousel
        indicatorContainerProps={{
          style: {
            marginTop: "0px",
            textAlign: "center", // 4
          },
        }}
      >
        {images.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </Paper>
  );
}

export default CustomCarousel;
