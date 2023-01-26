import { USER_ROLE_ENUM } from "@/constants/user";

export interface UserStateProps {
  userId: string,
  name: string,
  phone: string,
  role: USER_ROLE_ENUM,
  isLogin: boolean
}

export const initState: UserStateProps = {
  userId: '',
  name: '',
  phone: '',
  role: USER_ROLE_ENUM.GUEST,
  isLogin: false,
}
