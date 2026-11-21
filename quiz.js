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

// ======================================
// QUIZ DE QUÍMICA - 30 QUESTÕES
// ======================================

const questoesQuimica = [

    // SEPARAÇÃO DE MISTURAS

    [
        "Qual método utiliza um ímã para separar materiais?",
        ["Filtração", "Decantação", "Separação magnética", "Evaporação"],
        2,
        "A separação magnética utiliza um ímã para atrair determinados metais."
    ],

    [
        "Qual método separa o pó do café com um coador?",
        ["Filtração", "Ventilação", "Flotação", "Catação"],
        0,
        "Na filtração, o filtro retém o pó e permite a passagem do líquido."
    ],

    [
        "Qual método separa grãos de tamanhos diferentes?",
        ["Centrifugação", "Peneiração", "Extração", "Destilação"],
        1,
        "A peneiração separa partículas de acordo com seus tamanhos."
    ],

    [
        "Qual método permite retirar pedras do feijão manualmente?",
        ["Levigação", "Decantação", "Catação", "Fusão"],
        2,
        "A catação consiste na separação manual dos componentes de uma mistura."
    ],

    [
        "Qual processo utiliza uma corrente de água para separar sólidos?",
        ["Ventilação", "Levigação", "Filtração", "Cristalização"],
        1,
        "Na levigação, a corrente de água arrasta os materiais menos densos."
    ],

    [
        "Qual processo pode separar água e óleo?",
        ["Decantação", "Peneiração", "Evaporação", "Extração"],
        0,
        "A decantação permite separar líquidos imiscíveis pela diferença de densidade."
    ],

    [
        "Qual método utiliza rotação em alta velocidade?",
        ["Catação", "Flotação", "Centrifugação", "Filtração"],
        2,
        "A centrifugação acelera a separação de componentes por meio da rotação."
    ],

    [
        "Qual método usa uma corrente de ar para separar materiais?",
        ["Ventilação", "Levigação", "Destilação", "Fusão"],
        0,
        "A ventilação utiliza uma corrente de ar para separar materiais de diferentes densidades."
    ],

    [
        "Qual método separa areia e serragem adicionando água?",
        ["Filtração", "Flotação", "Catação", "Evaporação"],
        1,
        "Na flotação, a serragem pode flutuar enquanto a areia afunda."
    ],

    [
        "Qual processo dissolve o sal de uma mistura de sal e areia?",
        ["Fusão fracionada", "Destilação", "Dissolução fracionada", "Ventilação"],
        2,
        "A dissolução fracionada aproveita a diferença de solubilidade dos materiais."
    ],

    [
        "Qual método separa sólidos por diferentes pontos de fusão?",
        ["Fusão fracionada", "Decantação", "Centrifugação", "Filtração"],
        0,
        "A fusão fracionada utiliza as diferentes temperaturas de fusão dos sólidos."
    ],

    [
        "Qual processo permite obter sal nas salinas?",
        ["Ventilação", "Cristalização", "Levigação", "Catação"],
        1,
        "Com a evaporação da água, o sal dissolvido forma cristais."
    ],

    [
        "Qual processo separa água e sal recuperando a água?",
        ["Flotação", "Peneiração", "Destilação simples", "Catação"],
        2,
        "Na destilação simples, a água evapora e depois é condensada e recolhida."
    ],

    [
        "Qual processo separa componentes do petróleo?",
        ["Filtração", "Destilação fracionada", "Decantação", "Extração"],
        1,
        "A destilação fracionada separa componentes com diferentes temperaturas de ebulição."
    ],

    [
        "Ao colocar água quente no pó de café, ocorre:",
        ["Catação", "Fusão", "Extração", "Ventilação"],
        2,
        "A água quente extrai substâncias solúveis presentes no pó de café."
    ],

    // ESTADOS FÍSICOS DA MATÉRIA

    [
        "Qual mudança ocorre quando o gelo derrete?",
        ["Solidificação", "Fusão", "Condensação", "Sublimação"],
        1,
        "A fusão é a passagem do estado sólido para o líquido."
    ],

    [
        "Quando a água líquida se transforma em gelo, ocorre:",
        ["Fusão", "Vaporização", "Solidificação", "Condensação"],
        2,
        "A solidificação é a passagem do estado líquido para o sólido."
    ],

    [
        "A passagem do líquido para o gasoso chama-se:",
        ["Vaporização", "Fusão", "Solidificação", "Sublimação"],
        0,
        "A vaporização transforma uma substância líquida em gasosa."
    ],

    [
        "A passagem do gasoso para o líquido chama-se:",
        ["Fusão", "Condensação", "Sublimação", "Solidificação"],
        1,
        "A condensação é a transformação do gás ou vapor em líquido."
    ],

    [
        "A passagem direta do sólido para o gasoso chama-se:",
        ["Evaporação", "Fusão", "Sublimação", "Solidificação"],
        2,
        "Na sublimação, uma substância passa diretamente do sólido para o gasoso."
    ],

    [
        "A naftalina deixada no armário sofre:",
        ["Fusão", "Sublimação", "Condensação", "Solidificação"],
        1,
        "A naftalina pode passar diretamente do estado sólido para o gasoso."
    ],

    [
        "A água colocada no congelador sofre:",
        ["Solidificação", "Fusão", "Evaporação", "Sublimação"],
        0,
        "Quando congela, a água passa do estado líquido para o sólido."
    ],

    [
        "Quando a água ferve, ocorre:",
        ["Fusão", "Condensação", "Ebulição", "Solidificação"],
        2,
        "A ebulição é uma forma de vaporização que ocorre com formação de bolhas."
    ],

    [
        "Gotículas na tampa fria de uma panela surgem por:",
        ["Sublimação", "Fusão", "Evaporação", "Condensação"],
        3,
        "O vapor de água perde calor ao tocar a tampa fria e se transforma em líquido."
    ],

    [
        "O derretimento de um pedaço de chumbo é:",
        ["Solidificação", "Fusão", "Sublimação", "Condensação"],
        1,
        "O derretimento é uma fusão: transformação do sólido em líquido."
    ],

    // TEMPERATURAS E ESTADOS FÍSICOS

    [
        "O bromo funde a -7,2 °C. A -30 °C ele está:",
        ["Líquido", "Gasoso", "Sólido", "Em ebulição"],
        2,
        "Como -30 °C está abaixo da temperatura de fusão, o bromo está sólido."
    ],

    [
        "O bromo funde a -7,2 °C e ferve a 58,8 °C. A 0 °C está:",
        ["Gasoso", "Sólido", "Líquido", "Em ebulição"],
        2,
        "A temperatura de 0 °C está entre os pontos de fusão e ebulição do bromo."
    ],

    [
        "O bromo funde a -7,2 °C e ferve a 58,8 °C. A 35 °C está:",
        ["Sólido", "Líquido", "Gasoso", "Em fusão"],
        1,
        "A 35 °C, o bromo está acima da fusão e abaixo da ebulição, portanto líquido."
    ],

    [
        "O bromo ferve a 58,8 °C. A 80 °C está:",
        ["Líquido", "Sólido", "Gasoso", "Em fusão"],
        2,
        "A 80 °C, o bromo está acima da temperatura de ebulição."
    ],

    [
        "O bromo funde a -7,2 °C. A -10 °C está:",
        ["Gasoso", "Líquido", "Sólido", "Em ebulição"],
        2,
        "A -10 °C, a temperatura ainda está abaixo do ponto de fusão do bromo."
    ]

];


// CONVERTER AS QUESTÕES PARA O FORMATO DO QUIZ

perguntas["Química"] = questoesQuimica.map(function(item, indice) {

    let tema = "Separação de misturas";

    if (indice >= 15 && indice < 25) {
        tema = "Estados físicos da matéria";
    }

    if (indice >= 25) {
        tema = "Temperaturas e mudanças de estado";
    }

    return {
        tema: tema,
        pergunta: item[0],
        alternativas: item[1],
        correta: item[2],
        explicacao: item[3]
    };

});

// ======================================
// LÍNGUA PORTUGUESA - 30 QUESTÕES
// ======================================

