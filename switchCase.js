let permissao = 'trabson'; // comum,gerente ou diretor


switch(permissao){

    case 'comum':
        console.log('Usuário Comum');
        break;
        case 'gerente':
            console.log('Bem Vindo Gerente');
            break;
            case 'diretor':
                console.log('Bem Vindo Diretor');
                break;
                
            
            default:
                console.log('Usuário não reconhecido');


}