import { ReactElement, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./style";
import { useAcai } from "../../hooks/acai";
import { ButtonSave } from "../../components/ButtonSave";
import { ComponentDraft } from "../../components/ComponentDraft";

export function Adicionar(): ReactElement {
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

  async function handleCreateAcaiComponents(): Promise<void> {
    await createAcaiComponents(cremesList, "cremes");
    await createAcaiComponents(complementosList, "complementos");
    await createAcaiComponents(coberturaList, "coberturas");
    await createAcaiComponents(extrasList, "extras");

    if(cremesList.length!=0 || complementosList.length!=0 ||coberturaList.length!=0 || extrasList.length!=0) {
      (document.querySelector(".modalCreatedSuccessfully")! as HTMLDialogElement).style.display = "block";
      handleClearStates();
    }
  }

  function handleClearStates(): void {
    setCremesList([]);
    setComplementosList([]);
    setCoberturasList([]);
    setExtrasList([]);
  }

  return (
    <Container>
      <h1>Adicionar</h1>

      <div>
        <ButtonSave onClick={ handleCreateAcaiComponents } />
        <div>
          <div className="divAdicionar">
            <Input name="Cremes" placeholder="ex: cupuaçu" onChange={(event) => setCreme(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(creme, "cremes") } />
          </div>

          <div>
            {
              cremesList?.map((acaiComponent: string, index: number) => (
                <ComponentDraft key={ index } name={ acaiComponent } onClick={() => handleRemoveComponent(acaiComponent, "cremes") }/>
              ))
            }
          </div>
        </div>
        
        
        <div>
          <div className="divAdicionar">
            <Input name="Complementos" placeholder="ex: leite em pó" onChange={(event) => setComplemento(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(complemento, "complementos") } />
          </div>

          <div>
            {
              complementosList?.map((acaiComponent: string, index: number) => (
                <ComponentDraft key={ index } name={ acaiComponent } onClick={() => handleRemoveComponent(acaiComponent, "complementos") }/>
              ))
            }
          </div>
        </div>

        <div>
          <div className="divAdicionar">
            <Input name="Coberturas" placeholder="ex: leite condensado" onChange={(event) => setCobertura(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(cobertura, "coberturas") } />
          </div>

          <div>
            {
              coberturaList?.map((acaiComponent: string, index: number) => (
                <ComponentDraft key={ index } name={ acaiComponent } onClick={() => handleRemoveComponent(acaiComponent, "coberturas") }/>
              ))
            }
          </div>
          
        </div>

        <div>
          <div className="divAdicionar">
            <Input name="Extras" placeholder="ex: bis" onChange={(event) => setExtra(event.target.value)} />
            <Button onClick={() => hanldeAddComponent(extra, "extras") } />
          </div>

          <div>
            {
              extrasList?.map((acaiComponent: string, index: number) => (
                <ComponentDraft key={ index } name={ acaiComponent } onClick={() => handleRemoveComponent(acaiComponent, "extras") }/>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}