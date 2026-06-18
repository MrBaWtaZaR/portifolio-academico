// Aguarda o carregamento completo da estrutura do documento HTML antes de executar qualquer lógica
document.addEventListener("DOMContentLoaded", function() {

    // Captura o elemento do formulário de contato usando o ID que definimos no HTML
    const formContato = document.getElementById("form-contato");

    // Adiciona um "ouvinte" de eventos para interceptar o momento em que o usuário tenta enviar o formulário
    formContato.addEventListener("submit", function(event) {
        
        // Previne o comportamento padrão do navegador, que seria recarregar a página ao enviar o form
        event.preventDefault();

        // Captura os valores digitados nos campos e usa a função trim() para remover espaços em branco nas pontas
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação Obrigatória 1: Verifica se algum dos campos obrigatórios foi deixado em branco
        if (nome === "" || email === "" || mensagem === "") {
            alert("Atenção: Todos os campos (Nome, E-mail e Mensagem) são obrigatórios. Por favor, preencha-os.");
            return; // Interrompe a execução do script aqui, impedindo o envio falso
        }

        // Validação Obrigatória 2: Verifica o formato do e-mail usando uma Expressão Regular (Regex) simples
        // Garante que o e-mail tenha o formato de "usuario@dominio.com" 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Erro: Por favor, insira um endereço de e-mail válido.");
            return; // Interrompe a execução se o e-mail for inválido
        }

        // Simulação de Envio: Se o código chegou até aqui, significa que passou por todas as validações
        // Exibe o alerta de sucesso para o usuário [cite: 61]
        alert("Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + ".");

        // Limpa os dados preenchidos nos campos do formulário para concluir a simulação de envio
        formContato.reset();
    });

});