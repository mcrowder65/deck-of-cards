import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/card.scss";

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}

export default Card;
