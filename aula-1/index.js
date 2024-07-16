const {edFolha, edGalho} = require('./arrays');

function juntandoListas (lista1, lista2){
    let listaTotal = [];
    let juntandoLista1 = 0;
    let juntandoLista2 = 0; 
    let atual = 0;

    while (juntandoLista1<lista1.length&&juntandoLista2<lista2.length) {
        let listaAtualLista1 = lista1[juntandoLista1];
        let listaAtualLista2 = lista2[juntandoLista2];
        
        if(listaAtualLista1.preco<listaAtualLista2.preco){
            listaTotal[atual] = listaAtualLista1; 
            juntandoLista1++;
        }   else{
            listaTotal[atual] = listaAtualLista2;
            juntandoLista2++;
        }
        atual++;
    }
    while (juntandoLista1<lista1.length){ 
        listaTotal[atual] = lista1[juntandoLista1];
        juntandoLista1++;
        atual++;
    }
    while (juntandoLista2<lista2.length){
        listaTotal[atual] = lista2[juntandoLista2];
        juntandoLista2++;
        atual++;
    }
        
        return listaTotal;
    }
    console.log (juntandoListas(edFolha, edGalho));

  