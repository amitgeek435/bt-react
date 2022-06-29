import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const LuseEffect = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(5);
  useEffect(() => {
    console.log("click then");
  }, [num]);
  return (
    <>
      <h1 className="bg-info text-center rounded shadow py-4 text-white-50">
        Use Effect
      </h1>
      <Button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clck Here 👍 {num}
      </Button>
      <br />
      <Button
        onClick={() => {
          setNums(nums + 5);
        }}
      >
        Clck Here 👍 {nums}
      </Button>
      <br />
      <Button
        onClick={() => {
          setNums(0);
          setNum(0);
        }}
      >
        Reset 🔸
      </Button>
    </>
  );
};
export default LuseEffect;
