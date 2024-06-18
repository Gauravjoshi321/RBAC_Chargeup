import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import loginApi from "../API/userAPICall";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {

      toast.success("You have logged in successfully.");
      queryClient.setQueryData(['user'], user);
      localStorage.setItem("token", user.token);
      return navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })


  return { login, isLoading };
}