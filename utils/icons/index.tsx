import explore from "../../public/assets/explore.svg";
import earnIcon from "../../public/assets/earn_icon.svg";
import mintsIcon from "../../public/assets/mints_icon.svg";
import questIcon from "../../public/assets/quest_icon.svg";
import mints from "../../public/assets/mints.png";
import quests from "../../public/assets/quests.png";
import opLogo from "../../public/assets/op_logo.png";
import reward from "../../public/assets/reward.png";
import superBoardLogo from "../../public/assets/super_board_logo.png";
import treats from "../../public/assets/treats.png";
import userAvatar from "../../public/assets/user_avatar.png";
import avatarRounded from "../../public/assets/avatar_rounded.png";
import chevronLeft from "../../public/assets/chevron_left.svg";
import chevronRight from "../../public/assets/chevron_right.svg";
import osmosisLogo from "../../public/assets/osmosisLogo.png";

export type TImages =
  | "explore"
  | "earnIcon"
  | "mintsIcon"
  | "questIcon"
  | "mints"
  | "quests"
  | "opLogo"
  | "reward"
  | "superBoardLogo"
  | "treats"
  | "userAvatar"
  | "avatarRounded"
  | "chevronLeft"
  | "chevronRight"
  | "osmosisLogo";

export type TNextImage = {
  src: string;
  height: number;
  width: number;
};

export const icons: Record<TImages, TNextImage> = {
  explore,
  earnIcon,
  mintsIcon,
  questIcon,
  mints,
  quests,
  opLogo,
  reward,
  superBoardLogo,
  treats,
  userAvatar,
  avatarRounded,
  chevronLeft,
  chevronRight,
  osmosisLogo,
};
