import { ReactElement, useEffect, useState } from "react";
import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonSave } from "../../components/ButtonSave";
import { IObjectSize, useAcaiSizes } from "../../hooks/acaiSizes";

export function Tamanhos(): ReactElement {
  const { createSizes, findAllSizes, allSizesDatabase, deleteSizes } = useAcaiSizes();

  const [ size, setSize ] = useState<string>("");
  const [ price, setPrice ] = useState<string>("");
  const [ sizesList, setSizesList ] = useState<IObjectSize[]>([]);
  const [ filteredSizesDatabase, setFilteredSizesDatabase ] = useState<IObjectSize[]>(allSizesDatabase);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

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

  function handleRemoveSize(itemSize: string): void {
    const newSizesList = sizesList.filter(index => index.size != itemSize);
    setSizesList(newSizesList);
  }

  function handleRemoveSizeInDatabase(itemSize: string): void {
    const newSizesList = filteredSizesDatabase.filter(index => index.size != itemSize);
    setFilteredSizesDatabase(newSizesList);
  }

  async function handleSaveInDatabase(): Promise<void> {
    const sizesDeleted = allSizesDatabase.filter(sizeDatabase => !filteredSizesDatabase.includes(sizeDatabase));

    await deleteSizes(sizesDeleted);
    await createSizes(sizesList);
    (document.querySelector(".modalCreatedSuccessfully")! as HTMLDialogElement).style.display = "block";
  }

  useEffect(() => {
    const controller = new AbortController();
    findAllSizes(controller.signal);

    return () => {
      controller.abort();
    }

  }, []);

  useEffect(() => {
    setFilteredSizesDatabase(allSizesDatabase);
    
    if(allSizesDatabase.length != 0) {
      setIsLoading(false);
    }

  }, [ allSizesDatabase ]);

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
          sizesList?.map((item: IObjectSize, index: number) => (
            <div key={ index }>
              <Input name="Tamanho" value={ item.size } />
              <Input name="Preço" value={ item.price } />
              <Button className="buttonDelete" onClick={() => handleRemoveSize(item.size) } />
            </div>
          ))
        }

        {
          isLoading ?
          <div className="divIsLoading">
            <div className="spin">
              <div></div>
            </div>
          </div>
          :
          filteredSizesDatabase?.map((item: IObjectSize, index: number) => (
            <div key={ index }>
              <Input name="Tamanho" value={ item.size } />
              <Input name="Preço" value={ item.price } />
              <Button className="buttonDelete" onClick={() => handleRemoveSizeInDatabase(item.size) } />
            </div>
          ))
        }
    </Container>
  )
}