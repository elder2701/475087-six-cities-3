import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFirstCity} from "../../reducer/data/selectors.js";
import {getAuthStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import history from "../../history.js";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passRef = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passRef.current.value
    });
  }

  render() {
    const {firstCity, authStatus} = this.props;
    if (authStatus === AuthorizationStatus.AUTH) {
      return history.push(`/`);
    }
    return (
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required="Неверный email"
                ref={this.loginRef}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required="Неверный пароль"
                ref={this.passRef}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{firstCity}</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firstCity: getFirstCity(state),
  authStatus: getAuthStatus(state)
});


SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  firstCity: PropTypes.string.isRequired,
  authStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(SignIn);
