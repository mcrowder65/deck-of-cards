import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/playing-card.scss";
import Card from "./card";
import Icon from "./icon";

class PlayingCard extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    type: PropTypes.oneOf(["club", "spade", "heart", "diamond"]).isRequired
  };
  render() {
    return (
      <Card>
        <div className={styles.playingCard}>
          <div className={styles.row}>
            <Icon src={`/src/client/images/${this.props.type}.png`} />
            <Icon src={`/src/client/images/${this.props.type}.png`} />
          </div>

          <div className={styles.children}> {this.props.children}</div>

          <div className={styles.row}>
            <Icon src={`/src/client/images/${this.props.type}.png`} />
            <Icon src={`/src/client/images/${this.props.type}.png`} />
          </div>
        </div>
      </Card>
    );
  }
}

export default PlayingCard;
