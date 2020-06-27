import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiLock,
  FiThumbsUp,
} from 'react-icons/fi';
import { Container, Background, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail valido'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faca seu cadastro</h1>
          <Input
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Nome"
          ></Input>
          <Input
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
          ></Input>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          ></Input>
          <Button name="login" type="submit">
            Cadastrar
          </Button>
        </Form>
        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;
