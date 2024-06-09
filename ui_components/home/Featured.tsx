import Image from "next/image";
import { icons } from "../../utils/icons";
import { NavigationComponent } from "./NavigationComponent";
import { TitleComponent } from "./TitleComponent";
import { Button } from "./Button";

export const Featured = () => {
  return (
    <div className="w-full">
      <TitleComponent
        title="Featured"
        subTitle="Explore new quests from us, curated for you!"
        showViewAll={false}
      />
      <div className="md:p-3 p-2 border border-treatsBorder bg-containerBg flex rounded-xl gap-3 mt-1.5 w-full relative">
        <Image
          className="rounded-xl w-[134px] h-[134px] lg:w-fit lg:h-fit"
          src={icons.quests}
          alt="featured quest img"
        />
        <div className="flex flex-col justify-between lg:w-[45%] relative">
          <div className="w-full">
            <div className="flex items-center bg-chainContainerBg px-1 py-1 rounded-sm gap-1 w-fit">
              <Image
                className="w-[10px] h-[10px]"
                src={icons.opLogo}
                alt="chain logo"
              />
              <p className="text-btnText subtitle_medium">Optimism</p>
            </div>
            <p className="heading_bold text-[15px] md:text-[20px] text-white leading-[25px] mt-2">
              {"Intro to Superboard"}
            </p>
            <p className="subtitle_medium text-descText leading-[16px]">
              {
                "Take a deep dive into Superboard and learn more about web3 and crypto."
              }
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="md:w-[40%] w-full">
              <Button text="Start Quest" />
            </div>
            <div className="flex items-center justify-between md:w-[50%] w-full bg-chainContainerBg py-2 rounded-md px-1">
              <p className="text-btnText subtitle_medium">Rewards:</p>
              <Image className="w-6 h-5" src={icons.reward} alt="reward" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
