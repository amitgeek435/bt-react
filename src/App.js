// import logo from "./logo.svg";
import "./App.css";
import Lcard from "./component/Lcard";
import ComA from "./component/ComA";
import ComB from "./component/ComB";
import ComC from "./component/ComC";

function App() {
  return (
    <>
      <h1 className="h2 text-center text-primary my-5 shadow p-3 mb-5 bg-white rounded">
        Hello BT-REACT
      </h1>
      <div className="container">
        <Lcard />
        <ComA />
        <ComB />
        <ComC />
      </div>
    </>
  );
}

export default App;
