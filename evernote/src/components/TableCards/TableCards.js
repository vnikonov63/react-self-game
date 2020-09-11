import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import OneRow from '../OneRow/OneRow.js'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3d9aa7 30%, #0ec6ccf5 90%)',
    borderRadius: 3,
  },
  table: {
    minWidth: 650,
  },
  el: {
    border: "1px solid black",
    width: '100px',
    height: '100px',
    textAlign: "center"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function TableCards() {
  const classes = useStyles();

  const [table, setTable] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/api');
      const array = await response.json();
      setTable(array);
    })()
  }, [setTable]);

  return (
    <>
      <TableContainer component={Paper} >
        <Table className={classes.root} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className={classes.el} component="th" scope="row" >
                  {row.name}
                </TableCell>
                <TableCell className={classes.el} align="left">{row.calories}</TableCell>
                <TableCell className={classes.el} align="left">{row.fat}</TableCell>
                <TableCell className={classes.el} align="left">{row.carbs}</TableCell>
                <TableCell className={classes.el} align="left">{row.protein}</TableCell>
                <TableCell className={classes.el} align="left">{row.protein}</TableCell>
              </TableRow>
              // <OneRow props={row}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )



}
export default TableCards;
