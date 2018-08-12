import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/base.scss";

class Home extends React.Component {
  static propTypes = {
    input: PropTypes.string.isRequired,
    ping: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className={styles.body}>
        {this.props.input}<br/>
        <input id="input"
          value={this.props.input}
        /><br/>
        <p id="ping">
          {this.props.ping}
        </p><br/>
        <br/>
      </div>
    );
  }
}
export default Home;
