import { ReactElement } from "react";
import { Container } from "./style";

export function ComponentDraft(props: { name: string, onClick: () => void }): ReactElement {
  return (
    <Container>
        <p>{ props.name }</p>
        <button onClick={ props.onClick }>X</button>
    </Container>
  )
} 