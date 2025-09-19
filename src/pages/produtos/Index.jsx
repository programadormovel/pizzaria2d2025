import axios from 'axios'


const Produtos = () => {

    // Objeto com a lista de pizzas
    axios.get("http://viacep.com.br/ws/01010000/json")
    .then(response=>{
        console.log(response.data)
    })
    
    // Iteração da lista de pizzas 
    const listapizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
         {listapizzas}
            </ul>
        </div>
    ) 
    
}
export default Produtos