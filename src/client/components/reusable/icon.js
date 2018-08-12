import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/icon.scss";

class Icon extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired
  };
  render() {
    return <img src={this.props.src} className={styles.icon} />;
  }
}

export default Icon;
