import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/card.scss";

class Card extends React.PureComponent {
  static propTypes = {
    content: PropTypes.element.isRequired
  };
  render() {
    return <div className={styles.card}>{this.props.content}</div>;
  }
}

export default Card;
