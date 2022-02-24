import logo from "../../assets/logo.svg";
import { Container, InputContanier } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Senha deve ter no  mínimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <button onClick={() => history.push("/")}>Voltar</button>
      </header>

      <InputContanier onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
        <Input
          error={errors.name?.message}
          label="Nome"
          placeholder="Digite aqui seu email"
          name="name"
          register={register}
        />
        <Input
          error={errors.email?.message}
          type="email"
          label="Email"
          placeholder="Digite aqui seu email"
          name="email"
          register={register}
        />
        <Input
          error={errors.password?.message}
          label="Senha"
          placeholder="Digite aqui sua senha"
          name="password"
          register={register}
        />
        <Input
          error={errors.passwordConfirm?.message}
          label="Confirmar Senha"
          placeholder="Digite aqui seu email"
          name="passwordConfirm"
          register={register}
        />
        <Select
          register={register}
          name="course_module"
          children={[
            "Primeiro módulo (Introdução ao Frontend)",
            "Segundo módulo (Frontend Avançado)",
            "Terceiro módulo (Introdução ao Backend)",
            "Quarto módulo (Backend Avançado)",
          ]}
        />

        <Button
          children="Cadastrar"
          colorSchema="color-primary-Disable"
          type="submit"
        />
      </InputContanier>
    </Container>
  );
}

export default Register;
