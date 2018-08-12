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

  addToDealer = (type, value) => {
    this.setState(state => {
      return {
        cards: state.cards.filter(c => c.type !== type || c.value !== value),
        dealerCards: [...state.dealerCards, { type, value }]
      };
    });
  };
  render() {
    return (
      <div className={styles.cards}>
        <Deck cards={this.state.cards} onCardClick={this.addToDealer} />
        <h1>Dealer Cards!</h1>
        <Deck cards={this.state.dealerCards} />
      </div>
    );
  }
}

function Deck(props) {
  return (
    <div className={styles.deck}>
      {props.cards.map((card, index) => {
        return (
          <PlayingCard
            key={index}
            type={card.type}
            onClick={props.onCardClick}
            value={card.value}
          />
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
  ).isRequired,
  onCardClick: PropTypes.func
};
Deck.defaultProps = {
  onCardClick: undefined
};
export default Home;
