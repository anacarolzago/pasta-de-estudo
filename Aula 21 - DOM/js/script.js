function mudarTexto1() {
    // console.log("Entra na função 1");
    document.getElementById('texto1').value = "Olá oi Olá";
};

function mudarTexto2() {
    // console.log("Entra na função 2");
    document.getElementById('texto2').innerText = "Olá oi Olá";

};

function mudarTexto3() {
    // console.log("Entra na função 3");
    document.getElementById('texto3').innerHTML = "<h1>Olá Oi Olá<h1>";
};

function mudarImagem1() {
    // console.log("Entra na função 4");
    document.getElementById('img1').src = "/img/tulipa.jpeg";

};

function mudarImagem2() {
    // console.log("Entra na função 5");
    document.getElementById('img2').src = "/img/tulipa.jpeg";

};

function mudarImagem3() {
    document.getElementById('img2').src = "/img/tulipa.jpeg";
}

function mudarCorTexto() {
    var texto = document.getElementById('texto6');

    // Mudar o cor do texto
    // texto.style.color = "blue";
    texto.style.color = "#8400ff";
    texto.style.backgroundColor = "#fdff9a";
    texto.style.padding = "10px";
    texto.style.fontSize = "1.2rem";
    // texto.style.fontSize = "24px";
    texto.style.fontWeight = "600";
}

function mudarTexto4(id) {
    id.innerHTML = "Texto alterado pelo JavaScript (por parâmetro)";
    
}

function somar(valor1, valor2) {
    var resultado = valor1 + valor2;

    alert(resultado);
}

somar(3, 6);


