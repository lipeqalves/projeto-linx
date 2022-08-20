import { useState } from "react";
import { Forms } from "./ components/formRegistration/ FormRegistration";
import { CardText } from "./ components/CardText";
import { Header } from "./ components/header/Header";
import { Footer } from "./ components/Footer";
import { Line } from "./ components/line/Line";
import { FormCall } from "./ components/FormCall";
import { Card } from "./ components/Card";
import "./styles.css"

function App() {
  return (
    <div className="App">
    
      <Header />
      <div className="pegeOne">

      <CardText />
      <Forms />
      
      </div>
      
      <Line name="Sua seleção especial" />
      <Card/>
      <Line name="Compartilhe a novidade"/>
      <FormCall/>
      

      <Footer/>

    </div>
  );
}

export default App;
