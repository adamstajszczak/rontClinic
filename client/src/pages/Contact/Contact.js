import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Content from './content';
import FlexWrapper from 'components/FlexWrapper';

const styles = theme => ({
  iframe: {
    maxWidth: '100%',
    border: '0',
    '-webkit-border-radius': '10px',
    '-moz-border-radius': '10px',
    borderRadius: '10px',
    zIndex: '1'
  },
  iframeFrame: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '20px',
    boxShadow: '0 10px 29px rgba(0,0,0,0.20), 0 9px 30px 0px rgba(0,0,0,0.22)'
  },
  content: {
    paddingLeft: '1%',
    paddingRight: '1%'
  },
  col: {
    margin: '20px'
  },
  fancy: {
    lineHeight: '0.5',
    textAlign: 'center'
  },
  fancySpan: {
    display: 'inline-block',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      height: '5px',
      borderBottom: '1px solid lightgrey',
      borderTop: '1px solid lightgrey',
      top: '0',
      width: '600px',
      right: '100%',
      marginRight: '15px'
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      height: '5px',
      borderBottom: '1px solid lightgrey',
      borderTop: '1px solid lightgrey',
      top: '0',
      width: '600px',
      left: '100%',
      marginLeft: '15px'
    }
  },
  table: {
    maxWidth: '100%'
  },
  root: {
    position: 'relative'
  }
});
class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FlexWrapper
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <div className={classes.table}>
            <div>
              <Content />
            </div>
            <br />
            <center>
              <div className={classes.iframeFrame}>
                <iframe
                  title="googlemap"
                  className={classes.iframe}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.6877748606707!2d16.920032316009298!3d52.394210153295795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b243ac7dc1d%3A0x7896fa8e6f94090f!2sG%C3%B3rna+Wilda+102%2C+61-558+Pozna%C5%84!5e0!3m2!1sen!2spl!4v1551984551544"
                  width="800"
                  height="450"
                />
              </div>
            </center>
          </div>
        </FlexWrapper>
      </div>
    );
  }
}
export default withStyles(styles)(Contact);
