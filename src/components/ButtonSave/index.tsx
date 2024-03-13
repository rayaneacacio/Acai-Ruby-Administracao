import { ReactElement } from "react";
import { Container } from "./style";

export function ButtonSave(props: { onClick: () => void, className?: string }): ReactElement {
  return (
    <Container className={`buttonSave ${ props.className }`} onClick={ props.onClick }>
      Salvar
    </Container>
  )
}