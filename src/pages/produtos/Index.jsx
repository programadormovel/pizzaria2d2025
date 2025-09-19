const Produtos = () => {
    // Objeto com a lista de pizzas
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa',
    
    ]
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