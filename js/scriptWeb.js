
function cargarContenidoRegistro() { 
    window.location.replace('index.html');
}

function cargarContenidoUsuarios() { 
    cargarContenido('usuarios.html');
}

function cargarContenidoPrivacidad() { 
    //cargarContenido('privacidad.html');
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
    
    iframeDocument.getElementById('idMenuUsuarios').addEventListener("click", cargarContenidoUsuarios);
    iframeDocument.getElementById('idMenuPrivacidad').addEventListener("click", cargarContenidoPrivacidad);
    iframeDocument.getElementById('idMenuRegistro').addEventListener("click", cargarContenidoRegistro);
}