import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
interface Transaction {
  id: number;
  type: string;
  hash: string;
  coinsAmount: string;
  nftName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

// Define the props type for GameHistoryMobileCard component
interface ITransactionProps {
  transactions: Transaction[];
}
const DepositTransactionsMobile: React.FC<ITransactionProps> = ({ transactions }) => {
  return (
    <div className=" flex flex-col p-6">
      <Scrollbars
        autoHeight
        autoHeightMin={0}
        autoHeightMax={880} // This height can be adjusted based on the desired height of four games
      >
        {transactions.map((transaction, index) => (
          <div
            className={`flex h-[220px] w-full flex-shrink-0  items-center justify-normal rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2124]  pl-6 ${
              index < transactions.length - 1 ? "mb-4" : ""
            }`}
          >
            <div className="flex flex-col gap-4" key={transaction.id}>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">ID</span>
                <span className="text-[#DFDFDF]">{transaction.id}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Coins/NFT's</span>
                {/* amount if coins, nftname if nft -> type */}
                <span className="text-[#DFDFDF]">{transaction.coinsAmount}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Deposit method</span>

                <span className="text-[#DFDFDF]">SOL</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Amount</span>

                <span className="text-[#DFDFDF]">{transaction.coinsAmount}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Date</span>

                <span className="text-[#DFDFDF]">{transaction.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </Scrollbars>
      <div className="h-[40px] w-full"></div>
    </div>
  );
};

export default DepositTransactionsMobile;
