const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no laboratório trabalhando em uma nova síntese química quando um colega sugere o uso de uma IA avançada para acelerar o processo. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Acho interessante, mas tenho algumas preocupações sobre como a IA pode afetar a precisão dos resultados.",
                afirmacao: "Sempre considerei importante manter o controle rigoroso sobre os processos químicos para garantir resultados confiáveis."
            },
            {
                texto: "Fico entusiasmado! Quero explorar como a IA pode otimizar nossas descobertas no laboratório.",
                afirmacao: "Sempre fui um entusiasta das novas tecnologias aplicadas à química e vejo na IA um potencial transformador."
            }
        ]
    },
    {
        enunciado: "Durante uma conferência, você é desafiado a escrever um artigo sobre o impacto da IA na pesquisa química. Qual abordagem você adota?",
        alternativas: [
            {
                texto: "Realizo uma pesquisa extensa utilizando ferramentas de IA para coletar dados e analisar tendências emergentes na área.",
                afirmacao: "Aproveito a capacidade da IA para explorar vastas quantidades de dados e identificar padrões significativos."
            },
            {
                texto: "Prefiro confiar na minha experiência e nos métodos tradicionais de pesquisa para escrever o artigo.",
                afirmacao: "Acredito na importância de manter um equilíbrio entre a inovação tecnológica e o conhecimento científico tradicional."
            }
        ]
    },
    {
        enunciado: "Em uma mesa redonda sobre ética na utilização de IA na indústria química, qual seria a sua posição?",
        alternativas: [
            {
                texto: "Defendo a implementação de diretrizes rigorosas para garantir que a IA seja utilizada de maneira ética e responsável.",
                afirmacao: "Preocupo-me com as implicações éticas da IA e defendo políticas que promovam sua utilização responsável."
            },
            {
                texto: "Acredito que a IA pode revolucionar a eficiência da indústria química, desde que sejam mantidos altos padrões de segurança.",
                afirmacao: "Vejo na IA uma oportunidade de melhorar a segurança e a eficiência dos processos químicos, desde que seja aplicada com responsabilidade."
            }
        ]
    },
    {
        enunciado: "Você está liderando um projeto para desenvolver novos materiais usando IA avançada. Como você equilibra o uso da tecnologia com sua experiência pessoal?",
        alternativas: [
            {
                texto: "Utilizo a IA para explorar novas combinações de materiais, mas confio na minha intuição e conhecimento para validar os resultados.",
                afirmacao: "Acredito que a IA pode ser uma ferramenta poderosa para acelerar a inovação, mas é essencial complementar com expertise humana."
            },
            {
                texto: "Prefiro seguir métodos tradicionais de pesquisa e desenvolvimento, evitando depender demasiadamente da IA.",
                afirmacao: "Valorizo a experiência prática e acredito na importância de um entendimento profundo dos processos químicos."
            }
        ]
    },
    {
        enunciado: "Durante uma competição acadêmica, um colega de equipe sugere usar um programa de IA para gerar um relatório. Como você reage?",
        alternativas: [
            {
                texto: "Aceito a sugestão, mas asseguro que o conteúdo gerado pela IA seja revisado e complementado com nossa própria análise.",
                afirmacao: "Entendo a utilidade da IA como uma ferramenta auxiliar, mas priorizo a originalidade e precisão das nossas contribuições individuais."
            },
            {
                texto: "Prefiro escrever o relatório manualmente, garantindo que cada palavra reflita nosso trabalho coletivo e comprometimento.",
                afirmacao: "Acredito na importância de demonstrar nosso próprio entendimento e esforço no trabalho acadêmico."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
