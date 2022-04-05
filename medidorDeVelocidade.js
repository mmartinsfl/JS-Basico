//Velocidade máxima de 70
// a cada 5km acima do limite você ganha 1 ponto na cnh
//Math.Floor()
//caso pontos maior que 12 a cnh é suspendida.
verificarVelocidade(70);
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
if (velocidade <= velocidadeMaxima)
    console.log('Você está na velocidade permitida.');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ));
        if(pontos >=12 ){
            console.log('Carteira Suspensa');
        } else {
            console.log('Pontos',pontos)
        }
    }
 }
   




