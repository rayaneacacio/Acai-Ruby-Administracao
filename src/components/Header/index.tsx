import { ReactElement } from "react";
import { Container } from "./style";
import { SvgAdmin } from "../../assets/svgs/adm";
import { SvgUserAdmin } from "../../assets/svgs/user_adm";
import { SvgBxsUpArrow } from "../../assets/svgs/bxsup_arrow";
import { SvgFoodMenu } from "../../assets/svgs/food-menu";

export function Header(): ReactElement {
  function handleOpenNav(): void {
    const nav = document.querySelector("nav")! as HTMLElement;

    if(nav.style.display == "none") {
      nav.style.display = "flex";  
    } else {
      nav.style.display = "none";
    }
  }

  return (
    <Container>
      <div>
        <button className="buttonMenuMobile" onClick={ handleOpenNav }> <SvgFoodMenu /> </button>
        <div className="title">
          <h1>Administração</h1>
          <SvgAdmin />
        </div>
      </div>

      <button>
        <SvgUserAdmin />
        <p>nane</p>
        <SvgBxsUpArrow />
      </button>
    </Container>
  )
}