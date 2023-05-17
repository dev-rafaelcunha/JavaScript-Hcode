let semafaro = 'azul';

switch (semafaro) {
    case 'verde':
        console.log('Siga!');
        break;

    case 'amarelo':
        console.log('Atenção!');
        break;
        
    case 'vermelho':
        console.log('Pare!');
        break;    

    default:
        console.log('Essa cor não pertence ao semafaro!');
        break;
}