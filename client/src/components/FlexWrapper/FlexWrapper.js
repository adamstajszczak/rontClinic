import React, { PureComponent } from "react";
import PropTypes from "prop-types";


class FlexWrapper extends PureComponent {
  /**
   * @description Exclude props which have been already used.
   * @returns {object}
   */
  filterProps() {
    if (!FlexWrapper.propTypes) return { ...this.props };
    const propTypes = Object.keys(FlexWrapper.propTypes),
      props = { ...this.props };

    // Delete all props defined in PropTypes.
    for (var i = 0; i < propTypes.length; i++) delete props[propTypes[i]];

    return props;
  }

  /**
   * @description Include props which contain flex container style.
   * @returns {object}
   */
  composeStyle = () => {
    if (!FlexWrapper.styleProps) return { display: "flex" };
    let styles = { display: "flex" }; // Initial style.

    const styleProps = Object.keys(FlexWrapper.styleProps);

    // Adds props to style.
    for (var i = 0; i < styleProps.length; i++)
      if (this.props[styleProps[i]])
        styles[styleProps[i]] = this.props[styleProps[i]];

    return styles;
  };

  render() {
    return (
      <div style={this.composeStyle()} {...this.filterProps()}>
        {this.props.children}
      </div>
    );
  }
}

FlexWrapper.styleProps = {
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "strech",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "stretch"
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  flexFlow: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

FlexWrapper.propTypes = {
  ...FlexWrapper.styleProps
};

FlexWrapper.defaultProps = {
  justifyContent: "space-between"
};

export default FlexWrapper;
