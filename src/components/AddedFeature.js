import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/featureActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { removeFeature: removeFeature })(AddedFeature);
