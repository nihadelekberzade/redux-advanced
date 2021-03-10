import React from "react";
import BeerContainer from "./components/BeerContainer";
import WineContainer from "./components/WineContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <UserContainer />
      {/* <WineContainer />
      <BeerContainer /> */}
    </div>
  );
}

export default App;
