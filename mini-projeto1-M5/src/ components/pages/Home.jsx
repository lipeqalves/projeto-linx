import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Forms } from "../formRegistration/ FormRegistration";
import { CardText } from "../cardText/CardText";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Line } from "../line/Line";
import { FormCall } from "../formCall/FormCall";
import { Card } from "../card/Card";
import { Button } from "../Button";
import "./styles.css";
import { buscaItem } from "../../service/requisicao.js";



function Home() {
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
      <div className="pegeOne">
        <CardText />
        <Forms />
      </div>

      <Line name="Sua seleção especial" />

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
          name="Ainda mais produtos aqui!"
          onClick={() => {
            newPage(page);
          }}
        />
      </div>

      <Line name="Compartilhe a novidade" />
      <FormCall />

      <Footer />
    </div>
  );
}

export default Home;