const questoesPortugues = [

    // FIGURAS DE LINGUAGEM

    {
        pergunta: "Na frase 'As árvores dançavam ao vento', qual figura de linguagem aparece?",
        alternativas: [
            "Metonímia",
            "Hipérbole",
            "Personificação",
            "Antítese"
        ],
        correta: 2,
        explicacao: "A personificação atribui características ou ações humanas a seres não humanos."
    },

    {
        pergunta: "Qual frase apresenta personificação?",
        alternativas: [
            "A porta reclamou durante a noite.",
            "Meu irmão é um leão.",
            "Ele é forte como um touro.",
            "Li Machado de Assis."
        ],
        correta: 0,
        explicacao: "A porta recebe uma ação humana: reclamar. Isso caracteriza personificação."
    },

    {
        pergunta: "Na frase 'Meu irmão é uma fortaleza', encontramos:",
        alternativas: [
            "Comparação",
            "Metáfora",
            "Metonímia",
            "Catacrese"
        ],
        correta: 1,
        explicacao: "A metáfora associa diretamente duas ideias, sem utilizar um conectivo comparativo."
    },

    {
        pergunta: "Qual frase apresenta uma comparação explícita?",
        alternativas: [
            "Sua voz é um doce.",
            "Ela corre como o vento.",
            "O relógio gritou.",
            "Bebi dois copos de água."
        ],
        correta: 1,
        explicacao: "A palavra 'como' estabelece uma comparação explícita entre a velocidade da pessoa e a do vento."
    },

    {
        pergunta: "Por que 'Ela é uma estrela na escola' é uma metáfora?",
        alternativas: [
            "Porque associa ideias sem conectivo comparativo.",
            "Porque apresenta uma oposição.",
            "Porque exagera uma quantidade.",
            "Porque apresenta uma conjunção."
        ],
        correta: 0,
        explicacao: "A pessoa é associada diretamente a uma estrela, sugerindo destaque."
    },

    {
        pergunta: "Em 'Ela brilha como o sol', qual palavra introduz a comparação?",
        alternativas: [
            "Brilha",
            "Como",
            "Sol",
            "Ela"
        ],
        correta: 1,
        explicacao: "A palavra 'como' é um conectivo utilizado em comparações explícitas."
    },

    {
        pergunta: "Em 'Li Machado de Assis nas férias', qual figura de linguagem aparece?",
        alternativas: [
            "Hipérbole",
            "Antítese",
            "Metonímia",
            "Comparação"
        ],
        correta: 2,
        explicacao: "O nome do autor substitui suas obras. Essa relação caracteriza metonímia."
    },

    {
        pergunta: "Em 'O estádio inteiro aplaudiu', temos:",
        alternativas: [
            "Comparação",
            "Metonímia",
            "Antítese",
            "Hipérbole"
        ],
        correta: 1,
        explicacao: "O estádio representa as pessoas presentes nele. Há substituição do lugar pelos seus ocupantes."
    },

    {
        pergunta: "Em 'Bebi dois copos de água', o que caracteriza a metonímia?",
        alternativas: [
            "O copo se transforma em água.",
            "A água recebe características humanas.",
            "Há oposição entre duas ideias.",
            "O recipiente representa seu conteúdo."
        ],
        correta: 3,
        explicacao: "Não bebemos os copos, mas a água contida neles."
    },

    {
        pergunta: "A expressão 'pé da mesa' é exemplo de:",
        alternativas: [
            "Catacrese",
            "Antítese",
            "Hipérbole",
            "Metonímia"
        ],
        correta: 0,
        explicacao: "A catacrese utiliza uma palavra por extensão de sentido para nomear algo, como 'pé da mesa'."
    },

    {
        pergunta: "A expressão 'braço da cadeira' apresenta:",
        alternativas: [
            "Comparação",
            "Personificação",
            "Catacrese",
            "Antítese"
        ],
        correta: 2,
        explicacao: "A palavra 'braço' é utilizada por extensão de seu sentido habitual."
    },

    {
        pergunta: "Na frase 'Entre o amor e o ódio, ele hesitava', encontramos:",
        alternativas: [
            "Metonímia",
            "Comparação",
            "Antítese",
            "Catacrese"
        ],
        correta: 2,
        explicacao: "A antítese aproxima ideias opostas, como amor e ódio."
    },

    {
        pergunta: "Qual alternativa apresenta antítese?",
        alternativas: [
            "Sua voz era música.",
            "A lua sorria.",
            "Hoje ele riu, ontem chorou.",
            "Ela corre como o vento."
        ],
        correta: 2,
        explicacao: "Rir e chorar representam ideias contrastantes, caracterizando antítese."
    },

    {
        pergunta: "Na frase 'Esperei uma eternidade por cinco minutos', aparece:",
        alternativas: [
            "Hipérbole",
            "Comparação",
            "Catacrese",
            "Metonímia"
        ],
        correta: 0,
        explicacao: "A hipérbole utiliza um exagero intencional para intensificar uma ideia."
    },

    {
        pergunta: "Qual alternativa apresenta metáfora, e não comparação?",
        alternativas: [
            "Ela é um raio de sol.",
            "Ela brilha como um raio de sol.",
            "Ela parecia um raio de sol.",
            "Ela é tão brilhante quanto o sol."
        ],
        correta: 0,
        explicacao: "A primeira frase estabelece uma associação direta, sem conectivo comparativo."
    },

    {
        pergunta: "Qual frase apresenta comparação, e não metáfora?",
        alternativas: [
            "Seus olhos são estrelas.",
            "Seus olhos brilhavam como estrelas.",
            "O tempo é um rio.",
            "Seu sorriso é uma luz."
        ],
        correta: 1,
        explicacao: "A presença de 'como' indica comparação explícita."
    },

    {
        pergunta: "Na frase 'Precisamos de mais mãos para terminar o trabalho', a palavra 'mãos' representa:",
        alternativas: [
            "Pessoas que podem ajudar.",
            "Ferramentas de trabalho.",
            "Uma comparação explícita.",
            "Uma oposição de ideias."
        ],
        correta: 0,
        explicacao: "As mãos representam as pessoas que realizarão o trabalho. É uma metonímia."
    },

    {
        pergunta: "A expressão 'olhos de jabuticaba' pode ser considerada:",
        alternativas: [
            "Antítese",
            "Hipérbole",
            "Metáfora",
            "Catacrese"
        ],
        correta: 2,
        explicacao: "Os olhos são associados à aparência das jabuticabas por meio de uma imagem metafórica."
    },

    // ORAÇÕES COORDENADAS

    {
        pergunta: "Em 'Estudei e fiz os exercícios', a conjunção 'e' indica:",
        alternativas: [
            "Adição",
            "Oposição",
            "Conclusão",
            "Alternância"
        ],
        correta: 0,
        explicacao: "A conjunção 'e' acrescenta uma ação à outra. É uma relação aditiva."
    },

    {
        pergunta: "Na frase 'Queria sair, mas começou a chover', a conjunção 'mas' indica:",
        alternativas: [
            "Explicação",
            "Conclusão",
            "Adversidade",
            "Adição"
        ],
        correta: 2,
        explicacao: "A conjunção 'mas' estabelece uma oposição entre as ideias."
    },

    {
        pergunta: "Em 'Ou você revisa agora, ou revisa amanhã', temos uma oração coordenada:",
        alternativas: [
            "Aditiva",
            "Alternativa",
            "Conclusiva",
            "Explicativa"
        ],
        correta: 1,
        explicacao: "A estrutura 'ou... ou' apresenta alternativas."
    },

    {
        pergunta: "Em 'Estudei bastante, portanto consegui resolver as questões', a palavra 'portanto' indica:",
        alternativas: [
            "Oposição",
            "Explicação",
            "Adição",
            "Conclusão"
        ],
        correta: 3,
        explicacao: "'Portanto' introduz uma conclusão decorrente da ideia anterior."
    },

    {
        pergunta: "Na frase 'Feche a janela, pois está ventando muito', a conjunção 'pois' apresenta:",
        alternativas: [
            "Explicação",
            "Alternância",
            "Adição",
            "Oposição"
        ],
        correta: 0,
        explicacao: "A segunda oração apresenta uma explicação para a orientação dada na primeira."
    },

    {
        pergunta: "Na sequência 'Cheguei, sentei, abri o caderno', as orações são:",
        alternativas: [
            "Subordinadas",
            "Coordenadas assindéticas",
            "Coordenadas alternativas",
            "Coordenadas explicativas"
        ],
        correta: 1,
        explicacao: "As orações estão coordenadas sem conjunções, sendo chamadas assindéticas."
    },

    {
        pergunta: "Qual frase apresenta uma oração coordenada sindética adversativa?",
        alternativas: [
            "Estudou e aprendeu.",
            "Ou estuda, ou trabalha.",
            "Estudou, porém não entendeu.",
            "Estudou, portanto passou."
        ],
        correta: 2,
        explicacao: "'Porém' é uma conjunção adversativa, pois expressa oposição."
    },

    {
        pergunta: "Qual conjunção NÃO expressa adversidade?",
        alternativas: [
            "Contudo",
            "Entretanto",
            "Porém",
            "Portanto"
        ],
        correta: 3,
        explicacao: "'Portanto' indica conclusão. As demais conjunções são adversativas."
    },

    {
        pergunta: "Em 'Não só leu o texto, mas também respondeu às questões', temos ideia de:",
        alternativas: [
            "Oposição",
            "Adição",
            "Alternância",
            "Explicação"
        ],
        correta: 1,
        explicacao: "A expressão 'não só... mas também' acrescenta uma informação à outra."
    },

    {
        pergunta: "Qual frase apresenta uma conclusão?",
        alternativas: [
            "Queria sair, mas choveu.",
            "Ou fico, ou vou embora.",
            "Esqueceu o guarda-chuva; por isso, ficou molhado.",
            "Não saia, porque está chovendo."
        ],
        correta: 2,
        explicacao: "'Por isso' introduz uma conclusão relacionada ao fato apresentado anteriormente."
    },

    {
        pergunta: "Qual expressão é característica de orações coordenadas alternativas?",
        alternativas: [
            "Ora... ora...",
            "Mas... porém...",
            "Portanto... logo...",
            "Porque... pois..."
        ],
        correta: 0,
        explicacao: "'Ora... ora...' é uma estrutura que expressa alternância."
    },

        {
        pergunta: "Qual período apresenta orações coordenadas ligadas por conjunção?",
        alternativas: [
            "Cheguei, sentei, esperei.",
            "Li o texto e respondi às perguntas.",
            "Quando cheguei, começou a chover.",
            "O exercício de Português."
        ],
        correta: 1,
        explicacao: "As duas orações estão ligadas pela conjunção 'e', formando coordenação sindética aditiva."
    }

];




// ADICIONAR PORTUGUÊS AO BANCO DE QUESTÕES

perguntas["Português"] = questoesPortugues.map(function(questao, indice) {

    return {
        tema: indice < 18
            ? "Figuras de linguagem"
            : "Orações coordenadas",

        pergunta: questao.pergunta,
        alternativas: questao.alternativas,
        correta: questao.correta,
        explicacao: questao.explicacao
    };

});

// ======================================
// HISTÓRIA - 30 QUESTÕES
// ======================================

