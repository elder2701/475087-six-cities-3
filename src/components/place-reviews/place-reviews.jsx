import React, {memo} from "react";
import CommentList from "../comment-list/comment-list.jsx";
import CommentForm from "../comment-form/comment-form.jsx";
import PropTypes from "prop-types";
import withChange from "../../hoc/with-change/with-change.js";
import {getAuthStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {connect} from "react-redux";

const CommentFormWrapper = withChange(CommentForm);

const PlaceReviews = ({comments, authStatus, selectedId}) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot;
      <span className="reviews__amount">{comments.length}</span>
    </h2>
    <CommentList comments={comments} />
    {authStatus === AuthorizationStatus.AUTH ? (
      <CommentFormWrapper selectedId={selectedId} />
    ) : null}
  </section>
);

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(memo(PlaceReviews));

PlaceReviews.propTypes = {
  comments: PropTypes.array.isRequired,
  authStatus: PropTypes.string.isRequired,
  selectedOffer: PropTypes.number.isRequired
};
