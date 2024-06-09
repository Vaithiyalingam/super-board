import Image from "next/image";
import { icons } from "../../utils/icons";
import { FC } from "react";

export interface INavigationComponentProps {
  showViewAll: boolean;
}

export const NavigationComponent: FC<INavigationComponentProps> = ({
  showViewAll,
}) => {
  return (
    <div className="flex items-center gap-[18px]">
      {showViewAll && (
        <div className="bg-containerBg py-2 px-[22px] rounded-[20px] flex items-center justify-center">
          <p className="text-btnText subtitle_medium">View all</p>
        </div>
      )}
      <div className="flex items-center gap-1.5">
        <div className="bg-containerBg w-7 h-7 rounded-full flex items-center justify-center">
          <Image src={icons.chevronLeft} alt="chevron left" />
        </div>
        <div className="bg-containerBg w-7 h-7 rounded-full flex items-center justify-center">
          <Image src={icons.chevronRight} alt="chevron right" />
        </div>
      </div>
    </div>
  );
};
