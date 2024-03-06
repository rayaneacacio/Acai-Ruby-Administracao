import { ReactElement, useEffect, useState } from "react";
import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonSave } from "../../components/ButtonSave";
import { useAcaiSizes } from "../../hooks/acaiSizes";

export function Tamanhos(): ReactElement {
  const { createSizes, findAllSizes } = useAcaiSizes();

  const [ size, setSize ] = useState<string>("");
  const [ price, setPrice ] = useState<string>("");
  const [ sizesList, setSizesList ] = useState<{ size: string, price: string }[]>([]);

  function handleAddSize(): void {
    if(size == "" || price == "") {
      return;
    }

    setSizesList([{ size, price }, ...sizesList]);
    setSize("");
    setPrice("");

    (Array.from(document.querySelectorAll(".newSize input")!) as HTMLInputElement[]).map(input => {
      input.value = "";
    });
  }

  function handleRemoveSize(size: string): void {
    const newSizesList = sizesList.filter(index => index.size != size);
    setSizesList(newSizesList);
  }

  function handleSaveInDatabase(): void {
    createSizes(sizesList);
  }

  useEffect(() => {
    const controller = new AbortController();
    findAllSizes(controller.signal);

    return () => {
      controller.abort();
    }

  }, []);

  return (
    <Container>
        <h1>Atualizar Tamanhos</h1>
        
        <div className="newSize">
          <ButtonSave onClick={ handleSaveInDatabase }/>
          <Input name="Tamanho" placeholder="ex: 500ml" onChange={(event) => setSize(event.target.value)}/>
          <Input name="Preço" placeholder="ex: R$ 20" onChange={(event) => setPrice(event.target.value)}/>
          <Button onClick={ handleAddSize } />
        </div>

        {
          sizesList?.map((item: { size: string, price: string }, index: number) => (
            <div key={ index }>
              <Input name="Tamanho" value={ item.size } />
              <Input name="Preço" value={ item.price } />
              <Button className="buttonDelete" onClick={() => handleRemoveSize(item.size) } />
            </div>
          ))
        }
    </Container>
  )
}