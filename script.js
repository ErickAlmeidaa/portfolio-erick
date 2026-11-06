
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


// =====================================
// VISUALIZAR CÓDIGOS E ATIVIDADES
// =====================================

function mostrarCodigo(categoria) {

    const area = document.getElementById("area-codigo");
    const titulo = document.getElementById("titulo-codigo");
    const descricao = document.getElementById("descricao-codigo");
    const conteudo = document.getElementById("conteudo-codigo");

    if (!area || !titulo || !descricao || !conteudo) {
        return;
    }

    const atividades = {

        // ==============================
        // JAVA - FUNDAMENTOS
        // ==============================

        "java-fundamentos": {
            titulo: "Java — Fundamentos",
            descricao: "Exercícios de introdução à programação.",
            codigo: "Em breve: códigos de fundamentos em Java."
        },


        // ==============================
        // EXERCÍCIO 5
        // ==============================

        "repeticao": {
            titulo: "Exercício 5 — Pesquisa de Salário, Idade e Grau de Instrução",
            descricao: "Java | Estruturas de repetição, condicionais, contadores, acumuladores e médias.",

            codigo: `package ex5listav;

import java.util.Scanner;

public class Ex5listav {

    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {

        double salario;
        int idade;
        int grau;
        char continuar;

        int totalPessoas = 0;
        int totalSuperior = 0;
        int superiorMenos500 = 0;

        double somaSalarioMenor25 = 0;
        int qtdMenor25 = 0;

        double somaSalario25Mais = 0;
        int qtd25Mais = 0;

        int somaIdadeSuperior = 0;
        int qtdIdadeSuperior = 0;

        do {

            System.out.print("Digite o salario: R$ ");
            salario = Double.parseDouble(input.nextLine());

            System.out.print("Digite a idade: ");
            idade = Integer.parseInt(input.nextLine());

            System.out.println("Grau de instrucao:");
            System.out.println("1 - 1º Grau");
            System.out.println("2 - 2º Grau");
            System.out.println("3 - Superior");
            System.out.print("Digite o grau: ");
            grau = Integer.parseInt(input.nextLine());

            totalPessoas++;

            if (grau == 3) {

                totalSuperior++;

                somaIdadeSuperior += idade;
                qtdIdadeSuperior++;

                if (salario < 500) {
                    superiorMenos500++;
                }
            }

            if (idade < 25) {

                somaSalarioMenor25 += salario;
                qtdMenor25++;

            } else {

                somaSalario25Mais += salario;
                qtd25Mais++;
            }

            System.out.print("Deseja cadastrar outra pessoa? (S/N): ");
            continuar = input.nextLine().charAt(0);

        } while (continuar == 'S' || continuar == 's');

        double percentualSuperior = 0;

        if (totalPessoas > 0) {
            percentualSuperior = (totalSuperior * 100.0) / totalPessoas;
        }

        double mediaMenor25 = 0;
        double media25Mais = 0;

        if (qtdMenor25 > 0) {
            mediaMenor25 = somaSalarioMenor25 / qtdMenor25;
        }

        if (qtd25Mais > 0) {
            media25Mais = somaSalario25Mais / qtd25Mais;
        }

        double diferencaMedia = Math.abs(mediaMenor25 - media25Mais);

        double mediaIdadeSuperior = 0;

        if (qtdIdadeSuperior > 0) {
            mediaIdadeSuperior = (double) somaIdadeSuperior / qtdIdadeSuperior;
        }

        System.out.println();
        System.out.println("===== RESULTADOS =====");

        System.out.println(" Total com curso superior: " + totalSuperior);

        System.out.printf("   Percentual com curso superior: %.2f%%%n",
                percentualSuperior);

        System.out.println(" Superior ganhando menos de R$ 500,00: "
                + superiorMenos500);

        System.out.printf(" Media salarial dos menores de 25: R$ %.2f%n",
                mediaMenor25);

        System.out.printf("   Media salarial das pessoas com 25 ou mais: R$ %.2f%n",
                media25Mais);

        System.out.printf("   Diferenca entre as medias: R$ %.2f%n",
                diferencaMedia);

        System.out.printf(" Idade media das pessoas com curso superior: %.2f anos%n",
                mediaIdadeSuperior);

        System.out.println("   Para contar quem está acima da média, "
                + "seria necessário guardar as idades.");

    }

}`

        },


        // ==============================
        // EXERCÍCIO 22
        // ==============================

        "repeticao-2": {
            titulo: "Exercício 22 — Sistema de Operações Bancárias",
            descricao: "Java | Estruturas de repetição, condicionais, operações matemáticas e atualização de saldo.",

            codigo: `package ex22;

import java.util.Scanner;

public class Ex22 {

    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.print("Digite o saldo inicial: ");
        double saldo = Double.parseDouble(input.nextLine());

        while (true) {

            System.out.println();
            System.out.println("10 - Saque");
            System.out.println("33 - Depósito");
            System.out.println("4 - Pagamento com cartão");
            System.out.println("0 - Encerrar");

            System.out.print("Digite o código da operação: ");
            int codigo = Integer.parseInt(input.nextLine());

            if (codigo == 0) {
                break;
            }

            if (codigo == 10) {

                System.out.print("Digite o valor do saque: ");
                double valor = Double.parseDouble(input.nextLine());

                saldo = saldo - valor;

                System.out.println("Saque realizado.");

            } else if (codigo == 33) {

                System.out.print("Digite o valor do depósito: ");
                double valor = Double.parseDouble(input.nextLine());

                saldo = saldo + valor;

                System.out.println("Depósito realizado.");

            } else if (codigo == 4) {

                System.out.print("Digite o valor da compra: ");
                double valor = Double.parseDouble(input.nextLine());

                double taxa = valor * 0.015;

                saldo = saldo - valor - taxa;

                System.out.println("Pagamento realizado.");
                System.out.println("Taxa de 1,5%: R$ " + taxa);

            } else {

                System.out.println("Código de operação inválido.");
            }

            System.out.println("Saldo atual: R$ " + saldo);
        }

        System.out.println();
        System.out.println("===== FINAL =====");
        System.out.println("Saldo final: R$ " + saldo);

        if (saldo < 0) {
            System.out.println("O cliente está com saldo negativo.");
        } else {
            System.out.println("O cliente não está com saldo negativo.");
        }
    }
}`
        },


        // ==============================
        // VETORES
        // ==============================

        "vetores": {
            titulo: "Vetores",
            descricao: "Exercícios de armazenamento e manipulação de dados.",
            codigo: "Em breve: códigos de vetores."
        },


        // ==============================
        // PROGRAMAÇÃO ORIENTADA A OBJETOS
        // ==============================

        "poo": {
            titulo: "Programação Orientada a Objetos",
            descricao: "Exercícios de classes, objetos e métodos.",
            codigo: "Em breve: códigos de POO."
        },


        // ==============================
        // BANCO DE DADOS
        // ==============================

        "banco-dados": {
            titulo: "Banco de Dados",
            descricao: "Atividades de modelagem e álgebra relacional.",
            codigo: "Em breve: atividades de Banco de Dados."
        },


        // ==============================
        // DESENVOLVIMENTO WEB
        // ==============================

        "web": {
            titulo: "Desenvolvimento Web",
            descricao: "Exercícios de HTML, CSS e JavaScript.",
            codigo: "Em breve: códigos de Desenvolvimento Web."
        }

    };


    const atividade = atividades[categoria];

    if (!atividade) {
        return;
    }

    titulo.textContent = atividade.titulo;
    descricao.textContent = atividade.descricao;
    conteudo.textContent = atividade.codigo;

    area.style.display = "block";

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================
// FECHAR ÁREA DOS CÓDIGOS
// =====================================

function fecharCodigo() {

    const area = document.getElementById("area-codigo");

    if (!area) {
        return;
    }

    area.style.display = "none";

}
