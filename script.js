// Consegna:
// Dato un array contenente una lista di sei immagini (url), creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sui bottoni/frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione thumbnails, realizzate a piacere (pallini o miniature). Tutte le thumbnails avranno una classe inattiva, tranne quella corrispondente all’immagine attiva, che invece avrà una classe attiva (che la distinguerà con un bordo, un colore, ecc).
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
// Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.
// Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

const arrayImg = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];
let indexActive= 0;
const imgWrapper = document.querySelector('.carousel-wrapper .carousel-img-container');
const thumbWrapper= document.querySelector('.thumbnail');
for (i = 0; i < arrayImg.length; i++) {
    const newImg = document.createElement('img');
    newImg.classList.add('d-none');
    newImg.setAttribute('src', arrayImg[i]);
    imgWrapper.append(newImg); 
    const thumb = document.createElement('div');
    thumb.classList.add('thumb');
    thumbWrapper.append(thumb); 
}


const imgList=imgWrapper.children;

imgList[indexActive].classList.add('active');
imgList[indexActive].classList.remove('d-none');
const nextBtn=document.getElementById('next-btn');
const prevBtn=document.getElementById('prev-btn');
nextBtn.addEventListener('click', function(){
    imgList[indexActive].classList.remove('active');
    imgList[indexActive].classList.add('d-none');
    indexActive++;
    if(indexActive===imgList.length){
        indexActive=0;
    }
    imgList[indexActive].classList.remove('d-none');
    imgList[indexActive].classList.add('active');
    console.log(indexActive);
})
prevBtn.addEventListener('click', function(){
    imgList[indexActive].classList.remove('active');
    imgList[indexActive].classList.add('d-none');
    indexActive--;
    if(indexActive===-1){
        indexActive=imgList.length-1;
    }
    imgList[indexActive].classList.remove('d-none');
    imgList[indexActive].classList.add('active');
    console.log(indexActive);
})