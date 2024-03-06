import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface typeAcaiSizesContext {
  createSizes: (newSizes: IObjectSize[]) => void;
  findAllSizes: (signal: AbortSignal) => void;
  allSizesDatabase: {}[]
}

const initialValue = {
  createSizes: () => {},
  findAllSizes: () => {},
  allSizesDatabase: [{ size: "", price: "" }]
}

interface IObjectSize {
  size: string,
  price: string
}

export const AcaiSizesContext = createContext<typeAcaiSizesContext>(initialValue);

function AcaiSizesProvider(props: { children: ReactElement }) {
  const [ allSizesDatabase, setAllSizesDatabase ] = useState<IObjectSize[]>([]);

  async function createSizes(newSizes: IObjectSize[]): Promise<void> {
    try {
      if(newSizes.length == 0) {
        return;
      }

      await api.post("/acai_sizes/", { sizes: newSizes });

    } catch(error) {
      console.error(`erro ao criar tamanhos no banco de dados: ${ error }`);
    }
  }

  async function findAllSizes(signal: AbortSignal): Promise<void> {
    try {
      const response = await api.get("/acai_sizes/index", { signal });
      setAllSizesDatabase(response.data);

    } catch(error) {
      console.error(`erro ao buscar tamanhos no banco de dados: ${ error }`);
    }
  }

  return (
    <AcaiSizesContext.Provider value={{ createSizes, findAllSizes, allSizesDatabase }}>
      { props.children }
    </AcaiSizesContext.Provider>
  )
}

function useAcaiSizes() {
  return useContext(AcaiSizesContext);
}

export { AcaiSizesProvider, useAcaiSizes };