import { ReactElement } from "react";
import { Container } from "./style";
import { SvgFoodMenu } from "../../assets/svgs/food-menu";

export function Nav(): ReactElement {
  return (
    <Container>
      <div>
        <div> <SvgFoodMenu /> </div>
        <h2>Pedidos</h2>
      </div>

      <div>
        <div> <SvgFoodMenu /> </div>
        <h2>Cardápio</h2>
      </div>
      
      <button>Bebidas</button>
      <button>Açaí</button>
    </Container>
  )
}