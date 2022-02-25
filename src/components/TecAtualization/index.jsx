import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import api from "../../services";
import Select from "../Select";
import { toast } from "react-toastify";
import { Modal, ModalContanier, ButtonContainer } from "./styles";

function TecAtualModal({ tecAtual, setTecAtual, itemAtual, loadTechs }) {
  const token = localStorage.getItem("KenzieHub:Token");
  const { register, handleSubmit } = useForm();
  const id = itemAtual.id;
  const onSubmit = (data) => {
    api
      .put(
        `/users/techs/${id}`,
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        loadTechs();
        setTecAtual(false);
        toast.success("Tecnologia adicionada com sucesso");
      })
      .catch((err) => toast.error("Ops algo deu errado"));
  };

  const handelRemove = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        loadTechs();
        setTecAtual(false);
        toast.warning("Tecnologia Deletada");
      })
      .catch((err) => toast.error("Ops algo deu errado"));
  };
  return (
    <Modal tecAtual={tecAtual}>
      <ModalContanier>
        <header>
          <h3>Tecnologia Detalhes</h3>
          <button
            onClick={() => {
              setTecAtual(false);
            }}
            type="button"
          >
            X
          </button>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            disabled
            register={register}
            label="Nome do projeto"
            placeholder={itemAtual.title}
            name="title"
          />
          <Select
            register={register}
            label="Selecionar status"
            name="status"
            children={["Iniciante", "Intermediário", "Avançado"]}
          />
          <ButtonContainer>
            <button type="submit">Salvar alterações</button>
            <button
              type="button"
              onClick={() => {
                handelRemove(itemAtual.id);
              }}
            >
              Excluir
            </button>
          </ButtonContainer>
        </form>
      </ModalContanier>
    </Modal>
  );
}

export default TecAtualModal;
