import React from "react";

import styles from "./styles/home.scss";
import PlayingCard from "./reusable/playing-card";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.cards}>
        <PlayingCard type="club">2</PlayingCard>
        <PlayingCard type="diamond">2</PlayingCard>
        <PlayingCard type="heart">2</PlayingCard>
        <PlayingCard type="spade">2</PlayingCard>
      </div>
    );
  }
}
export default Home;
