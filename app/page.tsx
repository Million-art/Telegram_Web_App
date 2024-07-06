'use client'
import { useState } from "react";
import LaunchParams from "./components/UrRLSearchParams";
import Tasks from "./components/Tasks";
import Withdrawal from "./components/Withdrawal";
import Meme from "./components/Meme";
import { App, Page, Navbar, Block } from 'konsta/react';

export default function Home() {
  const user = LaunchParams();
  const [activeView, setActiveView] = useState('meme');

  const handleTasks = () => {
    setActiveView('tasks');
  };

  const handleMeme = () => {
    setActiveView('meme');
  };

  const handleWithdrawal = () => {
    setActiveView('withdrawal');
  };

  return (
    <Page className="w-full bg-gray-900 text-white h-[100vh]">
      <section className="mx-auto mb-6">
        <h1 className="text-2xl font-bold">{user.initData?.user?.username}</h1>
      </section>
      <section className=" mb-6">
        {/* Dynamic content based on activeView */}
        {activeView === 'meme' && (
          <Meme />
        )}
        {activeView === 'tasks' && (
          <Tasks />
        )}
        {activeView === 'withdrawal' && (
          <Withdrawal />
        )}
      </section>
      <section className="space-x-4 absolute bottom-1 bg-blue-500 w-full flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleMeme}>Meme</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleTasks}>Tasks</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleWithdrawal}>Withdrawal</button>
      </section>
    </Page>
  );
}