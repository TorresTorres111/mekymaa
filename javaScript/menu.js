
'use strict'

// toggleMenu
const toggleBtn = document.querySelector( '#toggleBtn' );
toggleBtn.addEventListener( 'click', function() {

    const toggleMenu = document.querySelector( '.toggleMenu' );
    const menuContenedor = document.querySelector( '.menuContenedor' );
    toggleMenu.classList.toggle( 'active' );
    menuContenedor.classList.toggle( 'active' );

});