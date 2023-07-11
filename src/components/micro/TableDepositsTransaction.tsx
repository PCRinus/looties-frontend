import React from "react";

// Define the Game type
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

// Define the props type for TableGameHistory component
interface TableProps {
  transactions: Transaction[];
}

const TableDepositsTransaction: React.FC<TableProps> = ({ transactions }) => {
  return (
    <div className=" max-h-[576px] w-full p-8">
      <div className="  max-h-[600px] overflow-scroll  rounded-xl border border-custom_gray_1">
        <table className="w-full flex-nowrap divide-y divide-custom_gray_1  font-sans text-base font-semibold text-custom_gray_2">
          <thead className=" bg-[#1E2124]">
            <tr className="h-12">
              <th className=" whitespace-nowrap  pl-4 text-left">ID</th>
              <th className=" whitespace-nowrap  text-left">Coins/NFT's</th>
              <th className=" whitespace-nowrap  text-left">Deposit method</th>
              <th className="  whitespace-nowrap text-left">Amount</th>
              <th className=" whitespace-nowrap  text-left">Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-custom_gray_1">
            {transactions.map((transaction, index) => (
              <tr
                className={`${index % 2 === 0 ? "h-12 bg-[#1A1D20]" : "h-12 bg-[#1E2124]"} ${
                  transactions.length - 1 === index ? "rounded-b-lg" : ""
                }`}
                key={transaction.id}
              >
                <td className="whitespace-nowrap   pl-4 text-left">{transaction.id}</td>
                <td className="whitespace-nowrap  text-left">{transaction.coinsAmount}</td>
                <td className="whitespace-nowrap  text-left">SOL</td>
                <td className="whitespace-nowrap  text-left">{transaction.coinsAmount}</td>
                <td className="whitespace-nowrap  text-left">{transaction.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-12 w-auto"></div>
      </div>
    </div>
  );
};

export default TableDepositsTransaction;
