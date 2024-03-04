import { ReactElement } from "react";
import { Container } from "./style";
import { SvgPlus } from "../../assets/svgs/plus";

export function Button(props: { onClick?: (any: any) => any }): ReactElement {
  return (
    <Container onClick={ props.onClick }>
      <SvgPlus />
    </Container>
  )
}