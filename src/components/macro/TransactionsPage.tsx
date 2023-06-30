import React, { useEffect, useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import SettingsSaveChanges from "../micro/SettingsSaveChanges";
import ContactSupport from "../micro/ContactSupport";
import DepositTransactionsMobile from "../micro/DepositTransactionsMobile";
import TableDepositsTransaction from "../micro/TableDepositsTransaction";
import WithdrawsTransactionsMobile from "../micro/WithdrawsTransactionsMobile";
import TableWithdrawsTransactions from "../micro/TableWithdrawsTransactions";
import LootBoxesButton from "../micro/LootBoxesButton";
import DepositsButton from "../micro/DepositsButton";
import WithdrawsButton from "../micro/WithdrawsButton";

interface Game {
  id: number;
  game: string;
  betAmount: number;
  winning: number;
  date: string;
}

const TransactionsPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [displayCount, setDisplayCount] = useState(10);
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 576px)").matches);
  const [activeButton, setActiveButton] = useState("deposits");

  const handleDeposits = () => {
    setActiveButton("deposits");
  };

  const handleWithdraws = () => {
    setActiveButton("withdraws");
  };

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  useEffect(() => {
    const dummyGames: Game[] = Array.from({ length: 20 }, (_, id) => ({
      id,
      game: `Game ${id + 1}`,
      betAmount: Math.floor(Math.random() * 100),
      winning: Math.floor(Math.random() * 100),
      date: new Date().toLocaleDateString(),
    }));

    setGames(dummyGames);
  }, []);

  const loadMoreGames = () => {
    setDisplayCount((count) => count + 10);
  };

  return (
    <>
      <div className="bottom-fade mb-[52px] flex-auto rounded-xl bg-custom_black_2 xs:mx-6 xs:h-auto 2xl:w-full">
        <ProfileOptionsHeader title={"Transactions"} />
        <div className="flex gap-4 xs:p-6 2xl:p-8">
          <DepositsButton onClick={handleDeposits} enabled={activeButton === "deposits"} />
          <WithdrawsButton onClick={handleWithdraws} enabled={activeButton === "withdraws"} />
        </div>

        {games.length > 0 ? (
          <>
            {activeButton === "deposits" ? (
              isXsScreen ? (
                <DepositTransactionsMobile />
              ) : (
                <TableDepositsTransaction games={games} />
              )
            ) : isXsScreen ? (
              <WithdrawsTransactionsMobile />
            ) : (
              <TableWithdrawsTransactions />
            )}
          </>
        ) : (
          <div className="flex w-full items-center justify-center xs:px-6 xs:py-[58px] 2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl 2xl:text-2xl">
                You don’t have any transactions.
              </h2>
              <p className="text-center text-base font-semibold text-custom_gray_2">
                When you make any deposits, withdraws or a cashout, the transaction will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
      <ContactSupport />
    </>
  );
};

export default TransactionsPage;
