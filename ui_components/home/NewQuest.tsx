import Image from "next/image";
import { icons } from "../../utils/icons";
import { Button } from "./Button";
import { TitleComponent } from "./TitleComponent";
import { title } from "process";
import { QuestContainer } from "./QuestContainer";

const newQuestArr = [
  {
    title: "Bridge Express: Chain to Chain Connection",
    img: icons.quests,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.reward,
    dataName: "Chads",
    data: "100",
  },
  {
    title: "Bridge Express: Chain to Chain Connection",
    img: icons.quests,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.reward,
    dataName: "Chads",
    data: "100",
  },
  {
    title: "Bridge Express: Chain to Chain Connection",
    img: icons.quests,
    overlapImgs: [icons.avatarRounded, icons.avatarRounded],
    bottomRightImg: icons.reward,
    dataName: "Chads",
    data: "100",
  },
];

export const NewQuest = () => {
  return (
    <div className="w-full">
      <TitleComponent
        title="New Quest for you!"
        subTitle="Explore new quests from us, curated for you!"
        showViewAll={true}
      />
      <div className="flex items-center w-[calc(100vw-20px)] md:w-full overflow-x-auto gap-4 mt-3">
        {newQuestArr.map((item, key) => {
          return (
            <div className="last:mr-4" key={key}>
              <QuestContainer
                title={item.title}
                img={item.img}
                overlapImgs={item.overlapImgs}
                bottomRightImg={item.bottomRightImg}
                className="bg-containerBg h-[235px]"
                data={item.data}
                dataName={item.dataName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
