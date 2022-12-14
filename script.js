async function buscaEndereco(cep) {
    var msgErro = document.getElementById('erro');
    msgErro.innerHTML = "";
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertido = await consultaCep.json();
    if(consultaCepConvertido.erro){
        throw Error('Cep não existente');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    
    cidade.value = consultaCepConvertido.localidade;
    logradouro.value = consultaCepConvertido.logradouro;
    estado.value = consultaCepConvertido.uf;

    //console.log(consultaCepConvertido); 
    return consultaCepConvertido;  
    
    }
    catch (e) {
        msgErro.innerHTML = "Cep inválido";
    }
}

/* let ceps = ['96015710','01001000']; 
let conjuntoCeps = ceps.map(e => buscaEndereco(e)) //map() retorna um array, nesse caso de promises
Promise.all(conjuntoCeps).then(e => console.log(e)); //resolve o array de promises
 */
var cep = document.getElementById("cep");
cep.addEventListener('focusout', () => buscaEndereco(cep.value));