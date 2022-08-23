import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Card } from "../card/Card";
import { Button } from "../Button";
import "./styles.css";
import { buscaItem } from "../../service/requisicao";

function Compartilhe() {
  const [produto, setProduto] = useState([]);
  const [page, setPage] = useState();

  function newPage(baseURL) {
    buscaItem.get(baseURL).then((res) => {
      //console.log(res.data.nextPage)
      setProduto(res.data.products);
      setPage(res.data.nextPage);
    });
  }

  useEffect(() => {
    newPage("frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="pegeTwo">
        <h1>Olá, Fulano</h1>
        <p>
          Fizemos uma lista especial de produtos apenas para você. Isso mesmo:
          nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano
          lhe recomendou essa lista especial. Olha só:
        </p>
      </div>

      <div className="produtos">
        {produto.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.image}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <div className="bnt">
        <Button
          name="Tem muito mais aqui. Vem ver!"
          onClick={() => {
            newPage(page);
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Compartilhe;
