import { useEffect, useState } from "react"
import { Button } from "../Button"
import { buscaItem } from "../../service/requisicao"
import "./styles.css"

export const Card = ()=>{

const [produto, setProduto] = useState({})

useEffect(()=>{
    buscaItem
    .get("/")
    .then(res =>{
        setProduto({
            name: res.data.products[0].name,
            description:res.data.products[0].description,
            img:res.data.products[0].image,
            price:res.data.products[0].price,
            oldPrice :res.data.products[0].oldPrice,
        })
        console.log(res.data.products)
        console.log(res.data.products[0])
        })
    },[])

    return(
        <div className="select">

        <div className="card">
            
        <img src={produto.img} alt="Imagem produto"></img>
        <p className="name" >{produto.name}</p>
        <p className="desc">{produto.description}</p>
        
        <p className="old">De: R${produto.oldPrice}</p>
        <p className="price">Por: R${produto.price}</p>
        <p className="cartao">
            ou 2x de R${produto.price/2}
        </p>
        <Button name="Comprar"/>
        </div>
        <Button name="Ainda mais produtos aqui!"/>
        </div>
        
    )
}