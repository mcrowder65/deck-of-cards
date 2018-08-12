import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/home.scss";
import PlayingCard from "./reusable/playing-card";

class Home extends React.Component {
  state = {
    cards: [
      { type: "club", value: "Ace" },
      { type: "club", value: "2" },
      { type: "club", value: "3" },
      { type: "club", value: "4" },
      { type: "club", value: "5" },
      { type: "club", value: "6" },
      { type: "club", value: "7" },
      { type: "club", value: "8" },
      { type: "club", value: "9" },
      { type: "club", value: "10" },
      { type: "club", value: "Jack" },
      { type: "club", value: "Queen" },
      { type: "club", value: "King" },

      { type: "diamond", value: "Ace" },
      { type: "diamond", value: "2" },
      { type: "diamond", value: "3" },
      { type: "diamond", value: "4" },
      { type: "diamond", value: "5" },
      { type: "diamond", value: "6" },
      { type: "diamond", value: "7" },
      { type: "diamond", value: "8" },
      { type: "diamond", value: "9" },
      { type: "diamond", value: "10" },
      { type: "diamond", value: "Jack" },
      { type: "diamond", value: "Queen" },
      { type: "diamond", value: "King" },

      { type: "heart", value: "Ace" },
      { type: "heart", value: "2" },
      { type: "heart", value: "3" },
      { type: "heart", value: "4" },
      { type: "heart", value: "5" },
      { type: "heart", value: "6" },
      { type: "heart", value: "7" },
      { type: "heart", value: "8" },
      { type: "heart", value: "9" },
      { type: "heart", value: "10" },
      { type: "heart", value: "Jack" },
      { type: "heart", value: "Queen" },
      { type: "heart", value: "King" },

      { type: "spade", value: "Ace" },
      { type: "spade", value: "2" },
      { type: "spade", value: "3" },
      { type: "spade", value: "4" },
      { type: "spade", value: "5" },
      { type: "spade", value: "6" },
      { type: "spade", value: "7" },
      { type: "spade", value: "8" },
      { type: "spade", value: "9" },
      { type: "spade", value: "10" },
      { type: "spade", value: "Jack" },
      { type: "spade", value: "Queen" },
      { type: "spade", value: "King" }
    ],
    dealerCards: []
  };
  // TODO add test
  addToDealer = () => {
    this.setState(state => {
      if (this.state.cards.length > 0) {
        const [dealerCard, ...cards] = state.cards;
        return {
          cards,
          dealerCards: [...state.dealerCards, dealerCard]
        };
      } else {
        return state;
      }
    });
  };
  shuffle = () => {};
  render() {
    return (
      <div className={styles.cards}>
        <PlayingCard value="DECK" />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={this.shuffle}>
            SHUFFLE
          </button>
          <button className={styles.button} onClick={this.addToDealer}>
            DRAW CARD
          </button>
        </div>
        {this.state.dealerCards.length > 0 ? (
          <React.Fragment>
            <h1>Dealer Cards!</h1>
            <Deck cards={this.state.dealerCards} />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

function Deck(props) {
  return (
    <div className={styles.deck}>
      {props.cards.map((card, index) => {
        return (
          <div className={styles.playingCard} key={index}>
            <PlayingCard type={card.type} value={card.value} />
          </div>
        );
      })}
    </div>
  );
}
Deck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Home;
