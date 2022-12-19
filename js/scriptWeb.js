
function cargarContenidoRegistro() { 
    window.location.replace('index.html');
}

function cargarContenidoLogin() { 
    window.location.replace('login.html');
}

function cargarContenidoUsuarios() { 
    cargarContenido('usuarios.html');
}

function cargarContenidoPrivacidad() {
    window.location.replace('privacidad.html');
}

function cargarContenido(miUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', miUrl, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('divContenido').innerHTML = this.responseText;
    };
    xhr.send();
}

function asignarLigasMenu () {
    let iframeDocument = idFrameMenu.contentWindow.document;
    if (iframeDocument == undefined) { return; }
    
    iframeDocument.getElementById('idMenuPrivacidad').addEventListener("click", cargarContenidoPrivacidad);
    iframeDocument.getElementById('idMenuRegistro').addEventListener("click", cargarContenidoRegistro);
    iframeDocument.getElementById('idMenuAcceso').addEventListener("click", cargarContenidoLogin);
    
}