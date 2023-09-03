import Features from "./Features";
import Form from "./Form";
import Image from "./Image";

const Signup = () => {
  return (
    <div className="md:shadow-DarkSlateGrey text-DarkSlateGrey gap-5 md:flex md:max-h-[40rem] md:max-w-[58.125rem] md:items-center md:justify-center md:rounded-[2rem] md:bg-white md:p-[1.375rem] md:shadow-xl">
      <div className="w-full md:order-1 md:basis-1/2">
        <Image />
      </div>
      <div className="px-6 py-8 md:basis-1/2">
        <Features />
        <Form />
      </div>
    </div>
  );
};

export default Signup;
