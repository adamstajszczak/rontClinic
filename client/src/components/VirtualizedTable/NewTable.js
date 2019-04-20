import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ArrowRight as ArrowRightIcon } from '@material-ui/icons';
import { connect } from 'react-redux';

import priceList from '../../utils/priceList';
import { IconButton } from '@material-ui/core';
import Reservation from '../Reservation';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const PriceList = ({ classes, groupId, auth }) => {
  const [dialog, toggleDialog] = useState(false);
  const [data, setData] = useState(null);

  const handleNextClick = row => {
    setData(row);
    toggleDialog(true);
  };

  console.log(dialog);

  if (auth) {
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <PriceListHead />
            <TableBody>
              <PriceListBody groupId={groupId} onNextClick={handleNextClick} />
            </TableBody>
          </Table>
        </Paper>

        <Reservation open={dialog} data={data} onClose={toggleDialog} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold', paddingBottom: '25px'}}>MUSISZ BYĆ ZALOGOWANY ABY DOKONAĆ REZERWACJI!!</p>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <PriceListHead />
          <TableBody>
            <PriceListBodyLogout
              groupId={groupId}
              onNextClick={handleNextClick}
            />
          </TableBody>
        </Table>
      </Paper>

      <Reservation open={dialog} data={data} onClose={toggleDialog} />
    </React.Fragment>
  );
};

/**
 * @description Head of the price list.
 * @returns {node}
 */
const PriceListHead = () => (
  <TableHead>
    <TableRow>
      <TableCell align="left">Nazwa</TableCell>
      <TableCell align="right">Cena brutto</TableCell>
      <TableCell align="center" />
    </TableRow>
  </TableHead>
);

/**
 * @description Body of the price list.
 * @returns {node}
 */
const PriceListBody = ({ onNextClick, groupId }) =>
  priceList
    .filter(e => e.groupId === groupId)
    .map(row => (
      <TableRow key={row.id}>
        <TableCell align="left">
          <b>{row.description}</b>
        </TableCell>
        <TableCell align="right">{row.price} zł</TableCell>
        <TableCell align="right">
          <NextButton onClick={() => onNextClick(row)} />
        </TableCell>
      </TableRow>
    ));

const PriceListBodyLogout = ({ onNextClick, groupId }) =>
  priceList
    .filter(e => e.groupId === groupId)
    .map(row => (
      <TableRow key={row.id}>
        <TableCell align="left">
          <b>{row.description}</b>
        </TableCell>
        <TableCell align="right">{row.price} zł</TableCell>
        <TableCell align="right">
          <NextLogoutButton />
        </TableCell>
      </TableRow>
    ));

/**
 * @description Button with arrow right icon.
 * @returns {node}
 */
const NextButton = ({ onClick }) => (
  <IconButton onClick={onClick} color="primary" title="Umów wizytę">
    <ArrowRightIcon />
  </IconButton>
);

const NextLogoutButton = () => (
  <IconButton color="secodnary" disabled title="Musisz być zalogowany">
    <ArrowRightIcon />
  </IconButton>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(withStyles(styles)(PriceList));
