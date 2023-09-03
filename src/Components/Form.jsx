import { useState } from "react";
import { useMyContext } from "./App";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const { updateIsValidEmailProvided } = useMyContext();

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    setIsEmailValid(isValid);
    updateIsValidEmailProvided(isValid);
  };

  return (
    <form>
      <label
        htmlFor="emailInput"
        className="flex items-center justify-between text-xs font-bold"
      >
        Email address
        {!isEmailValid && (
          <div aria-hidden="true" className="text-xs text-Tomato">
            Valid email required
          </div>
        )}
      </label>
      <input
        type="email"
        name="emailInput"
        id="emailInput"
        placeholder="email@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`mb-6 mt-2 block w-full rounded-lg border border-Grey px-4 py-4 ${
          !isEmailValid && `border-Tomato bg-red-100 text-Tomato`
        }`}
      />

      <button
        className="inline-block w-full rounded-lg bg-DarkSlateGrey py-4 font-bold tracking-wide text-white  transition-all duration-300 hover:bg-Tomato"
        onClick={handleButtonClick}
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
