import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React, { useState } from "react";
import "./products.css";
import CircleIcon from "@mui/icons-material/Circle";
// import ListDivider from "@mui/joy/ListDivider";

function Products() {
  const [cards] = useState([
    { title: "Basic" },
    { title: "Pro" },
    { title: "Premium" },
  ]);

  const plan = [
    "$9.99/ year",
    "10GB Storage",
    "10 Emails",
    "10 Domains",
    "1GB Bandwidth",
  ];
  const plan2 = [
    "$24.99/ year",
    "25GB Storage",
    "25 Emails",
    "25 Domains",
    "2GB Bandwidth",
  ];
  const plan3 = [
    "$49.99/ year",
    "50GB Storage",
    "50 Emails",
    "50 Domains",
    "5GB Bandwidth",
  ];
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #E6E6FA 0%, #E6E6FA 50%, #FFFFFF 50%, #FFFFFF 100%)",
        height: "100vh",
        marginBottom: "-80px",
        marginTop: "10px",
        borderRadius: "12px",
      }}
    >
      <Container maxWidth="xl">
        <section>
          <div className="container">
            <h3
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              Pricing plans
            </h3>
            <h1>Simple prices & flexible options</h1>
            <div className="cards">
              <div className="card">
                <Card elevation={5} sx={{ paddingBottom: "40px" }}>
                  <div className="header">
                    <h3>Basic</h3>
                  </div>
                  <Box>
                    <List style={{}}>
                      {plan.map((list, index) => (
                        <ListItemButton
                          key={index}
                          style={{
                            paddingTop: "20px",
                          }}
                        >
                          <ListItemText style={{ paddingLeft: "100px" }}>
                            <CircleIcon
                              style={{
                                fontSize: "12px",
                                marginRight: "10px",
                                color: "green",
                              }}
                            />
                            {list}
                            <Divider style={{ marginRight: "70px" }} />
                          </ListItemText>
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "150px",
                      marginTop: "40px",
                      marginBottom: "20px",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Card>
              </div>
              <div className="card">
                <Card elevation={5} sx={{ paddingBottom: "40px" }}>
                  <div className="header2">
                    <h3>Pro</h3>
                  </div>
                  <List>
                    {plan2.map((list, index) => (
                      <ListItemButton
                        key={index}
                        style={{
                          paddingTop: "20px",
                        }}
                      >
                        <ListItemText style={{ paddingLeft: "100px" }}>
                          <CircleIcon
                            style={{
                              fontSize: "12px",
                              marginRight: "10px",
                              color: "green",
                            }}
                          />
                          {list}
                          <Divider style={{ marginRight: "70px" }} />
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "150px",
                      marginTop: "40px",
                      marginBottom: "20px",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Card>
              </div>
              <div className="card">
                <Card elevation={5} sx={{ paddingBottom: "40px" }}>
                  <div className="header">
                    <h3>Premium</h3>
                  </div>
                  <List>
                    {plan3.map((list, index) => (
                      <ListItemButton
                        key={index}
                        style={{
                          paddingTop: "20px",
                        }}
                      >
                        <ListItemText style={{ paddingLeft: "100px" }}>
                          <CircleIcon
                            style={{
                              fontSize: "12px",
                              marginRight: "10px",
                              color: "green",
                            }}
                          />
                          {list}
                          <Divider style={{ marginRight: "70px" }} />
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "150px",
                      marginTop: "40px",
                      marginBottom: "20px",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Products;

// import { Box, useMediaQuery, useTheme } from "@material-ui/core";
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";

// function Products() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

//   const Img = styled("img")({
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   });

//   //   const gridContainer = {
//   //     display: "grid",
//   //     gridTemplateColumns: "1fr 1fr",
//   //     gridTemplateRows: "1fr",
//   //     gridRowGap: "1.5rem",
//   //     gridColumnGap: "3.75rem",
//   //   };

//   return (
//     <Box>
//       <div>
//         <Paper
//           sx={{
//             p: 2,
//             margin: "auto",
//             maxWidth: 500,
//             flexGrow: 1,
//             backgroundColor: (theme) =>
//               theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//           }}
//         >
//           <Grid
//             container
//             spacing={{ xs: 2, md: 3 }}
//             columns={{ xs: 4, sm: 8, md: 12 }}
//           >
//             <Grid item xs={2} sm={4} md={4} container>
//               <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="subtitle1" component="div">
//                     Standard license
//                   </Typography>
//                   <Typography variant="body2" gutterBottom>
//                     Full resolution 1920x1080 • JPEG
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ID: 1030114
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography sx={{ cursor: "pointer" }} variant="body2">
//                     Remove
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle1" component="div">
//                   $19.00
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>

//         <Paper
//           sx={{
//             p: 2,
//             margin: "auto",
//             maxWidth: 500,
//             flexGrow: 1,
//             backgroundColor: (theme) =>
//               theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//           }}
//         >
//           <Grid
//             container
//             spacing={{ xs: 2, md: 3 }}
//             columns={{ xs: 4, sm: 8, md: 12 }}
//           >
//             <Grid item xs={2} sm={4} md={4} container>
//               <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="subtitle1" component="div">
//                     Standard license
//                   </Typography>
//                   <Typography variant="body2" gutterBottom>
//                     Full resolution 1920x1080 • JPEG
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ID: 1030114
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography sx={{ cursor: "pointer" }} variant="body2">
//                     Remove
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle1" component="div">
//                   $19.00
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>
//         <Paper
//           sx={{
//             p: 2,
//             margin: "auto",
//             maxWidth: 500,
//             flexGrow: 1,
//             backgroundColor: (theme) =>
//               theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item>
//               <ButtonBase sx={{ width: 128, height: 128 }}>
//                 <Img alt="complex" src="/static/images/grid/complex.jpg" />
//               </ButtonBase>
//             </Grid>
//             <Grid item xs={12} sm container>
//               <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="subtitle1" component="div">
//                     Standard license
//                   </Typography>
//                   <Typography variant="body2" gutterBottom>
//                     Full resolution 1920x1080 • JPEG
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ID: 1030114
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography sx={{ cursor: "pointer" }} variant="body2">
//                     Remove
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle1" component="div">
//                   $19.00
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>
//       </div>
//     </Box>
//   );
// }

// export default Products;
