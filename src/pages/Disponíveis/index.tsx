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
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

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

    (async() => {
      await findAllAcaiComponents(controller.signal);
    })();

    return () => {
      controller.abort();
    };

  }, []);

  useEffect(() => {
    setFilteredComponents(allComponentesDatabase);
    if(Object.values(allComponentesDatabase).every(index => index.length != 0)) {
      setIsLoading(false);
    }

  }, [ allComponentesDatabase ]);

  return (
    <Container>
      <h1>Componentes Disponíveis</h1>

      <div>
        <ButtonSave onClick={ handleSaveDatabase } />
        <div>
          <h2>cremes</h2>
          {
            isLoading ?
            <div className="divIsLoading">
              <div className="spin">
                <div></div>
              </div>
            </div>
            :
            filteredComponents &&
            Object.values(filteredComponents).map((category: IComponent[], index: number) => (
              <div key={ index } className="divComponentes">
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  acaiComponent.type == "cremes" &&
                    <ComponentDraft key={ index } name={ acaiComponent.name } 
                    onClick={() => handleRemoveComponent (acaiComponent.name, acaiComponent.type) } />
                ))
              }
              </div>
            ))
          }
        </div>

        <div>
          <h2>complementos</h2>
          {
            isLoading ?
            <div className="divIsLoading">
              <div className="spin">
                <div></div>
              </div>
            </div>
            :
            filteredComponents &&
            Object.values(filteredComponents).map((category: IComponent[], index: number) => (
              <div key={ index } className="divComponentes">
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  acaiComponent.type == "complementos" &&
                    <ComponentDraft key={ index } name={ acaiComponent.name } 
                    onClick={() => handleRemoveComponent (acaiComponent.name, acaiComponent.type) } />
                ))
              }
              </div>
            ))
          }
        </div>

        <div>
          <h2>coberturas</h2>
          {
            isLoading ?
            <div className="divIsLoading">
              <div className="spin">
                <div></div>
              </div>
            </div>
            :
            filteredComponents &&
            Object.values(filteredComponents).map((category: IComponent[], index: number) => (
              <div key={ index } className="divComponentes">
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  acaiComponent.type == "coberturas" &&
                    <ComponentDraft key={ index } name={ acaiComponent.name } 
                    onClick={() => handleRemoveComponent (acaiComponent.name, acaiComponent.type) } />
                ))
              }
              </div>
            ))
          }
        </div>

        <div>
          <h2>extras</h2>
          {
            isLoading ?
            <div className="divIsLoading">
              <div className="spin">
                <div></div>
              </div>
            </div>
            :
            filteredComponents &&
            Object.values(filteredComponents).map((category: IComponent[], index: number) => (
              <div key={ index } className="divComponentes">
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  acaiComponent.type == "extras" &&
                    <ComponentDraft key={ index } name={ acaiComponent.name } 
                    onClick={() => handleRemoveComponent (acaiComponent.name, acaiComponent.type) } />
                ))
              }
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}