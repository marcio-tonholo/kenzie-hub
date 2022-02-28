import { Redirect } from "react-router-dom";
import TecAtualModal from "../../components/TecAtualization";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import api from "../../services";
import { useEffect } from "react";
import {
  Cabecalho,
  Container,
  TecnologiasContanier,
  TecnologiasList,
  Tecnologias,
} from "./styles";
import TecRegisterModal from "../../components/TecRegister";

function DashBoard({ autenticado }) {
  const user = localStorage.getItem("User:id");
  const [itemAtual, setItemAtual] = useState("");
  const [techs, setTechs] = useState([]);
  const [userData, setUserData] = useState("");
  const [tecRegister, setTecRegister] = useState(false);
  const [tecAtual, setTecAtual] = useState(false);

  function loadTechs() {
    api
      .get(`/users/${user}`)
      .then((response) => {
        setUserData(response.data);
        setTechs(response.data.techs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    return loadTechs();
  }, []);

  if (!autenticado) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <TecRegisterModal
        loadTechs={loadTechs}
        tecRegister={tecRegister}
        setTecRegister={setTecRegister}
      />
      <TecAtualModal
        itemAtual={itemAtual}
        tecAtual={tecAtual}
        setTecAtual={setTecAtual}
        loadTechs={loadTechs}
      />
      <nav>
        <img src={logo} alt="logo" />
        <button
          onClick={() => {
            localStorage.clear();
            document.location.reload(true);
          }}
        >
          Sair
        </button>
      </nav>
      <Cabecalho>
        <div>
          <h1>Bem Vindo {userData.name}</h1>
          <p>{userData.course_module}</p>
        </div>
      </Cabecalho>
      <TecnologiasContanier>
        <div>
          <h2>Tecnologias</h2>
          <button
            onClick={() => {
              setTecRegister(true);
            }}
          >
            +
          </button>
        </div>
        <TecnologiasList>
          {techs.map((item, index) => {
            return (
              <Tecnologias
                key={index}
                onClick={() => {
                  setItemAtual(item);
                  setTecAtual(true);
                }}
              >
                <h3>
                  {item.title.length > 12
                    ? item.title.slice(0, 12) + "..."
                    : item.title}
                </h3>
                <p>{item.status}</p>
              </Tecnologias>
            );
          })}
        </TecnologiasList>
      </TecnologiasContanier>
    </Container>
  );
}

export default DashBoard;
