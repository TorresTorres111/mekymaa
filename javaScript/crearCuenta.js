
'use strict'


// expresiones
const globalExp =  /^[a-zA-Z0-9\_\-]{5,20}$/;
const correoExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


// form
const form = document.querySelector( '#form' );
form.addEventListener( 'submit', function( e ) {

    const nombre = document.querySelector( '#nombre' ).value;
    const correo = document.querySelector( '#correo' ).value;
    const contraseña = document.querySelector( '#contraseña' ).value;
    const contraseñaRep = document.querySelector( '#contraseñaRep' ).value;

    const nombreMsg = document.querySelector( '#nombreMsg' );
    const correoMsg = document.querySelector( '#correoMsg' );
    const contraseñaMsg = document.querySelector( '#contraseñaMsg' );
    const contraseñaRepMsg = document.querySelector( '#contraseñaRepMsg' );

    valNombreContraseñá( nombre, nombreMsg, e );
    valNombreContraseñá( contraseña, contraseñaMsg, e );
    valCorreo( correo, correoMsg, e );
    if ( contraseña !== contraseñaRep ) {
        contraseñaRepMsg.innerHTML = 'Las contraseñas no coinciden';
        contraseñaRepMsg.style.display = 'inline-block';
    } else {
        contraseñaRepMsg.style.display = 'inline-block';
    }

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


// valCorreo
const valCorreo = ( campo, msg, e ) => {

    if ( campo.length <= 0 ) {
        msg.innerHTML = 'Email no puede quedar vacío';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else if ( campo.length > 50 || campo.length < 5 ) {
        msg.innerHTML = 'Email debe de estar entre 5 y 50 caracteres';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else if ( !correoExp.test( campo )) {
        msg.innerHTML = 'Tal parece tu correo es de otro planeta';
        msg.style.display = 'inline-block';
        e.preventDefault();
    } else {
        msg.style.display = 'none';
    }

}