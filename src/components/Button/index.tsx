import { ReactElement } from "react";
import { Container } from "./style";
import { SvgPlus } from "../../assets/svgs/plus";

export function Button(): ReactElement {
  return (
    <Container>
      <SvgPlus />
    </Container>
  )
}