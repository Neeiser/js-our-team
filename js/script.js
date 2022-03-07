/* 
- Come prima cosa nel file js definitevi un array di oggetti che 
rappresentano i membro del team.

- Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

- Prendendo come riferimento la card di esempio presente nell'html, 
stampiamo dinamicamente una card per ogni membro del team. 
*/


const teamContainer = document.querySelector('.team-container');

const objArr = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'https://picsum.photos/400/429?random=1',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'https://picsum.photos/400/429?random=2',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'https://picsum.photos/400/429?random=3',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'https://picsum.photos/400/429?random=4',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'https://picsum.photos/400/429?random=5',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'https://picsum.photos/400/429?random=6',
    },
    
];

for (let i = 0; i < objArr.length; i++) {
   let box = 

}