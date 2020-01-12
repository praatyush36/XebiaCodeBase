import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {logoutUserAction} from "../store/actions/logoutAction";

class LogoutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(logoutUserAction());
    let searchDom=document.getElementById('search');
    if(searchDom){
        searchDom.style.pointerEvents="none";
    }
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(LogoutPage);