import { useEffect, useState } from "react"
import { Forms } from "./ components/formRegistration/ FormRegistration";
import { CardText } from "./ components/cardText/CardText";
import { Header } from "./ components/header/Header";
import { Footer } from "./ components/footer/Footer";
import { Line } from "./ components/line/Line";
import { FormCall } from "./ components/formCall/FormCall";
import { Card } from "./ components/card/Card";
import { Button } from "./ components/Button"
import "./styles.css"
import { buscaItem } from "./service/requisicao.js";


function App() {

const [produto, setProduto] = useState([])
const [page, setPage] = useState()

function novaPagina(url){
  buscaItem
  .get(url)
  .then(res =>{
    //console.log(res.data.nextPage)
      setProduto(res.data.products)
      setPage(res.data.nextPage)
      })
}

useEffect(()=>{
  novaPagina("frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")  
  },[])


  return (
    <div className="App">
    
      <Header />
      <div className="pegeOne">

      <CardText />
      <Forms />
      
      </div>
      
      <Line name="Sua seleção especial" />

      <div className="produtos">
        
      {produto.map(item => (
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

      <Button  name="Ainda mais produtos aqui!" onClick={()=>{
        novaPagina(page)
      } }/>
      </div>

      <Line name="Compartilhe a novidade"/>
      <FormCall/>
      
      <Footer/>

    </div>
  );
}

export default App;
