document.getElementById("novoitembutton").onclick = function () {
  let novoitem = document.getElementById("novoitem");

  novoitem.style.display = "flex";
  novoitem.style.position = "absolute"; 

};

document.getElementById('salvaritem').onclick = function() {
    let nomeitem = document.getElementById('nomeitem').value;
    let quantidadeitem = document.getElementById('quantidadeitem').value;

    if (nomeitem && quantidadeitem) {
        let itemList = document.getElementById('item-list');

        // Criar um novo artigo para o item
        let itemArticle = document.createElement('article');
        itemArticle.classList.add('item');

        // Seções para o nome e quantidade do item
        let nomeSection = document.createElement('section');
        nomeSection.classList.add('recebenomeitem');
        nomeSection.textContent = nomeitem;

        let quantidadeSection = document.createElement('section');
        quantidadeSection.classList.add('recebequantidade');
        quantidadeSection.textContent = quantidadeitem;

        // Checkbox para marcar o item como concluído
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Adicionar seções e checkbox ao artigo do item
        itemArticle.appendChild(nomeSection);
        itemArticle.appendChild(quantidadeSection);
        itemArticle.appendChild(checkbox);

        // Adicionar o novo artigo ao item-list
        itemList.appendChild(itemArticle);

        // Limpar os campos de entrada
        document.getElementById('nomeitem').value = '';
        document.getElementById('quantidadeitem').value = '';
        
        // Esconder o formulário de novo item
        document.getElementById('novoitem').style.display = 'none';
    } else {
        alert('Maria, preencha todos os campos.');
    }
};

document.getElementById('salvarlista').onclick = function() {
    let items = [];
    document.querySelectorAll('#item-list .item').forEach(function(item) {
        let nome = item.querySelector('.recebenomeitem').textContent;
        let quantidade = item.querySelector('.recebequantidade').textContent;
        items.push({ nome: nome, quantidade: quantidade });
    });

    localStorage.setItem('listaDeCompras', JSON.stringify(items));

    document.location.reload();
};

