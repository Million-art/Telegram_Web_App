"use client";
import React, { useState, useEffect } from "react";
import { BsEye, BsEyeSlash, BsPersonCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Home() {
  const [toggleBalance, setToggleBalance] = useState(false);
  const [balance, setBalance] = useState("0 ETB");
  const [userName, setUserName] = useState("John Doe");
  const router = useRouter();

  useEffect(() => {
    fetchUserBalance();
  }, []);

  const fetchUserBalance = async () => {
    try {
      const response = await fetch("/api/balance");
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching user balance:", error);
      setBalance("Error fetching balance");
    }
  };

  const toggleBalanceVisibility = () => {
    setToggleBalance((prevToggle) => !prevToggle);
  };

  const handleTasksClick = () => {
    router.push("/tasks");
  };

  const handleWithdrawalClick = () => {
    router.push("/withdrawal");
  };

  const handleReferralClick = () => {
    router.push("/referrals");
  };

  return (
    <main className="flex flex-col h-screen">
      <nav className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BsPersonCircle size={24} />
          <p>{userName}</p>
        </div>
        <h1 className="flex items-center space-x-3">
          Balance {toggleBalance ? balance : "*********"}
          {toggleBalance ? (
            <BsEyeSlash
              onClick={toggleBalanceVisibility}
              className="cursor-pointer"
            />
          ) : (
            <BsEye
              onClick={toggleBalanceVisibility}
              className="cursor-pointer"
            />
          )}
        </h1>
      </nav>

      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Meme</h1>
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        </div>
      </div>

      <footer className="bg-blue-500 text-white py-4 px-6 flex justify-between">
        <div className="cursor-pointer" onClick={handleTasksClick}>
          Tasks
        </div>
        <div className="cursor-pointer" onClick={handleWithdrawalClick}>
          Withdrawal
        </div>
        <div className="cursor-pointer" onClick={handleReferralClick}>
          Referral
        </div>
      </footer>
    </main>
  );
}
