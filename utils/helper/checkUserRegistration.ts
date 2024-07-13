import { User } from "@/types/page";
import createUser from "./createUser";
import { addUser } from "@/redux/feature/usersReducer";
import { useAppDispatch } from "@/redux/hooks/hooks";
const checkUserRegistration = async (dispatch: ReturnType<typeof useAppDispatch>,user:User) => {
  
  const id = user.telegramId
  try {
    const response = await fetch(`/api/user/${id}`);
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      await createUser(user);
      //persist the user data 
      dispatch(addUser(user));
    }
  } catch (error) {
    console.error('Error checking user registration:', error);
    throw error; // or return a default/fallback user object
  }
};

export default checkUserRegistration