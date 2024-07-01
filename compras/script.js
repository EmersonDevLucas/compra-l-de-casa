document.addEventListener("DOMContentLoaded", function () {
  let items = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
  let itemList = document.getElementById("item-list");

  items.forEach(function (item) {
    // Criar um novo artigo para o item
    let itemArticle = document.createElement("article");
    itemArticle.classList.add("item");

    // Seções para o nome e quantidade do item
    let nomeSection = document.createElement("section");
    nomeSection.classList.add("recebenomeitem");
    nomeSection.textContent = item.nome;

    let quantidadeSection = document.createElement("section");
    quantidadeSection.classList.add("recebequantidade");
    quantidadeSection.textContent = item.quantidade;

    // Checkbox para marcar o item como concluído
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Adicionar seções e checkbox ao artigo do item
    itemArticle.appendChild(nomeSection);
    itemArticle.appendChild(quantidadeSection);
    itemArticle.appendChild(checkbox);

    // Adicionar o novo artigo ao item-list
    itemList.appendChild(itemArticle);
  });
});

document.getElementById("comprafeita").onclick = function () {
  localStorage.removeItem("listaDeCompras");

  document.location.reload();

  document.getElementById('checkcompra').style.display = ('flex')
};
