import { ReactElement } from "react";
import { Container } from "./style";

export function ButtonSave(props: { onClick: () => void }): ReactElement {
  return (
    <Container className="buttonSave" onClick={ props.onClick }>
      Salvar
    </Container>
  )
}