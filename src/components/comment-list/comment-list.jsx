import React, {memo} from "react";
import Comment from "../comment/comment.jsx";
import PropTypes from "prop-types";

const CommentList = ({comments}) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
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
  }).isRequired).isRequired
};

export default memo(CommentList);
