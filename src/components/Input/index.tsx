import { ReactElement } from "react";
import { Container } from "./style";
import { SvgImage } from "../../assets/svgs/image";
import { SvgUpload } from "../../assets/svgs/upload";

export function Input(props: { name: string, placeholder?: string, type?: string }): ReactElement {
  return (
    <Container>
      <label  htmlFor={`input${props.name}`}>
        {
          props.type == "file" ?
          <div className="labelFile">
            { props.name }
            <div>
              <p>escolher aquivo</p>
              <div>
                <SvgImage />
                <SvgUpload />
              </div>
            </div>
          </div>
          :
          props.name
        }
      </label>

      { 
        !props.type &&
        <input id={`input${props.name}`} type="text" placeholder={ props.placeholder }></input>
      }

      {
        props.type &&
        props.type == "file" ?
        <input type="file" name="" id={`input${props.name}`} />
        :
        props.type &&
        <select name="" id={`input${props.name}`}>
          <option value="milkshake">milkshake</option>
          <option value="bebida">bebida</option>
        </select>
      }
    </Container>
  )
}