import { ReactElement } from "react";
import { Container } from "./style";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Input } from "../../components/Input";

export function Home(): ReactElement {
  return (
    <Container>
      <Header />

      <div>
        <Nav />

        <main>
          <h2>Bebidas</h2>
          <div>
            <Input name="Nome" placeholder="ex: milkshake de morango" />
            <Input name="Categoria" type="select" />
            <Input name="Imagem" type="file"/>
            <Input name="Tamanho" placeholder="ex: 500ml"/>
            <Input name="Preço" placeholder="ex: R$ 20"/>
          </div>
        </main>
      </div>
    </Container>
  )
}