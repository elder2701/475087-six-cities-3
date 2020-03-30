import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesList} from "./favorites-list.jsx";

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


Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Link onclick`, () => {
  const selectCity = jest.fn();

  const screen = shallow(

      <FavoritesList
        updateStatus={() => {}}
        selectCity={selectCity}
        favorites = {favorites}
        loadFavorites={()=>{}}
      />
  );
  const cityLink = screen.find(`a`);

  cityLink.simulate(`click`, mockEvent);
  expect(selectCity).toHaveBeenCalledTimes(1);
});
