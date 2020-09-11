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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
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

const styles = {
  root: {
    background: 'linear-gradient(45deg, #3d9aa7 30%, #53df30 90%)',
    borderRadius: 3,
  },
};


function OneRow(props) {
  const classes = useStyles();

  return (
    <>
      <TableRow key={props.row.name}>
        <TableCell component="th" scope="row" className="TableCards">
          {props.row.name}
        </TableCell>
        <TableCell align="left">{props.row.calories}</TableCell>
        <TableCell align="left">{props.row.fat}</TableCell>
        <TableCell align="left">{props.row.carbs}</TableCell>
        <TableCell align="left">{props.row.protein}</TableCell>
        <TableCell align="left">{props.row.protein}</TableCell>
      </TableRow>
    </>
  )



}
export default OneRow;
