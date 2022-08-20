import { Input } from "../Input";
import { Button } from "../Button";
import "./styles.css"

export const Forms = () => {
  return (
    <form className="forms">
      <Input type="text" name="Seu Nome" />
      <Input type="text" name="E-mail" />
      <Input type="text" name="CPF" />
      <Input type="radio" name="Masculino" />
      <Input type="radio" name="Feminino" />

      <Button name="Enviar" />
    </form>
  );
};
