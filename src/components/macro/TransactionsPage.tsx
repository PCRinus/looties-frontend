import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import ContactSupport from "../micro/ContactSupport";
import TableDepositsTransaction from "../micro/TableDepositsTransaction";
import TableWithdrawsTransactions from "../micro/TableWithdrawsTransactions";
import DepositsButton from "../micro/DepositsButton";
import WithdrawsButton from "../micro/WithdrawsButton";
import DepositTransactionsMobile from "../micro/DepositTransactionsMobile";
import WithdrawsTransactionsMobile from "../micro/WithdrawsTransactionsMobile";
import { useSelector } from "react-redux";

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

const TransactionsPage: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 1535px)").matches);

  const [items, setItems] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [activeButton, setActiveButton] = useState("deposits");

  const fetchDeposits = () => {
    setIsLoading(true);
    setError(null);

    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${user.id}?transactionType=DEPOSIT&page=${page}`, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setItems((prevItems) => [...prevItems, ...data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchWithdrawals = () => {
    setIsLoading(true);
    setError(null);

    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${user.id}?transactionType=WITHDRAWAL&page=${page}`, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setItems((prevItems) => [...prevItems, ...data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleButtonChange = (type: string) => {
    setActiveButton(type);
    setPage(1);
    if (type === "deposits") {
      setItems([]);
      fetchDeposits();
    } else if (type === "withdraws") {
      setItems([]);
      fetchWithdrawals();
    }
  };

  useEffect(() => {
    fetchDeposits();
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  return (
    <>
      <div className="bottom-fade mb-[52px] flex-auto rounded-xl bg-custom_black_2 xs:mx-6 xs:h-auto 2xl:w-full">
        <ProfileOptionsHeader title={"Transactions"} />
        <div className="flex gap-4 xs:p-6 2xl:p-8">
          <DepositsButton onClick={() => handleButtonChange("deposits")} enabled={activeButton === "deposits"} />
          <WithdrawsButton onClick={() => handleButtonChange("withdraws")} enabled={activeButton === "withdraws"} />
        </div>

        {items.length > 0 ? (
          <>
            {activeButton === "deposits" ? (
              isXsScreen ? (
                <DepositTransactionsMobile transactions={items} />
              ) : (
                <TableDepositsTransaction transactions={items} />
              )
            ) : isXsScreen ? (
              <WithdrawsTransactionsMobile transactions={items} />
            ) : (
              <TableWithdrawsTransactions transactions={items} />
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
