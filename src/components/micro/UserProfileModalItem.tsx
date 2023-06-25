import { FC } from "react";
import { ModalItemType } from "../modals/UserProfile";
import TOTAL_GAME from "../../assets/UserProfileModal/TOTAL_GAME.svg";
import GAMES_WON from "../../assets/UserProfileModal/GAMES_WON.svg";
import GAMES_LOST from "../../assets/UserProfileModal/GAMES_LOST.svg";
import WIN_RATIO from "../../assets/UserProfileModal/WIN_RATIO.svg";
import LOOTBOXES_OPEN from "../../assets/UserProfileModal/LOOTBOXES_OPEN.svg";
import REFERRALS from "../../assets/UserProfileModal/REFERRALS.svg";
import TOTAL_WAGERED from "../../assets/UserProfileModal/TOTAL_WAGERED.svg";
import NET_PROFIT from "../../assets/UserProfileModal/NET_PROFIT.svg";
import SOCIAL_LINKS from "../../assets/UserProfileModal/SOCIAL_LINKS.svg";
import TwitterIcon from "../../assets/TwiterIcon.svg";
import DiscordIcon from "../../assets/DiscordIcon.svg";
import { useSelector } from "react-redux";

interface Props {
  itemType: ModalItemType;
  profile: any;
}

export const UserProfileModalItem: FC<Props> = ({ itemType, profile }) => {
  const getImageSrc = (): string => {
    switch (itemType) {
      case ModalItemType.TOTAL_GAME:
        return TOTAL_GAME;
      case ModalItemType.GAMES_WON:
        return GAMES_WON;
      case ModalItemType.GAMES_LOST:
        return GAMES_LOST;
      case ModalItemType.WIN_RATIO:
        return WIN_RATIO;
      case ModalItemType.LOOTBOXES_OPEN:
        return LOOTBOXES_OPEN;
      case ModalItemType.REFERRALS:
        return REFERRALS;
      case ModalItemType.TOTAL_WAGERED:
        return TOTAL_WAGERED;
      case ModalItemType.NET_PROFIT:
        return NET_PROFIT;
      case ModalItemType.SOCIAL_LINKS:
        return SOCIAL_LINKS;
      default:
        return "";
    }
  };

  const getItemTitle = () => {
    switch (itemType) {
      case ModalItemType.TOTAL_GAME:
        return "Total games";
      case ModalItemType.GAMES_WON:
        return "Games won";
      case ModalItemType.GAMES_LOST:
        return "Games lost";
      case ModalItemType.WIN_RATIO:
        return "Win ratio";
      case ModalItemType.LOOTBOXES_OPEN:
        return "Lootboxes open";
      case ModalItemType.REFERRALS:
        return "Referrals";
      case ModalItemType.TOTAL_WAGERED:
        return "Total wagered";
      case ModalItemType.NET_PROFIT:
        return "Net profit";
      case ModalItemType.SOCIAL_LINKS:
        return "Social links";
      default:
        return "";
    }
  };

  const getItemData = () => {
    // TODO: show real data after auth implementation
    switch (itemType) {
      case ModalItemType.TOTAL_GAME:
        return profile.gamesPlayed;
      case ModalItemType.GAMES_WON:
        return profile.gamesWon;
      case ModalItemType.GAMES_LOST:
        return profile.gamesLost;
      case ModalItemType.WIN_RATIO:
        return profile.winRatio;
      case ModalItemType.LOOTBOXES_OPEN:
        return profile.lootboxesOpened;
      case ModalItemType.REFERRALS:
        return "0";
      case ModalItemType.TOTAL_WAGERED:
        return profile.totalWagered;
      case ModalItemType.NET_PROFIT:
        return `+ ${profile.netProfit}`;
      case ModalItemType.SOCIAL_LINKS:
        return (
          <>
            <a href={profile.twitterLink ?? "#"} target="_blank" rel="noreferrer">
              <img src={TwitterIcon} alt="Twitter"></img>
            </a>
            <a href={profile.discordLink ?? "#"} target="_blank" rel="noreferrer">
              <img src={DiscordIcon} alt="Discord"></img>
            </a>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-[#2C3034] bg-[#1A1D20] xs:gap-3 xs:px-[18px] xs:py-[29px] 2xl:gap-5 2xl:px-[50px] 2xl:py-[42px]">
      <div className="shrink-0 xs:h-6 xs:w-6 2xl:h-12 2xl:w-12">
        <img className="h-full w-full" src={getImageSrc()} alt="Profile modal data item icon"></img>
      </div>
      <div className="flex flex-col items-start justify-between xs:gap-0 2xl:gap-2">
        <span className="whitespace-nowrap font-semibold text-[#848B8D] xs:text-xs 2xl:text-base">
          {getItemTitle()}
        </span>
        <div className="flex flex-row flex-nowrap items-center justify-start gap-3 whitespace-nowrap font-semibold text-[#DFDFDF] xs:text-xs 2xl:text-base">
          {getItemData()}
        </div>
      </div>
    </div>
  );
};