const questoesHistoria = [

    // IMPERIALISMO

    [
        "Imperialismo",
        "Como ficou conhecido o período de otimismo vivido na Europa antes da Primeira Guerra Mundial?",
        ["Guerra Fria", "Belle Époque", "Era Napoleônica", "Revolução Russa"],
        1,
        "A Belle Époque foi marcada por avanços tecnológicos, confiança e otimismo, embora existissem tensões políticas e econômicas."
    ],

    [
        "Imperialismo",
        "Qual era um dos principais objetivos econômicos do Imperialismo?",
        ["Diminuir a produção industrial", "Eliminar o comércio internacional", "Obter matérias-primas e mercados consumidores", "Acabar com a concorrência entre países"],
        2,
        "As potências industriais procuravam matérias-primas, mão de obra barata e novos mercados consumidores."
    ],

    [
        "Imperialismo",
        "Qual transformação industrial contribuiu para a expansão imperialista?",
        ["Desaparecimento das fábricas", "Retorno à produção artesanal", "Abandono das máquinas", "Uso de máquinas elétricas e motores a combustão"],
        3,
        "Os avanços industriais aumentaram a produção e a necessidade de recursos e mercados."
    ],

    [
        "Imperialismo",
        "Quais continentes foram especialmente atingidos pelo neocolonialismo europeu?",
        ["África e Ásia", "Europa e Antártida", "América e Oceania", "Europa e América"],
        0,
        "África e Ásia sofreram intensa dominação econômica, política e territorial das potências imperialistas."
    ],

    [
        "Imperialismo",
        "O que caracterizou o neocolonialismo do século XIX?",
        ["A independência de todas as colônias", "A expansão do domínio das potências industriais sobre outros povos", "O fim das disputas territoriais", "O desaparecimento do capitalismo"],
        1,
        "O neocolonialismo ampliou o domínio das potências industriais sobre regiões consideradas estratégicas."
    ],

    [
        "Imperialismo",
        "O que defendia o chamado darwinismo social utilizado pelos imperialistas?",
        ["A igualdade política entre todos os povos", "O fim das diferenças econômicas", "A ideia de que nações consideradas mais fortes deveriam dominar as mais fracas", "A distribuição igualitária das colônias"],
        2,
        "O darwinismo social foi usado de forma pseudocientífica para justificar a dominação e a discriminação de outros povos."
    ],

    [
        "Imperialismo",
        "O que representava a expressão 'fardo do homem branco'?",
        ["Uma justificativa racista para a colonização", "Uma campanha pela independência africana", "Uma proposta de igualdade entre os povos", "Uma oposição à expansão europeia"],
        0,
        "Essa expressão apresentava a dominação colonial como uma suposta missão civilizadora dos europeus."
    ],

    [
        "Imperialismo",
        "Como as disputas imperialistas contribuíram para a Primeira Guerra Mundial?",
        ["Eliminaram as rivalidades entre países", "Garantiram a paz definitiva", "Impediram a formação de alianças", "Aumentaram a rivalidade entre as potências europeias"],
        3,
        "A disputa por territórios, recursos e mercados intensificou as tensões entre as grandes potências."
    ],


    // PRIMEIRA GUERRA MUNDIAL

    [
        "Primeira Guerra Mundial",
        "Qual território perdido pela França aumentou sua rivalidade com a Alemanha?",
        ["Sibéria", "Alsácia-Lorena", "Sicília", "Crimeia"],
        1,
        "A França perdeu a Alsácia-Lorena após a Guerra Franco-Prussiana, alimentando sentimentos de revanche."
    ],

    [
        "Primeira Guerra Mundial",
        "O que foi a corrida armamentista anterior à Primeira Guerra Mundial?",
        ["Uma competição esportiva entre exércitos", "Uma tentativa de acabar com as armas", "O aumento dos investimentos militares e da produção de armamentos", "Um acordo de desarmamento europeu"],
        2,
        "As potências ampliaram seus exércitos e arsenais para se preparar diante das rivalidades internacionais."
    ],

    [
        "Primeira Guerra Mundial",
        "Quais países formavam a Tríplice Entente?",
        ["Alemanha, Itália e Áustria-Hungria", "França, Alemanha e Rússia", "Inglaterra, Itália e Alemanha", "Inglaterra, França e Rússia"],
        3,
        "A Tríplice Entente reunia Inglaterra, França e Rússia."
    ],

    [
        "Primeira Guerra Mundial",
        "Quais países formavam originalmente a Tríplice Aliança?",
        ["Alemanha, Áustria-Hungria e Itália", "França, Rússia e Inglaterra", "Estados Unidos, França e Itália", "Rússia, Sérvia e Inglaterra"],
        0,
        "A Tríplice Aliança era formada por Alemanha, Áustria-Hungria e Itália. A Itália posteriormente mudou de lado na guerra."
    ],

    [
        "Primeira Guerra Mundial",
        "O que foi o pan-eslavismo defendido pela Rússia?",
        ["A união de todos os países africanos", "A valorização da união e dos interesses dos povos eslavos", "Uma aliança comercial entre França e Inglaterra", "A defesa da expansão colonial alemã"],
        1,
        "O pan-eslavismo defendia vínculos entre os povos eslavos e foi utilizado pela Rússia para apoiar seus interesses nos Bálcãs."
    ],

    [
        "Primeira Guerra Mundial",
        "Qual acontecimento, em 28 de junho de 1914, desencadeou a crise que levou à guerra?",
        ["A Revolução Russa", "A assinatura do Tratado de Versalhes", "O assassinato do arquiduque Francisco Ferdinando", "A criação da Liga das Nações"],
        2,
        "O arquiduque Francisco Ferdinando foi assassinado em Sarajevo, provocando uma grave crise entre Áustria-Hungria e Sérvia."
    ],

    [
        "Primeira Guerra Mundial",
        "Por que o conflito entre Áustria-Hungria e Sérvia se transformou em uma guerra de grandes proporções?",
        ["Porque todos os países eram aliados", "Porque não existiam rivalidades", "Porque a guerra começou na América", "Porque o sistema de alianças envolveu outras potências"],
        3,
        "As alianças militares e políticas contribuíram para ampliar o conflito entre diversos países europeus."
    ],

    [
        "Primeira Guerra Mundial",
        "Como ficou conhecida a fase inicial do conflito, em 1914?",
        ["Guerra de Movimento", "Guerra Fria", "Guerra Civil", "Guerra Nuclear"],
        0,
        "A Guerra de Movimento foi marcada por rápidos deslocamentos militares e tentativas de conquistar territórios."
    ],

    [
        "Primeira Guerra Mundial",
        "Qual característica marcou a Guerra de Trincheiras?",
        ["O uso exclusivo de navios", "A construção de posições defensivas e a dificuldade de avançar", "A ausência de combates terrestres", "O fim dos confrontos entre exércitos"],
        1,
        "Os soldados permaneciam em trincheiras, enfrentando longos combates e dificuldades para avançar."
    ],

    [
        "Primeira Guerra Mundial",
        "Em que ano os Estados Unidos entraram na Primeira Guerra Mundial?",
        ["1914", "1915", "1917", "1919"],
        2,
        "Os Estados Unidos entraram na guerra em 1917, fortalecendo o lado dos Aliados."
    ],


    // CONSEQUÊNCIAS DA GUERRA

    [
        "Consequências da guerra",
        "Em que ano terminou a Primeira Guerra Mundial?",
        ["1914", "1916", "1922", "1918"],
        3,
        "A guerra terminou com o armistício de 11 de novembro de 1918."
    ],

    [
        "Consequências da guerra",
        "Qual conferência reuniu as potências vencedoras em 1919 para discutir a paz?",
        ["Conferência de Paris", "Conferência de Berlim", "Congresso de Viena", "Conferência de Yalta"],
        0,
        "A Conferência de Paris reuniu representantes dos países vencedores para negociar os acordos do pós-guerra."
    ],

    [
        "Consequências da guerra",
        "Quem apresentou a proposta conhecida como os 14 Pontos?",
        ["Josef Stalin", "Woodrow Wilson", "Vladimir Lenin", "Francisco Ferdinando"],
        1,
        "O presidente norte-americano Woodrow Wilson apresentou propostas para a paz e a reorganização das relações internacionais."
    ],

    [
        "Consequências da guerra",
        "Qual medida foi imposta à Alemanha pelo Tratado de Versalhes?",
        ["Recebimento de novas colônias", "Ampliação irrestrita de seu exército", "Pagamento de reparações e restrições militares", "Controle sobre toda a Europa"],
        2,
        "O Tratado de Versalhes impôs à Alemanha reparações financeiras, perdas territoriais e limitações militares."
    ],

    [
        "Consequências da guerra",
        "Qual organização internacional foi criada após a guerra para tentar evitar novos conflitos?",
        ["OTAN", "União Europeia", "Pacto de Varsóvia", "Liga das Nações"],
        3,
        "A Liga das Nações surgiu após a Primeira Guerra Mundial para promover a cooperação e a paz entre países."
    ],

    [
        "Consequências da guerra",
        "Quais impérios foram desmembrados ou deixaram de existir após a Primeira Guerra Mundial?",
        ["Austro-Húngaro e Otomano", "Britânico e Francês", "Português e Espanhol", "Japonês e Chinês"],
        0,
        "A guerra contribuiu para o fim dos impérios Austro-Húngaro e Otomano e para importantes mudanças territoriais."
    ],

    [
        "Consequências da guerra",
        "Como as punições do pós-guerra contribuíram para futuras tensões na Alemanha?",
        ["Eliminaram todos os conflitos políticos", "Alimentaram o ressentimento e movimentos nacionalistas radicais", "Impediram o surgimento de governos autoritários", "Garantiram estabilidade econômica permanente"],
        1,
        "O ressentimento com o Tratado de Versalhes e as crises econômicas contribuíram para a radicalização política alemã."
    ],


    // REVOLUÇÃO RUSSA

    [
        "Revolução Russa",
        "Antes da Revolução Russa, quem exercia o poder absoluto no país?",
        ["O presidente eleito", "O primeiro-ministro britânico", "O czar", "O parlamento europeu"],
        2,
        "A Rússia era governada pelo czar, um monarca que concentrava grande poder político."
    ],

    [
        "Revolução Russa",
        "Qual foi uma consequência da Revolução de Fevereiro de 1917?",
        ["A criação imediata da União Europeia", "A vitória da Alemanha", "A fundação da Liga das Nações", "A queda do czar e a formação de um governo provisório"],
        3,
        "A Revolução de Fevereiro provocou a queda do czarismo e abriu caminho para um governo provisório."
    ],

    [
        "Revolução Russa",
        "Qual expressão ficou associada às propostas de Lenin em 1917?",
        ["Paz, pão e terra", "Ordem e progresso", "Liberdade, igualdade e fraternidade", "Deus, pátria e família"],
        0,
        "Lenin defendia a saída da guerra, o combate à fome e a distribuição de terras aos camponeses."
    ],

    [
        "Revolução Russa",
        "Em que ano foi criada a União das Repúblicas Socialistas Soviéticas (URSS)?",
        ["1914", "1922", "1939", "1945"],
        1,
        "A URSS foi fundada em 1922, após a Revolução Russa e a guerra civil."
    ],


    // CONTEÚDO COMPLEMENTAR

    [
        "Revolução Chinesa",
        "Quem liderou os comunistas que chegaram ao poder na China em 1949?",
        ["Chiang Kai-shek", "Josef Stalin", "Mao Tsé-Tung", "Mikhail Gorbachev"],
        2,
        "Mao Tsé-Tung liderou os comunistas chineses que venceram a guerra civil e proclamaram a República Popular da China em 1949."
    ]

];


