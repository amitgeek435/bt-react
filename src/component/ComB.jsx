import ComC from "./ComC";
import { Fname, Lname } from "../App";
import { useContext } from "react";
const ComB = () => {
  const fname = useContext(Fname);
  const lname = useContext(Lname);
  return (
    <>
      <h2>
        Hello Comp B {fname} {lname}
      </h2>
      <ComC />
    </>
  );
};
export default ComB;
