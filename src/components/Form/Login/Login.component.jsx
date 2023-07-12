import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';

const FormLoginComponent = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    const isDisabled = () => {
        return !data.email || !data.password || !data.email.includes('@') || data.password.length < 8;
    }

    const handleInput = (event) => {
        event.preventDefault();
        const {value, id} = event.target;

        setData({...data, [id]: value});
    }

    const redirectToHome = () => {
        navigate('/home');
    }

    return (
        <Styled.Form onSubmit={redirectToHome}>
            <Styled.Header>
                <Styled.Title>Login</Styled.Title>
                <Styled.SubTitle>Para acessar o sistema digite seu email e sua senha.</Styled.SubTitle>
            </Styled.Header>

            <Styled.InputGroup>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" onInput={handleInput} placeholder="Digite seu email" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" onInput={handleInput} placeholder="Digite sua senha" />
                </div>
            </Styled.InputGroup>
            
            <Styled.Button type="submit" disabled={isDisabled()}>Entrar</Styled.Button>

            <Styled.Action className="Action">
                <Styled.EsqueciSenha href="">Esqueci minha senha</Styled.EsqueciSenha>
                <Styled.Button type="button" $outlined={true} >Criar conta</Styled.Button>
            </Styled.Action>

        </Styled.Form>
    );
}
 
export default FormLoginComponent;