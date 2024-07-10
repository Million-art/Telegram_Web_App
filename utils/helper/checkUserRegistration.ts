import { User } from "@/types/page";
import createUser from "./createUser";
import { addUser } from "@/redux/feature/usersReducer";
import { useAppDispatch } from "@/redux/hooks/hooks";
import LaunchParams from "@/app/components/UrRLSearchParams";
const checkUserRegistration = async (dispatch: ReturnType<typeof useAppDispatch>) => {
  const launchParam = LaunchParams();
  const telegramId = launchParam.initData?.user?.id;
  const userName = launchParam.initData?.user?.username;
  const firstName = launchParam.initData?.user?.firstName;
  const lastName = launchParam.initData?.user?.lastName;
  const user: User = {
    userName: userName || '',
    telegramId: telegramId || 0,
    firstName: firstName || '',
    lastName: lastName || '',
    referredBy: null,
    balance: 0,
  };
  const id = telegramId
  try {
    const response = await fetch(`/api/user/${id}`);
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      await createUser(user);
      dispatch(addUser(user));
    }
  } catch (error) {
    console.error('Error checking user registration:', error);
    throw error; // or return a default/fallback user object
  }
};

export default checkUserRegistration