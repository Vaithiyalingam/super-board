import Image from "next/image";
import { icons } from "../../utils/icons";
import { Button } from "./Button";
import { TitleComponent } from "./TitleComponent";
import { title } from "process";
import { QuestContainer } from "./QuestContainer";

const stakeEarnArr = [
  {
    title: "Welcome to Zora",
    img: icons.osmosisLogo,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.opLogo,
    dataName: "Minted",
    data: "100k",
  },
  {
    title: "Welcome to Zora",
    img: icons.osmosisLogo,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.opLogo,
    dataName: "Minted",
    data: "100k",
  },
  {
    title: "Welcome to Zora",
    img: icons.osmosisLogo,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.opLogo,
    dataName: "Minted",
    data: "100k",
  },
];

export const StakeEarn = () => {
  return (
    <div className="w-full">
      <TitleComponent
        title="Stake & Earn"
        subTitle="Stake on validators to secure blockchain network and earn rewards"
        showViewAll={true}
      />
      <div className="flex items-center w-[calc(100vw-20px)] md:w-full overflow-x-auto gap-4 mt-3">
        {stakeEarnArr.map((item, key) => {
          return (
            <div className="last:mr-4" key={key}>
              <QuestContainer
                title={item.title}
                img={item.img}
                overlapImgs={item.overlapImgs}
                bottomRightImg={item.bottomRightImg}
                className="h-[200px]"
                data={item.data}
                dataName={item.dataName}
                imgClassName="w-5 h-5 rounded-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
