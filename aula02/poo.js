// POO VERSÂO ANTIGA
// let celular = function()
// {
//     this.cor = 'prata';

//     this.ligar = function()
//     {
//         console.log('uma ligação');
//         return 'ligando';
//     }
// }

// let objeto = new celular();
// console.log(objeto.ligar);

// POO VERSÂO ATUALIZADA
class celular
{
    constructor()
    {
        this.cor = 'prata';
    }

    ligar()
    {
        console.log('uma ligação');
        return 'ligando';
    }
}

let objeto = new celular();
console.log(objeto.ligar());