//Generateur de mot aléatoire
let frenchWords = ['crayon', 'stylo', 'feutre', 'pointe', 'mine', 'gomme', 'dessin', 'coloriage', 'rayure', 'peinture', 'pinceau', 'couleur', 'craie', 'papier', 'feuille', 'cahier', 'carnet', 'carton', 'ciseaux', 'decoupage', 'pliage', 'pli', 'colle', 'affaire', 'boite', 'casier', 'caisse', 'trousse', 'cartable', 'jouet', 'jeu', 'pion', 'de', 'domino', 'puzzle', 'cube', 'perle', 'chose', 'carre', 'rond', 'pate', 'tampon', 'livre', 'histoire', 'bibliotheque', 'image', 'album', 'titre', 'bande dessin', 'conte', 'dictionnaire', 'magazine', 'catalogue', 'page', 'ligne', 'mot', 'enveloppe', 'etiquette', 'carte', 'affiche', 'alphabet', 'appareil', 'camescope', 'cassette', 'chaine', 'chanson', 'chiffre', 'contraire', 'difference', 'doigt', 'ecran', 'ecriture', 'film', 'fois', 'idee', 'instrument', 'intrus', 'lettre', 'liste', 'magnetoscope', 'main', 'micro', 'modele', 'musique', 'nom', 'nombre', 'orchestre', 'ordinateur', 'photo', 'point', 'poster', 'pouce', 'prenom', 'question', 'radio', 'sens', 'tambour', 'telecommande', 'telephone', 'television', 'trait', 'trompette', 'voix', 'xylophone', 'zero'];
let randomWord = frenchWords[Math.floor(Math.random() * frenchWords.length)];

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//console.log(randomWord);
let clavier = document.querySelector('.clavier');

function tableCreate() {
  let mot = document.querySelector('.mot');
  var tbl = document.createElement('table');

  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');
  for (let j = 0; j < randomWord.length; j++) {
    let td = document.createElement('td');
    td.innerHTML = '_'
    tr.appendChild(td)
  }
  tbdy.appendChild(tr);
  tbl.appendChild(tbdy);
  mot.appendChild(tbl)
}
tableCreate();

function touches() {
  for (let i = 0; i < alphabet.length; i++) {
    let div = document.createElement('div');
    div.className += 'letter'
    div.innerHTML = alphabet[i]
    clavier.appendChild(div)
  }
}
touches();
let lettres = document.querySelectorAll('.letter');

function letter_push(event) {
  let tdHide = document.querySelectorAll('td');
  let collectLettre = this.textContent; //On récupére le contenut de la touche cliqué
  let lettreLowerCase = collectLettre.toLowerCase(); //On transforme les lettres Maj en minuscules
  if (randomWord.includes(lettreLowerCase)) { //On vérifie si la lettre est dans le mot
    for (let x = 0; x < randomWord.length; x++) { //On regarde le nombre d'occurence de la lettre
      if (randomWord[x] === lettreLowerCase) {
        tdHide[x].innerHTML = lettreLowerCase; // on renvoie la lettre dans le tableau
      }
    }
  } else {
    wrongLetter();
  }
  event.target.classList.add("opacity")
  event.target.removeEventListener('click', letter_push);
  checkWin(); //On vérifie si le joueur a gagné
  checkLose(); //On vérifie si le joueur a perdu
}

//Vérification de victoire
function checkWin() {
  let trHide = document.querySelector('tr');
  if (trHide.textContent === randomWord) {
    alert('Bien joué le S');
    location.reload();
  }
}

function checkLose() {
  if (fail === 10) {
    alert('Perdu, le gars est mort');
    location.reload();
  }
}

for (let lettre of lettres) {
  lettre.addEventListener('click', letter_push);
}

// Dessin Pendu
let canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 300;
canvas.tabindex = 0;
canvas.setAttribute('style', "position: relative; order: 1; ");
let ctx = canvas.getContext("2d");
let container = document.querySelector('.container');
container.appendChild(canvas);

let fail = 0;

function wrongLetter() {
  fail += 1;
  if (fail === 1) {
    // Potence
    ctx.beginPath();
    ctx.moveTo(275, 250);
    ctx.lineTo(325, 250);
    ctx.lineTo(300, 225);
    ctx.fillStyle = '#FCF7CD';
    ctx.fill();
  } else if (fail === 2) {
    ctx.beginPath();
    ctx.moveTo(300, 230);
    ctx.lineTo(300, 75);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 3) {
    ctx.beginPath();
    ctx.moveTo(300, 75);
    ctx.lineTo(375, 75);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 4) {
    ctx.beginPath();
    ctx.moveTo(375, 75);
    ctx.lineTo(375, 100);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 5) {
    //Tête
    ctx.beginPath();
    ctx.lineWidth = '3';
    ctx.stokeStyle = '#FCF7CD';
    ctx.arc(375, 115, 15, 0, 2 * Math.PI);
    ctx.stroke();
  } else if (fail === 6) {
    //Corps
    ctx.beginPath();
    ctx.moveTo(375, 129);
    ctx.lineTo(375, 180);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 7) {
    //Bras gauche
    ctx.beginPath();
    ctx.moveTo(375, 135);
    ctx.lineTo(355, 165);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 8) {
    // Bras droite
    ctx.beginPath();
    ctx.moveTo(375, 135);
    ctx.lineTo(395, 165);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 9) {
    //Jambe gauche
    ctx.beginPath();
    ctx.moveTo(375, 179);
    ctx.lineTo(355, 210);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else if (fail === 10) {
    //Jambe droite
    ctx.beginPath();
    ctx.moveTo(375, 179);
    ctx.lineTo(395, 210);
    ctx.strokeStyle = '#FCF7CD';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}