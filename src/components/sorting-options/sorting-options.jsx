import React, {memo} from "react";
import PropTypes from "prop-types";

const sortingOptions = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const openingClass = `places__options places__options--custom places__options--opened`;
const closingClass = `places__options places__options--custom`;

const SortingOptions = ({
  onSelectOption,
  optionSorting,
  open,
  handleClose,
  handleCloseOrOpen
}) => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span
      onClick={(evt) => {
        evt.preventDefault();
        handleCloseOrOpen();
      }}
      className="places__sorting-type"
      tabIndex="0"
    >
      {optionSorting}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={open ? openingClass : closingClass}>
      {sortingOptions.map((option, index) => (
        <li
          onClick={(evt) => {
            evt.preventDefault();
            handleClose();
            onSelectOption(option);
          }}
          key={index}
          className={
            option === optionSorting
              ? `places__option places__option--active`
              : `places__option`
          }
          tabIndex="0"
        >
          {option}
        </li>
      ))}
    </ul>
    {/* <!--
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                -->*/}
  </form>
);

export default memo(SortingOptions);

SortingOptions.propTypes = {
  handleCloseOrOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSelectOption: PropTypes.func,
  optionSorting: PropTypes.string.isRequired
};
