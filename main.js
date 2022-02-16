// tady je místo pro náš program


/*

let nadpis = document.querySelector('h1');
// přidáme vlastnosti třídy pomocí class.List.add a do závorky napíšeme název css třídy
nadpis.classList.add('zluty');

// odebrání určité třídy:
nadpis.classList.remove('zluty');

// přidání nové třídy div:
let ctverecek = document.querySelector('div.zluty');

ctverecek.classList.add('ctverecek');

// funkce toggle nám přepíná mezi zapnutí třídy a vypnutí třídy, tzn. pokud tam třída je, tak ji odebere, pokud tam není, tak ji přidá

let pocitadlo = 0;


//pokud najedu na ctverecek, vypíše se mi to do konzole při každém najetí na čtverec

function priNajetiNaCtverec() {
    console.log('test' + pocitadlo);

    //   pocitadlo = pocitadlo + 1; stejný zápis je takto:

    pocitadlo++;
}
*/

function zmenStyl() {
    nadpis.classList.toggle('zeleny');
}

function priNajetiZtucni() {
    let text = document.querySelector('p');
    text.style.fontWeight = 'bolder';
}

function priNajetiNormal() {
    document.querySelector('p').style.fontWeight = 'normal';
}

function zmenBarvu() {
    document.querySelector('p').classList.toggle('cerveny');
}

let text = 16;
function zvetsiText() {
    document.querySelector('p').style.fontSize = ((text++) + 'px');
}


/*
function stiskKlavesy(udalost) {
    console.log(udalost.key);
}

*/

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play();
}

function pauseAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.pause();
}


function volumeI() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0.1;
}

function volumeII() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0.5;
}

function volumeIII() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 1;
}

function vratit() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.load();
    audioFile.play();
}