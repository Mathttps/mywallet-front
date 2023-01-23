import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";


import styled from "styled-components";

export default function Form() {
  const [description, setDescription] = useState("");
  const { userSession } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (userSession.token === "") {
    }
  }, [userSession, navigate]);

  function submitEntry(e) {
    const data = {
      value: parseInt(signedValue),
      description: description,
    };

  }

  return (
    <Container>
      <Topo>Nova {opcao ? "entrada" : "saida"}</Topo>
      <FormWrapper onSubmit={submitEntry}>
        <FormInput
          value={value}
          placeholder="Valor"
          type={"number"}
          required
        />
        <FormInput
          value={description}
          placeholder="Descrição"
          type={"text"}
          required
        />
        <FormButton type={"submit"}>
          Salvar {opcao ? "entrada" : "saída"}
        </FormButton>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  background-color: #8c11be;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
`;



const FormWrapper = styled.form`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 30vh;
  width: 100%;
  display: flex;

`;

const FormInput = styled.input`
  min-height: 40px;
  width: 88%;
  background-color: #ffffff;
`;

const FormButton = styled.button`
  margin: 6px 0;
  border: none;
  min-height: 42px;
  width: 89%;
  color: #ffffff;
  size: 22px;
  font-family: "Raleway", sans-serif;
  background-color: #a328d6;
  border-radius: 3px;
  font-weight: bold;

`;

const Topo = styled.h1`
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 16px 20px;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  text-align: center;
  display: flex;

`;