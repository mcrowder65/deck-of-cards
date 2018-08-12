import React from "react";
import { mount } from "enzyme";

import Home from "../home";

test("that it renders home without errors", () => {
  const home = mount(<Home />);
  expect(home).toBeTruthy();
});

describe("addToDealer", () => {
  const comp = mount(<Home />);
  test("that when addToDealer is called, it will remove the top level element of state.cards and put it in state.dealerCards", () => {
    const length = comp.instance().state.cards.length;
    for (let i = 0; i < length; i++) {
      const {
        cards: cardsBefore,
        dealerCards: dealerCardsBefore
      } = comp.instance().state;

      comp.instance().addToDealer();
      const [dealersCard, ...cardsAfter] = cardsBefore;
      const { dealerCards, cards } = comp.instance().state;
      expect(dealerCards).toEqual([...dealerCardsBefore, dealersCard]);
      expect(cards).toEqual(cardsAfter);
    }
  });
  test("that after addToDealer has been called the initial state.cards.length times, nothing happens to state when calling addToDealer", () => {
    const stateBefore = comp.instance().state;

    comp.instance().addToDealer();

    const stateAfter = comp.instance().state;

    expect(stateAfter).toEqual(stateBefore);
  });
});

describe("shuffle", () => {
  const comp = mount(<Home />);
  const initialCards = comp.instance().state.cards;
  test("when calling shuffle, the new state.cards !== the old state.cards (there is a very small chance this test fails in the case the random numbers always return the same indices)", () => {
    comp.instance().shuffle();
    const newCards = comp.instance().state.cards;
    expect(initialCards).not.toEqual(newCards);
  });
  test("that all cards are still there after shuffling", () => {
    const newCards = comp.instance().state.cards;
    const arr = [];
    for (const card of initialCards) {
      const result = newCards.find(
        c => c.type === card.type && c.value === card.value
      );
      if (!arr.find(c => c.type === card.type && c.value === card.value)) {
        // this is just a check that no cards are duplicated
        arr.push(card);
      }
      expect(result).toEqual(card);
    }
    expect(arr).toHaveLength(initialCards.length);
  });
});
