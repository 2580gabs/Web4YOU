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
        if (produto.categoria.nome === "Entradas") {
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
        }
    });
    

    const container1 = document.getElementById("pratos");
    container1.innerHTML = "";

    produtos.forEach(produto => {
        if (produto.categoria.nome === "Pratos Principais") {
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
            container1.appendChild(card);
        }
    });

    const container2 = document.getElementById("sobremesas");
    container2.innerHTML = "";

    produtos.forEach(produto => {
        if (produto.categoria.nome === "Sobremesas") {
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
            container2.appendChild(card);
        }
    });

    
    const container3 = document.getElementById("bebidas");
    container3.innerHTML = "";

    produtos.forEach(produto => {
        if (produto.categoria.nome === "Bebidas") {
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
            container3.appendChild(card);
        }
    });
}

function filtrarCategoria() {
      const categoriaSelecionada = document.getElementById("filtroCategoria").value;
      const categorias = document.querySelectorAll(".categoria");

      categorias.forEach(secao => {
        if (categoriaSelecionada === "todas" || secao.id === categoriaSelecionada) {
          secao.classList.add("ativa");
        } else {
          secao.classList.remove("ativa");
        }
      });
    }

    function filtrarProdutos() {
      const termo = document.getElementById("pesquisaProduto").value.toLowerCase();
      const categorias = document.querySelectorAll(".categoria");

      categorias.forEach(secao => {
        const itens = secao.querySelectorAll(".item");
        let encontrou = false;

        itens.forEach(item => {
          const nome = item.querySelector("h3").textContent.toLowerCase();
          const descricao = item.querySelector("p").textContent.toLowerCase();

          if (nome.includes(termo) || descricao.includes(termo)) {
            item.style.display = "flex";
            encontrou = true;
          } else {
            item.style.display = "none";
          }
        });

        // Mostrar a seção apenas se tiver pelo menos um item visível
        secao.style.display = encontrou ? "block" : "none";
      });
    }

///////
