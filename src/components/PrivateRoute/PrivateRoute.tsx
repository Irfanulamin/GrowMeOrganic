import { ReactNode } from "react";
import AlertDialog from "../AlertDialog";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("GrowMeOrganicAuth");
  if (user) {
    return children;
  }

  return <AlertDialog />;
};

export default PrivateRoute;
