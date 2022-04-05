// for
// while
// do-while

// for-in

const pessoa = {
    nome : 'Matheus',
    idade : '22'
};
//key-value
for(let key in pessoa){
    console.log(key,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for(let indice in cores){
    console.log(indice,cores[indice]);
}