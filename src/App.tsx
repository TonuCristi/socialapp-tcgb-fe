import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import { useAppSelector } from "./app/hooks";
import { selectAuthIsLogged } from "./features/auth/authSlice";

function App() {
  const isLogged = useAppSelector(selectAuthIsLogged);

  return isLogged ? <AppLayout /> : <AuthLayout />;
}

export default App;
