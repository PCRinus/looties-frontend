import React, { useState } from "react";
import ProfileIconRed from "../../assets/ProfileIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import Games from "../../assets/Games.svg";
import LootBoxesGrey from "../../assets/LootboxesGrey.svg";
import Afiliates from "../../assets/AfiliatesIcon.svg";
import TransactionIcon from "../../assets/TransactionsGrey.svg";
import LogoutIcon from "../../assets/LogoutImg.svg";
import InventoryIcon from "../../assets/InventoryIcon.svg";
import SettingsRedIcon from "../../assets/SettingsRed.svg";
import GamesRedIcon from "../../assets/GamesRed.svg";
import InventoryRedIcon from "../../assets/InventoryRed.svg";
import LootBoxesRed from "../../assets/LootboxesRed.svg";
import AffiliatesRed from "../../assets/AffiliatesRed.svg";
import TransactionsRed from "../../assets/TransactionsRed.svg";
import LogoutRed from "../../assets/LogoutRed.svg";
import ProfileGrey from "../../assets/ProfileGrey.svg";

const ProfileOptions: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const buttons = [
    { name: "Profile", icon: ProfileGrey, iconRed: ProfileIconRed },
    { name: "Settings", icon: SettingsIcon, iconRed: SettingsRedIcon },
    { name: "Games", icon: Games, iconRed: GamesRedIcon },
    { name: "Inventory", icon: InventoryIcon, iconRed: InventoryRedIcon },
    { name: "My lootboxes", icon: LootBoxesGrey, iconRed: LootBoxesRed },
    { name: "Affiliates", icon: Afiliates, iconRed: AffiliatesRed },
    { name: "Transactions", icon: TransactionIcon, iconRed: TransactionsRed },
    { name: "Log out", icon: LogoutIcon, iconRed: LogoutRed },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      {buttons.map(({ name, icon, iconRed }) => (
        <button
          key={name}
          onClick={() => setActiveButton(name)}
          className={`flex items-center justify-normal rounded-xl border ${
            activeButton === name ? "border-red-500 bg-red-500 bg-opacity-20" : "border-custom_gray_1 bg-custom_gray_1"
          } xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]`}
        >
          <img src={`${activeButton === name ? iconRed : icon}`} alt="svg" />
          <span
            className={`ml-2 font-sans text-base font-semibold leading-6 ${
              activeButton === name ? "text-custom_red_1" : "text-custom_gray_2"
            }`}
          >
            {name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProfileOptions;
