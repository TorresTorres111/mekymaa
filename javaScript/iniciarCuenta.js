
'use strict'


// expresiones
const globalExp =  /^[a-zA-Z0-9\_\-]{5,20}$/;
const correoExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


// form
const form = document.querySelector( '#form' );
form.addEventListener( 'submit', function( e ) {

    const nombre = document.querySelector( '#nombre' ).value;
    const contraseña = document.querySelector( '#contraseña' ).value;

    const nombreMsg = document.querySelector( '#nombreMsg' );
    const contraseñaMsg = document.querySelector( '#contraseñaMsg' );

    valNombreContraseñá( nombre, nombreMsg, e );
    valNombreContraseñá( contraseña, contraseñaMsg, e );

});


// valNombreContraseñá
const valNombreContraseñá = ( campo, msg, e ) => {

    if ( campo.length <= 0 ) {
        msg.innerHTML = 'Ingrese un valor';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else if ( campo.length > 20 || campo.length < 5 ) {
        msg.innerHTML = 'Este campo debe estar entre 5 y 20 carteres';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else if ( !globalExp.test( campo )) {
        msg.innerHTML = 'Solo se permiten letras, numeros y guiones';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else {
        msg.style.display = 'none';
    };

};