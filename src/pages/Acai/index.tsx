import { ReactElement } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./style";

export function Açaí(): ReactElement {
  return (
    <>
      <h2>Componentes Disponíveis</h2>

      <h2>Adicionar</h2>
      <Container>
        <div>
          <Input name="Cremes" />
          <Button />
        </div>
        
        <div>
          <Input name="Complementos" />
          <Button />
        </div>

        <div>
          <Input name="Coberturas" />
          <Button />
        </div>

        <div>
          <Input name="Extras" />
          <Button />
        </div>
        
      </Container>
    </>
  )
}