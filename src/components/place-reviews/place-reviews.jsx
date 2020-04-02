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

PlaceReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      "id": PropTypes.number.isRequired,
      "is_pro": PropTypes.bool.isRequired,
      "name": PropTypes.string.isRequired,
      "avatar_url": PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,
  authStatus: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(memo(PlaceReviews));

