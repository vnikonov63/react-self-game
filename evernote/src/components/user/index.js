import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Link } from "react-router-dom";

function User() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  return (
    <div className="align flex">
      <h2 className="align">Hello, {user.name}!</h2>
      <h4 className="align">
        This is your private space, here you can view your previous tatistics,
        as well you can press a button to create a new game{" "}
      </h4>
      <Box
        justifySelf="center"
        alignSelf="center"
        marginTop="200px"
        width="200px"
      >
        <Link style={{ textDecoration: "none" }} to={`/user/${user.id}/game`}>
          <Button variant="contained" color="secondary" size="large">
            Start the Game
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default User;
