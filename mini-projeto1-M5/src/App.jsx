import { useState } from "react";
import { Forms } from "./ components/formRegistration/ FormRegistration";
import { CardText } from "./ components/cardText/CardText";
import { Header } from "./ components/header/Header";
import { Footer } from "./ components/footer/Footer";
import { Line } from "./ components/line/Line";
import { FormCall } from "./ components/formCall/FormCall";
import { Card } from "./ components/card/Card";
import "./styles.css"
import { buscaItem } from "./service/requisicao";




function App() {
  return (
    <div className="App">
    
      <Header />
      <div className="pegeOne">

      <CardText />
      <Forms />
      
      </div>
      
      <Line name="Sua seleção especial" />
      <div className="card">

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Line name="Compartilhe a novidade"/>
      <FormCall/>
      

      <Footer/>

    </div>
  );
}

export default App;
