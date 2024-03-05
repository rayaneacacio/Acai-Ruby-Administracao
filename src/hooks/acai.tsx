import { ReactElement, createContext, useContext } from "react";
import { api } from "../services/api";

interface AcaiContextType {
  createAcaiComponents: (newComponents: string[], category: string) => void;
  findAllAcaiComponents: (category: string) => Promise<IComponents[] | undefined>;
}

const initialValue: AcaiContextType = {
  createAcaiComponents: () => {},
  findAllAcaiComponents: async() => [{ id: 0, name: "", type: "" }],
}

interface IComponents {
  id: number,
  name: string,
  type: string
}

export const AcaiContext = createContext<AcaiContextType>(initialValue);

function AcaiProviders(props: { children: ReactElement }) {
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

  async function findAllAcaiComponents(category: string): Promise<IComponents[] | undefined> {
    try {
      const response = await api.post("/acai_components/index", { type: category });
      return response.data;

    } catch(error) {
      console.error(`erro ao buscar componentes: ${error}`);
    }
  }

  return <AcaiContext.Provider value={{ createAcaiComponents, findAllAcaiComponents }}>
    { props.children }
  </AcaiContext.Provider>
}

function useAcai() {
  return useContext(AcaiContext);
}

export { AcaiProviders, useAcai };