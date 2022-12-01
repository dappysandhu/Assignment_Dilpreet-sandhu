import { Container, Divider } from "@material-ui/core";
import React from "react";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import CustomCarousel from "../components/carousel";
import ContactUs from "../components/contactSection";

function Index() {
  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #E6E6FA 0%, #E6E6FA 50%, #FFFFFF 50%, #FFFFFF 100%)",
        height: "100vh",
      }}
    >
      <Header />
      <CustomCarousel />

      <Divider />
      <Content />
      <ContactUs />
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #E6E6FA 0%, #E6E6FA 50%, #FFFFFF 50%, #FFFFFF 100%)",
          height: "50vh",
        }}
      >
        <Footer />
      </div>
    </Container>
  );
}

export default Index;
