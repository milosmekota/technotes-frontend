import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { roles = [] } = useAuth();
  console.log("Roles from useAuth:", roles);
  console.log("Allowed roles:", allowedRoles);

  const content =
    Array.isArray(roles) &&
    roles.some((role) => allowedRoles.includes(role)) ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );

  return content;
};
export default RequireAuth;
