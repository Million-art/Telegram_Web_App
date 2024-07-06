import { fetchTasks } from '@/redux/feature/taskReducer';
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks';
import { useEffect } from 'react';

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

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const doTask = (task: any) => {
    // Implement the logic to handle the task
    console.log('Doing task:', task);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="mb-3">
        <h1 className="text-1xl font-bold text-gray-800">New Tasks</h1>
      </div>
      {tasks.length > 0 ? (
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => doTask(task)}
            >
              <p className="text-lg font-medium text-gray-800">{task.company}</p>
              <p className="text-lg font-medium text-gray-800">
                {task.price.toFixed(2)}cent
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <h1 className="text-2xl font-bold text-gray-500">
            No new task at the moment, please come back later!
          </h1>
        </div>
      )}
    </div>
  );
};

export default NewTasks;