// ADICIONAR HISTÓRIA AO QUIZ

perguntas["História"] = questoesHistoria.map(function(item) {

    return {
        tema: item[0],
        pergunta: item[1],
        alternativas: item[2],
        correta: item[3],
        explicacao: item[4]
    };

});

// ======================================
// GEOGRAFIA - 30 QUESTÕES
// ======================================

const questoesGeografia = [

    // BLOCOS ECONÔMICOS

    [
        "Blocos econômicos",
        "O que são blocos econômicos?",
        [
            "Organizações exclusivamente militares",
            "Grupos de países que buscam cooperação econômica e comercial",
            "Países governados por uma única pessoa",
            "Organizações que proíbem o comércio internacional"
        ],
        1,
        "Os blocos econômicos reúnem países interessados em ampliar sua cooperação econômica e comercial."
    ],

    [
        "Blocos econômicos",
        "Qual é um dos principais objetivos dos blocos econômicos?",
        [
            "Diminuir a produção industrial",
            "Impedir investimentos estrangeiros",
            "Reduzir barreiras comerciais entre os membros",
            "Eliminar todas as empresas privadas"
        ],
        2,
        "Os blocos procuram facilitar as trocas comerciais e aumentar a eficiência econômica."
    ],

    [
        "Blocos econômicos",
        "O que é uma tarifa de importação?",
        [
            "Um imposto cobrado sobre produtos importados",
            "Um salário pago aos trabalhadores",
            "Uma ajuda financeira aos agricultores",
            "Uma taxa cobrada apenas sobre produtos nacionais"
        ],
        0,
        "Tarifas de importação são tributos aplicados a mercadorias que entram em um país."
    ],

    [
        "Blocos econômicos",
        "O que caracteriza uma zona de livre comércio?",
        [
            "A criação de um único governo",
            "A proibição das exportações",
            "O uso obrigatório da mesma moeda",
            "A eliminação ou redução de tarifas comerciais entre os membros"
        ],
        3,
        "Na zona de livre comércio, os países reduzem ou eliminam barreiras comerciais entre si, conforme o acordo."
    ],

    [
        "Blocos econômicos",
        "O que diferencia uma união aduaneira de uma zona de livre comércio?",
        [
            "A criação de um exército único",
            "A adoção de uma política tarifária comum para países de fora",
            "A proibição da circulação de mercadorias",
            "A eliminação das fronteiras nacionais"
        ],
        1,
        "A união aduaneira combina o livre comércio interno com uma política comercial comum em relação a países externos."
    ],

    [
        "Blocos econômicos",
        "Em uma zona de livre comércio, os países geralmente mantêm:",
        [
            "A mesma moeda obrigatoriamente",
            "Um único presidente",
            "Suas próprias tarifas comerciais para países externos",
            "Um único sistema de ensino"
        ],
        2,
        "Em uma zona de livre comércio, cada membro normalmente conserva sua política tarifária para países que não pertencem ao bloco."
    ],

    [
        "Blocos econômicos",
        "Dois países eliminam tarifas entre si e adotam uma tarifa externa comum. Esse acordo caracteriza:",
        [
            "Uma união aduaneira",
            "Uma aliança militar",
            "Uma organização cultural",
            "Uma disputa territorial"
        ],
        0,
        "A tarifa externa comum é uma característica importante da união aduaneira."
    ],

    [
        "Blocos econômicos",
        "O que significa estabelecer uma política comercial comum?",
        [
            "Eliminar todas as fronteiras políticas",
            "Proibir relações econômicas externas",
            "Substituir todos os governos nacionais",
            "Adotar regras comerciais compartilhadas pelos países participantes"
        ],
        3,
        "Os países participantes coordenam determinadas regras e decisões relacionadas ao comércio."
    ],

    [
        "Blocos econômicos",
        "Três países eliminam tarifas entre si, mas cada um mantém tarifas diferentes para países externos. Temos:",
        [
            "Uma união monetária",
            "Uma zona de livre comércio",
            "Um governo federal único",
            "Uma aliança militar"
        ],
        1,
        "Na zona de livre comércio, os membros podem manter políticas tarifárias próprias para países externos."
    ],

    [
        "Blocos econômicos",
        "Um grupo de países adota uma tarifa externa comum. Essa medida é típica de:",
        [
            "Uma organização esportiva",
            "Uma associação cultural",
            "Uma união aduaneira",
            "Um acordo de defesa militar"
        ],
        2,
        "A união aduaneira estabelece regras tarifárias comuns em relação aos países que estão fora do bloco."
    ],

    [
        "Blocos econômicos",
        "Qual é uma possível vantagem da redução de tarifas comerciais?",
        [
            "Facilitar as trocas de mercadorias entre países",
            "Impedir a circulação internacional de produtos",
            "Eliminar a necessidade de transporte",
            "Proibir a entrada de investimentos"
        ],
        0,
        "A diminuição das tarifas pode reduzir custos e facilitar as relações comerciais."
    ],

    [
        "Blocos econômicos",
        "Por que países podem negociar acordos comerciais em conjunto?",
        [
            "Para acabar com suas economias nacionais",
            "Para impedir o desenvolvimento tecnológico",
            "Para eliminar suas identidades culturais",
            "Para aumentar seu poder de negociação"
        ],
        3,
        "A atuação conjunta pode fortalecer a posição dos países nas negociações econômicas internacionais."
    ],

    [
        "Blocos econômicos",
        "Qual alternativa apresenta uma barreira comercial não tarifária?",
        [
            "A cobrança de um imposto de importação",
            "O estabelecimento de uma cota máxima de importação",
            "A redução de uma tarifa alfandegária",
            "A eliminação de impostos comerciais"
        ],
        1,
        "As cotas de importação limitam quantidades de produtos e são exemplos de barreiras não tarifárias."
    ],

    [
        "Blocos econômicos",
        "Um país entra em um bloco econômico. Isso significa necessariamente que ele:",
        [
            "Perderá seu idioma oficial",
            "Deixará de ter um governo próprio",
            "Passará a cooperar economicamente conforme as regras do acordo",
            "Será obrigado a utilizar a moeda dos demais membros"
        ],
        2,
        "A participação em um bloco envolve compromissos econômicos, mas não significa obrigatoriamente unificação política ou monetária."
    ],

    [
        "Blocos econômicos",
        "Qual benefício os blocos econômicos podem oferecer às empresas?",
        [
            "Maior acesso aos mercados dos países parceiros",
            "Proibição de vender para outros países",
            "Eliminação de toda concorrência",
            "Garantia de lucros para todas as empresas"
        ],
        0,
        "A integração comercial pode ampliar mercados e criar oportunidades para empresas dos países membros."
    ],

    [
        "Blocos econômicos",
        "O que significa aumentar a eficiência econômica por meio da integração?",
        [
            "Reduzir todas as atividades produtivas",
            "Impedir o crescimento das empresas",
            "Proibir a especialização produtiva",
            "Favorecer o uso de recursos e as trocas econômicas"
        ],
        3,
        "A cooperação econômica pode facilitar o aproveitamento de recursos, a produção e o comércio."
    ],

    [
        "Blocos econômicos",
        "O que significa melhorar a competitividade dos países membros?",
        [
            "Eliminar todos os concorrentes",
            "Criar condições para disputar mercados com maior eficiência",
            "Proibir a modernização industrial",
            "Encerrar relações comerciais internacionais"
        ],
        1,
        "A competitividade envolve a capacidade de produzir e comercializar bens e serviços em condições favoráveis."
    ],

    [
        "Blocos econômicos",
        "Qual dificuldade pode existir dentro de um bloco econômico?",
        [
            "Todos os países possuírem exatamente a mesma economia",
            "Todos os países produzirem os mesmos produtos",
            "Diferenças de desenvolvimento entre os países membros",
            "A inexistência de interesses comerciais"
        ],
        2,
        "As diferenças econômicas entre os membros podem gerar conflitos de interesse e benefícios desiguais."
    ],

    [
        "Blocos econômicos",
        "O Mercosul é um exemplo de:",
        [
            "Bloco de integração econômica regional",
            "Organização exclusivamente militar",
            "País independente",
            "Organização voltada apenas ao esporte"
        ],
        0,
        "O Mercosul é um processo de integração econômica regional entre países sul-americanos."
    ],

    [
        "Blocos econômicos",
        "Qual alternativa diferencia corretamente a zona de livre comércio da união aduaneira?",
        [
            "A zona de livre comércio exige um único presidente",
            "A união aduaneira impede todo comércio exterior",
            "Ambas exigem obrigatoriamente uma moeda única",
            "A união aduaneira acrescenta uma política tarifária externa comum"
        ],
        3,
        "A política tarifária externa comum é a principal diferença entre as duas modalidades estudadas."
    ],


    // GLOBALIZAÇÃO

    [
        "Globalização",
        "O que é globalização?",
        [
            "O isolamento econômico dos países",
            "A intensificação das relações e da interdependência mundial",
            "O fim das comunicações internacionais",
            "A proibição de circulação de informações"
        ],
        1,
        "A globalização amplia as conexões econômicas, culturais, tecnológicas e sociais entre diferentes regiões do mundo."
    ],

    [
        "Globalização",
        "Qual tecnologia contribuiu para acelerar a globalização?",
        [
            "A máquina de escrever manual",
            "O telégrafo como único meio de comunicação",
            "A internet",
            "O isolamento das redes de comunicação"
        ],
        2,
        "A internet facilita a comunicação e a circulação de informações entre pessoas e instituições de diferentes países."
    ],

    [
        "Globalização",
        "Uma empresa brasileira utiliza peças fabricadas em diferentes países. Isso demonstra:",
        [
            "A integração internacional das cadeias produtivas",
            "O fim do comércio exterior",
            "A inexistência de relações comerciais",
            "O isolamento da economia brasileira"
        ],
        0,
        "As cadeias produtivas globais distribuem diferentes etapas da produção entre vários países."
    ],

    [
        "Globalização",
        "Ouvir músicas produzidas em outros países por plataformas digitais é exemplo de:",
        [
            "Isolamento cultural",
            "Barreira alfandegária",
            "Separação territorial",
            "Circulação cultural globalizada"
        ],
        3,
        "As tecnologias digitais facilitam a circulação internacional de conteúdos culturais."
    ],

    [
        "Globalização",
        "Qual problema pode acompanhar o processo de globalização?",
        [
            "O fim automático da pobreza",
            "O aprofundamento de desigualdades econômicas",
            "A igualdade de renda entre todos os países",
            "A garantia de emprego para todos"
        ],
        1,
        "Os benefícios da globalização não são distribuídos igualmente, podendo ampliar desigualdades."
    ],

    [
        "Globalização",
        "Como os avanços nos transportes contribuem para a globalização?",
        [
            "Impedindo o comércio entre continentes",
            "Eliminando todas as fronteiras políticas",
            "Facilitando a circulação internacional de pessoas e mercadorias",
            "Proibindo a importação de produtos"
        ],
        2,
        "Transportes mais eficientes facilitam o deslocamento de pessoas, mercadorias e componentes industriais."
    ],

    [
        "Globalização",
        "Uma crise econômica em um país afeta empresas e mercados de outros países. Isso demonstra:",
        [
            "A interdependência econômica internacional",
            "O isolamento financeiro mundial",
            "O fim das relações comerciais",
            "A inexistência de investimentos externos"
        ],
        0,
        "A integração das economias faz com que acontecimentos em um país possam produzir efeitos em outros."
    ],


    // NEOLIBERALISMO

    [
        "Neoliberalismo",
        "Qual ideia está associada ao neoliberalismo?",
        [
            "A proibição da iniciativa privada",
            "O controle estatal de todas as empresas",
            "A eliminação da concorrência",
            "A defesa de uma menor intervenção do Estado na economia"
        ],
        3,
        "O neoliberalismo costuma defender a ampliação da atuação do mercado e a redução de determinadas intervenções estatais."
    ],

    [
        "Neoliberalismo",
        "A valorização da livre iniciativa e da concorrência está relacionada:",
        [
            "Ao fim das empresas privadas",
            "Às propostas econômicas neoliberais",
            "À proibição do comércio exterior",
            "À eliminação dos mercados consumidores"
        ],
        1,
        "O neoliberalismo valoriza a livre iniciativa, a concorrência e a atuação do setor privado."
    ],

    [
        "Neoliberalismo",
        "O que significa privatização de uma empresa estatal?",
        [
            "A criação de uma nova repartição pública",
            "A proibição de investimentos privados",
            "A transferência de uma empresa do controle estatal para o privado",
            "A criação de uma tarifa de importação"
        ],
        2,
        "A privatização transfere o controle de uma empresa estatal para o setor privado, sendo uma medida frequentemente associada a políticas neoliberais."
    ]

];


