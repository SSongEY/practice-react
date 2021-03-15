import {connect} from 'react-redux';
import AddNumber from "../components/AddNumber";

export default connect(
  null,
  dispatch => ({
    onClick(size) {
      dispatch({type: 'INCREMENT', size})
    }
    //onClick: (size) => dispatch({type: 'INCREMENT', size})
  })
)(AddNumber);
/*
import React, {Component} from 'react';
import AddNumber from "../components/AddNumber";
import store from "../store";

export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={(size) => {
          store.dispatch({type: 'INCREMENT', size});
        }}
      />
    )
  }
}*/
