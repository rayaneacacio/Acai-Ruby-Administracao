import { ReactElement, createContext, useContext, useEffect, useState } from "react";

interface typeAdmContext {
  adm: boolean;
  login: () => void;
  logout: () => void;
}

const initialValue = {
  adm: false,
  login: () => {},
  logout: () => {}
}

export const AdmContext = createContext<typeAdmContext>(initialValue);

function AdmProvider(props: { children: ReactElement }) {
  const [ adm, setAdm ] = useState<boolean>(false);

  function login(): void {
    setAdm(true);
    localStorage.setItem("acairuby@adm", JSON.stringify(true));
  }

  function logout(): void {
    setAdm(false);
    localStorage.removeItem("acairuby@adm");
  }

  useEffect(() => {
    const localStorageAdm = localStorage.getItem("acairuby@adm");
    if(localStorageAdm) {
      setAdm(true);
      localStorage.setItem("acairuby@adm", localStorageAdm);
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