
document.getElementById('novacompra').onclick = function novacompra(){
    window.location.replace('https://emersondevlucas.github.io/compra-l-de-casa/novacompra/')
}

document.getElementById('compra').onclick = function compra(){
    window.location.replace('https://emersondevlucas.github.io/compra-l-de-casa/compra/')
}

let dataAtual = new Date();
new Date().getDay;
let dia = dataAtual.getDay();
let mes = dataAtual.getMonth();
let mes2 = dataAtual.getDate();

switch (dia) {
  case 0:
    dia = "Dom";
    break;

  case 1:
    dia = "Seg";
    break;

  case 2:
    dia = "Ter";
    break;

  case 3:
    dia = "Qua";
    break;

  case 4:
    dia = "Qui";
    break;

  case 5:
    dia = "Sex";
    break;

  case 6:
    dia = "Sab";
    break;
}

switch (mes) {
  case 0:
    mes = "Jan";
    break;

  case 1:
    mes = "Fev";

  case 2:
    mes = "Mar";
    break;

  case 3:
    mes = "Abr";
    break;

  case 4:
    mes = "Mai";
    break;

  case 5:
    mes = "Jun";
    break;

  case 6:
    mes = "Jul";
    break;

    case 7: 
    mes = 'Ago';
    break;

    case 8: 
    mes = 'Set';
    break;

    case 9: 
    mes = 'Out';
    break;

    case 10: 
    mes = 'Nov';
    break;

    case 11: 
    mes = 'Dez';
    break;
}



document.getElementById("dia").innerHTML = dia;
document.getElementById("mes").innerHTML = mes;
document.getElementById("dianumber").innerHTML = mes2;