import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Box from "@material-ui/core/Box";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InputIcon from "@material-ui/icons/Input";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <Box
      display="flex"
      className={StylesProvider.root}
      justifyContent="center"
      marginTop="30px"
    >
      <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        showlabel
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          icon={
            <Link to="/">
              <HomeRoundedIcon style={{ fontSize: 60, color: "#51e2f5" }} />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Log in"
          icon={
            <Link to="/login">
              <InputIcon
                style={{
                  fontSize: 60,
                  color: "#51e2f5",
                  marginLeft: 40,
                  marginRight: 40,
                }}
              />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Register"
          icon={
            <Link to="/register">
              <LockOpenIcon style={{ fontSize: 60, color: "#51e2f5" }} />
            </Link>
          }
        ></BottomNavigationAction>
      </BottomNavigation>
    </Box>
  );
}
