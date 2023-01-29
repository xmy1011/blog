import { USER_ROLE_ENUM } from "@/constants/user";

export interface UserStateProps {
  userId: string,
  username: string,
  role: USER_ROLE_ENUM,
  isLogin: boolean
}

export const initState: UserStateProps = {
  username: "",
  userId: '',
  role: USER_ROLE_ENUM.GUEST,
  isLogin: false,
}
