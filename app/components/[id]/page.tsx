import { MyTask } from '@/types/page';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const TaskDetail: React.FC = () => {
    const { id } = useParams();
    const [task, setTask] = useState<MyTask | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`/api/task/${id}`);
                const data = await response.json();
                setTask(data);
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        if (id) {
            fetchTask();
        }
    }, [id]);

    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{task.company}</h1>
            <p>Price: {task.price}</p>
            
        </div>
    );
};

export default TaskDetail;