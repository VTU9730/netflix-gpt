import Body from "./components/Body";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Body />
    </Provider>
    </div>
  );
}

export default App;
