import Image from "next/image";
import { icons } from "../utils/icons";

export const Header = () => {
  return (
    <div className="flex items-center justify-between mx-8 mt-6">
      <div className="">
        <Image
          className="w-[38px] h-[26px] md:w-[48px] md:h-[33px]"
          src={icons.superBoardLogo}
          alt="logo"
        />
      </div>
      <div className="hidden md:block w-[30px] h-[30px]">
        <Image src={icons.userAvatar} alt="logo" />
      </div>
    </div>
  );
};
