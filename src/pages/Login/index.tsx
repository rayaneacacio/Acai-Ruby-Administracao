import { ReactElement, useState } from "react";
import { Container } from "./style";
import logoPng from "../../assets/logo.png";
import { Input } from "../../components/Input";
import { useAdm } from "../../hooks/adm";

export function Login(): ReactElement {
  const { login } = useAdm();
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  function handleLogin(): void {
    if(email == "ruby@gmail.com" && password == "ruby1234") {
      login(email);
    } else {
      alert("email ou senha incorreta");
    }
  }

  return (
    <Container>
      <div>
        <div className="logo" style={{ backgroundImage: `url(${ logoPng })` }} />

        <Input name="Email" placeholder="Insira seu email" onChange={event => setEmail(event.target.value)} />
        <Input name="Senha" type="password" placeholder="Insira sua senha" onChange={event => setPassword(event.target.value)} />

        <button onClick={ handleLogin }>Login</button>
      </div>
    </Container>
  )
}