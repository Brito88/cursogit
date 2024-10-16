// Exibe uma mensagem no console quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada com sucesso!");

    // Altera o texto do elemento <h1> após 3 segundos
    setTimeout(function() {
        document.querySelector('h1').textContent = "Bem-vindo ao meu site!";
    }, 3000);
});
