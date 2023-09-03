import desktopIllustration from "../assets/images/illustration-sign-up-desktop.svg";
import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";

const Image = () => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopIllustration} />
      <img
        className="w-auto md:ml-auto"
        src={mobileIllustration}
        alt="illustration"
      />
    </picture>
  );
};

export default Image;
