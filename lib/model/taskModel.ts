import { Schema, model, } from 'mongoose';
import { MyTask } from '@/types/page';

const TaskSchema = new Schema({
    company: { type: String, required: true },
    telegramChannel: { type: String, },
    telegramGroup: { type: String, },
    facebook: { type: String, },
    web: { type: String, },
    instagram: { type: String, },
    twitter: { type: String, },
    linkedin: { type: String, },
    price: { type: Number, required: true },
    claimedBy: { type: Object },
});

let Task;
try {
    Task = model<MyTask>('Task');
} catch (error) {
    Task = model<MyTask>('Task', TaskSchema);
}

export default Task as typeof Task & (new () => MyTask);

