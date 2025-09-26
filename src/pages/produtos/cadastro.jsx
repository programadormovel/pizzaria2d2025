const CadastroProduto = () => {
    // Construir o objeto JSON

    // Utilizar o axios para enviar os dados para o servidor


    return(
        <div classname = "CadastroProduto">

        <input type = "text" placeholder = "0" id = "id" disabled/>
        <input type = "text" placeholder = "nome de produto" id = "nome" />
        <input type = "text" placeholder = "descrição" id = "descrição" />
        <input type = "text" placeholder = "tipo" id = "tipo" />
        <input type = "text" placeholder = "0.00" id = "preco" />
        <input type = "text" placeholder = "categoria" id = "categoria_id" disabled/>

        <input type = "button" value = "Cadastro" onClick ={()=>{alert('Cadastrar')}}/>
    
        </div>
    )
}

export default CadastroProduto
