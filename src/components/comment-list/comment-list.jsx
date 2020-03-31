import React, {memo} from "react";
import Comment from "../comment/comment.jsx";
import PropTypes from "prop-types";

const CommentList = ({comments}) => (
  <ul className="reviews__list">
    {comments.map((comment, index) => (
      <Comment {...comment} key={index} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default memo(CommentList);
