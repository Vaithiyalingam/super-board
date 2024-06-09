import Image from "next/image";
import { sidebarList } from "../../constants";
import { icons } from "../../utils/icons";
import { Button } from "./Button";

export const Sidebar = () => {
  return (
    <div className="mt-8">
      {sidebarList.map((item, key) => {
        return (
          <div key={key} className="flex items-center gap-2.5 mb-5">
            <Image src={item.icon} alt="icons" />
            <p className="title_btn_medium text-btnText">{item.name}</p>
          </div>
        );
      })}
      <div className="mt-[144px] border border-treatsBorder rounded-md p-2 w-[240px]">
        <Image src={icons.treats} alt="treats" className="mb-2" />
        <Button text="Collect treats" />
      </div>
    </div>
  );
};
