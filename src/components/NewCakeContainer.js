import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [cake, setCake] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={cake}
        onChange={(e) => setCake(e.target.value)}
      />
      <button onClick={() => props.buyCake(cake)}>Buy {cake} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cake) => dispatch(buyCake(cake)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
