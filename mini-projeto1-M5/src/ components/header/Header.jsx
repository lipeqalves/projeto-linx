import { Button } from "../Button";
import "./styles.css"

export const Header = () => {
  return (
    <div className="hedder-conteinr">

    
    <div className="header">
      <p className="p-One">uma seleção de produtos</p>
      <h1>especial para você</h1>
      <p className="p-Two">
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
      <div className="header-buttons">

      <Button name="Conheça a Linx" />
      <Button name="Ajude o algorítimo" />
      <Button name="Seus produtos" />
      <Button name="Compartilhe" />
      </div>
    </div>
    </div>
  );
};
