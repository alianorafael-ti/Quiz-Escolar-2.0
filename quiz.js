// BANCO DE QUESTÕES

const perguntas = {
    Matemática: [

        // MÓDULO 1 - PLANO CARTESIANO

        {
            tema: "Plano cartesiano",
            pergunta: "No ponto (4, 3), qual é a ordenada?",
            alternativas: ["4", "3", "7", "1"],
            correta: 1,
            explicacao: "A ordenada é o segundo número do par ordenado, ou seja, Y = 3."
        },

        {
            tema: "Plano cartesiano",
            pergunta: "Qual é a abscissa do ponto (8, 1)?",
            alternativas: ["1", "9", "8", "7"],
            correta: 2,
            explicacao: "A abscissa corresponde ao eixo X. Portanto, X = 8."
        },

        {
            tema: "Plano cartesiano",
            pergunta: "Um ponto tem X = 2 e Y = 5. Qual é o par ordenado?",
            alternativas: ["(5, 2)", "(2, 5)", "(2, 2)", "(5, 5)"],
            correta: 1,
            explicacao: "No plano cartesiano, escrevemos primeiro X e depois Y: (2, 5)."
        },

        // MÓDULO 2 - FUNÇÕES DO 1º GRAU

        {
            tema: "Funções",
            pergunta: "Na função y = 3x - 6, qual é o valor de Y quando X = 2?",
            alternativas: ["0", "3", "6", "-2"],
            correta: 0,
            explicacao: "Substituindo X por 2: y = 3 × 2 - 6 = 0."
        },

        {
            tema: "Funções",
            pergunta: "Na função y = -3x + 2, quanto vale Y quando X = -2?",
            alternativas: ["-4", "4", "8", "-8"],
            correta: 2,
            explicacao: "y = -3 × (-2) + 2 = 6 + 2 = 8."
        },

        {
            tema: "Funções",
            pergunta: "Na função y = x - 3, qual é o resultado para X = -1?",
            alternativas: ["-2", "2", "4", "-4"],
            correta: 3,
            explicacao: "Substituindo: y = -1 - 3 = -4."
        },

        // MÓDULO 3 - TABELAS E GRÁFICOS

        {
            tema: "Gráficos",
            pergunta: "Qual ponto pertence à reta y = x - 3?",
            alternativas: ["(1, -2)", "(1, 2)", "(2, 1)", "(3, 1)"],
            correta: 0,
            explicacao: "Quando X = 1, temos Y = 1 - 3 = -2. O ponto é (1, -2)."
        },

        {
            tema: "Gráficos",
            pergunta: "Na função y = 3x - 6, qual ponto corresponde a X = 1?",
            alternativas: ["(1, 3)", "(1, -3)", "(3, 1)", "(-3, 1)"],
            correta: 1,
            explicacao: "y = 3 × 1 - 6 = -3. Portanto, o ponto é (1, -3)."
        },

        {
            tema: "Gráficos",
            pergunta: "Em qual ponto a reta y = x - 3 cruza o eixo Y?",
            alternativas: ["(3, 0)", "(0, 3)", "(0, -3)", "(-3, 3)"],
            correta: 2,
            explicacao: "No eixo Y, X = 0. Assim, Y = 0 - 3 = -3."
        },

        // MÓDULO 4 - PROBLEMAS PRÁTICOS

        {
            tema: "Problemas",
            pergunta: "O lucro de uma venda é L(x) = 2x - 15. Qual é o lucro vendendo 30 unidades?",
            alternativas: ["R$ 30", "R$ 45", "R$ 60", "R$ 75"],
            correta: 1,
            explicacao: "L(30) = 2 × 30 - 15 = 60 - 15 = R$ 45."
        },

        {
            tema: "Problemas",
            pergunta: "A quantidade de água é A(x) = 500 - 20x. Quantos litros restam após 10 horas?",
            alternativas: ["200 litros", "400 litros", "300 litros", "500 litros"],
            correta: 2,
            explicacao: "A(10) = 500 - 20 × 10 = 500 - 200 = 300 litros."
        },

        {
            tema: "Problemas",
            pergunta: "Se L(x) = 2x - 15, quantas unidades devem ser vendidas para obter lucro de R$ 25?",
            alternativas: ["15", "20", "25", "30"],
            correta: 1,
            explicacao: "2x - 15 = 25. Logo, 2x = 40 e x = 20 unidades."
        }
    ]
};


