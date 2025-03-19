        function logar(){
            var usuario = document.getElementById('idUsuario').value;
            var senha = document.getElementById('idSenha').value;
    
            if(usuario == "admin" && senha == "1234" ){
                window.location = "page.html";
            }else{
                alert("Usuário ou senha incorretos. Tente novamente!");
            }
        }

        // Função para capturar o pressionamento da tecla "Enter"
        function pressionarEnter(event) {
            if (event.key === "Enter") {
                logar();
            }
        }

        // Adicionando o evento de "Enter" aos campos
        window.onload = function() {
            document.getElementById('idUsuario').addEventListener('keydown', pressionarEnter);
            document.getElementById('idSenha').addEventListener('keydown', pressionarEnter);
        }


function calcular() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    // Convertendo as notas para números antes de somá-las
    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;

    // Exibindo as notas no HTML
    document.getElementById("notaResultado1").innerHTML = "Nota 1: " + nota1;
    document.getElementById("notaResultado2").innerHTML = "Nota 2: " + nota2;
    document.getElementById("notaResultado3").innerHTML = "Nota 3: " + nota3;
    document.getElementById("notaResultado4").innerHTML = "Nota 4: " + nota4;

    // Exibindo a média no HTML
    document.getElementById("media").innerHTML = "A média é: " + media;
}

function calcular() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    // Verifica se todas as notas são números
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        alert("Por favor, insira valores válidos para todas as notas.");
        return; // Sai da função se houver erro
    }

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

    // Exibe os resultados no HTML
    document.getElementById("notaResultado1").innerHTML = "Nota 1: " + nota1;
    document.getElementById("notaResultado2").innerHTML = "Nota 2: " + nota2;
    document.getElementById("notaResultado3").innerHTML = "Nota 3: " + nota3;
    document.getElementById("notaResultado4").innerHTML = "Nota 4: " + nota4;

    // Exibe a média calculada
    document.getElementById("media").innerHTML = "A média é: " + media;
}
