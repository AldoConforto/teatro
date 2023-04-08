/*recuperaVariabili.js
@author  Riccardo Conforto
@version 1.0.0
@remarks 
@remarks 
@see     https://
*/

const titoloPagina2 = document.title;
const urlPagina2 = window.location.href
const descrizionePagina2 = document.querySelector("meta[name='description']").getAttribute("content");

/*
let schemaArticleInAggiunta = `
<div class="page-header">
<h1 itemprop="headline" class="div_header">`+titoloPagina2+`</h1>
<h2 class="hidden">`+titoloPagina2+`</h2>
<h3 class="hidden">`+titoloPagina2+`</h3>
<h4 class="hidden">`+titoloPagina2+`</h4>
<h5 class="hidden">`+titoloPagina2+`</h5>
<h6 class="hidden">`+titoloPagina2+`</h6>
</div>
<link itemprop="url" title="`+titoloPagina2+`" href="`+urlPagina2+`">    
`;
*/



let footerDinamico = `
<div class="g-container">
<div class="g-grid">
    <div class="g-block size-100 center">
        <div class="g-content">
            <div class="platform-content">
                <div class="locandinenew moduletable ">
                    <div class="mod_sigplus">
                        <div id="sigplus_1001" class="sigplus-gallery sigplus-center sigplus-lightbox-boxplusx">
                        <noscript class="sigplus-gallery"><ul>
                            <li><a class="sigplus-image" href="images/locandineNew/Dante%20la%20sconfitta%20e%20il%20dolore%20nella%20Divina%20Commedia%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Dante%20la%20sconfitta%20e%20il%20dolore%20nella%20Divina%20Commedia%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Dante la sconfitta e il dolore nella Divina Commedia (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Dante%20la%20sconfitta%20e%20il%20dolore%20nella%20Divina%20Commedia%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Dante%20la%20sconfitta%20e%20il%20dolore%20nella%20Divina%20Commedia%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Dante%20la%20sconfitta%20e%20il%20dolore%20nella%20Divina%20Commedia%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/EdipoRe%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/EdipoRe%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="EdipoRe (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/EdipoRe%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/EdipoRe%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/EdipoRe%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/EdipoRe%20locandina2%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/EdipoRe%20locandina2%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="EdipoRe locandina2 (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/EdipoRe%20locandina2%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/EdipoRe%20locandina2%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/EdipoRe%20locandina2%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Elettra%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Elettra%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Elettra (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Elettra%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Elettra%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Elettra%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Il%20Verso%20E%20Tutto%20Gabriele%20d%20Annunzio%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Il%20Verso%20E%20Tutto%20Gabriele%20d%20Annunzio%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Il Verso E Tutto Gabriele d Annunzio (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Il%20Verso%20E%20Tutto%20Gabriele%20d%20Annunzio%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Il%20Verso%20E%20Tutto%20Gabriele%20d%20Annunzio%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Il%20Verso%20E%20Tutto%20Gabriele%20d%20Annunzio%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/La%20Locandiera%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/La%20Locandiera%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="La Locandiera (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/La%20Locandiera%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/La%20Locandiera%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/La%20Locandiera%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/La%20Locandiera%202018%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/La%20Locandiera%202018%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="La Locandiera 2018 (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/La%20Locandiera%202018%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/La%20Locandiera%202018%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/La%20Locandiera%202018%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/La%20Rivolta%20di%20Casignana%20A.R.Di.S.%20Catanzaro%20Regione%20Calabria.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/La%20Rivolta%20di%20Casignana%20A.R.Di.S.%20Catanzaro%20Regione%20Calabria.jpg" width="200" height="280" alt="La Rivolta di Casignana A.R.Di.S. Catanzaro Regione Calabria" srcset="images/locandineNew/preview/400x560/La%20Rivolta%20di%20Casignana%20A.R.Di.S.%20Catanzaro%20Regione%20Calabria.jpg 400w, images/locandineNew/preview/200x280/La%20Rivolta%20di%20Casignana%20A.R.Di.S.%20Catanzaro%20Regione%20Calabria.jpg 200w, images/locandineNew/thumb/150x150/La%20Rivolta%20di%20Casignana%20A.R.Di.S.%20Catanzaro%20Regione%20Calabria.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Antigone%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Antigone%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Antigone (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Antigone%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Antigone%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Antigone%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Manzoni%20l%27inquieta%20provvidenza%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Manzoni%20l%27inquieta%20provvidenza%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Manzoni l'inquieta provvidenza (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Manzoni%20l%27inquieta%20provvidenza%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Manzoni%20l%27inquieta%20provvidenza%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Manzoni%20l%27inquieta%20provvidenza%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Medea%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Medea%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Medea (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Medea%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Medea%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Medea%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/MilesGloriosus%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/MilesGloriosus%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="MilesGloriosus (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/MilesGloriosus%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/MilesGloriosus%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/MilesGloriosus%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Moglie%20e%20Buoi%20%28A%20Trambia%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Moglie%20e%20Buoi%20%28A%20Trambia%29.jpg" width="200" height="280" alt="Moglie e Buoi (A Trambia)" srcset="images/locandineNew/preview/400x560/Moglie%20e%20Buoi%20%28A%20Trambia%29.jpg 400w, images/locandineNew/preview/200x280/Moglie%20e%20Buoi%20%28A%20Trambia%29.jpg 200w, images/locandineNew/thumb/150x150/Moglie%20e%20Buoi%20%28A%20Trambia%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Pietro%20da%20Morrone%20Francesco%20d%27Assisi%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Pietro%20da%20Morrone%20Francesco%20d%27Assisi%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Pietro da Morrone Francesco d'Assisi (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Pietro%20da%20Morrone%20Francesco%20d%27Assisi%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Pietro%20da%20Morrone%20Francesco%20d%27Assisi%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Pietro%20da%20Morrone%20Francesco%20d%27Assisi%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Poiesis%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Poiesis%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Poiesis (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Poiesis%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Poiesis%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Poiesis%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Prometeo%20le%20catene%20della%20liberta%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Prometeo%20le%20catene%20della%20liberta%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Prometeo le catene della liberta (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Prometeo%20le%20catene%20della%20liberta%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Prometeo%20le%20catene%20della%20liberta%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Prometeo%20le%20catene%20della%20liberta%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/Titan%20%28Teatro%20di%20Calabria%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/Titan%20%28Teatro%20di%20Calabria%29.jpg" width="200" height="280" alt="Titan (Teatro di Calabria)" srcset="images/locandineNew/preview/400x560/Titan%20%28Teatro%20di%20Calabria%29.jpg 400w, images/locandineNew/preview/200x280/Titan%20%28Teatro%20di%20Calabria%29.jpg 200w, images/locandineNew/thumb/150x150/Titan%20%28Teatro%20di%20Calabria%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/%27U%20Cortila%20d%27a%20pacia%20%28A%20Trambia%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/%27U%20Cortila%20d%27a%20pacia%20%28A%20Trambia%29.jpg" width="200" height="280" alt="'U Cortila d'a pacia (A Trambia)" srcset="images/locandineNew/preview/400x560/%27U%20Cortila%20d%27a%20pacia%20%28A%20Trambia%29.jpg 400w, images/locandineNew/preview/200x280/%27U%20Cortila%20d%27a%20pacia%20%28A%20Trambia%29.jpg 200w, images/locandineNew/thumb/150x150/%27U%20Cortila%20d%27a%20pacia%20%28A%20Trambia%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                            <li><a class="sigplus-image" href="images/locandineNew/%27U%20Miraculu%20%28A%20Trambia%29.jpg">
                            <img class="sigplus-preview" src="images/locandineNew/preview/200x280/%27U%20Miraculu%20%28A%20Trambia%29.jpg" width="200" height="280" alt="'U Miraculu (A Trambia)" srcset="images/locandineNew/preview/400x560/%27U%20Miraculu%20%28A%20Trambia%29.jpg 400w, images/locandineNew/preview/200x280/%27U%20Miraculu%20%28A%20Trambia%29.jpg 200w, images/locandineNew/thumb/150x150/%27U%20Miraculu%20%28A%20Trambia%29.jpg 150w" sizes="200px"></a><div class="sigplus-summary">locandine spettacoli di teatro</div></li>
                        </ul></noscript>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
    </div>
</div>
<div>&nbsp;</div>
<div class="g-grid">              
    <div class="g-block size-100 center nomarginall nopaddingall">
        <div id="branding-8071-particle" class="g-content g-particle">
            <div class="g-branding g-branding">
                <a href="riccardo-conforto-design-e-gestione-del-sito.html" title="Design by Riccardo Conforto">Riccardo Conforto Design</a>
            </div>
        </div>
    </div>
</div>
<div class="g-grid">                        
    <div class="g-block size-100 center">
        <div class="g-content">
            <div class="g-content">
                <div class="g-social "> 
                    <a href="cookie/consent_prompt/index.htm?u=`+urlPagina2+`" target="_blank" rel="nofollow" title="Facebook `+titoloPagina2+`" aria-label="Facebook"> 
                        <span class="fab fa-facebook-f fa-3x"></span>                 
                        <span class="g-social-text"></span>             
                    </a> 
                    <a href="https://api.whatsapp.com/send?text=`+urlPagina2+`" data-action="share/whatsapp/share" target="_blank" rel="nofollow" title="Whatsapp `+titoloPagina2+`" aria-label="Whatsapp"> 
                        <span class="fab fa-whatsapp fa-3x"></span>                 
                        <span class="g-social-text"></span>             
                    </a> 
                    <a href="https://twitter.com/intent/tweet?text=`+urlPagina2+`" target="_blank" rel="nofollow" title="Twitter `+titoloPagina2+`" aria-label="Twitter"> 
                        <span class="fab fa-twitter fa-3x"></span> 
                        <span class="g-social-text"></span>             
                    </a> 
                    <a href="http://www.linkedin.com/shareArticle?mini=true&url=`+urlPagina2+`" target="_blank" rel="nofollow" title="Linkedin `+titoloPagina2+`" aria-label="Linkedin"> 
                        <span class="fab fa-linkedin fa-3x"></span>                 
                        <span class="g-social-text"></span>             
                    </a> 
                    <a href="https://telegram.me/share/url?url=`+urlPagina2+`" data-action="share/telegram/share" target="_blank" rel="nofollow" title="Telegram `+titoloPagina2+`" aria-label="Telegram"> 
                        <span class="fab fa-telegram fa-3x"></span> 
                        <span class="g-social-text"></span> 
                    </a>    
                </div>
                </div>
        </div>
    </div>
</div>
</div>
`;

