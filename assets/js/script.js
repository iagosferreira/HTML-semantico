document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const header = document.querySelector('header'); // Pegamos o header (se existir)
            const headerHeight = header ? header.getBoundingClientRect().height : 0; // Pegamos a altura exata do header

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0); // Rola até o topo da página
    }, 10); // Delay de 10ms (ajuste se necessário)
};