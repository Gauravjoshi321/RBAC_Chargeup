import styled, { css } from "styled-components";
import LoginForm from "../Features/LoginForm";
import Logo from "../Features/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  background-color: #f3f4f4;
`;

const Heading = styled.h1`
  ${props => props.as === 'h4' && css`
    font-size: 25px;
    font-weight: 600;
    color: ${props.color};
    text-align:center;
`}
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4" color="#3E3E3E">Log in to your account</Heading >
      <LoginForm />
    </LoginLayout>
  )
}

export default Login;