let sectionExpandedDinamico = `
<div class="g-container" itemprop="articleSection">                                 
<blockquote>
    <p>
        « si ringraziano gli autori e le redazioni di tutti i giornali dai quali sono stati recuperati gli articoli presenti in queste pagine »
    </br>
        « un ringraziamento speciale va a tutti coloro che hanno contribuito alla realizzazione degli spettacoli e a tutto il pubblico che in tutti questi anni ha scelto di donare il proprio tempo a sostegno del Teatro »
    </p>
</blockquote>
</div>
`;

let menuPrincipaleDopo = `
<div class="g-container">
    <div class="g-grid">
        <div class="g-block size-100">
            <div class="g-system-messages">
                <div id="system-message-container" aria-live="polite"></div>
            </div>
        </div>
    </div>
    <div class="g-grid">
        <div class="g-block size-100">
            <div id="menu-6409-particle" class="g-content g-particle">
                <nav class="g-main-nav" data-g-hover-expand="true">
                    <ul class="g-toplevel">
                        <li class="g-menu-item g-menu-item-type-component g-menu-item-101 active g-standard  ">
                            <a class="g-menu-item-container" href="./index.htm" title="Aldo Conforto Home Page">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <span class="g-menu-item-content">
                                    <span class="g-menu-item-title">Home</span>
                                    <span class="g-menu-item-subtitle">Aldo Conforto</span>
                                </span>
                            </a>
                        </li>
                        <li class="g-menu-item g-menu-item-type-component g-menu-item-106 g-standard  ">
                            <a class="g-menu-item-container" href="./aldo-conforto-biografia-curriculum-vitae.html" title="Aldo Conforto Biografia Curriculum Vitae">
                                <i class="fa fa-address-book" aria-hidden="true"></i>
                                <span class="g-menu-item-content">
                                    <span class="g-menu-item-title">Biografia</span>
                                    <span class="g-menu-item-subtitle">curriculum vitae</span>
                                </span>
                            </a>
                        </li>
                        <li class="g-menu-item g-menu-item-type-component g-menu-item-107 g-parent g-standard g-menu-item-link-parent ">
                            <a class="g-menu-item-container" href="./articoli-di-teatro-collezionati-dai-giornali-cartacei-e-digitali.html" title="Articoli di teatro collezionati dai giornali cartacei e digitali">
                                <i class="fa fa-book" aria-hidden="true"></i>
                                <span class="g-menu-item-content">
                                    <span class="g-menu-item-title">Articoli</span>
                                    <span class="g-menu-item-subtitle">articoli di giornale</span>
                                </span>
                                <span class="g-menu-parent-indicator" data-g-menuparent=""></span>
                            </a>
                            <ul class="g-dropdown g-inactive g-fade g-dropdown-right">
                                <li class="g-dropdown-column">
                                    <div class="g-grid">
                                        <div class="g-block size-100">
                                            <ul class="g-sublevel">
                                                <li class="g-level-1 g-go-back">
                                                    <a class="g-menu-item-container" href="#" data-g-menuparent=""><span>Back</span></a>
                                                </li>
                                                <li class="g-menu-item g-menu-item-type-component g-menu-item-238  ">
                                                    <a class="g-menu-item-container" href="./articoli-da-anno-2018-ad-oggi.html" title="Articoli da anno 2018 ad oggi">
                                                        <span class="g-menu-item-content">
                                                            <span class="g-menu-item-title">Articoli da anno 2018 ad oggi</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="g-menu-item g-menu-item-type-component g-menu-item-122 g-standard  ">
                            <a class="g-menu-item-container" href="./vestiti-di-scena-fotografie-modelli.html" title="Vestiti di scena con fotografie dei modelli">
                                <i class="fa fa-file-picture-o" aria-hidden="true"></i>
                                <span class="g-menu-item-content">
                                    <span class="g-menu-item-title">Vestiti</span>
                                    <span class="g-menu-item-subtitle">vestiti di scena</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
`;

