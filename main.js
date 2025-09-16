// Funcionalidade do Menu Mobile
document.getElementById('menu-btn').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');  // Alterna a classe 'active' para abrir/fechar o menu
});

// Fechar o menu se o usuário clicar fora dele
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.getElementById('menu-btn');

    // Verifica se o clique foi fora do menu e do botão do menu
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target) && navbar.classList.contains('active')) {
        navbar.classList.remove('active'); // Remove a classe 'active' para fechar o menu
    }
});

// Adicionando evento de clique nos botões de agendamento de cada serviço
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Pegando o nome do serviço
        const serviceName = this.closest('.box').querySelector('h3').textContent;
        
        // Pegando os preços do serviço
        const priceElement = this.closest('.box').querySelector('.price');
        
        // Extraindo o preço original (que está riscado no <span>)
        const originalPrice = priceElement.querySelector('span') ? priceElement.querySelector('span').textContent.trim() : null; // Preço original (riscado)
        
        // Pegando o preço com desconto (o valor que aparece fora do <span>)
        const discountedPrice = priceElement ? priceElement.childNodes[0].textContent.trim() : null; // Preço com desconto

        // Se houver desconto, o preço total será o com desconto, senão, será o preço original
        const total = discountedPrice ? discountedPrice : originalPrice;

        // Criando a mensagem para o WhatsApp
        let message = `Gostaria de agendar o serviço ${serviceName}.`;
        
        // Verificando se existe preço original riscado e preço com desconto
        if (originalPrice && discountedPrice) {
            message += ` Preço original: ${originalPrice}. Preço com desconto: ${discountedPrice}. Total: ${discountedPrice}.`;
        } else {
            message += ` Preço: ${discountedPrice}. Total: ${discountedPrice}.`;
        }

        // Criando o link do WhatsApp com a mensagem
        const whatsappLink = `https://wa.me/24998143594?text=${encodeURIComponent(message)}`;
        
        // Redirecionando para o WhatsApp com a mensagem
        window.location.href = whatsappLink;
    });
});

