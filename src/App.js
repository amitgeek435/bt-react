import "./App.css";
import Lcard from "./component/Lcard";
import ComA from "./component/ComA";
// import logo from "./logo.svg";
// import ComB from "./component/ComB";
// import ComC from "./component/ComC";
import { createContext } from "react";

const Fname = createContext();
const Lname = createContext();

function App() {
  return (
    <>
      <h1 className="h2 text-center text-primary my-5 shadow p-3 mb-5 bg-white rounded">
        Hello BT-REACT
      </h1>
      <div className="container">
        <Lcard />
        <Fname.Provider value={"abc"}>
          <Lname.Provider value={"xyz"}>
            <ComA />
          </Lname.Provider>
        </Fname.Provider>
      </div>
    </>
  );
}

export default App;
export { Fname, Lname };
