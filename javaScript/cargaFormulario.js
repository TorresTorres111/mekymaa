
// cargaEfecto
const cargaEfecto = () => {

    const cargaAnimacion = document.querySelector( '.cargaAnimacion' );
    TweenMax.to( cargaAnimacion, 1, {
        delay: .8,
        top: "-100%",
        ease: Expo.easeInOut
    });
    TweenMax.to( cargaAnimacion.querySelector( 'span' ), 1, {
        delay: .6,
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    TweenMax.to( cargaAnimacion.querySelector( 'h1' ), 1, {
        delay: .2,
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });

};
cargaEfecto();