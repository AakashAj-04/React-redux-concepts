import "./App.css";
import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
// import IceCreamContainer from "./components/IceCreamContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
