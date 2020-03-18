import React, {Fragment, memo} from "react";
import {OperationComment} from "../../reducer/operation/operation.js";
import {ActionCreator} from "../../reducer/offer/offer.js";
import {
  getIsSendComment,
  getSelectedOffer
} from "../../reducer/offer/selectors.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const starsInfo = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const isDisabled = (lengthComment, stars) => {
  if (lengthComment > 50 && lengthComment < 300 && stars > 0) {
    return ``;
  }
  return `disabled`;
};

const isDisabledSending = (isSend) => (isSend ? `` : `disabled`);

const CommentForm = (props) => {
  const {
    value,
    text,
    handleChange,
    handleChangeText,
    isSendComment,
    selectedOffer,
    sendComment,
    sending
  } = props;
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        sendComment(selectedOffer, {comment: text, rating: value});
        sending(false);
        handleChange(``);
        handleChangeText(``);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starsInfo.map((name, index) => {
          const indexStar = starsInfo.length - index;
          return (
            <Fragment key={indexStar}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={indexStar}
                id={`${indexStar}-stars`}
                type="radio"
                onChange={(evt) => {
                  handleChange(evt.target.value);
                }}
                checked={indexStar === +value ? `checked` : ``}
                disabled={isDisabledSending(isSendComment)}
              />
              <label
                htmlFor={`${indexStar}-stars`}
                className="reviews__rating-label form__rating-label"
                title={name}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={(evt) => {
          handleChangeText(evt.target.value);
        }}
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        disabled={isDisabledSending(isSendComment)}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled(text.length, +value)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isSendComment: getIsSendComment(state),
  selectedOffer: getSelectedOffer(state)
});
const mapDispatchToProps = (dispatch) => ({
  sendComment(id, commentData) {
    dispatch(OperationComment.sendComment(id, commentData));
  },
  sending(flag) {
    dispatch(ActionCreator.sendCommentOffer(flag));
  }
});

CommentForm.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  isSendComment: PropTypes.bool.isRequired,
  selectedOffer: PropTypes.number.isRequired,
  sendComment: PropTypes.func.isRequired,
  sending: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(CommentForm));
