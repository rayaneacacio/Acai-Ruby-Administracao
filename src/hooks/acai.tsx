import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface AcaiContextType {
  createAcaiComponents: (newComponents: string[], category: string) => void;
  findAllAcaiComponents: (signal: AbortSignal) => void;
  allComponentesDatabase: IAllComponents;
}

const initialValue: AcaiContextType = {
  createAcaiComponents: () => {},
  findAllAcaiComponents: () => {},
  allComponentesDatabase: { cremes: [], complementos: [], coberturas: [], extras: [] },
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
      const responseGetCremes = await api.get("/acai_components/index?type=cremes", { signal });
      const responseGetComplementos = await api.get("/acai_components/index?type=complementos", { signal });
      const responseGetCoberturas = await api.get("/acai_components/index?type=coberturas", { signal });
      const responseGetExtras = await api.get("/acai_components/index?type=extras", { signal });

      setAllComponentesDatabase({
        cremes: responseGetCremes.data,
        complementos: responseGetComplementos.data,
        coberturas: responseGetCoberturas.data,
        extras: responseGetExtras.data
      });

    } catch(error) {
      console.error(`erro ao buscar componentes: ${error}`);
    }
  }

  return <AcaiContext.Provider value={{ createAcaiComponents, findAllAcaiComponents, allComponentesDatabase }}>
    { props.children }
  </AcaiContext.Provider>
}

function useAcai() {
  return useContext(AcaiContext);
}

export { AcaiProviders, useAcai };