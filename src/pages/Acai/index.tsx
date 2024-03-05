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
  const [ cremesList, setCremesList ] = useState<string[]>([]);
  const [ complemento, setComplemento ] = useState<string>("");
  const [ complementosList, setComplementosList ] = useState<string[]>([]);
  const [ cobertura, setCobertura ] = useState<string>("");
  const [ coberturaList, setCoberturasList ] = useState<string[]>([]);
  const [ extra, setExtra ] = useState<string>("");
  const [ extrasList, setExtrasList ] = useState<string[]>([]);

  function hanldeAddComponent(component: string, category: string): void {
    if(!component || component == "") {
      return;
    }

    switch (category) {
      case "cremes":
        (document.querySelector("#inputCremes")! as HTMLInputElement).value = "";
        setCremesList([ creme, ...cremesList ]);
        setCreme("");
        break;

      case "complementos": 
        (document.querySelector("#inputComplementos")! as HTMLInputElement).value = "";
        setComplementosList([ complemento, ...complementosList ]);
        setComplemento("");
        break;

      case "coberturas": 
        (document.querySelector("#inputCoberturas")! as HTMLInputElement).value = "";
        setCoberturasList([ cobertura, ...coberturaList ]);
        setCobertura("");
        break;

      case "extras": 
        (document.querySelector("#inputExtras")! as HTMLInputElement).value = "";
        setExtrasList([ extra, ...extrasList ]);
        setExtra("");
        break;
    }
  }

  function handleRemoveComponent(name: string, category: string): void {
    switch (category) {
      case "cremes": 
        const newCremes = cremesList.filter(n => n != name);
        setCremesList(newCremes);
        break;

      case "complementos": 
        const newComplementos = complementosList.filter(n => n != name);
        setComplementosList(newComplementos);
        break;
      
      case "coberturas": 
        const newCoberturas = coberturaList.filter(n => n != name);
        setCoberturasList(newCoberturas);
        break;

      case "extras": 
        const newExtras = extrasList.filter(n => n != name);
        setExtrasList(newExtras);
        break;
    }
  }

  function handleCreateAcaiComponents(): void {
    createAcaiComponents(cremesList, "cremes");
    createAcaiComponents(complementosList, "complementos");
    createAcaiComponents(coberturaList, "coberturas");
    createAcaiComponents(extrasList, "extras");
  }

  return (
    <>
      <h2>Componentes Disponíveis</h2>
      <h2>Adicionar</h2>

      <Container>
        <ButtonSave onClick={ handleCreateAcaiComponents } />
        <div>
          <div>
            <Input name="Cremes" placeholder="ex: cupuaçu" onChange={(event) => setCreme(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(creme, "cremes") } />
          </div>

          <div>
            {
              cremesList &&
              cremesList.map((component: string, index: number) => (
                <ComponentDraft key={ index } name={ component } onClick={() => handleRemoveComponent(component, "cremes") }/>
              ))
            }
          </div>
        </div>
        
        
        <div>
          <div>
            <Input name="Complementos" placeholder="ex: leite em pó" onChange={(event) => setComplemento(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(complemento, "complementos") } />
          </div>

          <div>
            {
              complementosList &&
              complementosList.map((component: string, index: number) => (
                <ComponentDraft key={ index } name={ component } onClick={() => handleRemoveComponent(component, "complementos") }/>
              ))
            }
          </div>
        </div>

        <div>
          <div>
            <Input name="Coberturas" placeholder="ex: leite condensado" onChange={(event) => setCobertura(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(cobertura, "coberturas") } />
          </div>

          <div>
            {
              coberturaList &&
              coberturaList.map((component: string, index: number) => (
                <ComponentDraft key={ index } name={ component } onClick={() => handleRemoveComponent(component, "coberturas") }/>
              ))
            }
          </div>
          
        </div>

        <div>
          <div>
            <Input name="Extras" placeholder="ex: bis" onChange={(event) => setExtra(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(extra, "extras") } />
          </div>

          <div>
            {
              extrasList &&
              extrasList.map((component: string, index: number) => (
                <ComponentDraft key={ index } name={ component } onClick={() => handleRemoveComponent(component, "extras") }/>
              ))
            }
          </div>
        </div>
        
      </Container>
    </>
  )
}