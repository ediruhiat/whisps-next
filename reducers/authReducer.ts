import { Reducer, AnyAction } from "redux";

interface IUser {
  username: string | undefined;
  email: string | undefined;
  name: string | undefined;
}

type TAuthState = {
  isLoggedIn: boolean;
  user: IUser | undefined;
};

const initState: TAuthState = {
  isLoggedIn: false,
  user: undefined,
};

const authReducer: Reducer<TAuthState, AnyAction> = (
  state: TAuthState = initState,
  action: AnyAction
) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    default:
      return state;
  }
};

export default authReducer;
