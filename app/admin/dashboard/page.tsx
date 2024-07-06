 'use client'

import AddTask from '@/app/components/admin/AddTask';
import Statstics from '@/app/components/admin/Statstics';
import ViewTask from '@/app/components/admin/ViewTask';
 import React, { useState } from 'react';

const Dashboard = () => {
    const [activeView, setActiveView] = useState('add'); // State to manage active view

    const addTask = () => {
        setActiveView('add'); // Set active view to Add Task
    };

    const viewTask = () => {
        setActiveView('view'); // Set active view to View Task
    };

    const statstics = () => {
        setActiveView('statstics'); // Set active view to View Task

    };

    return (
        <div className="w-full h-full flex flex-col">
            <div className="container flex-1 overflow-y-auto">
                {/* Dynamic content based on activeView */}
                {activeView === 'add' && (
                  <AddTask/>
                )}
                {activeView === 'view' && (
                     <ViewTask />
                )}
                {activeView === 'statstics' && (
                     <Statstics />
                )}
            </div>
            <div className="container flex items-center justify-center h-16 border-t">
                {/* Navigation buttons */}
                <button
                    className={`mx-2 px-4 py-2 rounded ${
                        activeView === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={addTask}
                >
                    Add Task
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded ${
                        activeView === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={viewTask}
                >
                    View Task
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded ${
                        activeView === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={statstics}
                >
                    Statstics
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
