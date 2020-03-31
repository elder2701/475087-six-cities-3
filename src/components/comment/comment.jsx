import React, {memo} from "react";
import PropTypes from "prop-types";

const spanStyles = (rating) => {
  let calculatedWidth = rating * 20;
  return {width: `${calculatedWidth}%`};
};

const Comment = ({user, rating, comment, date}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user[`avatar_url`]}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={spanStyles(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {date}
        </time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default memo(Comment);