// ADICIONAR GEOGRAFIA AO BANCO DO QUIZ

perguntas["Geografia"] = questoesGeografia.map(function(item) {

    return {
        tema: item[0],
        pergunta: item[1],
        alternativas: item[2],
        correta: item[3],
        explicacao: item[4]
    };

});

// ======================================
// SOCIOLOGIA - 30 QUESTÕES
// ======================================

const questoesSociologia = [

    // BAUMAN E OS CONCEITOS DE MODERNIDADE

    [
        "Conceitos de modernidade",
        "Qual sociólogo desenvolveu o conceito de modernidade líquida?",
        ["Karl Marx", "Zygmunt Bauman", "Émile Durkheim", "Max Weber"],
        1,
        "Zygmunt Bauman foi um sociólogo polonês conhecido por analisar as transformações da sociedade contemporânea."
    ],

    [
        "Conceitos de modernidade",
        "Por que Bauman utilizou a expressão 'líquida'?",
        [
            "Porque a sociedade depende da água",
            "Porque as pessoas vivem próximas aos rios",
            "Porque as relações e instituições mudam rapidamente",
            "Porque as cidades possuem muitos oceanos"
        ],
        2,
        "O líquido representa aquilo que muda de forma facilmente, servindo como metáfora para a instabilidade social."
    ],

    [
        "Conceitos de modernidade",
        "Qual característica está mais associada à modernidade sólida?",
        [
            "Estabilidade nas instituições e relações sociais",
            "Mudanças permanentes de emprego",
            "Relações necessariamente passageiras",
            "Transformações sociais imprevisíveis"
        ],
        0,
        "A modernidade sólida é associada a estruturas sociais relativamente estáveis e compromissos duradouros."
    ],

    [
        "Conceitos de modernidade",
        "Quais aspectos da sociedade são analisados pelo conceito de modernidade líquida?",
        [
            "Somente as condições climáticas",
            "Apenas as atividades agrícolas",
            "Exclusivamente a organização militar",
            "Trabalho, família, consumo e relações humanas"
        ],
        3,
        "Bauman utiliza o conceito para analisar transformações em diversas dimensões da vida contemporânea."
    ],

    [
        "Conceitos de modernidade",
        "A modernidade líquida representa uma sociedade marcada principalmente por:",
        [
            "Ausência de mudanças sociais",
            "Instituições permanentemente imutáveis",
            "Flexibilidade e transformações constantes",
            "Eliminação de todas as relações humanas"
        ],
        2,
        "Na modernidade líquida, estruturas e relações tornam-se mais flexíveis e sujeitas a mudanças."
    ],

    [
        "Conceitos de modernidade",
        "Qual alternativa melhor resume a comparação feita por Bauman?",
        [
            "As duas modernidades são idênticas",
            "A sólida privilegia a estabilidade; a líquida destaca a transformação",
            "A sólida não possui instituições sociais",
            "A líquida elimina todas as tradições"
        ],
        1,
        "A distinção central está entre estruturas relativamente duradouras e relações mais flexíveis e instáveis."
    ],


    // MODERNIDADE SÓLIDA

    [
        "Modernidade sólida",
        "Uma pessoa permanece durante décadas no mesmo emprego. Essa situação exemplifica:",
        [
            "Uma característica da modernidade sólida",
            "A ausência de relações profissionais",
            "Uma característica exclusiva da globalização",
            "O desaparecimento das instituições"
        ],
        0,
        "A permanência prolongada no emprego ilustra a estabilidade associada à modernidade sólida."
    ],

    [
        "Modernidade sólida",
        "Na modernidade sólida, as tradições familiares e sociais costumavam:",
        [
            "Desaparecer rapidamente",
            "Ser transmitidas e preservadas por gerações",
            "Ser substituídas diariamente",
            "Impedir a existência de famílias"
        ],
        1,
        "As tradições possuíam maior continuidade e influenciavam fortemente os comportamentos sociais."
    ],

    [
        "Modernidade sólida",
        "Qual característica dos relacionamentos corresponde à modernidade sólida?",
        [
            "Ausência de compromissos",
            "Mudanças obrigatórias de parceiros",
            "Valorização de vínculos duradouros",
            "Eliminação de relações familiares"
        ],
        2,
        "A modernidade sólida é associada à valorização da continuidade dos compromissos e relacionamentos."
    ],

    [
        "Modernidade sólida",
        "Segundo a comparação apresentada no caderno, uma possível limitação da modernidade sólida era:",
        [
            "A inexistência de instituições",
            "A ausência de tradições",
            "A impossibilidade de trabalhar",
            "A restrição da liberdade individual por estruturas rígidas"
        ],
        3,
        "A estabilidade podia oferecer segurança, mas também limitar escolhas e dificultar transformações."
    ],

    [
        "Modernidade sólida",
        "Uma sociedade que valoriza empregos estáveis, tradições e compromissos duradouros aproxima-se da ideia de:",
        [
            "Modernidade sólida",
            "Modernidade líquida",
            "Consumismo acelerado",
            "Instabilidade permanente"
        ],
        0,
        "Essas características correspondem à maior estabilidade social descrita pelo conceito de modernidade sólida."
    ],


    // MODERNIDADE LÍQUIDA

    [
        "Modernidade líquida",
        "O que caracteriza as relações sociais na modernidade líquida?",
        [
            "A estabilidade obrigatória",
            "A maior flexibilidade e possibilidade de mudanças",
            "A inexistência de comunicação",
            "A preservação imutável das tradições"
        ],
        1,
        "Na modernidade líquida, os vínculos sociais podem tornar-se mais flexíveis e menos duradouros."
    ],

    [
        "Modernidade líquida",
        "Uma pessoa inicia e encerra relacionamentos com frequência. Essa situação pode exemplificar:",
        [
            "A estabilidade da modernidade sólida",
            "A inexistência de mudanças sociais",
            "A fragilidade dos vínculos na modernidade líquida",
            "A permanência obrigatória das tradições"
        ],
        2,
        "A fragilidade e a instabilidade dos vínculos são temas importantes nas análises de Bauman."
    ],

    [
        "Modernidade líquida",
        "Por que a modernidade líquida pode produzir insegurança?",
        [
            "Porque o futuro e as relações tornam-se menos previsíveis",
            "Porque todas as pessoas possuem empregos garantidos",
            "Porque as instituições nunca mudam",
            "Porque não existem novas oportunidades"
        ],
        0,
        "As mudanças frequentes podem dificultar o planejamento e gerar incertezas sobre o futuro."
    ],

    [
        "Modernidade líquida",
        "A palavra 'líquida' é utilizada por Bauman como:",
        [
            "Uma descrição do clima",
            "Uma metáfora da transformação e da flexibilidade",
            "Uma explicação sobre os oceanos",
            "Uma classificação de recursos naturais"
        ],
        1,
        "O líquido simboliza a facilidade com que as estruturas sociais podem mudar de forma."
    ],

    [
        "Modernidade líquida",
        "Qual capacidade se torna especialmente importante diante de transformações constantes?",
        [
            "Rejeitar toda novidade",
            "Manter todas as escolhas para sempre",
            "Evitar qualquer contato social",
            "Adaptar-se a novas situações"
        ],
        3,
        "A flexibilidade pode facilitar a adaptação às mudanças profissionais, tecnológicas e sociais."
    ],

    [
        "Modernidade líquida",
        "A modernidade líquida significa que ninguém consegue construir relações duradouras?",
        [
            "Sim, porque todos os relacionamentos terminam rapidamente",
            "Sim, porque os compromissos foram proibidos",
            "Não, pois os vínculos duradouros continuam possíveis",
            "Sim, porque as famílias deixaram de existir"
        ],
        2,
        "Bauman analisa tendências sociais. Isso não significa que todas as pessoas vivam da mesma maneira."
    ],

    [
        "Modernidade líquida",
        "Qual situação melhor representa as mudanças descritas por Bauman?",
        [
            "Um emprego garantido por toda a vida",
            "Tradições sociais que nunca se modificam",
            "Instituições que permanecem sempre iguais",
            "Transformações rápidas nas formas de trabalhar e se relacionar"
        ],
        3,
        "As transformações constantes do trabalho e das relações são características importantes da modernidade líquida."
    ],


    // TRABALHO, CONSUMO E TECNOLOGIA

    [
        "Trabalho e sociedade",
        "A troca frequente de empregos pode representar qual característica da modernidade líquida?",
        [
            "Estabilidade profissional permanente",
            "Ausência de transformações econômicas",
            "Flexibilidade e instabilidade nas relações de trabalho",
            "Garantia de emprego para todos"
        ],
        2,
        "As relações profissionais podem tornar-se menos estáveis, exigindo adaptação a novas condições."
    ],

    [
        "Tecnologia e sociedade",
        "Como as tecnologias digitais podem contribuir para as transformações sociais?",
        [
            "Eliminando toda comunicação",
            "Acelerando a circulação de informações e as formas de interação",
            "Impedindo a criação de novos trabalhos",
            "Garantindo a estabilidade de todas as instituições"
        ],
        1,
        "As tecnologias digitais favorecem mudanças rápidas na comunicação, no trabalho e nas relações sociais."
    ],

    [
        "Consumo",
        "Na sociedade de consumo contemporânea, a substituição frequente de produtos pode estar relacionada:",
        [
            "À busca constante por novidades",
            "À ausência de publicidade",
            "Ao fim das atividades comerciais",
            "À proibição de novas tecnologias"
        ],
        0,
        "A valorização contínua de novidades pode estimular o consumo e a substituição rápida de mercadorias."
    ],

    [
        "Tecnologia e sociedade",
        "As tecnologias digitais provocam necessariamente o enfraquecimento de todos os relacionamentos?",
        [
            "Sim, porque a internet impede amizades",
            "Sim, porque ninguém conversa pessoalmente",
            "Sim, porque toda relação digital é temporária",
            "Não, pois também podem fortalecer vínculos e aproximar pessoas"
        ],
        3,
        "A tecnologia pode facilitar contatos e fortalecer relações, embora também transforme suas dinâmicas."
    ],

    [
        "Trabalho e sociedade",
        "Qual dificuldade pode acompanhar a instabilidade profissional?",
        [
            "A garantia de estabilidade financeira",
            "O desaparecimento das responsabilidades",
            "A incerteza sobre renda e planejamento futuro",
            "A impossibilidade de aprender novas habilidades"
        ],
        2,
        "A instabilidade profissional pode gerar insegurança econômica e dificultar planos de longo prazo."
    ],

    [
        "Trabalho e sociedade",
        "Um profissional precisa atualizar frequentemente seus conhecimentos para acompanhar mudanças tecnológicas. Isso demonstra:",
        [
            "O fim da necessidade de estudar",
            "A importância da adaptação às transformações",
            "A ausência de mudanças no mercado de trabalho",
            "A permanência de todas as profissões sem alterações"
        ],
        1,
        "As transformações tecnológicas podem exigir novos conhecimentos e atualização profissional."
    ],


    // RELAÇÕES HUMANAS E REFLEXÃO SOCIAL

    [
        "Relações humanas",
        "Segundo a análise de Bauman, qual dificuldade pode surgir nas relações contemporâneas?",
        [
            "Construir e manter vínculos duradouros",
            "A existência obrigatória de amizades permanentes",
            "A impossibilidade de conhecer pessoas",
            "A ausência completa de comunicação"
        ],
        0,
        "A instabilidade social pode dificultar a construção e a manutenção de compromissos duradouros."
    ],

    [
        "Relações humanas",
        "Duas pessoas conversam diariamente pela internet, embora morem em países diferentes. Esse exemplo mostra que:",
        [
            "A tecnologia elimina todas as distâncias físicas",
            "Os relacionamentos internacionais são impossíveis",
            "As relações digitais são sempre superficiais",
            "A tecnologia pode criar novas possibilidades de interação"
        ],
        3,
        "As ferramentas digitais ampliam as possibilidades de comunicação e de manutenção dos vínculos."
    ],

    [
        "Reflexão social",
        "Qual desafio pode acompanhar a ampliação das possibilidades individuais na modernidade líquida?",
        [
            "A eliminação de todas as responsabilidades",
            "A garantia de um futuro previsível",
            "A necessidade de tomar decisões diante de incertezas",
            "A impossibilidade de mudar de profissão"
        ],
        2,
        "Mais possibilidades de escolha também podem exigir decisões frequentes em situações incertas."
    ],

    [
        "Reflexão social",
        "Qual comparação está de acordo com os conceitos estudados?",
        [
            "A sólida é sempre instável e a líquida é sempre permanente",
            "A sólida enfatiza a estabilidade e a líquida destaca mudanças rápidas",
            "As duas representam sociedades sem instituições",
            "A líquida impede qualquer relação familiar"
        ],
        1,
        "A comparação destaca diferenças na estabilidade e na flexibilidade das estruturas sociais."
    ],

    [
        "Reflexão social",
        "Uma pessoa muda de profissão, aprende novas habilidades e reorganiza seus planos. Essa experiência pode ilustrar:",
        [
            "A necessidade de adaptação na modernidade líquida",
            "A ausência de transformações sociais",
            "A manutenção obrigatória do mesmo trabalho",
            "A impossibilidade de fazer novas escolhas"
        ],
        0,
        "Mudanças profissionais e pessoais podem exigir adaptação diante de novas circunstâncias."
    ],

    [
        "Reflexão social",
        "Qual conclusão apresenta uma visão equilibrada da modernidade líquida?",
        [
            "Todas as mudanças sociais são negativas",
            "A estabilidade desapareceu completamente",
            "Todas as pessoas possuem as mesmas oportunidades",
            "As transformações podem abrir oportunidades e também gerar insegurança"
        ],
        3,
        "A modernidade líquida envolve novas possibilidades, mas também desafios relacionados à instabilidade e à construção de vínculos."
    ]

];


