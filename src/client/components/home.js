import React from "react";

import styles from "./styles/home.scss";
import Card from "./reusable/card";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.cards}>
        <Card />
        <Card />
      </div>
    );
  }
}
export default Home;
