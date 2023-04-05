/*recuperaVariabili.js
@author  Riccardo Conforto
@version 1.0.0
@remarks 
@remarks 
@see     https://
*/

const titoloPagina = document.title;
const urlPagina = window.location.href
const descrizionePagina = document.querySelector("meta[name='description']").getAttribute("content");

let canonicalTwitterFacebook = `
<link rel="canonical" href="`+urlPagina+`" />
<meta name="twitter:title" content="`+titoloPagina+`">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="">
<meta name="twitter:creator" content="">
<meta name="twitter:url" content="`+urlPagina+`">
<meta name="twitter:description" content="`+descrizionePagina+`">
<meta name="twitter:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
<meta name="twitter:image:alt" content="Aldo Conforto vestito di scena">
<meta property="og:title" content="`+titoloPagina+`">
<meta property="og:type" content="article">
<meta property="og:email" content="">
<meta property="og:url" content="`+urlPagina+`">
<meta property="og:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
<meta property="og:image:alt" content="Aldo Conforto vestito di scena">
<meta property="og:site_name" content="`+titoloPagina+`">
<meta property="fb:admins" content="xxxxxxxxxxx">
<meta property="fb:app_id" content="578483895953705">
<meta property="og:description" content="`+descrizionePagina+`">
<meta property="og:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
<meta property="og:image:width" content="993">
<meta property="og:image:height" content="1418">
<meta property="og:image:alt" content="Aldo Conforto vestito di scena">
`;


//const pippo = document.querySelector('pippo');
//pippo.addEventListener('click', updateName);
// let titoloPagina = document.querySelector('title');
/*let titoloPagina = document.title;
let descrizionePagina = document.querySelector("meta[name='description']").getAttribute("content");

let mioNome = 'Riccardo';
let arrayColori = ['rosso', 'verde', 'giallo'];
console.log(arrayColori[2]);
console.log(mioNome);
console.log(titoloPagina);
console.log(descrizionePagina);

//const contenutoFooter = document.querySelector("div[id='locandineFooter']");
//function updateName() {
//    let pippopippopippo = prompt('Nuovo Presentatore');
//    pippo.textContent = 'Nuovo ' + pippopippopippo;
//}
*/

const contenutoCanonicalTwitterFacebook = document.getElementById('canonicalTwitterFacebook');
aggiornaContenuto(contenutoCanonicalTwitterFacebook,canonicalTwitterFacebook);

function aggiornaContenuto(campoNellaPagina,valoreStatico) {
    campoNellaPagina.innerHTML = valoreStatico;
}
