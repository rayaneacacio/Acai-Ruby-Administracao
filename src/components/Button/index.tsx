import { ReactElement } from "react";
import { Container } from "./style";
import { SvgPlus } from "../../assets/svgs/plus";

export function Button(props: { onClick?: (any: any) => any, className?: string }): ReactElement {
  return (
    <Container className={ props.className } onClick={ props.onClick }>
      <SvgPlus />
    </Container>
  )
}