import Image from "next/image";
import { icons } from "../utils/icons";

export const Footer = () => {
  return (
    <div className="bg-bg flex items-center justify-around md:hidden py-4 fixed bottom-0 w-full">
      <Image src={icons.explore} alt="explore icon" />
      <Image src={icons.questIcon} alt="quest icon" />
      <Image src={icons.mintsIcon} alt="mint icon" />
      <Image width={27} height={27} src={icons.userAvatar} alt="avatar icon" />
    </div>
  );
};