let canonicalTwitterFacebookFavicon = `
    <link rel="canonical" href="`+urlPagina2+`" />
    <meta name="twitter:title" content="`+titoloPagina2+`">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="">
    <meta name="twitter:url" content="`+urlPagina2+`">
    <meta name="twitter:description" content="`+descrizionePagina2+`">
    <meta name="twitter:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
    <meta name="twitter:image:alt" content="Aldo Conforto vestito di scena">
    <meta property="og:title" content="`+titoloPagina2+`">
    <meta property="og:type" content="article">
    <meta property="og:email" content="">
    <meta property="og:url" content="`+urlPagina2+`">
    <meta property="og:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
    <meta property="og:image:alt" content="Aldo Conforto vestito di scena">
    <meta property="og:site_name" content="`+titoloPagina2+`">
    <meta property="fb:admins" content="xxxxxxxxxxx">
    <meta property="fb:app_id" content="578483895953705">
    <meta property="og:description" content="`+descrizionePagina2+`">
    <meta property="og:image" content="https://aldoconforto.github.io/teatro/images/Aldo%20Conforto%20vestito%20di%20scena.jpg">
    <meta property="og:image:width" content="993">
    <meta property="og:image:height" content="1418">
    <meta property="og:image:alt" content="Aldo Conforto vestito di scena">
    <link href="./favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
    <link rel="manifest" href="./site.webmanifest">
    <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
`;


