//funcion que muestra el menu resposive//

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

function linkFacebook() {
    alert('hola, dale un vistazo a mi perfil de facebook "www.facebook.com"')
}

function linkInstagram() {
    alert('hola, dale un vistazo a mi perfil de Ig "www.instagram.com"')
}

function numWhatsapp() {
    alert('hola, mi whatsapp (+58 424 430 7004)')
}