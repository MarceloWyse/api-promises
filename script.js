async function buscaEndereco(cep) {
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertido = await consultaCep.json();
    if(consultaCepConvertido.erro){
        throw Error('Cep não existente');
    }
    console.log(consultaCepConvertido); 
    return consultaCepConvertido;   
    }
    catch (e) {
        console.log(e);
    }
}

let ceps = ['96015710','01001000']; 
let conjuntoCeps = ceps.map(e => buscaEndereco(e)) //map() retorna um array, nesse caso de promises
Promise.all(conjuntoCeps).then(e => console.log(e)); //resolve o array de promises



