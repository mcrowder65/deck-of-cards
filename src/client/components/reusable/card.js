import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/card.scss";

class Card extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className={styles.card} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
