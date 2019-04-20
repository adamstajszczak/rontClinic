import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from '@material-ui/core';

class Payments extends React.Component {
  render() {
    if (this.props.disabled) {
      return (
        <Button
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          variant="outlined"
          color="primary"
          size="large"
        >
          Zarezerwuj
        </Button>
      );
    }
    return (
      <StripeCheckout
        name="Emaily"
        description={this.props.description}
        amount={this.props.price}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="PLN"
        panelLabel="Zapłać!"
      >
        <Button
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          variant="outlined"
          color="primary"
          size="large"
        >
          Zarezerwuj
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
