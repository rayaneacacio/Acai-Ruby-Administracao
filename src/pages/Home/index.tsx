import { ReactElement, useState, ReactDOM } from "react";
import { Container, Nav } from "./style";
import { Header } from "../../components/Header";
import { Bebidas } from "../Bebidas";
import { Acai } from "../Acai";
import { SvgFoodMenu } from "../../assets/svgs/food-menu";

export function Home(): ReactElement {
  const [ contentMain, setContentMain ] = useState<string>("Açaí");
  const contentElement: { [key: string]: ReactElement } = {
    "Bebidas": <Bebidas />,
    "Açaí": <Acai />
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
      
          <button onClick={(event) => handleContentMain(event.currentTarget) }>Açaí</button>
          <button onClick={(event) => handleContentMain(event.currentTarget) }>Bebidas</button>
        </Nav>

        <main>
          { contentElement[contentMain] }
        </main>
      </div>
    </Container>
  )
}