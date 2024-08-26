/*
Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea.
*/

// Inițializarea listei de cumpărături
const listaCumparaturi = ["lapte", "pâine", "ouă", "mere", "banane"];

// Funcție pentru afișarea listei și a numărului de produse
function afiseazaLista(lista) {
  console.log(`Lista de cumpărături: ${lista}`);
  console.log(`Număr de produse: ${lista.length}`);
}

// Afișăm lista inițială
//afiseazaLista(listaCumparaturi);

// Funcție pentru sortarea alfabetică
function sorteazaAlfabetic(lista) {
  lista.sort();
  return lista;
}

// Sortăm lista alfabetic
//sorteazaAlfabetic(listaCumparaturi);
// Afişăm lista sortată
//console.log(sorteazaAlfabetic(listaCumparaturi));

// Funcție pentru căutarea unui produs
function cautaProdus(lista, produs) {
  const index = lista.indexOf(produs);
  if (index !== -1) {
    return `Produsul "${produs}" a fost găsit la indexul ${index} în lista de cumpărături.`;
  } else {
    return `Produsul ${produs} nu a fost găsit. ${index}`;
  }
}

// Căutăm un produs care există
//console.log(cautaProdus(listaCumparaturi, "ouă"));
// Căutăm un produs care nu există
//console.log(cautaProdus(listaCumparaturi, "frişcă"));

// Funcție pentru adăugarea unui produs
function adaugaProdus(lista, produs) {
  if (!lista.includes(produs)) {
    lista.push(produs);
    console.log(`Produsul ${produs} a fost adăugat.`);
  } else {
    console.log(`Produsul ${produs} există deja în listă.`);
  }
  return lista;
}

// Adăugăm un produs care nu există
//adaugaProdus(listaCumparaturi, "brânză");
//console.log(adaugaProdus(listaCumparaturi, "brânză"));
// Adăugăm un produs care există deja în listă
//adaugaProdus(listaCumparaturi, "ouă");
//console.log(adaugaProdus(listaCumparaturi, "ouă"));


// Funcție pentru eliminarea unui produs
function eliminaProdus(lista, produs) {
  const index = lista.indexOf(produs);
  if (index !== -1) {
    lista.splice(index, 1);
    console.log(`Produsul ${produs} a fost eliminat.`);
  } else {
    console.log(`Produsul ${produs} nu a fost găsit.`);
  }
  return lista;
}

// Eliminăm un produs care există în listă 
//eliminaProdus(listaCumparaturi, "mere");
// şi afişăm lista
//console.log(eliminaProdus(listaCumparaturi, "mere"));
// Eliminăm un produs care nu există în listă 
//eliminaProdus(listaCumparaturi, "Coca-Cola");
// şi afişăm lista
//console.log(eliminaProdus(listaCumparaturi, "Coca-Cola"));


// Afișăm lista finală
//afiseazaLista(listaCumparaturi);
//console.log(`Lista finală de cumpărături: ${afiseazaLista(listaCumparaturi)}`);
//console.log(`Numărul de produse în lista finală: ${listaCumparaturi.length}`);