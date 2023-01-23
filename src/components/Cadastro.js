import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import styled from "styled-components";


export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function userSignup(e) {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };
    const promise = axios.post(`${URL}:${PORT}/signup`, data);
    promise.then((res) => navigate("/"));
    promise.catch((err) => console.log(err));
    return;
  }

  return (
    <Container>
      <ContentWrapper>
        <Header>MyWallet</Header>
        <FormWrapper onSubmit={userSignup}>
          <FormInput
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            required
          />
          <FormInput
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            required
          />
          <FormInput
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            required
          />
          <FormInput
            value={passwordRepeat}
            placeholder="Confirme a senha"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            type={"password"}
            required
          />
          <FormButton type={"submit"}>ENTRAR</FormButton>
        </FormWrapper>
        <LinkWrapper>
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </LinkWrapper>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
flex-direction: column;
  background-color: #8c11be;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  
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


const FormWrapper = styled.form`
  margin-top: 42px;
  height: 52vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  
`;

const FormInput = styled.input`
  margin: 6px 0;
  border-radius: 6px;
  padding: 3px 12px;
  box-sizing: border-box;
  min-height: 43px;
  width: 90%;
  background-color: #ffffff;
  border: none;
 

  ::placeholder {
    color: #000000;
    size: 20px;
    font-family: "Raleway", sans-serif;
  }
`;

const FormButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: #a328d6;
  border: none;
  min-height: 42px;
  width: 85%;
  color: #ffffff;
  size: 22px;
  border-radius: 5px;
  font-weight: bold;
  margin: 4px 0;
  
`;