// ADICIONAR SOCIOLOGIA AO BANCO DE QUESTÕES

perguntas["Sociologia"] = questoesSociologia.map(function(item) {

    return {
        tema: item[0],
        pergunta: item[1],
        alternativas: item[2],
        correta: item[3],
        explicacao: item[4]
    };

});

// ======================================
// BIOLOGIA - 30 QUESTÕES
// ======================================

const questoesBiologia = [

    // MITOSE - 15 QUESTÕES

    [
        "Mitose",
        "Qual é uma função importante da mitose no corpo humano?",
        ["Produzir gametas", "Permitir crescimento e renovação dos tecidos", "Reduzir à metade os cromossomos", "Unir células reprodutivas"],
        1,
        "A mitose participa do crescimento, da renovação celular e da cicatrização."
    ],

    [
        "Mitose",
        "Quantas células são formadas ao final de uma mitose típica?",
        ["Duas", "Quatro", "Seis", "Oito"],
        0,
        "Uma célula passa por uma divisão mitótica, originando duas células-filhas."
    ],

    [
        "Mitose",
        "Em condições normais, as células resultantes da mitose possuem:",
        ["Metade dos cromossomos da célula inicial", "O dobro dos cromossomos da célula inicial", "O mesmo número de cromossomos da célula inicial", "Nenhum cromossomo"],
        2,
        "A mitose mantém o número de cromossomos da célula que se dividiu."
    ],

    [
        "Mitose",
        "Se uma célula humana com 46 cromossomos realiza mitose, cada célula-filha terá:",
        ["23 cromossomos", "92 cromossomos", "12 cromossomos", "46 cromossomos"],
        3,
        "A divisão mitótica conserva os 46 cromossomos em cada célula-filha."
    ],

    [
        "Mitose",
        "Qual situação depende da multiplicação de células por mitose?",
        ["Cicatrização de um ferimento", "Fecundação de um óvulo", "Formação de espermatozoides", "Redução do número de cromossomos"],
        0,
        "Na cicatrização, novas células ajudam a reparar o tecido lesionado."
    ],

    [
        "Mitose",
        "O que acontece com o DNA antes de uma célula iniciar a divisão mitótica?",
        ["É eliminado", "É duplicado", "É dividido pela metade imediatamente", "É transformado em proteína"],
        1,
        "A duplicação do DNA prepara a célula para distribuir cópias do material genético às células-filhas."
    ],

    [
        "Mitose",
        "Durante a divisão celular, os cromossomos tornam-se mais condensados. Isso facilita:",
        ["A produção de alimento", "A entrada de água", "Sua movimentação e distribuição", "A eliminação definitiva do núcleo"],
        2,
        "A condensação facilita a organização e a movimentação dos cromossomos durante a divisão."
    ],

    [
        "Mitose",
        "Quando os cromossomos ficam alinhados no centro da célula, isso indica que:",
        ["O material genético está organizado para a separação", "A célula já se transformou em quatro", "O DNA desapareceu", "A célula deixou de possuir cromossomos"],
        0,
        "O alinhamento central antecede a separação das cromátides-irmãs na mitose."
    ],

    [
        "Mitose",
        "Na mitose, o que ocorre quando as cromátides-irmãs se separam?",
        ["Elas são destruídas", "Elas se transformam em citoplasma", "Elas se juntam novamente no centro", "Elas migram para lados opostos da célula"],
        3,
        "As cromátides-irmãs são puxadas para polos opostos, assegurando a distribuição do material genético."
    ],

    [
        "Mitose",
        "Após a separação dos cromossomos, o que ocorre com os núcleos das futuras células-filhas?",
        ["Desaparecem definitivamente", "Voltam a se organizar ao redor do material genético", "Transformam-se em gametas", "Perdem todo o DNA"],
        1,
        "Os envoltórios nucleares voltam a se organizar ao final da divisão nuclear."
    ],

    [
        "Mitose",
        "O que significa citocinese?",
        ["Duplicação do DNA", "Alinhamento dos cromossomos", "Divisão do citoplasma", "Formação de cromossomos homólogos"],
        2,
        "A citocinese separa o citoplasma, concluindo a formação das células-filhas."
    ],

    [
        "Mitose",
        "Qual alternativa descreve corretamente a mitose?",
        ["Uma divisão celular que geralmente produz duas células semelhantes à original", "Duas divisões que sempre produzem quatro gametas", "União de duas células reprodutivas", "Processo que sempre reduz os cromossomos à metade"],
        0,
        "A mitose envolve uma divisão e geralmente origina duas células geneticamente semelhantes."
    ],

    [
        "Mitose",
        "Uma célula com 8 cromossomos passa por mitose. Quantos cromossomos terá cada célula-filha?",
        ["4", "16", "2", "8"],
        3,
        "A mitose conserva a quantidade de cromossomos: cada célula-filha terá 8."
    ],

    [
        "Mitose",
        "Por que a mitose é importante para o crescimento de um organismo multicelular?",
        ["Porque elimina todos os tecidos", "Porque aumenta o número de células", "Porque reduz à metade o número de cromossomos", "Porque impede a renovação celular"],
        1,
        "O crescimento de muitos tecidos ocorre pelo aumento do número de células por mitose."
    ],

    [
        "Mitose",
        "Qual processo está mais diretamente ligado à formação de novas células da pele?",
        ["Fecundação", "Meiose", "Mitose", "Formação de gametas"],
        2,
        "As células da pele se renovam por divisões mitóticas das células precursoras."
    ],


    // MEIOSE - 15 QUESTÕES

    [
        "Meiose",
        "Qual é a principal importância da meiose para a reprodução sexuada?",
        ["Produzir células com metade dos cromossomos", "Dobrar permanentemente os cromossomos", "Substituir a fecundação", "Impedir a diversidade genética"],
        0,
        "A meiose reduz o número de cromossomos, possibilitando a formação de gametas."
    ],

    [
        "Meiose",
        "Quantas divisões celulares acontecem em uma meiose completa?",
        ["Uma", "Três", "Duas", "Quatro"],
        2,
        "A meiose tem duas divisões sucessivas após uma única duplicação prévia do DNA."
    ],

    [
        "Meiose",
        "Em um exemplo típico, quantas células são obtidas ao final da meiose?",
        ["Duas", "Quatro", "Uma", "Oito"],
        1,
        "Uma meiose típica produz quatro células haploides. Na formação de óvulos, nem todas se tornam gametas funcionais."
    ],

    [
        "Meiose",
        "Uma célula humana com 46 cromossomos origina células por meiose. Cada célula final terá:",
        ["46 cromossomos", "92 cromossomos", "12 cromossomos", "23 cromossomos"],
        3,
        "A meiose reduz de 46 para 23 cromossomos nas células resultantes."
    ],

    [
        "Meiose",
        "Qual processo contribui para a diversidade genética na reprodução sexuada?",
        ["Meiose", "Cicatrização", "Renovação da pele", "Produção de células idênticas por mitose"],
        0,
        "A meiose permite novas combinações genéticas, inclusive pela recombinação e pela distribuição dos cromossomos."
    ],

    [
        "Meiose",
        "Por que os gametas humanos possuem 23 cromossomos, e não 46?",
        ["Porque não têm DNA", "Porque todos os cromossomos são destruídos", "Porque a meiose reduz à metade o número de cromossomos", "Porque os gametas são células da pele"],
        2,
        "A redução cromossômica possibilita restaurar 46 cromossomos na fecundação."
    ],

    [
        "Meiose",
        "No início da meiose, cromossomos homólogos podem ficar próximos. Isso permite:",
        ["A perda de todos os genes", "A troca de segmentos entre cromossomos homólogos", "A formação imediata de quatro núcleos", "A eliminação do citoplasma"],
        1,
        "A recombinação genética pode ocorrer pela troca de partes entre cromossomos homólogos."
    ],

    [
        "Meiose",
        "O que acontece com os cromossomos homólogos na primeira divisão da meiose?",
        ["São eliminados", "Formam obrigatoriamente pares idênticos", "Permanecem juntos nas mesmas células", "São separados para células diferentes"],
        3,
        "Na primeira divisão meiótica, os cromossomos homólogos separam-se."
    ],

    [
        "Meiose",
        "Na segunda divisão da meiose, o que é separado?",
        ["As cromátides-irmãs", "Os tecidos do corpo", "Os órgãos reprodutores", "Os gametas já fecundados"],
        0,
        "Na segunda divisão meiótica, ocorre a separação das cromátides-irmãs."
    ],

    [
        "Meiose",
        "Quantas vezes o DNA é duplicado antes das duas divisões da meiose?",
        ["Duas vezes", "Três vezes", "Uma vez", "Nenhuma vez"],
        2,
        "O DNA é duplicado uma vez antes da primeira divisão; não ocorre nova duplicação entre as duas divisões."
    ],

    [
        "Meiose",
        "Após a primeira divisão da meiose, quantas células geralmente existem?",
        ["Quatro", "Duas", "Oito", "Uma"],
        1,
        "A primeira divisão da meiose produz duas células, que passarão pela segunda divisão."
    ],

    [
        "Meiose",
        "Na fecundação humana, a união de um gameta com 23 cromossomos a outro com 23 resulta em:",
        ["23 cromossomos", "69 cromossomos", "92 cromossomos", "46 cromossomos"],
        3,
        "A união de dois gametas humanos, cada um com 23 cromossomos, restabelece 46."
    ],

    [
        "Meiose",
        "Qual comparação entre mitose e meiose está correta?",
        ["Mitose mantém o número de cromossomos; meiose reduz esse número", "Ambas sempre formam quatro células", "A mitose produz gametas e a meiose renova a pele", "Ambas eliminam o DNA das células-filhas"],
        0,
        "A mitose normalmente conserva o número cromossômico; a meiose reduz esse número à metade."
    ],

    [
        "Meiose",
        "Uma espécie possui 20 cromossomos em suas células corporais. Seus gametas normalmente terão:",
        ["40", "20", "10", "5"],
        2,
        "A meiose reduz à metade o número de cromossomos: 20 dividido por 2 é 10."
    ],

    [
        "Meiose",
        "Um estudante observa uma divisão que origina quatro células com metade dos cromossomos da célula inicial. Qual processo está observando?",
        ["Mitose", "Meiose", "Fecundação", "Cicatrização"],
        1,
        "A formação típica de quatro células com metade dos cromossomos caracteriza a meiose."
    ]

];


// ======================================
// ADICIONAR BIOLOGIA AO BANCO DO QUIZ
// ======================================

perguntas["Biologia"] = questoesBiologia.map(function(item) {

    return {
        tema: item[0],
        pergunta: item[1],
        alternativas: item[2],
        correta: item[3],
        explicacao: item[4]
    };

});

// ======================================
// FÍSICA - 30 QUESTÕES
// ======================================

const questoesFisica = [

    // VELOCIDADE MÉDIA - 8 QUESTÕES

    [
        "Velocidade média",
        "Um carro percorreu 120 km em 2 horas. Qual foi sua velocidade média?",
        ["40 km/h", "60 km/h", "80 km/h", "120 km/h"],
        1,
        "Velocidade média = distância ÷ tempo. Portanto, 120 ÷ 2 = 60 km/h."
    ],

    [
        "Velocidade média",
        "Um ônibus percorreu 90 km em 3 horas. Qual foi sua velocidade média?",
        ["30 km/h", "45 km/h", "60 km/h", "90 km/h"],
        0,
        "Dividimos a distância pelo tempo: 90 ÷ 3 = 30 km/h."
    ],

    [
        "Velocidade média",
        "Um atleta correu 200 metros em 40 segundos. Qual foi sua velocidade média?",
        ["4 m/s", "5 m/s", "8 m/s", "10 m/s"],
        1,
        "Velocidade média = 200 ÷ 40 = 5 m/s."
    ],

    [
        "Velocidade média",
        "Um ônibus percorreu 150 km em 5 horas. Qual foi sua velocidade média?",
        ["20 km/h", "25 km/h", "30 km/h", "50 km/h"],
        2,
        "Aplicando a fórmula: V = 150 ÷ 5 = 30 km/h."
    ],

    [
        "Velocidade média",
        "Uma pessoa caminhou 12 km em 3 horas. Qual foi sua velocidade média?",
        ["4 km/h", "6 km/h", "9 km/h", "15 km/h"],
        0,
        "Dividimos 12 km por 3 horas e encontramos 4 km/h."
    ],

    [
        "Velocidade média",
        "Um carro percorreu 210 km em 3 horas. Qual foi sua velocidade média?",
        ["30 km/h", "50 km/h", "60 km/h", "70 km/h"],
        3,
        "V = 210 ÷ 3 = 70 km/h."
    ],

    [
        "Velocidade média",
        "Um ciclista percorreu 24 km em 2 horas. Qual foi sua velocidade média?",
        ["8 km/h", "12 km/h", "16 km/h", "24 km/h"],
        1,
        "V = 24 ÷ 2 = 12 km/h."
    ],

    [
        "Velocidade média",
        "Um veículo percorreu 60 km na primeira hora e mais 60 km nas duas horas seguintes. Qual foi sua velocidade média no percurso todo?",
        ["40 km/h", "60 km/h", "80 km/h", "120 km/h"],
        0,
        "Distância total = 120 km. Tempo total = 3 horas. Logo, V = 120 ÷ 3 = 40 km/h."
    ],


    // DISTÂNCIA - 8 QUESTÕES

    [
        "Distância",
        "Um carro mantém velocidade constante de 60 km/h durante 2 horas. Qual distância percorre?",
        ["30 km", "60 km", "120 km", "180 km"],
        2,
        "Distância = velocidade × tempo. Portanto, 60 × 2 = 120 km."
    ],

    [
        "Distância",
        "Um ônibus viaja a 80 km/h durante 3 horas. Qual distância percorre?",
        ["160 km", "200 km", "240 km", "320 km"],
        2,
        "D = 80 × 3 = 240 km."
    ],

    [
        "Distância",
        "Uma pessoa caminha a 5 m/s durante 20 segundos. Qual distância percorre?",
        ["25 m", "50 m", "100 m", "125 m"],
        2,
        "D = 5 × 20 = 100 metros."
    ],

    [
        "Distância",
        "Um ciclista mantém velocidade de 12 km/h durante 4 horas. Qual distância percorre?",
        ["3 km", "16 km", "36 km", "48 km"],
        3,
        "D = 12 × 4 = 48 km."
    ],

    [
        "Distância",
        "Um atleta corre a 15 m/s durante 10 segundos. Qual distância percorre?",
        ["15 m", "100 m", "150 m", "250 m"],
        2,
        "Multiplicamos a velocidade pelo tempo: 15 × 10 = 150 metros."
    ],

    [
        "Distância",
        "Um veículo mantém velocidade de 45 km/h por 2 horas. Qual distância percorre?",
        ["45 km", "90 km", "120 km", "180 km"],
        1,
        "D = 45 × 2 = 90 km."
    ],

    [
        "Distância",
        "Uma pessoa se desloca a 3 m/s durante 30 segundos. Quantos metros percorre?",
        ["10 m", "60 m", "90 m", "100 m"],
        2,
        "D = 3 × 30 = 90 metros."
    ],

    [
        "Distância",
        "Uma bicicleta mantém velocidade de 25 km/h durante 4 horas. Qual distância percorre?",
        ["25 km", "75 km", "100 km", "125 km"],
        2,
        "D = 25 × 4 = 100 km."
    ],


    // TEMPO - 7 QUESTÕES

    [
        "Tempo",
        "Um carro percorre 120 km mantendo velocidade de 60 km/h. Quanto tempo leva?",
        ["1 hora", "2 horas", "3 horas", "4 horas"],
        1,
        "Tempo = distância ÷ velocidade. Portanto, 120 ÷ 60 = 2 horas."
    ],

    [
        "Tempo",
        "Um ônibus percorre 180 km a 90 km/h. Quanto tempo dura a viagem?",
        ["1 hora", "3 horas", "2 horas", "4 horas"],
        2,
        "T = 180 ÷ 90 = 2 horas."
    ],

    [
        "Tempo",
        "Um atleta percorre 100 metros mantendo velocidade de 5 m/s. Quanto tempo leva?",
        ["10 segundos", "15 segundos", "20 segundos", "25 segundos"],
        2,
        "T = 100 ÷ 5 = 20 segundos."
    ],

    [
        "Tempo",
        "Um veículo percorre 240 km a 80 km/h. Qual é o tempo da viagem?",
        ["2 horas", "3 horas", "4 horas", "6 horas"],
        1,
        "T = 240 ÷ 80 = 3 horas."
    ],

    [
        "Tempo",
        "Uma pessoa percorre 72 metros a 6 m/s. Quanto tempo leva?",
        ["6 segundos", "10 segundos", "12 segundos", "18 segundos"],
        2,
        "T = 72 ÷ 6 = 12 segundos."
    ],

    [
        "Tempo",
        "Um carro percorre 200 km mantendo velocidade de 50 km/h. Quanto tempo leva?",
        ["2 horas", "3 horas", "4 horas", "5 horas"],
        2,
        "T = 200 ÷ 50 = 4 horas."
    ],

    [
        "Tempo",
        "Um corredor percorre 150 metros a 10 m/s. Quanto tempo leva?",
        ["10 segundos", "15 segundos", "20 segundos", "30 segundos"],
        1,
        "T = 150 ÷ 10 = 15 segundos."
    ],


    // INTERPRETAÇÃO DE POSIÇÕES - 7 QUESTÕES

    [
        "Interpretação de posições",
        "Um carro inicia seu percurso no km 20 de uma rodovia e termina no km 90. Seguindo sempre no sentido crescente, qual distância percorreu?",
        ["60 km", "70 km", "90 km", "110 km"],
        1,
        "Distância = posição final - posição inicial. Assim, 90 - 20 = 70 km."
    ],

    [
        "Interpretação de posições",
        "Um ciclista parte do marco de 5 km e chega ao marco de 35 km em 2 horas, sem mudar de sentido. Qual foi sua velocidade média?",
        ["10 km/h", "15 km/h", "20 km/h", "30 km/h"],
        1,
        "O deslocamento é 35 - 5 = 30 km. Logo, V = 30 ÷ 2 = 15 km/h."
    ],

    [
        "Interpretação de posições",
        "Um móvel passa da posição 12 m para a posição 52 m, avançando em linha reta. Qual foi seu deslocamento?",
        ["20 m", "40 m", "52 m", "64 m"],
        1,
        "Deslocamento = posição final - posição inicial. Portanto, 52 - 12 = 40 metros."
    ],

    [
        "Interpretação de posições",
        "Um ônibus parte do km 10 e chega ao km 70 em 3 horas, sem mudar de sentido. Qual foi sua velocidade média?",
        ["15 km/h", "30 km/h", "20 km/h", "60 km/h"],
        2,
        "O deslocamento é 70 - 10 = 60 km. Dividindo por 3 horas, encontramos 20 km/h."
    ],

    [
        "Interpretação de posições",
        "Um objeto parte da posição 0 m e chega à posição 25 m após 5 segundos, movendo-se sempre no mesmo sentido. Qual foi sua velocidade média?",
        ["5 m/s", "10 m/s", "20 m/s", "25 m/s"],
        0,
        "O deslocamento foi de 25 metros em 5 segundos. V = 25 ÷ 5 = 5 m/s."
    ],

    [
        "Interpretação de posições",
        "Um veículo apresenta as posições: 0 h = 0 km, 1 h = 40 km, 2 h = 80 km e 3 h = 120 km. Qual foi sua velocidade média?",
        ["20 km/h", "30 km/h", "60 km/h", "40 km/h"],
        3,
        "O veículo se deslocou 120 km em 3 horas. V = 120 ÷ 3 = 40 km/h."
    ],

    [
        "Interpretação de posições",
        "Dois ciclistas partem da posição 0 m ao mesmo tempo. Após 10 segundos, Ana está na posição 60 m e Bruno na posição 40 m. Ambos seguem no sentido crescente. Quem teve maior velocidade média?",
        [
            "Ana, com 6 m/s",
            "Bruno, com 6 m/s",
            "Os dois, com 4 m/s",
            "Os dois, com 10 m/s"
        ],
        0,
        "Ana: 60 ÷ 10 = 6 m/s. Bruno: 40 ÷ 10 = 4 m/s. Ana apresentou maior velocidade média."
    ]

];


// ======================================
// ADICIONAR FÍSICA AO BANCO DO QUIZ
// ======================================

perguntas["Física"] = questoesFisica.map(function(item) {

    return {
        tema: item[0],
        pergunta: item[1],
        alternativas: item[2],
        correta: item[3],
        explicacao: item[4]
    };

});


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