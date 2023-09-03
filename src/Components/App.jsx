import Signup from "./Signup";
import Confirmation from "./Confirmation";
import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useMyContext = () => useContext(Context);

function App() {
  const [isValidEmailProvided, setIsValidEmailProvided] = useState(false);

  const updateIsValidEmailProvided = (value) => {
    setIsValidEmailProvided(value);
  };

  return (
    <Context.Provider
      value={{ isValidEmailProvided, updateIsValidEmailProvided }}
    >
      {!isValidEmailProvided ? <Signup /> : <Confirmation />}
    </Context.Provider>
  );
}

export default App;
