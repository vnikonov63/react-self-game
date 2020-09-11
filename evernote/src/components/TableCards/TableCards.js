import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import OneRow from "../OneRow/OneRow.js";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3d9aa7 30%, #0ec6ccf5 90%)",
    borderRadius: 3,
  },
  table: {
    minWidth: 650,
  },
  el: {
    border: "1px solid black",
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

function TableCards() {
  const classes = useStyles();

  const [table, setTable] = useState(null);
  const [modal, setModal] = useState(null);

  function module(question) {
    // if (!modal) {
    //   setModal(true)
    // }
    console.log(question);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("/api");
      const array = await response.json();
      setTable(array);
    })();
  }, []);

  console.log(table);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="simple table">
          <TableBody>
            {table &&
              table.map((row, index) => (
                <TableRow key={row._id}>
                  <TableCell
                    key={row._id}
                    className={classes.el}
                    component="th"
                    scope="row"
                  >
                    {row.theme}
                  </TableCell>
                  {row.questions.map((element, index) => {
                    return (
                      <TableCell
                        key={element._id}
                        className={classes.el}
                        component="th"
                        scope="row"
                        onClick={() => {
                          module(row.questions[index]);
                        }}
                      >
                        {row.questions[index].price}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default TableCards;
