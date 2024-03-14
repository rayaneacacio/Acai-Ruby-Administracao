import { ReactElement } from "react";
import { Container } from "./style";
import { SvgAdmin } from "../../assets/svgs/adm";
import { SvgUserAdmin } from "../../assets/svgs/user_adm";
import { SvgFoodMenu } from "../../assets/svgs/food-menu";
import { useAdm } from "../../hooks/adm";

export function Header(): ReactElement {
  const { logout } = useAdm();

  function handleOpenNav(): void {
    const nav = document.querySelector("nav")! as HTMLElement;

    if(nav.style.display == "none") {
      nav.style.display = "flex";  
    } else {
      nav.style.display = "none";
    }
  }

  function handleLogout(): void {
    logout();
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

      <button onClick={ handleLogout }>
        <SvgUserAdmin />
        <p>sair</p>
      </button>
    </Container>
  )
}