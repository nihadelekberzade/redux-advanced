import React, { useState } from "react";
import { buyBeer } from "../redux/index";
import { connect } from "react-redux";

function BeerContainer(props) {
  const [number, setNumber] = useState(5);
  return (
    <div>
      <h2>Number of beer bottles: {props.numOfBeer}</h2>
      <div>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <button onClick={() => props.buyBeer(number)}>Buy beer</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBeer: state.beer.numOfBeer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyBeer: (number) => dispatch(buyBeer(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
