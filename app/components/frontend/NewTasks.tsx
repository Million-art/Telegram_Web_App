import { fetchTasks } from '@/redux/feature/taskReducer';
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks';
import { setLoading, } from '@/redux/feature/loadingReducer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loader from '@/app/Loader';

interface MyTask {
  _id: string;
  company: string;
  telegramChannel: string;
  telegramGroup: string;
  facebook: string;
  web: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  price: number;
}

const NewTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const [selectedTask, setSelectedTask] = useState<MyTask | null>(null);
  const isLoading = useAppSelector(store => store.loading)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        await dispatch(fetchTasks());
        dispatch(setLoading(false));
      } catch (error) {
        console.error('Error fetching tasks:', error);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
  };

  const handleCloseTask = () => {
    setSelectedTask(null);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="mb-3">
        <h1 className="text-1xl font-bold text-gray-800">New Tasks</h1>
      </div>
      {isLoading ?
        <div className='flex justify-center items-center'><Loader /> </div> : tasks.tasks.length > 0 ? (
          <div className="space-y-2">
            {tasks.tasks.map((task) => (
              <div
                key={task._id}
                className="px-6 py-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => handleTaskClick(task)}
              >
                <p className="text-lg font-medium text-gray-800">{task.company}</p>
                <p className="text-md font-medium text-blue-500 hover:text-blue-500">
                  {task.price.toFixed(2)}cent
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            {isLoading && <Loader />}

            <h1 className="text-2xl font-bold text-gray-500">
              No new task at the moment, please come back later!
            </h1>
          </div>
        )}

      {selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseTask}
              >
                close
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedTask.company}
              </h2>
              <p className="text-md font-medium text-green-500  mb-2">
                Price: {selectedTask.price.toFixed(2)}cent
              </p>
              {selectedTask.telegramChannel && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.telegramChannel}>Join Telegram Channel</Link>
                </p>
              )}
              {selectedTask.telegramGroup && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.telegramGroup}>Join Telegram Group</Link>
                </p>
              )}
              {selectedTask.facebook && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  : <Link href={selectedTask.facebook}>Follow on Facebook</Link>
                </p>
              )}
              {selectedTask.web && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.web}>Visit Website</Link>:
                </p>
              )}
              {selectedTask.instagram && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.instagram}>Follow on Instagram</Link>
                </p>
              )}
              {selectedTask.twitter && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.twitter}>Follow on Twitter</Link>
                </p>
              )}
              {selectedTask.linkedin && (
                <p className="text-md font-medium text-blue-500 hover:text-blue-500 mb-2">
                  <Link href={selectedTask.linkedin}>Follow on LinkedIn </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTasks;