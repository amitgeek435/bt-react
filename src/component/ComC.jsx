import { Fname, Lname } from "../App";

// consume data for provider
const ComC = () => {
  return (
    <>
      <Fname.Consumer>
        {(fname) => {
          return (
            <>
              <Lname.Consumer>
                {(lname) => {
                  return (
                    <>
                      <h1>Hello {fname}</h1>
                      <h2 className="h1">Hello {lname}</h2>
                    </>
                  );
                }}
              </Lname.Consumer>
            </>
          );
        }}
      </Fname.Consumer>
    </>
  );
};
export default ComC;
