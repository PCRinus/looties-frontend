import { FC } from "react";
import { ModalItemType } from "../modals/UserProfile";

interface Props {
  itemType: ModalItemType;
}

export const UserProfileModalItem: FC<Props> = ({ itemType }) => {
  return <div className="rounded-xl border border-solid border-[#2C3034] bg-[#1A1D20]">
    
  </div>;
};
