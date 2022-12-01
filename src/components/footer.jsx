import { List, ListItemText } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import FooterCol from "./FooterCol";
import PText from "./content/pText";

const FooterStyle = styled.div`
  background-color: black;
  border-radius: 12px;
  box-shadow: 5px 5px #d3d3d3;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    color: white;
  }
  .footer__col2 {
    flex: 1;
    color: white;
  }
  .footer__col3,
  .footer__col4 {
    flex: 1;
    color: white;
  }
  .footer__col1__title {
    margin-bottom: 1rem;
    color: White;
    margin-right: 5rem;
  }
  .copyright {
    background-color: black;
    text-align: left;
    padding: 1rem 0;
    color: white;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const link = ["Home", "About", "Products", "Contact"];
const link1 = ["+916377024231", "dappysandhu1@gmail.com", "India"];
const link2 = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

function Footer() {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <FooterStyle>
          <div className="container">
            <div className="footer__col1">
              <h1
                style={{ fontSize: "40px", marginLeft: "-80px" }}
                className="footer__col1__title"
              >
                Footer Content
              </h1>
              <p style={{ marginLeft: "30px", fontSize: "18px" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nobis quam deleniti amet dolor reiciendis dignissimos
                ipsa incidunt harum doloremque? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Suscipit nobis quam deleniti amet
                dolor reiciendis dignissimos ipsa incidunt harum doloremque?
              </p>
            </div>
            <div className="footer__col2">
              <h1 style={{ fontSize: "40px", marginLeft: "20px" }}>Links</h1>
              <List>
                {link.map((list, index) => (
                  <ListItemButton
                    key={index}
                    style={{
                      paddingBottom: "40px",
                      marginTop: "-20px",
                    }}
                  >
                    <ListItemText style={{ paddingLeft: "100px" }}>
                      {list}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </div>
            <div className="footer__col3">
              <h1 style={{ fontSize: "40px", marginLeft: "60px" }}>
                Contact Info
              </h1>
              <List>
                {link1.map((list, index) => (
                  <ListItemButton
                    key={index}
                    style={{
                      paddingBottom: "40px",
                      marginTop: "-20px",
                    }}
                  >
                    <ListItemText style={{ paddingLeft: "100px" }}>
                      {list}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </div>
            <div className="footer__col4">
              <h1 style={{ fontSize: "40px", marginLeft: "0px" }}>
                {" "}
                Social Links
              </h1>
              <List>
                {link2.map((list, index) => (
                  <ListItemButton
                    key={index}
                    style={{
                      paddingBottom: "40px",
                      marginTop: "-20px",
                    }}
                  >
                    <ListItemText style={{ paddingLeft: "100px" }}>
                      {list}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#5a5a5a",
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <PText>© 2021 Copyrigh: Dilpreet Sandhu </PText>
            </div>
          </div>
        </FooterStyle>
      </div>
    </>
  );
}
export default Footer;
