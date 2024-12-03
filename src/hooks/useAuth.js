import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { default as jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";

  console.log("Token:", token);
  if (token) {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded);
    const { username, roles } = decoded.UserInfo;
    console.log("User info:", username, roles);

    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");

    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";

    return { username, roles, status, isManager, isAdmin };
  }

  return { username: "", roles: [], isManager, isAdmin, status };
};
export default useAuth;
