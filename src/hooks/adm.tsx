import { ReactElement, createContext, useContext, useEffect, useState } from "react";

interface typeAdmContext {
  adm: string | undefined;
  login: (email: string) => void;
  logout: () => void;
}

const initialValue = {
  adm: undefined,
  login: () => {},
  logout: () => {}
}

export const AdmContext = createContext<typeAdmContext>(initialValue);

function AdmProvider(props: { children: ReactElement }) {
  const [ adm, setAdm ] = useState<string | undefined>(undefined);

  function login(email: string): void {
    setAdm(email);
    localStorage.setItem("acairuby@adm", JSON.stringify(email));
  }

  function logout(): void {
    setAdm(undefined);
    localStorage.removeItem("acairuby@adm");
  }

  useEffect(() => {
    const emailAdm = localStorage.getItem("acairuby@adm");
    if(emailAdm) {
      setAdm(JSON.stringify(emailAdm));
      localStorage.setItem("acairuby@adm", emailAdm);
    }

  }, []);

  return (
    <AdmContext.Provider value={{ adm, login, logout }}>
      { props.children }
    </AdmContext.Provider>
  )
}

function useAdm() {
  return useContext(AdmContext);
}

export { AdmProvider, useAdm };