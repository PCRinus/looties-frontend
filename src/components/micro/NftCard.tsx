import dolarFrame from "../../assets/DolarFrame.svg";

interface Props {
  cardTitle: string;
  itemsCount: string | number;
  label: string;
  cost: string | number;
  icon: string;
}

export const NftCard: React.FC<Props> = ({ cardTitle, itemsCount, label, cost, icon }) => {
  return (
    <div className="h-[399px] w-64">
      <div className="flex h-12 flex-row items-center justify-between rounded-t-xl border-2 border-solid border-[#2C3034] bg-[#1E2124]">
        <span className="p-4 text-white">{cardTitle}</span>
        <span className="p-4 text-[#888888]">{`${itemsCount} items`}</span>
      </div>
      <div
        className="rounded-b-xl border-2 border-solid border-[#2C3034] p-4"
        style={{
          background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%)",
        }}
      >
        <img className="mx-auto my-0 h-[224px] w-[224px] rounded-lg" src={icon} alt="NFT icon" />
        <div className="flex flex-row items-center justify-between py-4">
          {label.toLowerCase() === "official" ? (
            <div className="flex h-[23px] w-[57px] items-center justify-center rounded-[4px] border border-solid border-[#F03033] bg-[#F03033] bg-opacity-20 text-xs text-[#F03033]">
              {label}
            </div>
          ) : (
            <div className="flex h-[23px] w-[57px] items-center justify-center rounded-[4px] border border-solid border-[#00FFF0] bg-[#00FFF0]  bg-opacity-20 text-xs text-[#00FFF0]">
              {label}
            </div>
          )}

          <div className="flex flex-row items-center justify-end gap-1 text-xs">
            <img className="h-4 w-4" src={dolarFrame} alt="Dolar svg" />
            <span className="text-[#F03033]">{`${cost} Coins`}</span>
          </div>
        </div>
        <button className="h-[40px] w-[224px] rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] text-white">
          Open
        </button>
      </div>
    </div>
  );
};
