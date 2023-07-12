import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/chevron-down.svg";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center justify-center rounded-xl border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-10 2xl:h-12 2xl:w-[118px]"
      onClick={() => navigate(-1)}
    >
      <img src={BackIcon} alt="back-icon-svg" />
      <p className="ml-2 font-sans text-base font-semibold text-custom_gray_2 xs:hidden 2xl:inline">Back</p>
    </button>
  );
};

export default BackButton;
