import { Input } from "./Input"
import { Button } from "./Button"


export const FormCall = () =>{
    return(
        <div>
            <Input name="Nome do seu amigo"/>
            <Input name="E-mail"/>
            <Button name="Enviar agora"/>.
        </div>
    )
}