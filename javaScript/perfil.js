

// texto
const textoH = document.querySelector( '#textoH' );
const textoP = document.querySelector( '#textoP' );


// ahoraBtn
const ahoraBtn = document.querySelector( '#ahoraBtn' );


// bx
const img = document.querySelector( '.img' );
const imgBx = document.querySelector( '.imgBx' );
const formBx = document.querySelector( '.formBx' );


// form
const usuario = document.querySelector( '#usuario' ).value;
const clasificacion = document.querySelector( '#clasificacion' );


// validacionClasificacion
const validacionClasificacion = () => {

    if ( clasificacion.value ) {
        console.log( 'Ya tienes una clasificacion' );
        textoP.innerHTML = `Mira nada mas lo que has encontrado, aqui <br>podras ver tus datos, modificarlos y ver tu <br>mejor puntaje sacado hasta el momento`;
        ahoraBtn.href = './jugar.html';
        ahoraBtn.innerHTML = 'Continue playing';
        img.style.display = 'block';
        img.querySelector( 'img' ).src = './images/perfil1.png';
        imgBx.style.display = 'none';
        formBx.style.display = 'flex';
    } else {
        console.log( 'No tienes una clasificacion' );
        textoP.innerHTML = `Mira nada mas lo que has encontrado, aqui podras<br> ver tus datos, modificarlos y ver tu mejor puntaje<br> sacado hasta el momento, pero.. ¿Porque <br>no has jugado aun ? que estas esperando`;
        ahoraBtn.href = './jugar.html';
        ahoraBtn.innerHTML = 'Start to play';
        clasificacion.placeholder = 'Ops! you have not played'
        img.style.display = 'block';
        img.querySelector( 'img' ).src = './images/perfil2.png';
        imgBx.style.display = 'none';
        formBx.style.display = 'flex';
    }

};
validacionClasificacion();


// validacionUsuario
const validacionUsuario = () => {

    if ( !usuario ) {
        console.log( 'No estas registrado!' );
        textoH.innerHTML = 'Your need to register';
        textoP.innerHTML = `Mmm parece ser que no estas registrado, que te <br>parece si comenzamso tu registro y asi poder <br>ver tu clasificacion en mekymaa`;
        ahoraBtn.href = './iniciarCuenta.html';
        ahoraBtn.innerHTML = 'Go to login';
        img.style.display = 'none';
        imgBx.style.display = 'block';
        formBx.style.display = 'none';
    } else {
        textoH.innerHTML = `Hi ${ usuario }`
    }

};
validacionUsuario();



