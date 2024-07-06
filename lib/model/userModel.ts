// models/Product.js
import { Task as TaskInterface } from '@/types/page';
import { User as UserInterface } from '@/types/page';
import { Schema, model, Model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    }
});

const TaskSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: [String], default: [] },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const User: Model<UserInterface> = model<UserInterface>('User', userSchema);
const Task: Model<TaskInterface> = model<TaskInterface>('Task', TaskSchema);

export { User, Task };