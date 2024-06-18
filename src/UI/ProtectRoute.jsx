import { useCheckLoggedIn } from "../hooks/useData";
import { useNavigate } from "react-router-dom";


export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { error } = useCheckLoggedIn(token);
  if (error) navigate("/login");

  return (
    <>
      {children}
    </>
  )
}