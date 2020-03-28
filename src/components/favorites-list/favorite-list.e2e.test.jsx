import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesList} from "./favorites-list.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

const favorites = {
  Amsterdam: {
    city: {name: `Amsterdam`},
    offers: [
      {
        isPremium: false,
        previewImage: ``,
        price: 12,
        rating: 1,
        id: 1,
        title: ``,
        type: ``
      }
    ]
  }
};

it(`Link onclick`, () => {
  const selectCity = jest.fn();

  const screen = mount(
      <Router history={history}>
        <FavoritesList
          favorites={favorites}
          updateStatus={() => {}}
          loadFavorites={()=>{}}
          reserFavorites={()=>{}}
          selectCity={selectCity}
          resetFavorites={()=>{}}
        />
      </Router>
  );
  const cityLink = screen.find(`a`).at(0);

  cityLink.simulate(`click`, mockEvent);
  expect(selectCity).toHaveBeenCalledTimes(1);
});
