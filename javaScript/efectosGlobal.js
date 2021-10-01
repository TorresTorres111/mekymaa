
'use strict'

const contenedorElipses = document.querySelector( '.contenedor-elipses' );
TweenMax.from( contenedorElipses, 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
});

