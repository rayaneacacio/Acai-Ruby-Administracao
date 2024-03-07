import { ReactElement, useState } from "react";
import { Container, Nav } from "./style";
import { Header } from "../../components/Header";
import { Adicionar } from "../Adicionar";
import { SvgFoodMenu } from "../../assets/svgs/food-menu";
import { Disponíveis } from "../Disponíveis";
import { Tamanhos } from "../Tamanhos";
import { ModalSuccessfully } from "../../components/ModalSuccessfully";

export function Home(): ReactElement {
  const [ contentMain, setContentMain ] = useState<string>("Disponíveis");
  const contentElement: { [key: string]: ReactElement } = {
    "Adicionar": <Adicionar />,
    "Disponíveis": <Disponíveis />,
    "Tamanhos": <Tamanhos />
  }

  function handleContentMain(button: HTMLButtonElement): void {
    const buttons: HTMLButtonElement[] = Array.from(document.querySelectorAll("nav button"));
    buttons.map((btn: HTMLButtonElement): void => {
      btn.classList.remove("buttonOnFocus");
    });

    button.classList.add("buttonOnFocus");
    setContentMain(button.innerText);
  }

  return (
    <Container>
      <Header />

      <div>
        <Nav>
          <div>
            <div> <SvgFoodMenu /> </div>
            <h2>Pedidos</h2>
          </div>

          <div>
            <div> <SvgFoodMenu /> </div>
            <h2>Cardápio</h2>
          </div>
      
          <button onClick={(event) => handleContentMain(event.currentTarget) }>Disponíveis</button>
          <button onClick={(event) => handleContentMain(event.currentTarget) }>Adicionar</button>
          <button onClick={(event) => handleContentMain(event.currentTarget) }>Tamanhos</button>

        </Nav>

        <main>
          { contentElement[contentMain] }
        </main>
      </div>

      <ModalSuccessfully />
    </Container>
  )
}