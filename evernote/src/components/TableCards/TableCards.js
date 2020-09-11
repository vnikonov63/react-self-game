import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import Modal from "../../components/modal";
import { setResult, switchResult } from "../../redux/actions";

const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(45deg, #3d9aa7 30%, #0ec6ccf5 90%)",
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
    background: "yellow",
  },
  no: {
    visibility: "hidden",
    backgroundColor: "white",
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

function TableCards() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const score = useSelector((state) => state.user.score);
  const switchArray = useSelector((state) => state.results);
  const [table, setTable] = useState([]);
  const [modal, setModal] = useState(null);
  const [id, setId] = useState(null);

  function module(question, indexOut, index) {
    if (!modal) {
      setModal(true);
      setId(question);
    }
    dispatch(switchResult(indexOut, index));
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("/api");
      const array = await response.json();
      setTable(array);
      let outter = array.length;
      let inner;
      array.forEach((element) => {
        inner = element.questions.length;
      });
      dispatch(setResult(new Array(outter).fill(new Array(inner).fill(true))));
    })();
  }, []);
  console.log(switchArray);
  return (
    <>
      <div className="flex">
        <h3 className="align">Score: {score}</h3>
      </div>
      <div className="flex">
        {modal && <Modal setModal={setModal} dataFromParent={id} />}
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="simple table">
          <TableBody>
            {table &&
              table.map((row, indexOut) => (
                <TableRow key={row._id}>
                  <TableCell
                    key={row._id}
                    className={classes.el}
                    component="th"
                    scope="row"
                  >
                    {row.theme}
                  </TableCell>
                  {switchArray.length &&
                    row.questions.map((element, index) => {
                      return switchArray[indexOut][index] ? (
                        <TableCell
                          key={element._id}
                          className={classes.el}
                          component="th"
                          scope="row"
                          onClick={() => {
                            module(row.questions[index], indexOut, index);
                          }}
                        >
                          {row.questions[index].price}
                        </TableCell>
                      ) : (
                        <TableCell
                          key={element._id}
                          className={`${classes.el} ${classes.no}`}
                          component="th"
                          scope="row"
                          onClick={() => {
                            module(row.questions[index], indexOut, index);
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
