import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
    console.log(rows, this.state.loading);
    
    // fetch(this.rows)
    // .then((response) => response.json())
    // .then(data => {
    // this.setState({ rows: data, loading: false });
    // });
  }

  static renderPostsTable(rows) {
      return ( 
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
  };

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Posts.renderPostsTable(this.state.rows);
      console.log(contents);

    return (
      <div>
        <h1>Summary</h1>
        <p>This component demonstrates fetching data from the server.</p>
        { contents }
      </div>
    );
  }
}
