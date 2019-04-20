import React, { useState } from 'react';
import { withStyles, Card, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import Payments from '../../Payments';
import 'moment/locale/pl'; // without this line it didn't work
moment.locale('pl');

const styles = theme => ({
  root: {
    width: '100%',
    maxHeight: '50vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: '#eee',
    padding: '0.5rem 2rem',
    borderRadius: '7px',
    boxShadow:
      'inset 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  },
  card: {
    width: '95%',
    position: 'relative',
    margin: '10px 1.25%',
    padding: '20px 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      marginBottom: 0
    }
  }
});

const Calendar = ({ classes, data }) => {
  const [reserved, setReserved] = useState([]);

  return (
    <div className={classes.root}>
      {getReservations().map((day, index) => (
        <div>
          <h2>{moment(day[0]).format('DD.MM - dddd')}</h2>
          {day.map((e, ind) => {
            const isreserved = Boolean(reserved.indexOf(`${index}${ind}`) >= 0);

            return (
              <Card
                className={classes.card}
                style={{ opacity: isreserved ? 0.45 : 1 }}
              >
                <div>
                  <h1>Godzina {moment(e).format('HH:00')}</h1>
                  <p style={{ marginTop: '5px' }}>Cena {data.price} zł</p>
                </div>
                <div>
                  <Payments
                    disabled={isreserved}
                    onClick={() => setReserved([...reserved, `${index}${ind}`])}
                    description={'Opłata za prześwietlenie ' + data.description}
                    price={data.price * 100}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const getReservations = (span = 10) => {
  const today = moment().format();
  let reservations = [[today]];

  for (var i = 1; i < span; i++) {
    let res = [];

    res.push(
      moment(today)
        .add(i, 'days')
        .subtract(getRndInteger(1, 3), 'hours')
    );

    res.push(
      moment(today)
        .add(i, 'days')
        .add(getRndInteger(1, 3), 'hours')
    );

    reservations.push(res);
  }

  return reservations;
};

export default withStyles(styles)(Calendar);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
