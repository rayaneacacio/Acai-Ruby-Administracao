import { ReactElement } from "react";
import { Container } from "./style";
import { SvgAdmin } from "../../assets/svgs/adm";
import { SvgUserAdmin } from "../../assets/svgs/user_adm";
import { SvgBxsUpArrow } from "../../assets/svgs/bxsup_arrow";

export function Header(): ReactElement {
  return (
    <Container>
      <div>
        <h1>Administração</h1>
        <SvgAdmin />
      </div>

      <button>
        <SvgUserAdmin />
        <p>nane</p>
        <SvgBxsUpArrow />
      </button>
    </Container>
  )
}