import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

const mystyle = {
  background: "linear-gradient(to  bottom, #0047AB 70%, #FFF6E9 30%)",
};

function App() {
  return (
    <div className="App" style={mystyle}>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
