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

🧠 O Algoritmo

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
 
 
# Abra o arquivo index.html em seu navegador de preferência.



# 📝 LicençaEste projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.#