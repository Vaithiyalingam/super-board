import { Featured } from "./Featured";
import { NewQuest } from "./NewQuest";
import { Sidebar } from "./Sidebar";
import { StakeEarn } from "./StakeEarn";
import { TrendingMints } from "./TrendingMints";

export const HomePage = () => {
  return (
    <div className="md:grid grid-cols-6 md:gap-5 px-4 md:px-8">
      <div className="hidden md:block col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-4 mt-8 mb:mb-8 mb-16 lg:w-[80%]">
        <Featured />
        <div className="mt-6">
          <NewQuest />
        </div>
        <div className="mt-6">
          <TrendingMints />
        </div>
        <div className="mt-6">
          <StakeEarn />
        </div>
      </div>
    </div>
  );
};
