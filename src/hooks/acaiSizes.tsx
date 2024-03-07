import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface typeAcaiSizesContext {
  allSizesDatabase: IObjectSize[],
  createSizes: (newSizes: IObjectSize[]) => Promise<void>;
  findAllSizes: (signal: AbortSignal) => Promise<void>;
  deleteSizes: (sizes: IObjectSize[]) => Promise<void>;
}

const initialValue = {
  allSizesDatabase: [{ size: "", price: "" }],
  createSizes: async() => {},
  findAllSizes: async() => {},
  deleteSizes: async() => {}
}

export interface IObjectSize {
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

  async function deleteSizes(sizes: IObjectSize[]): Promise<void> {
    try {
      if(sizes.length == 0) {
        return;
      }

      await api.post("/acai_sizes/delete", { sizes });

    } catch(error) {
      console.error(`erro ao apagar tamanhos no banco de dados: ${ error }`);
    }
  }

  return (
    <AcaiSizesContext.Provider value={{ allSizesDatabase, createSizes, findAllSizes, deleteSizes }}>
      { props.children }
    </AcaiSizesContext.Provider>
  )
}

function useAcaiSizes() {
  return useContext(AcaiSizesContext);
}

export { AcaiSizesProvider, useAcaiSizes };