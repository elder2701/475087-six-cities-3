import React, {Fragment} from 'react';
import Header from "../header/header.jsx";
import PropTypes from "prop-types";

const Common = (props)=>{
  const {children, classPage} = props;
  return (
    <Fragment>
      <div className={classPage}>
        <Header />
        {children}
      </div>
    </Fragment>);
};
export default Common;

Common.propTypes = {
  children: PropTypes.node.isRequired,
  classPage: PropTypes.string.isRequired
};
