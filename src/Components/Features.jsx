import listIcon from "../assets/images/icon-list.svg";

const Features = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold md:text-[3.5rem] md:leading-normal ">
        Stay updated!
      </h1>
      <p className="my-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul className="mb-9 mt-6">
        <li className="mt-2 flex gap-2">
          <img src={listIcon} alt="list style icon" />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="mt-2 flex gap-2">
          <img src={listIcon} alt="list style icon" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="mt-2 flex gap-2">
          <img src={listIcon} alt="list style icon" />
          <p>And much more!</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
