import React, { useState, useEffect, Dispatch } from 'react';
import { toast } from 'react-toastify';
import { fetchTasks, deleteTask } from '@/redux/feature/taskReducer';
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks';

interface MyTask {
  _id: string;
  company: String;
  telegramChannel: String;
  telegramGroup: String;
  facebook: String;
  web: String;
  instagram: String;
  twitter: String;
  linkedin: String;
  price: Number;
}

const ViewTask: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<MyTask | null>(null);
  const [taskToView, setTaskToView] = useState<MyTask | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);


  const viewTask = (task: MyTask) => {
    setTaskToView(task);
  };

  const handleDelete = (task: MyTask) => {
    setTaskToDelete(task);
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setTaskToDelete(null);
  };
  const handleConfirmDelete = async () => {
    if (!taskToDelete) return;

    try {
      dispatch(deleteTask(taskToDelete._id));
      toast.success('Task deleted successfully');
    } catch (error: any) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    } finally {
      setShowConfirmation(false);
      setTaskToDelete(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">View Tasks</h1>
      {!tasks.length ? (
        <h2 className="text-lg font-medium">No tasks yet</h2>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Detail</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id} className="border-b">
                <td className="px-4 py-2">{task.company}</td>
                <td className="px-4 py-2">{task.price.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <div
                    onClick={() => viewTask(task)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    View Task
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div
                    onClick={() => handleDelete(task)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Delete Task
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-800 font-medium text-lg mb-4">
                Are you sure you want to delete this task?
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
                  onClick={handleConfirmDelete}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                  onClick={handleCancelDelete}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {taskToView && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[80%] p-6">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-2xl font-bold mb-4">{taskToView.company}</h2>
              <p className="text-gray-800 mb-2">
                Telegram Channel: {taskToView.telegramChannel}
              </p>
              <p className="text-gray-800 mb-2">
                Telegram Group: {taskToView.telegramGroup}
              </p>
              <p className="text-gray-800 mb-2">Facebook: {taskToView.facebook}</p>
              <p className="text-gray-800 mb-2">Web: {taskToView.web}</p>
              <p className="text-gray-800 mb-2">
                Instagram: {taskToView.instagram}
              </p>
              <p className="text-gray-800 mb-2">Twitter: {taskToView.twitter}</p>
              <p className="text-gray-800 mb-2">Linkedin: {taskToView.linkedin}</p>
              <p className="text-gray-800 mb-2">Price: {taskToView.price.toFixed(2)}</p>
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                  onClick={() => setTaskToView(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTask;