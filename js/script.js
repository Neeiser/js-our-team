/* 
- Come prima cosa nel file js definitevi un array di oggetti che 
rappresentano i membro del team.

- Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

- Prendendo come riferimento la card di esempio presente nell'html, 
stampiamo dinamicamente una card per ogni membro del team. 
*/


let teamContainer = document.querySelector('.team-container');
let cardImage = document.querySelector('.card-image');
let cardTextH3 = document.querySelector('.card-text h3');
let cardTextP = document.querySelector('.card-text p');

const objArr = [
    {
        name: '',
        role: '',
        photo: '',
    },
    {
        name: '',
        role: '',
        photo: '',
    },
    {
        name: '',
        role: '',
        photo: '',
    },
    {
        name: '',
        role: '',
        photo: '',
    },
    {
        name: '',
        role: '',
        photo: '',
    },
    {
        name: '',
        role: '',
        photo: '',
    },
    
]