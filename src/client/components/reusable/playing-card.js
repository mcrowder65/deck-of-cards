import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/playing-card.scss";
import Card from "./card";
import Icon from "./icon";

class PlayingCard extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["club", "spade", "heart", "diamond"])
  };

  static defaultProps = {
    type: undefined
  };
  render() {
    return (
      <Card onClick={this.onClick}>
        <div className={styles.playingCard}>
          {this.props.type ? (
            <div className={styles.row}>
              <Icon src={`/src/client/images/${this.props.type}.png`} />
              <Icon src={`/src/client/images/${this.props.type}.png`} />
            </div>
          ) : null}

          <div className={styles.value}>{this.props.value}</div>

          {this.props.type ? (
            <div className={styles.row}>
              <Icon src={`/src/client/images/${this.props.type}.png`} />
              <Icon src={`/src/client/images/${this.props.type}.png`} />
            </div>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default PlayingCard;