// VARIÁVEIS DO JOGO

let materiaAtual = "";
let questaoAtual = 0;
let pontuacao = 0;
let respondida = false;
let finalizado = false;


// ELEMENTOS DO HTML

const botoes = document.querySelectorAll(".disciplina");
const areaQuiz = document.getElementById("areaQuiz");
const alternativas = document.getElementById("alternativas");
const proxima = document.getElementById("proxima");
const resultado = document.getElementById("resultado");


// ESCOLHER DISCIPLINA

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const materia = botao.textContent.trim();

        if (!perguntas[materia]) {
            alert("Questões em preparação!");
            return;
        }

        materiaAtual = materia;
        questaoAtual = 0;
        pontuacao = 0;
        finalizado = false;

        document.querySelector(".disciplinas").hidden = true;

        areaQuiz.hidden = false;

        mostrarPergunta();
    });
});


// MOSTRAR PERGUNTA

function mostrarPergunta() {

    respondida = false;
    proxima.hidden = true;

    const questao = perguntas[materiaAtual][questaoAtual];

    document.getElementById("tituloMateria").textContent =
        materiaAtual + " — " + questao.tema;

    document.getElementById("pergunta").textContent =
        "Questão " + (questaoAtual + 1) +
        " de " + perguntas[materiaAtual].length +
        ": " + questao.pergunta;

    resultado.textContent = "";
    alternativas.innerHTML = "";

    questao.alternativas.forEach(function(opcao, indice) {

        const botao = document.createElement("button");

        botao.textContent = opcao;

        botao.addEventListener("click", function() {
            verificarResposta(indice);
        });

        alternativas.appendChild(botao);
    });
}


// VERIFICAR RESPOSTA

function verificarResposta(indice) {

    if (respondida) return;

    respondida = true;

    const questao = perguntas[materiaAtual][questaoAtual];

    if (indice === questao.correta) {

        pontuacao += 10;

        resultado.textContent =
            "✅ Resposta correta! " + questao.explicacao;

    } else {

        resultado.textContent =
            "❌ Resposta incorreta! " + questao.explicacao;
    }

    alternativas.querySelectorAll("button").forEach(function(botao, i) {

        botao.disabled = true;

        if (i === questao.correta) {
            botao.style.background = "#168047";
        } else if (i === indice) {
            botao.style.background = "#a52b39";
        }
    });

    proxima.hidden = false;

    proxima.textContent =
        questaoAtual === perguntas[materiaAtual].length - 1
        ? "Ver resultado final"
        : "Próxima questão";
}


// AVANÇAR

proxima.addEventListener("click", function() {

    if (finalizado) {

        areaQuiz.hidden = true;
        document.querySelector(".disciplinas").hidden = false;

        return;
    }

    questaoAtual++;

    if (questaoAtual < perguntas[materiaAtual].length) {

        mostrarPergunta();

    } else {

        finalizarQuiz();
    }
});


// FINALIZAR QUIZ

function finalizarQuiz() {

    finalizado = true;

    const total = perguntas[materiaAtual].length;

    document.getElementById("tituloMateria").textContent =
        "Resultado final";

    document.getElementById("pergunta").textContent =
        "Você acertou " + (pontuacao / 10) +
        " de " + total + " questões.";

    resultado.textContent =
        "Pontuação: " + pontuacao +
        " de " + (total * 10) + " pontos.";

    alternativas.innerHTML = "";

    proxima.textContent = "Escolher outra disciplina";
    proxima.hidden = false;
}