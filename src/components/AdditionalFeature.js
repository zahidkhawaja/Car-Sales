import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.addFeature(props.feature)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature: addFeature })(AdditionalFeature);
