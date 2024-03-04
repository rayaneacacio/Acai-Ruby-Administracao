import { ReactElement, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./style";
import { useAcai } from "../../hooks/acai";
import { ButtonSave } from "../../components/ButtonSave";
import { ComponentDraft } from "../../components/ComponentDraft";

export function Acai(): ReactElement {
  const { createAcaiComponents } = useAcai();
  const [ creme, setCreme ] = useState<string>("");
  const [ newCremes, setNewCremes ] = useState<string[]>([]);

  function handleCreateCreme(): void {
    createAcaiComponents(newCremes);
  }

  return (
    <>
      <h2>Componentes Disponíveis</h2>
      <h2>Adicionar</h2>

      <Container>
        <ButtonSave />
        <div>
          <div>
            <Input name="Cremes" placeholder="ex: cupuaçu" onChange={(event) => setCreme(event.target.value)} />
            <Button onClick={ handleCreateCreme } />
          </div>

          <div>
            <ComponentDraft name="creme de exemplo"/>
          </div>
        </div>
        
        
        <div>
          <div>
            <Input name="Complementos" placeholder="ex: leite em pó" />
            <Button />
          </div>
        </div>

        <div>
          <div>
            <Input name="Coberturas" placeholder="ex: leite condensado" />
            <Button />
          </div>
          
        </div>

        <div>
          <div>
            <Input name="Extras" placeholder="ex: bis" />
            <Button />
          </div>
        </div>
        
      </Container>
    </>
  )
}