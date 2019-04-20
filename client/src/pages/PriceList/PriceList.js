import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import priceList from '../../utils/priceList';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  linkStyle: {
    color: '#558ae0',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover':{
      textDecoration: 'underline'
    },
    '&:active': {
      color: 'black'
    },
  }

});

class PriceList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <center>
          <p>
            W poniższej tabeli znajduję się cennik świadczonych przez nas usług,
          </p>
          <p>
            aby umówić wizytę, wróć na <Link className={classes.linkStyle} to ="/">stronę główną</Link>
          </p>
        </center>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nazwa</TableCell>
                <TableCell align="right">Cena brutto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceList.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left"><strong>{row.description}</strong></TableCell>
                  <TableCell align="right">{row.price} zł</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(PriceList);
