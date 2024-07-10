// models/User.ts
import { User as UserInterface } from '@/types/page';
import { Schema, model, Model } from 'mongoose';

const userSchema = new Schema({
    
    userName: {
        type: String,
        required: true,
    },
    telegramId: {
        type: Number,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    referredBy: {
        type: String,
    },
    balance: {
        type: Number,
    }
});

let User;
try {
    User = model<UserInterface>('users');
} catch (error) {
    User = model<UserInterface>('users', userSchema);
}

export default User as typeof User & (new () => UserInterface);

