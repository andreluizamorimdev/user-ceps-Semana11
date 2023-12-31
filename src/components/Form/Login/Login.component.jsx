import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as Styled from './Login.style';
import InputComponent from '../Input/Input.component';

const FormLoginComponent = () => {
    const users = [
        {
            id: 1,
            email: 'andre@usercep.com',
            password: '12345678',
        },
        {
            id: 2,
            email: 'usercep@gmail.com',
            password: '12345678',
        },
        {
            id: 3,
            email: 'usuario@usercep.com',
            password: '12345678',
        },
        {
            id: 4,
            email: 'andre@teste.com',
            password: '12345678',
        },
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

    const navigate = useNavigate();

    const submitForm = (data) => {
        const { email, password } = data;

        const user = users.find(u => u.email === email);

        if(!user) {
            alert('Usuario não cadastrado');
            reset();
            return;
        }

        password === user.password
            ? redirectToHome()
            : alert('Ops! Usuário e/ou Senha Invalidos.');
    }

    const redirectToHome = () => {
        navigate('/home');
    }

    return (
        <Styled.Form onSubmit={handleSubmit(submitForm)}>
            <Styled.Header>
                <Styled.Title>Login</Styled.Title>
                <Styled.SubTitle>Para acessar o sistema digite seu email e sua senha.</Styled.SubTitle>
            </Styled.Header>

            <Styled.InputGroup>
                <InputComponent 
                    id='email' 
                    type='email' 
                    placeholder='Digite seu email' 
                    label='E-mail'
                    register={{...register('email', { required: true, validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)} })}}
                    error={ errors.email }
                />
                <InputComponent 
                    id='password' 
                    type='password' 
                    placeholder='Digite sua senha' 
                    label='Senha'
                    register={{...register('password', { required: true, minLength: 8 })}}
                    error={ errors.password }
                />
            </Styled.InputGroup>
            
            <Styled.Button $active={ !errors.email && !errors.password } type="submit" disabled={ errors.email || errors.password } >Entrar</Styled.Button>

            <Styled.Action className="Action">
                <Styled.EsqueciSenha href="">Esqueci minha senha</Styled.EsqueciSenha>
                <Styled.Button type="button" $outlined={true} >Criar conta</Styled.Button>
            </Styled.Action>

        </Styled.Form>
    );
}
 
export default FormLoginComponent;