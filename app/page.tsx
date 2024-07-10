'use client'
import { useEffect, useState } from "react";
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import { Page, Navbar, Block } from 'konsta/react';
import UserProfile from "./components/frontend/UserProfile";
import checkUserRegistration from "@/utils/helper/checkUserRegistration";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

export default function Home() {
  const [activeView, setActiveView] = useState('meme');
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await checkUserRegistration(dispatch);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);

      }
    };
    fetchUserData();
  }, [dispatch]);
  const userData = useAppSelector((state) => state.users);

  const handleViewChange = (view: 'meme' | 'tasks' | 'withdrawal') => {
    setActiveView(view);
  };

  return (
    <Page className="w-full bg-gray-900 text-white h-screen">
      <Navbar className="px-5 mb-6">
        {loading ? <div>Loading...</div> : <UserProfile user={userData} />}
      </Navbar>
      <Block className="mb-6">
        {activeView === 'meme' && <Meme />}
        {activeView === 'tasks' && <Tasks />}
        {activeView === 'withdrawal' && <Withdrawal />}
      </Block>
      <section className="space-x-4 absolute bottom-1 bg-blue-500 w-full flex justify-center">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'meme' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('meme')}
        >
          Meme
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'tasks' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('tasks')}
        >
          Tasks
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'withdrawal' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('withdrawal')}
        >
          Withdrawal
        </button>
      </section>
    </Page>
  );
}