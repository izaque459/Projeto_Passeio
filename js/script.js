let TAMANHO = 8;
//Possiveis movimentos do cavalo em coordenadas linha e coluna numericas
const movimentos = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function obterIdCasa(linha, coluna) {
    // Adicionamos as letras 'i' e 'j' para suportar a coluna 10
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    // O número da casa deve ser o TAMANHO total menos a linha atual
    // Se TAMANHO é 10, a linha 0 (topo) deve ser 10.
    const numero = TAMANHO - linha; 
    
    return letras[coluna] + numero;
}

function limparTabuleiro() {
    const casas = document.querySelectorAll('.casa');
    casas.forEach(casa => {
        // Remove a classe de cor de rastro
        casa.classList.remove('visitada');
        // Limpa o ícone do cavalo e o número do passo
        casa.textContent = '';
        // Remove atributos de controle que criamos
        casa.removeAttribute('data-passo');
        // Reseta o estilo de cor caso tenha sido alterado via JS direto
        casa.style.color = "";
    });
}

async function iniciarPasseio(t) {
	TAMANHO = t;
    let tabuleiro = Array.from({ length: TAMANHO }, () => Array(TAMANHO).fill(-1));
    
	limparTabuleiro();
	
    
    let l_atual = Math.floor(Math.random()*TAMANHO);
    let c_atual = Math.floor(Math.random()*TAMANHO);
    tabuleiro[l_atual][c_atual] = 0;

    for (let passo = 1; passo <= TAMANHO * TAMANHO; passo++) {
        // Marca visualmente o cavalo na casa atual
        await moverCavaloVisual(l_atual, c_atual, passo);

        // Encontra o próximo movimento usando Warnsdorff
        let proximo = encontrarMelhorMovimento(tabuleiro, l_atual, c_atual);
        
        if (!proximo) break;

        l_atual = proximo[0];
        c_atual = proximo[1];
        tabuleiro[l_atual][c_atual] = passo;
    }
}

function contarSaidas(tabuleiro, linha, coluna) {
    let count = 0;
    for (let [dl, dc] of movimentos) {
        let ln = linha + dl;
        let cn = coluna + dc;
        if (ln >= 0 && ln < TAMANHO && cn >= 0 && cn < TAMANHO && tabuleiro[ln][cn] === -1) {
            count++;
        }
    }
    return count;
}

function encontrarMelhorMovimento(tabuleiro, linha, coluna) {
    let melhorMovimento = null;
    let minSaidas = Infinity;

    // Tenta todos os movimentos possíveis
    for (let [dl, dc] of movimentos) {
        let ln = linha + dl;
        let cn = coluna + dc;

        if (ln >= 0 && ln < TAMANHO && cn >= 0 && cn < TAMANHO && tabuleiro[ln][cn] === -1) {
            let saídas = contarSaidas(tabuleiro, ln, cn);
            if (saídas < minSaidas) {
                minSaidas = saídas;
                melhorMovimento = [ln, cn];
            }
        }
    }
    return melhorMovimento;
}


// Função para animar no HTML
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function moverCavaloVisual(linha, coluna, passo) {
    const id = obterIdCasa(linha, coluna);
    const casaElemento = document.getElementById(id);


	if (!casaElemento) {
        console.error("Casa não encontrada:", id);
        return;
    }
    // 1. Remove o ícone do cavalo de todas as casas (para ele não se multiplicar)
    // Mas mantém o número do passo nas casas anteriores
    document.querySelectorAll('.casa').forEach(c => {
        if (c.textContent === '♞') {
            // Se a casa tinha o cavalo, agora ela só mostra o número do passo anterior
            const passoAnterior = c.getAttribute('data-passo');
            c.textContent = passoAnterior;
        }
    });

    // 2. Marca a casa atual como visitada e guarda o número do passo
    casaElemento.classList.add('visitada');
    casaElemento.setAttribute('data-passo', passo);
    
    // 3. Coloca o cavalo na casa atual
    casaElemento.textContent = '♞';
    
    // 4. Delay para animação
    await sleep(900); // Tempo para cada passo do passeio
}