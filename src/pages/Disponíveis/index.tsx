import { ReactElement, useEffect, useState } from "react";
import { Container } from "./style";
import { useAcai } from "../../hooks/acai";
import { ButtonSave } from "../../components/ButtonSave";
import { ComponentDraft } from "../../components/ComponentDraft";

interface IComponent {
  id: number,
  name: string,
  type: "cremes" | "complementos" | "coberturas" | "extras"
}

interface IObjectComponents {
  cremes: IComponent[], 
  complementos: IComponent[], 
  coberturas: IComponent[], 
  extras: IComponent[] 
}

export function Disponíveis(): ReactElement {
  const { findAllAcaiComponents, allComponentesDatabase, deleteComponents } = useAcai();
  const [ filteredComponents, setFilteredComponents ] = useState<IObjectComponents>(allComponentesDatabase);
  const [ componentsDeleted, setComponentsDeleted ] = useState<IComponent[]>([]);

  function handleRemoveComponent(
    acaiComponentName: string, 
    category: "cremes" | "complementos" | "coberturas" | "extras"
  ): void {
    let newValues: IComponent[] = [];

    filteredComponents[category].map((index: IComponent) => {
      if(index.name != acaiComponentName) {
        newValues.push(index);
      } else {
        setComponentsDeleted([...componentsDeleted, index]);
      }
    })

    const newComponents = {...filteredComponents};
    newComponents[category] = newValues;

    setFilteredComponents(newComponents);
  }

  function handleSaveDatabase() {
    deleteComponents(componentsDeleted);
    (document.querySelector(".modalCreatedSuccessfully")! as HTMLDialogElement).style.display = "block";
  }

  useEffect(() => {
    const controller = new AbortController();
    findAllAcaiComponents(controller.signal);

    return () => {
      controller.abort();
    };

  }, []);

  useEffect(() => {
    setFilteredComponents(allComponentesDatabase);

  }, [ allComponentesDatabase ]);

  return (
    <Container>
      <h1>Componentes Disponíveis</h1>

      <div>
        <ButtonSave onClick={ handleSaveDatabase } />
        {
          allComponentesDatabase &&
          Object.keys(allComponentesDatabase).map((category: string, index: number) => (
            <h2 key={ index }>{ category }</h2>
          ))
        }
      </div>

      <div>
        {
          filteredComponents &&
          Object.values(filteredComponents).map((category: IComponent[], index: number) => (
            <div className="divComponentes" key={ index }>
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  <ComponentDraft  key={ index } name={ acaiComponent.name } onClick={() => handleRemoveComponent(acaiComponent.name, acaiComponent.type) } />
                ))
              }
            </div>
          ))
        }
      </div>
    </Container>
  )
}