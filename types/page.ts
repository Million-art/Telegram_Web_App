export interface User {
    userName: string;
    telegramId: number;
    firstName: string;
    lastName: string;
    referredBy: string | null;
    balance: number;
  }
  
  export interface MyTask {
    id: string;
    company: string;
    telegramChannel: string | null;
    telegramGroup: string | null;
    facebook: string | null;
    web: string | null;
    instagram: string | null;
    twitter: string | null;
    linkedin: string | null;
    price: number;
    status: TaskStatus;
    claimedBy: User[];
  }
  
  export enum TaskStatus {
    completed = 'completed',
    pending = 'pending',
  }