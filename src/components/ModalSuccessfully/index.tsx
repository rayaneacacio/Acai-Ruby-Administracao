import { Container } from "./style";
import { ReactElement } from "react";

export function ModalSuccessfully(): ReactElement {
  function handleCloseModal(): void {
    (document.querySelector(".modalCreatedSuccessfully")! as HTMLDialogElement).style.display = "none";
  }

  return (
    <Container className="modalCreatedSuccessfully">
      <div>
        <h1>Salvo com sucesso :)</h1>
        <button onClick={ handleCloseModal }>OK</button>
      </div>
    </Container>
  )
}