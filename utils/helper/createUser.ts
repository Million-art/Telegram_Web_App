import { User } from "@/types/page";

const createUser = async (user: User) => {

    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const newUser = await response.json();

            console.log('User created successfully');
        } else {
            throw new Error('Failed to create user');
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export default createUser