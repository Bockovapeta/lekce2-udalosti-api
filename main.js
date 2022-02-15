// tady je místo pro náš program




let nadpis = document.querySelector('h1');
// přidáme vlastnosti třídy pomocí class.List.add a do závorky napíšeme název css třídy
nadpis.classList.add('zluty');

// odebrání určité třídy:
nadpis.classList.remove('zluty');

// přidání nové třídy div:
let ctverecek = document.querySelector('div.zluty');

ctverecek.classList.add('ctverecek');

//funkce toggle nám přepíná mezi zapnutí třídy a vypnutí třídy, tzn. pokud tam třída je, tak ji odebere, pokud tam není, tak ji přidá