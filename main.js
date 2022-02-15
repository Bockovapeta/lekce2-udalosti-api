// tady je místo pro náš program




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


function zmenStyl() {
    nadpis.classList.toggle('zeleny');
}

function priNajetiZtucni() {
    let text = document.querySelector('p');
    text.style.fontWeight = 'bolder';
}

function zmenBarvu() {
    document.querySelector('p').classList.toggle('cerveny');
}