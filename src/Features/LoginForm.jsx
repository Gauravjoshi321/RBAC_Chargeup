import { useState } from "react";
import Button from "../UI/Button";
import Form from "../UI/Form";
import Input from "../UI/Input";
import FormRowVertical from "../UI/FormRowVertical";
import SpinnerMini from "../UI/SpinnerMini";
import { useLogin } from "../hooks/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("joshi@gmail.com");
  const [password, setPassword] = useState("Joshi@123");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    // if (!email || !password) return;

    login({ email, password });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button type="submit" size="large" onClick={() => setIsLoading(true)}>
            {isLoading ? <SpinnerMini /> : "Login"}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default LoginForm;
