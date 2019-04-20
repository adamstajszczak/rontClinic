import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  header: {
    padding: '1rem 5rem',
    background: '#f5f5f5',
    borderTopRightRadius: '10rem',
    display: 'inline-block',
    borderBottomRightRadius: '10rem',
    '& h1': {
      margin: 0
    },
    '& p': {
      margin: 0
    }
  },
  title: {
    fontSize: '3rem',
    marginBottom: 0
  },
  description: {
    marginTop: 0,
    opacity: '.5',
    fontSize: '1.35rem'
  },
  content: {
    padding: '25px 15vw 3rem 15vw'
    //padding: "6vh 10vw"
  }
});

class Page extends Component {
  render() {
    const {
      classes,
      content: content,
      title,
      description,
      showHeader
    } = this.props;

    return (
      <div className={classes.root}>
        <div
          className={classes.header}
          style={showHeader ? {} : { display: 'none' }}
        >
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
        </div>
        <div
          className={classes.content}
          style={showHeader ? {} : { maxWidth: '100vw', padding: '6vh 5vw' }}
        >
          {content}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Page);
