var consultaCep = fetch('https://viacep.com.br/ws/96015710/json/')
.then(resp1 => resp1.json()) //converte a resposta para json, retorne then caso a promessa seja resolvida
.then(resp2 => {
    if(resp2.erro){
        throw Error('cep inválido');
    }
    else{
        console.log(resp2);
    }
    }) 
.catch(e => console.log(e)) //retorna catch caso haja um erro, promessa não resolvida
.finally(console.log('Concluído')); //executa independentemente da promessa concluída ou não

