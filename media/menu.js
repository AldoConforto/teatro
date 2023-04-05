/*recuperaVariabili.js
@author  Riccardo Conforto
@version 1.0.0
@remarks 
@remarks 
@see     https://
*/

const menuPrincipale = `
<div class="g-block size-100">
    <div id="menu-6409-particle" class="g-content g-particle">
        <nav class="g-main-nav" data-g-hover-expand="true">
            <ul class="g-toplevel">
                <li class="g-menu-item g-menu-item-type-component g-menu-item-101 active g-standard  ">
                    <a class="g-menu-item-container" href="index.htm" title="Aldo Conforto Home Page">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span class="g-menu-item-content">
                            <span class="g-menu-item-title">Home</span>
                            <span class="g-menu-item-subtitle">Aldo Conforto</span>
                        </span>
                    </a>
                </li>
                <li class="g-menu-item g-menu-item-type-component g-menu-item-106 g-standard  ">
                    <a class="g-menu-item-container" href="aldo-conforto-biografia-curriculum-vitae.html" title="Aldo Conforto Biografia Curriculum Vitae">
                        <i class="fa fa-address-book" aria-hidden="true"></i>
                        <span class="g-menu-item-content">
                            <span class="g-menu-item-title">Biografia</span>
                            <span class="g-menu-item-subtitle">curriculum vitae</span>
                        </span>
                    </a>
                </li> 
                <li class="g-menu-item g-menu-item-type-component g-menu-item-107 g-standard  ">
                    <a class="g-menu-item-container" href="articoli.html" title="Articoli di teatro collezionati dai giornali cartacei e digitali">
                        <i class="fa fa-book" aria-hidden="true"></i>
                        <span class="g-menu-item-content">
                            <span class="g-menu-item-title">Articoli</span>
                            <span class="g-menu-item-subtitle">articoli di giornale</span>
                        </span>
                    </a>
                </li>
                <li class="g-menu-item g-menu-item-type-component g-menu-item-122 g-standard  ">
                    <a class="g-menu-item-container" href="vestiti.html" title="Set foto di spettacoli di teatro e vestiti di scena">
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
`;

const contenutoMenuPrincipale = document.getElementById('menuPrincipale');
aggiornaContenuto(contenutoMenuPrincipale,menuPrincipale);


function aggiornaContenuto(campoNellaPagina,valoreStatico) {
    campoNellaPagina.innerHTML = valoreStatico;
}
