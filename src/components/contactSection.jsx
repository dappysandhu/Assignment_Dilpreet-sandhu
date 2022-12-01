import React from "react";
import styled from "styled-components";
import ContactForm from "./content/contactForm";
import ContactInfoItem from "./content/contactInfoItem";
import SectionTitle from "./content/sectionTitle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Paper, Typography } from "@material-ui/core";
import Footer from "./footer";

const ContactSectionStyle = styled.div`
  padding: 5rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
    justify-content: space-between;
    margin-left: 5rem;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: relative;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 700px;
    word-break: break-all;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
      <div>
        <Paper elevation={3} style={{ marginTop: "140px" }}>
          <ContactSectionStyle>
            <div className="container">
              <h1>Contact Our Sales Team</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  marginLeft: "80px",
                  paddingLeft: "80px",
                  marginBottom: "-20px",
                }}
              >
                <Typography>
                  Let's explore how Notion can work for you
                </Typography>
              </div>
              <div className="contactSection__wrapper">
                <div className="left">
                  <ContactInfoItem text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus expedita earum officiisci natus vesint" />
                  <ContactInfoItem text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus expedita earum officiisci natus vesint" />
                  <ContactInfoItem text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus expedita earum officiisci natus vesint" />
                </div>
                <div className="right">
                  <ContactForm />
                </div>
              </div>
            </div>
          </ContactSectionStyle>
        </Paper>
      </div>
    </>
  );
}
