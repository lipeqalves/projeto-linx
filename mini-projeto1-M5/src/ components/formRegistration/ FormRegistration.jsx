import { Input } from "../input/Input";
import { Button } from "../Button";
import "./styles.css";

export const Forms = () => {
  return (
    <form className="forms">
      <Input className="input" type="text" name="Seu Nome" />
      <Input type="text" name="E-mail" />
      <Input type="text" name="CPF" />

      <div className="radio">
        <Input type="radio" name="Masculino" />
        <Input type="radio" name="Feminino" />
      </div>
      <div className="button">
        <Button  name="Enviar" />
      </div>
    </form>
  );
};
