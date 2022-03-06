let valores = [];

function AdicionarNumero(){
    let num = parseInt(document.getElementById('numero').value);
    let item = document.createElement('option');
    let lista = document.getElementById('lista');
    
    if(num<0 || num>100){
        alert("Número inválido!")
    }else{
        if(VerLista(num,valores)){
            alert("numero existente na fila");
        }else{
            valores.push(num);
            
            item.text = `valor ${num} adicionado`;
            lista.appendChild(item);  
        }

        document.getElementById('numero').value = ' ';
        document.getElementById('numero').focus()
        let resultado = document.getElementById('res');
        resultado.innerHTML = '';
        
    }
}
function VerLista(n,l){
    var i;
    for(i=0;i<l.length;i++){
        if(n==l[i]){
            break;
        }
    }
    if(i<l.length){
        return true;
    }else{
        return false;
    }
}

function finalizar(){

    let resultado = document.getElementById('res');
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    var i;
    
    if(valores.length==0){
        alert("Adicione algum valor antes!");
    }else{

        for(i=0;i<valores.length;i++){
            if(valores[i]>maior){
                maior = valores[i];
            }
            if(valores[i]<menor){
                menor = valores[i];
            }
        }


        resultado.innerHTML = `<p>Ao todo, temos ${total} elementos.</p>`;
        resultado.innerHTML += `<p>o menor valor é ${menor}</p:`;
        resultado.innerHTML += `<p>o maior valor é ${maior}</p>`;
    }
}