import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useSelector } from "react-redux";

function App() {
  // console.log(goods);
  return (
    <div className="wrapper">
      <Form />
      <List />
    </div>
  );
}

export default App;
