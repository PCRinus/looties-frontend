import { Link } from "react-router-dom";
import dolarFrame from "../../assets/DolarFrame.svg";

interface Props {
  cardTitle: string;
  itemsCount: string | number;
  label: string;
  cost: string | number;
  icon: string;
  lootboxId: string;
}

export const NftCard: React.FC<Props> = ({ cardTitle, itemsCount, label, cost, icon, lootboxId }) => {
  return (
    <div className="xs:h-[280px] xs:w-[155px] lg:h-[399px] lg:w-64">
      <div className="flex flex-row items-center justify-between rounded-t-xl border-2 border-solid border-[#2C3034] bg-[#1E2124] xs:h-8 lg:h-12">
        <span className="text-white xs:p-2 xs:text-xs lg:p-4 lg:text-base">{cardTitle}</span>
        <span className="text-[#888888] xs:p-2 xs:text-xs lg:p-4 lg:text-base">{`${itemsCount} items`}</span>
      </div>
      <div
        className="rounded-b-xl border-2 border-solid border-[#2C3034] xs:p-2 lg:p-4"
        style={{
          background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%)",
        }}
      >
        <img
          className="mx-auto my-0 rounded-lg xs:h-[158px] xs:w-[158px] lg:h-[224px] lg:w-[224px]"
          src={icon}
          alt="NFT icon"
        />
        <div className="flex flex-row items-center justify-between py-4">
          {label.toLowerCase() === "official" ? (
            <div className="flex items-center justify-center rounded-[4px] border border-solid border-[#F03033] bg-[#F03033] bg-opacity-20 text-xs text-xs text-[#F03033] xs:h-4 xs:w-[43px] lg:h-[23px] lg:w-[57px]">
              {label}
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-[4px] border border-solid border-[#00FFF0] bg-[#00FFF0] bg-opacity-20 text-xs text-xs text-[#00FFF0] xs:h-4 xs:w-[43px]  lg:h-[23px] lg:w-[57px]">
              {label}
            </div>
          )}

          <div className="flex flex-row items-center justify-end gap-1 text-xs">
            <img className="h-4 w-4" src={dolarFrame} alt="Dolar svg" />
            <span className="text-[#F03033] xs:text-xs lg:text-base">{`${cost} Coins`}</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link to={`/lootboxes/${lootboxId}`}>
            <button className="rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] text-white xs:h-[29px] xs:w-[158px] xs:text-xs lg:h-[40px] lg:w-[224px] lg:text-base">
              Open
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
