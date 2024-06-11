import { useState, useEffect } from "react";
import { Tab, TabGroup, TabPanel, TabList, TabPanels } from "@headlessui/react";
import axios from "axios";
import ClientDepositTable from "../../../components/ClientDepositTable/ClientDepositTable";
import ClientWithdrawalTable from "../../../components/ClientWithdrawalTable/ClientWithdrawalTable";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// deposits/mydeposits

function Transactions() {
  const [deposits, setDeposits] = useState(null);
  const [withdrawals, setWithdrawals] = useState(null);
  const [depositLoading, setDepositLoading] = useState(false);
  const [withdrawalLoading, setWithdrawalLoading] = useState(false);
  const [depositError, setDepositError] = useState(false);
  const [withdrawalError, setWithdrawalError] = useState(false);
  const getDepositHistory = async () => {
    setDepositLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}deposit/mydeposits`,
        {
          withCredentials: true,
        }
      );
      setDeposits(data.deposits);
    } catch (error) {
      setDepositError(true);
    } finally {
      setDepositLoading(false);
    }
  };
  const getWithdrawalHistory = async () => {
    setWithdrawalLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}withdrawal/mywithdrawals`,
        {
          withCredentials: true,
        }
      );
      setWithdrawals(data.withdrawals);
    } catch (error) {
      setWithdrawalError(true);
    } finally {
      setWithdrawalLoading(false);
    }
  };

  useEffect(() => {
    getDepositHistory();
    getWithdrawalHistory();
  }, []);
  //the goal is to have a deposit and withdrawal tab
  //the deposit tab should contain a deposits table and the withdrawal tab should contain a withdrawal table
  return (
    <div className="font-montserrat">
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Transaction Records
      </h1>
      <div className="grid   bg-white min-h-[256px] shadow-sm dark:bg-slate-800  mb-16">
        <div className="px-2  w-full overflow-x-scroll py-16 sm:px-0">
          <TabGroup>
            <TabList className="flex space-x-4 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-white",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-red-400 shadow text-gray-700 dark:text-white"
                      : " hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Deposits
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-white",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-red-400  shadow text-gray-700 dark:text-white"
                      : " hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Withdrawal
              </Tab>
            </TabList>
            <TabPanels className="mt-4">
              <TabPanel>
                <ClientDepositTable
                  allDeposits={deposits}
                  loading={depositLoading}
                  error={depositError}
                />
              </TabPanel>
              <TabPanel>
                <ClientWithdrawalTable
                  withdrawals={withdrawals}
                  loading={withdrawalLoading}
                  error={withdrawalError}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
