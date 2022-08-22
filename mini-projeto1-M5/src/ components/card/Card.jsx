import { Button } from "../Button";
import "./styles.css";

export const Card = (props) => {
  return (
    
      <div className="card">
        <img src={props.img} alt="Imagem produto"></img>
        <p className="name">{props.name}</p>
        <p className="desc">{props.description}</p>

        <p className="old">De: R${props.oldPrice}</p>
        <p className="price">Por: R${props.price}</p>
        <p className="cartao">ou 2x de R${props.price / 2}</p>
       
      
      <Button name="Comprar" />
    </div>
  );
};
