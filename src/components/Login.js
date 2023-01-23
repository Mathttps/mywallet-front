import { useState, useContext } from "react";
import UserContext from "./context/UserContext";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Login() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
 

  function userLogin(e) {
    e.preventDefault();

    const data = {
      email: email,
      senha: senha,
    };

    const promise = axios.post(_, data);
    promise.then
  }

  return (
    <Container>
      <ContentWrapper>
        <Header>MyWallet</Header>
        <FormDad onSubmit={userLogin}>
          <Inputfo
            value={email}
            placeholder="E-mail"
            type={"email"}
            required
          />
          <Inputfo
            value={password}
            placeholder="Senha"
            type={"password"}
            required
          />
          <Button type={"submit"}>ENTRAR</Button>
        </FormDad>
        <LinkWrapper>
          <Link to="/signup">Primeira vez? Cadastre-se</Link>
        </LinkWrapper>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
  justify-content: center;
  align-items: center;
`;


const FormDad = styled.form`
  margin-top: 40px;
  height: 30vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;

`;

const Inputfo = styled.input`
  border-radius: 5px;
  padding: 3px 12px;
  box-sizing: border-box;
  min-height: 44px;
  width: 89%;
  background-color: #ffffff;
  border: none;
  margin: 5px 0;
  

  ::placeholder {
    font-family: "Raleway", sans-serif;
    color: #000000;
    size: 20px;
  }
`;

const Button = styled.button`
min-height: 42px;
  width: 85%;
  color: #ffffff;
  size: 22px;
  font-family: "Raleway", sans-serif;
  background-color: #a328d6;
  font-weight: bold;
  margin: 6px 0;
  border: none;
  border-radius: 6px;
`;


const ContentWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: transparent;
`;

const Header = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
`;

const LinkWrapper = styled.div`
  text-align: center;

  a {
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    margin-top: 25px;
    color: #ffffff;
    size: 15px;
  }
`;
