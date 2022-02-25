import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { Modal, ModalContanier } from "./styles";
import api from "../../services";
import { toast } from "react-toastify";

function TecRegisterModal({ tecRegister, setTecRegister, loadTechs }) {
  const token = localStorage.getItem("KenzieHub:Token");
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data === "") {
      return toast.error("Complete o campo para enviar uma tarefa");
    }

    api
      .post(
        "/users/techs",
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
        setTecRegister(false);
        toast.success("Tecnologia adicionada com sucesso");
      })
      .catch((err) => toast.error("Ops algo deu errado"));
  };
  return (
    <Modal tecRegister={tecRegister}>
      <ModalContanier>
        <header>
          <h3>Cadastrar Tecnologias</h3>
          <button onClick={() => setTecRegister(false)}>X</button>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.title?.message}
            register={register}
            label="Nome"
            placeholder="Digite aqui o nome da tecnologia"
            name="title"
          />
          <Select
            error={errors.status?.message}
            register={register}
            label="Selecionar status"
            name="status"
            children={["", "Iniciante", "Intermediário", "Avançado"]}
          />
          <Button
            children="Cadastrar Tecnologia"
            colorSchema="color-primary"
            type="submit"
          />
        </form>
      </ModalContanier>
    </Modal>
  );
}

export default TecRegisterModal;
