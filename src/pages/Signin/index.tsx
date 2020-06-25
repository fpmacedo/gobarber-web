import React from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Background, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
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
      </form>
      <a href="">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background></Background>
  </Container>
);
export default SignIn;
