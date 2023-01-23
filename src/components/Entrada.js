import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "./context/UserContext";

import axios from "axios";
import styled from "styled-components";

function Entrada({ data }) {
  const valueSign = data.value > 0 ? "#03AC00" : "#C70000";
  return (
    <Entrada>
      <EntradaItem>
          {data.date}<Description>{data.description}</Description>
      </EntradaItem>
      <Valor valueSign={valueSign}>{data.value}</Valor>
    </Entrada>
  );
}

function Footer() {
  return (
    <FooterBox>
      <Label>SALDO</Label>
      <ValueLabel>00</ValueLabel>
    </FooterBox>
  );
}

export default function Entries() {
  const navigate = useNavigate();
  const { userSession } = useContext(UserContext);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (userSession === undefined) {
      navigate("/");
    }
    
    getEntries();
  }, [userSession, navigate]);

  function getEntries() {
    };
    promise.catch((err) => {
      console.log(err);
    });
    promise.then((res) => {
      const entries = res.data;
      setData(entries);
    });
   
  }


  return (
    <Content>
      <Head>
        <Header>Olá, {userSession && userSession.name}</Header>
        <ion-icon name="exit-outline"></ion-icon>
      </Head>
      <ContentMid>
        <Data>
          {<Data />}
        </Data>
        <Footer />
      </ContentMid>
      <Button>
        <Button
          onClick={}
        >
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </Button>
        <Button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saida</p>
        </Button>
      </Button>
    </Content>
  );


const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  justify-content: space-between;
  padding: 16px 20px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  display: flex;
  width: 100%;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  text-align: center;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`;



const Load = styled.div`
  font-size: 22px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  display: flex;
  color: #868686;
  height: 100%;
  width: 100%;
  padding: 0 52px;

`;

const ContentMid = styled.div`
  text-align: center;
  margin: 16px 0;
  padding: 9x 0;
  border-radius: 6px;
  box-sizing: border-box;
  width: 95%;
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  color: #868686;

`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`

const Entrada = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 20px;
  padding: 4px 8px;
  box-sizing: border-box;

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding: 0 4px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 4px 8px;
  box-sizing: border-box;

  div {
    padding-top: 8px;
    padding: 0 4px;
  }
`

const EntradaItem = styled.div`
  font-family: "Raleway", sans-serif;
  height: 22px;
  width: auto;
  color: #C6C6C6;
  display: flex;
`;

const Description = styled.p`
  display: flex;
  color: #000000;
  margin-left: 8px;
  overflow-x: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  box-sizing: border-box;
`

const Valor = styled.div`
  display: flex;
  color: ${({valueSign}) => valueSign};
  font-family: "Raleway", sans-serif;
`;

const Label = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: #000000;
`;

const ValueLabel = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 17px;
`;

const Button = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  background-color: transparent;
`;

const Button = styled.div`
  height: 20vh;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a328d6;
  color: #ffffff;
  padding: 20px;
  font-size: 24px;
  border-radius: 5px;
  box-sizing: border-box;

  p {
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    font-weight: bold;
  }
`;