//const pippo = document.querySelector('pippo');
//pippo.addEventListener('click', updateName);
// let titoloPagina2 = document.querySelector('title');
/*let titoloPagina2 = document.title;
let descrizionePagina2 = document.querySelector("meta[name='description']").getAttribute("content");

let mioNome = 'Riccardo';
let arrayColori = ['rosso', 'verde', 'giallo'];
console.log(arrayColori[2]);
console.log(mioNome);
console.log(titoloPagina2);
console.log(descrizionePagina2);

//const contenutoFooter = document.querySelector("div[id='locandineFooter']");
//function updateName() {
//    let pippopippopippo = prompt('Nuovo Presentatore');
//    pippo.textContent = 'Nuovo ' + pippopippopippo;
//}
*/

//let contenutoSchemaArticle = document.getElementById('schemaArticle');
//const contenutoSchemaArticle = document.getElementsByClassName('com-content-article__body')[0];
//console.log(contenutoSchemaArticle.innerHTML);
//aggiungiContenutoPrima(document.getElementsByClassName('com-content-article__body')[0],contenutoSchemaArticle.innerHTML,schemaArticleInAggiunta);

const headAttuale = document.querySelector("head").innerHTML;
//console.log(headAttuale);
aggiungiContenutoDopo(document.querySelector("head"),headAttuale,canonicalTwitterFacebookFavicon);

const menuPrincipaleAttuale = document.getElementsByClassName('section-horizontal-paddings-small')[0];
//console.log(menuPrincipaleAttuale.innerHTML);
aggiornaContenuto(menuPrincipaleAttuale,menuPrincipaleDopo);

const footer = document.getElementById('footer');
aggiornaContenuto(footer,footerDinamico);

const sectionExpanded = document.getElementById('g-expanded');
aggiornaContenuto(sectionExpanded,sectionExpandedDinamico);

function aggiornaContenuto(campoNellaPagina,nuovoContenuto) {
    campoNellaPagina.innerHTML = nuovoContenuto;
}

function aggiungiContenutoPrima(campoNellaPagina,contenutoAttuale,contenutoInAggiuntaPrima) {
    //campoNellaPagina[0].innerHTML = contenutoInAggiuntaPrima + contenutoAttuale;
    campoNellaPagina.innerHTML = contenutoInAggiuntaPrima + contenutoAttuale;
}

function aggiungiContenutoDopo(campoNellaPagina,contenutoAttuale,contenutoInAggiuntaDopo) {
    //campoNellaPagina[0].innerHTML = contenutoInAggiuntaPrima + contenutoAttuale;
    campoNellaPagina.innerHTML = contenutoAttuale + contenutoInAggiuntaDopo;
}
