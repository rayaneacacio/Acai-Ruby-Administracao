import { ReactElement } from "react";
import { Container } from "./style";

export function Input(props: {
  name: string, 
  placeholder?: string, 
  type?: string,
  value?: string,
  onChange?: (any: any) => void
}): ReactElement {
  return (
    <Container className="inputDiv">
      <label htmlFor={`input${props.name}`}> { props.name } </label>

      <input 
        id={`input${props.name}`} 
        type={ props.type } 
        placeholder={ props.placeholder } 
        autoComplete="off" 
        value={ props.value }
        readOnly={ props.value ? true : false } 
        onChange={ props.onChange } />
    </Container>
  )
}