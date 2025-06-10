document.addEventListener("DOMContentLoaded", () => {
    fetchProdutos();
});

function fetchProdutos(){
    fetch("http://localhost:8000/api/produtos/")
    .then(res => res.json())
    .then(data => renderProdutos(data))
    .catch(err => console.error("Erro ao buscar Produtos", err));
}

function renderProdutos(produtos){

    const container = document.getElementById("entradas");
    container.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto";
        card.innerHTML = `
        <div class="item">
            <div class="info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p class="preco">R$ ${produto.preco} - Porção de 300g</p>
            </div>
            <img src = "${produto.imagem}" alt = "${produto.nome}"/>
        </div>
        `;
        container.appendChild(card);
    });
    
}

///////
