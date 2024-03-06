import { ReactElement, useEffect } from "react";
import { Container } from "./style";
import { useAcai } from "../../hooks/acai";
import { ButtonSave } from "../../components/ButtonSave";
import { ComponentDraft } from "../../components/ComponentDraft";

interface IComponent {
  id: number,
  name: string,
  type: string
}

export function Disponíveis(): ReactElement {
  const { findAllAcaiComponents, allComponentesDatabase } = useAcai();

  function handleRemoveComponentDatabase(): void {}

  useEffect(() => {
    const controller = new AbortController();
    findAllAcaiComponents(controller.signal);

    return () => {
      controller.abort();
    };

  }, []);

  return (
    <Container>
      <h1>Componentes Disponíveis</h1>

      <div>
        <ButtonSave onClick={ handleRemoveComponentDatabase } />
        {
          allComponentesDatabase &&
          Object.keys(allComponentesDatabase).map((category: string, index: number) => (
            <h2 key={ index }>{ category }</h2>
          ))
        }
      </div>
      
      <div>
        {
          allComponentesDatabase &&
          Object.values(allComponentesDatabase).map((category: IComponent[], index: number) => (
            <div className="divComponentes" key={ index }>
              {
                category.map((acaiComponent: IComponent, index: number) => (
                  <ComponentDraft  key={ index } name={ acaiComponent.name } onClick={ handleRemoveComponentDatabase } />
                ))
              }
            </div>
          ))
        }
      </div>
    </Container>
  )
}