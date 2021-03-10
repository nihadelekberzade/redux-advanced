import React from "react";
import { buyWine } from "../redux/index";
import { connect } from "react-redux";

function WineContainer(props) {
  return (
    <div>
      <h2>Number of wine bottles: {props.numOfWine}</h2>
      <button onClick={props.buyWine}>Buy wine</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfWine: state.wine.numOfWine,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyWine: () => dispatch(buyWine()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WineContainer);
