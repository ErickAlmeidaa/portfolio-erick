
// ==============================
// MENU MOBILE
// ==============================

const botaoMenu = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function() {

        menu.classList.toggle("ativo");

        const menuAberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

        botaoMenu.textContent = menuAberto ? "✕" : "☰";

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("ativo");

            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");

            botaoMenu.textContent = "☰";

        });

    });

}


// ==============================
// ANIMAÇÃO DAS SEÇÕES
// ==============================

const secoes = document.querySelectorAll(".animar");

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.2
    });

    secoes.forEach((secao) => {

        observador.observe(secao);

    });

} else {

    secoes.forEach((secao) => {

        secao.classList.add("visivel");

    });

}


// ==============================
// GALERIA DE IMAGENS DO SAZAKI RP
// ==============================

const imagemPrincipal = document.querySelector(".imagem-principal");

const miniaturas = document.querySelectorAll(".outras-imagens img");

if (imagemPrincipal) {

    miniaturas.forEach(function(imagem) {

        imagem.addEventListener("click", function() {

            let imagemAtual = imagemPrincipal.src;

            imagemPrincipal.src = imagem.src;

            imagem.src = imagemAtual;

            let textoAtual = imagemPrincipal.alt;

            imagemPrincipal.alt = imagem.alt;

            imagem.alt = textoAtual;

        });

    });

}
