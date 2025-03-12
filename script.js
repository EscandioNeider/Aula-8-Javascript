function logar(){
    var usuario = document.getElementById('idUsuario').value
    var senha = document.getElementById('idSenha').value
    
    if(usuario == "admin" && senha == "1234" ){
        window.location = "page.html"
    }else{
        alert("Usuário ou senha incorretos. Tente novamente!")
    }
}

function calcular() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    
    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;

    document.getElementById("notaResultado1").innerHTML = "Nota 1: " + nota1;
    document.getElementById("notaResultado2").innerHTML = "Nota 2: " + nota2;
    document.getElementById("notaResultado3").innerHTML = "Nota 3: " + nota3;
    document.getElementById("notaResultado4").innerHTML = "Nota 4: " + nota4;

    document.getElementById("media").innerHTML = "A média é: " + media;
}


