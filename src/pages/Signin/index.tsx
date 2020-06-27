import React, { useCallback, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Background, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatoria'),
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
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faca seu logon</h1>
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
            Entrar
          </Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background></Background>
    </Container>
  );
};
export default SignIn;
