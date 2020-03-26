import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import {AppRoute} from "../../const.js";
const withPage = (Component) => {

  const WithPage = (props)=>(
    <Fragment>
      <Route exact path={AppRoute.ROOT}>
        <div className="page page--gray page--main">
          <Component {...props}/>
        </div>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <div className="page page--gray page--login">
          <Component {...props}/>
        </div>
      </Route>
      <Route exact path={AppRoute.MYLIST}>
        <div className="page">
          <Component {...props}/>
        </div>
      </Route>
      <Route path={AppRoute.OFFER}>
        <div className="page">
          <Component {...props}/>
        </div>
      </Route>
    </Fragment>);
  return WithPage;
};

export default withPage;
