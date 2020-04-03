import React, {memo} from "react";
import PropTypes from "prop-types";

const sortingOptions = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const SortingOptions = ({
  onSelectOption,
  optionSorting,
  open,
  onClose,
  onCloseOrOpen
}) => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span
      onClick={() => {
        onCloseOrOpen();
      }}
      className="places__sorting-type"
      tabIndex="0"
    >
      {optionSorting}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul
      className={`places__options places__options--custom ${
        open ? `places__options--opened` : ``
      }`}
    >
      {sortingOptions.map((option) => (
        <li
          onClick={() => {
            onClose();
            onSelectOption(option);
          }}
          key={option}
          className={`places__option ${
            option === optionSorting ? ` places__option--active` : ``
          }`}
          tabIndex="0"
        >
          {option}
        </li>
      ))}
    </ul>
  </form>
);

SortingOptions.propTypes = {
  onCloseOrOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSelectOption: PropTypes.func,
  optionSorting: PropTypes.string.isRequired
};

export default memo(SortingOptions);
