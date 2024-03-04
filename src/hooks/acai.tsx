import { ReactElement, createContext, useContext } from "react";
import { api } from "../services/api";

type AcaiType = {
  createAcaiComponents: (newCreme: string[]) => void
}

const initialValue = {
  createAcaiComponents: () => {}
}

export const AcaiContext = createContext<AcaiType>(initialValue);

function AcaiProviders(props: { children: ReactElement }) {
  async function createAcaiComponents(newCremes: string[]): Promise<void> {
    if(!newCremes || newCremes.length == 0) {
      return;
    }

    try {
      await api.post("/acai_components/", { components: newCremes, type: "creme" });
    } catch(error) { 
      console.error(`erro ao criar componente creme ${error}`);
    }
  }

  return <AcaiContext.Provider value={{ createAcaiComponents }}>
    { props.children }
  </AcaiContext.Provider>
}

function useAcai() {
  const context = useContext(AcaiContext);
  return context;
}

export { AcaiProviders, useAcai };