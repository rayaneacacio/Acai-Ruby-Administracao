import { Container } from "./style";
import { ReactElement } from "react";

export function Modal(props: { className: string, content: string }): ReactElement {
  function handleCloseModal(): void {
    (document.querySelector(`.${ props.className }`)! as HTMLDialogElement).style.display = "none";
  }

  return (
    <Container className={ props.className }>
      <div>
        <h1>{ props.content }</h1>
        <button onClick={ handleCloseModal }>OK</button>
      </div>
    </Container>
  )
}