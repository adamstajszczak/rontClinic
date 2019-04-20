import React from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { signIn, signOut } from '../../actions';
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Fade
} from '@material-ui/core';
import { FaGoogle } from 'react-icons/fa';
import Payments from '../Payments';
import withStyle from 'react-jss';

const styles = {
  avatar: {
    height: '45px',
    width: '45px',
    cursor: 'pointer',
    boxShadow:
      '0px 3px 6px 0px rgba(0,0,0,0.2), 0px 3px 2px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    transition: 'all 255ms ease',
    zIndex: 10000
  },
  '@media only screen and (max-width: 766px)': {
    avatar: {
      height: '40px',
      width: '40px',
      zIndex: 100 
    },
    hideAvatar: {
      zIndex: 10000
    }
  }
};

class GoogleAuth extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.auth._id !== this.props.auth._id) {
      this.props.enqueueSnackbar(
        '👋 Witaj, ' + this.props.auth.displayName.split(' ')[0]
      );
    }
  }

  renderAuthButton() {
    const { anchorEl } = this.state;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Fade in={this.props.alwaysDisplay}>
            <Button
              variant="contained"
              color="primary"
              // className="ui blue google button"
            >
              <FaGoogle style={{ marginRight: '.7rem', fontSize: '15px' }} />
              <a
                style={{ textDecoration: 'none', color: '#fff' }}
                href="/auth/google"
              >
                Sign in
              </a>
            </Button>
          </Fade>
        );
      default:
        return (
          <div className={this.props.classes.hideAvatar}>
            <Avatar
              className={this.props.classes.avatar}
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
              src={this.props.auth.picture}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem>{this.props.auth.displayName}</MenuItem>
              <Divider />
              <MenuItem>
                <a
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href="/api/logout"
                >
                  Wyloguj
                </a>
              </MenuItem>
            </Menu>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(
  withStyle(styles)(withSnackbar(GoogleAuth))
);
