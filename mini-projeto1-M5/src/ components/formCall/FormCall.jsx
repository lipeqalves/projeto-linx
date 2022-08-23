import { Input } from "../input/Input";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./styles.css";

export const FormCall = (props) => {
  return (
    <div className="call">
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <div className="input">
        <Input name="Nome do seu amigo" />
        <Input name="E-mail" />
      </div>
      
      <Button name="Enviar agora" onClick={() => {}} />
      
    </div>
  );
};
