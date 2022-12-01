import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import styled from "styled-components";
import PText from "./pText";
import { Divider, makeStyles, Paper } from "@material-ui/core";
const ItemStyles = styled.div`
  padding: 1rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: -3rem;
  margin-top: -40px;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

const useStyles = makeStyles((theme) => ({
  yellowPaper: {
    backgroundColor: "#FFEDD5",
  },
}));

export default function ContactInfoItem({
  icon = <CheckIcon />,
  text = "I need text ",
}) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.yellowPaper}>
        <ItemStyles>
          <div className="icon">{icon}</div>
          <div className="info">
            <PText>{text}</PText>
            <Divider />
          </div>
        </ItemStyles>
      </Paper>
    </div>
  );
}
