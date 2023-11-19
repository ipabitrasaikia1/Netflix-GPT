import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/appStore";

function App() {
  return (
    <Provider store={store}>
      <div >
      <Body />
      </div>
     
    </Provider>
  );
}

export default App;
