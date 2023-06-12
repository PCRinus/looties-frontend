import { FC } from "react";
import ClassicButton from "../micro/ClassicButton";
import LootBoxesButton from "../micro/LootBoxesButton";
import HomeButton from "../micro/HomeButton";
import { SidebarInfobar } from "../micro/SidebarInfobar";
import { MobileSocialButtons } from "../micro/MobileSocialButtons";
import { useSelector } from "react-redux";

export const MobileSidebar: FC = () => {
  const openSidebar = useSelector((state: any) => state.ui.openSidebar);

  return (
    <div
      className={`${
        openSidebar ? "right-0" : "right-[-50vw]"
      } top-20 z-50 h-[calc(100vh-80px-64px)] bg-[#1A1D20] transition-all duration-200 xs:absolute xs:w-[50vw] md:w-[25vw] 2xl:hidden`}
    >
      <div className={`${openSidebar ? "flex" : "hidden"} mt-8 h-full flex-col items-center justify-start`}>
        <div className="flex w-3/4 flex-col items-end justify-start gap-3">
          <HomeButton />
          <LootBoxesButton />
          <ClassicButton />
        </div>
        <hr className="my-8 block h-px w-3/4 border-0 bg-[#34373A]" />
        <SidebarInfobar />
        <hr className="my-8 block h-px w-3/4 border-0 bg-[#34373A]" />
        <MobileSocialButtons />
      </div>
    </div>
  );
};
