import { FC } from "react";
import { NavigationComponent } from "./NavigationComponent";

export interface ITitleComponentProps {
  title: string;
  subTitle: string;
  showViewAll: boolean;
}

export const TitleComponent: FC<ITitleComponentProps> = ({
  title,
  subTitle,
  showViewAll,
}) => {
  return (
    <div className="flex items-center md:justify-between">
      <div>
        <p className="heading_bold text-white leading-[25px]">{title}</p>
        <p className="subtitle_medium whitespace-nowrap text-descText leading-7">
          {subTitle}
        </p>
      </div>
      <div className="hidden md:block">
        <NavigationComponent showViewAll={showViewAll} />
      </div>
    </div>
  );
};
