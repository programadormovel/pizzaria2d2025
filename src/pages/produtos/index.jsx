import axios from "axios"
import { useState, useEffect } from "react"
const Produtos = () => {
    const [pizzas, setPizzas] = useState([])
    // Objeto com a lista de pizzas
    useEffect(()=>{
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then(response=>{
            setPizzas(response.data.data)
        })
    }, [])

    // Iteração da lista de pizzas 
    const listaPizzas = pizzas.map(pizza=><li key={pizza.id}>
        {pizza.nome}</li>)
    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos
