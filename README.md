# Projeto_Passeio
Projeto sobre implementação de passeio do cavalo usando o técnica de backtracking

## ♞ Knight's Tour (Passeio do Cavalo)
Um simulador interativo do problema matemático "O Passeio do Cavalo", 
desenvolvido com HTML5, CSS3 e JavaScript Vanilla. O algoritmo utiliza a Heurística de Warnsdorff
para encontrar soluções em tempo real para diferentes tamanhos de tabuleiro.

## 🚀 Funcionalidades

	Tabuleiro Dinâmico: Escolha entre o padrão 8X8 ou o desafiador 10X10.
	Algoritmo de Warnsdorff: Implementação otimizada que prioriza casas com menos saídas, reduzindo
		a necessidade de backtracking pesado.
	Visualização em Tempo Real: Animação do percurso do cavalo com rastro visual das casas visitadas.
	Posicionamento Aleatório: Cada simulação começa em uma casa diferente, garantindo caminhos únicos.

## 🧠 O Algoritmo

	O projeto resolve um problema clássico de grafos onde o cavalo deve visitar todas as casas 
	do tabuleiro exatamente uma vez.

	Heurística de Warnsdorff
	
	Diferente de um Backtracking simples que poderia levar horas, esta heurística move o cavalo 
	para a casa de onde ele terá o menor número de 	movimentos subsequentes possíveis. 
	Isso mantém o cavalo nas extremidades do tabuleiro o máximo de tempo possível, evitando
	que ele fique preso no centro.
 
## 🛠️ Tecnologias Utilizadas
 
	JavaScript (ES6+): Lógica do algoritmo, manipulação de DOM e funções assíncronas para animação.
	CSS Grid: Renderização dinâmica da grade do tabuleiro.
	HTML5: Estrutura semântica e interface do usuário.
 
## 🤝 Colaboração Humano-IA
Este projeto foi desenvolvido através de um processo de Pair Programming entre mim e a IA (Gemini). 
Abaixo, detalho como as responsabilidades foram divididas:

### 👤 Minha Contribuição (Idealização e Arquitetura)
	Concepção do Projeto: Definição do escopo, desde a criação de um tabuleiro de xadrez visual 
		até a implementação de um resolvedor algorítmico.

	Lógica de Negócio: Decisão estratégica de utilizar a Heurística de Warnsdorff 
		para otimizar o tempo de resposta do algoritmo.

	Decisões de UX/UI: Idealização da interface, escolha das cores do tabuleiro e a exigência 
	de um sistema dinâmico que suportasse diferentes tamanhos (8x8 e 10x10) em uma única página.

	Refatoração e Debugging: Identificação de bugs de fluxo (como o problema de redirecionamento de páginas)
	e correção de erros de lógica nas coordenadas do cavalo.

### 🤖 Contribuição da IA (Implementação e Refinamento)
	Escrita de Código Base: Geração da estrutura inicial do HTML, estilização via CSS Grid 
		e tradução do algoritmo original implementado em Python para JavaScript.

	Otimização Técnica: Sugestão de métodos assíncronos (async/await) para criar a animação 
		do cavalo percorrendo o tabuleiro.

	Documentação: Auxílio na estruturação deste arquivo README e explicações técnicas 
		sobre o funcionamento do backtracking. 
 
## Abra o arquivo index.html em seu navegador de preferência.



# 📝 LicençaEste projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.#