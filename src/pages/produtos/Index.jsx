// ferramenta de consumo de rotas ou endpoints do backend
import axios from "axios"
// Hooks do react para controlar estados e renderização
import { useState, useEffect } from "react"
const Produtos = () => {
    // estado com lista de pizzas
    const [pizzas, setPizzas] = useState([])
    // Objeto com a lista de pizzas
    useEffect(()=>{
        // GET - busca os dados da rota ou endpoint
        // then - método assíncrono, espera o retorno da requisição
        // catch - tratamento de erros da requisição
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then(response=>{
            console.log(response.data.data)
            setPizzas(response.data.data)
        })
        .catch(errors=>console.log(errors))
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
 