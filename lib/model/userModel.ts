// models/Product.js
import { User as UserInterface } from '@/types/page';
import { Schema, model, Model } from 'mongoose';

const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    fristName: {
        type: String,
        required: true
    },
    lasttName: {
        type: String,
     },
    username:{
        type: String,
        required: true
    },
    phone: {
        type: String,
     },
    referredBy: {
        type: String,
     }
});

 
const User: Model<UserInterface> = model<UserInterface>('User', userSchema);
 
export { User };