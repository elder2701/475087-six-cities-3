import React, {Fragment} from "react";
import Header from "../header/header.jsx";
import {AppRoute} from "../../const.js";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import FavoriteFooter from "../favorite-footer/favorite-footer.jsx";

const Common = (props) => {
  const {children, classPage} = props;
  return (
    <Fragment>
      <div className={classPage}>
        <Header />
        {children}
        <Route exact path={AppRoute.MYLIST}>
          <FavoriteFooter />
        </Route>
      </div>
    </Fragment>
  );
};

Common.propTypes = {
  children: PropTypes.node.isRequired,
  classPage: PropTypes.string.isRequired
};

export default Common;

