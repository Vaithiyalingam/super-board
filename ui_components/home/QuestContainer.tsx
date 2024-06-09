import Image from "next/image";
import { TNextImage, icons } from "../../utils/icons";
import { FC } from "react";
import { OverlappingImages } from "./OverlappingImages";

export interface IQuestContainer {
  title: string;
  img: TNextImage;
  overlapImgs: TNextImage[];
  bottomRightImg: TNextImage;
  className?: string;
  imgClassName?: string;
  dataName: string;
  data: string;
}

export const QuestContainer: FC<IQuestContainer> = ({
  title,
  img,
  overlapImgs,
  bottomRightImg,
  className,
  imgClassName,
  data,
  dataName,
}) => {
  return (
    <div
      className={`flex w-[140px] md:w-auto  md:h-auto flex-col rounded-xl ${
        className ?? className
      }`}
    >
      <Image className="rounded-t-xl" src={img} alt="featured quest img" />
      <div className="px-2 py-2">
        <p className="heading2_bold text-questText">{title}</p>
        <div className="flex items-center justify-between  mt-3">
          <div className="flex items-center">
            <OverlappingImages images={overlapImgs} />
            <div>
              <p className="title_bold text-questText">{data}</p>
              <p className="title_normal text-btnText">{dataName}</p>
            </div>
          </div>
          <Image
            className={`${imgClassName ? imgClassName : "w-7 h-5"}`}
            src={bottomRightImg}
            alt="reward"
          />
        </div>
      </div>
    </div>
  );
};
