import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "700px",
  },
}));

function LogIn() {
  const history = useHistory();
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [failed, setFailed] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status === 200) {
      const finalResult = await response.json();
      console.log(finalResult);
      return history.push("/secret");
    } else {
      const finalResult = await response.json();
      setFailed(finalResult.message);
    }
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const { email, password } = inputs;

  return (
    <form onSubmit={handleSubmit} className="align">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box margin="20px">
          <h3 style={{ color: "#a28089" }}>
            Please enter your information to Log in
          </h3>
        </Box>
        <Box margin="20px" width="700px">
          <TextField
            className={classes.width}
            name="email"
            required
            onChange={handleChange}
            value={email}
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box margin="20px">
          <TextField
            className={classes.width}
            name="password"
            onChange={handleChange}
            value={password}
            required
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </Box>
        <Box
          margin="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#ffa8B6", color: "#a28089" }}
          >
            Log In
          </Button>
        </Box>
        <Box margin="20px" display="flex" width="500px" height="300px">
          {failed && <h4 style={{ color: "#a28089" }}>{failed}</h4>}
        </Box>
      </Box>
    </form>
  );
}

export default LogIn;
