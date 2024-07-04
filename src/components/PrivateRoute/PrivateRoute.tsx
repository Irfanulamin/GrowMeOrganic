import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("GrowMeOrganicAuth");
  if (user) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
