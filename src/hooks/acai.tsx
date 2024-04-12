import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface AcaiContextType {
  allComponentesDatabase: IAllComponents;
  createAcaiComponents: (newComponents: string[], category: string) => Promise<void>;
  findAllAcaiComponents: (signal: AbortSignal) => Promise<void>;
  deleteComponents: (components: { id: number, name: string, type: string }[]) => Promise<void>;
}

const initialValue: AcaiContextType = {
  allComponentesDatabase: { cremes: [], complementos: [], coberturas: [], extras: [] },
  createAcaiComponents: async() => {},
  findAllAcaiComponents: async() => {},
  deleteComponents: async() => {}
}

interface IAllComponents {
  cremes: [],
  complementos: [],
  coberturas: [],
  extras: []
}

export const AcaiContext = createContext<AcaiContextType>(initialValue);

function AcaiProviders(props: { children: ReactElement }) {
  const [ allComponentesDatabase, setAllComponentesDatabase ] = useState<IAllComponents>({ 
    cremes: [], 
    complementos: [], 
    coberturas: [], 
    extras: [] 
  });

  async function createAcaiComponents(newComponents: string[], category: string): Promise<void> {
    if(!newComponents || newComponents.length == 0) {
      return;
    }

    try {
      await api.post("/acai_components/", { components: newComponents, type: category });

    } catch(error) { 
      console.error(`erro ao criar componente: ${error}`);
    }
  }

  async function findAllAcaiComponents(signal: AbortSignal): Promise<void> {
    try {
      const response = await api.get("/acai_components/index", { signal });

      setAllComponentesDatabase({
        cremes: response.data.cremes,
        complementos: response.data.complementos,
        coberturas: response.data.coberturas,
        extras: response.data.extras
      });

    } catch(error) {
      console.error(`erro ao buscar componentes: ${error}`);
    }
  }

  async function deleteComponents(components: { id: number, name: string, type: string }[]): Promise<void> {
    try {
      if(components.length == 0) {
        return;
      }

      const componentsId = components.map(index => { return index.id });
      
      await api.post("/acai_components/delete", { componentsId });

    } catch(error) { 
      console.error(`erro ao criar componente: ${error}`);
    }
  }

  return <AcaiContext.Provider value={{ allComponentesDatabase, createAcaiComponents, findAllAcaiComponents, deleteComponents }}>
    { props.children }
  </AcaiContext.Provider>
}

function useAcai() {
  return useContext(AcaiContext);
}

export { AcaiProviders, useAcai };