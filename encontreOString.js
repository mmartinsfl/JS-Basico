const filme ={
    titulo : '21 Jump Street',
    ano : 2018,
    diretor :'Lerdao',
    personagem :'Chefe de Polícia'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){

    for(prop in obj)
    if(typeof obj[prop] === 'string')
    console.log(prop,obj[prop])





}