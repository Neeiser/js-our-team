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

   let teamCard = document.createElement('div');
   teamCard.classList.add('team-card');
   teamContainer.append(teamCard);
   
   /* ----------------------------------- */
   
    let cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    teamCard.append(cardImage);

    cardImage.innerHTML = 
    `
    <img src= ${objArr[i].photo}>
    `
     
    /* ----------------------------------- */

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    teamCard.append(cardText);
    
    cardText.innerHTML = 
    `
    <h3>
    ${objArr[i].name}
    </h3>
    <p>
    ${objArr[i].role}
    </p>
    `
}

/*
------------------------------------
BONUS
------------------------------------
*/

let userInputName = document.getElementById('name');
let userInputRole = document.getElementById('role');
let userInputimage = document.getElementById('image');
let addMemberButton = document.getElementById('addMemberButton');

let newMember = {};

addMemberButton.addEventListener("click", function(){

/* Per Aggiungere i valori dopo il click alla pagina */
    Object.assign(newMember, {name: userInputName.value});
    Object.assign(newMember, {role: userInputRole.value});


    
    console.log(newMember);

    

    let teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    teamContainer.append(teamCard);

    /* ----------------------------------- */

    let cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    teamCard.append(cardImage);

    cardImage.innerHTML = 
    `
    <img src= https://picsum.photos/400/429?random=6>
    `
    
    /* ----------------------------------- */
     
    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    teamCard.append(cardText);
    
    cardText.innerHTML = 
    `
    <h3>
    ${newMember.name}
    </h3>
    <p>
    ${newMember.role}
    </p>
    `

    userInputName.value= ''; /* Per resettare i campi dopo aver inviato i dati */
    userInputRole.value= ''; /* Per resettare i campi dopo aver inviato i dati */
});