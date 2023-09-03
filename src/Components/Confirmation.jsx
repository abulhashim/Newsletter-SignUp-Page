import SuccessIcon from "../assets/images/icon-success.svg";

import { useMyContext } from "./App";

const Confirmation = () => {
  const { isValidEmailProvided, updateIsValidEmailProvided } = useMyContext();

  return (
    <div className="p-6 md:max-w-[31.5rem] md:rounded-3xl md:bg-white md:p-10 md:shadow-xl md:shadow-DarkSlateGrey">
      <div className="mt-[15vh] md:mt-0">
        <img src={SuccessIcon} alt="tick mark icon" />
        <h2 className="mb-4 mt-8 text-6xl font-bold">
          Thanks for subscribing!
        </h2>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button
        className="mt-[33vh] inline-block w-full rounded-lg bg-DarkSlateGrey py-5 font-bold tracking-wider text-white transition-colors duration-300 hover:bg-Tomato md:mt-8"
        type="button"
        onClick={() => updateIsValidEmailProvided(!isValidEmailProvided)}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Confirmation;
