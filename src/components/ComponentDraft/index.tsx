import { ReactElement } from "react";
import { Container } from "./style";

export function ComponentDraft(props: { name: string }): ReactElement {
  return (
    <Container>
        <p>{ props.name }</p>
        <button>X</button>
    </Container>
  )
} 