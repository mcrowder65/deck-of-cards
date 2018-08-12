import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/playing-card.scss";
import Card from "./card";
import Icon from "./icon";

class PlayingCard extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["club", "spade", "heart", "diamond"]).isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => ({})
  };
  onClick = () => {
    this.props.onClick(this.props.type, this.props.value);
  };
  render() {
    return (
      <Card onClick={this.onClick}>
        <div className={styles.playingCard}>
          <div className={styles.row}>
            <Icon src={`/src/client/images/${this.props.type}.png`} />
            <Icon src={`/src/client/images/${this.props.type}.png`} />
          </div>

          <div className={styles.value}> {this.props.value}</div>

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
