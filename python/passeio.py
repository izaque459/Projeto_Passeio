def passeio_cavalo(tamanho_tabuleiro):
    """
    Resolve o problema do passeio do cavalo usando backtracking otimizado com a heurística de Warnsdorff.
    """
    tabuleiro = [[-1] * tamanho_tabuleiro for _ in range(tamanho_tabuleiro)]
    movimentos = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]
    
    linha_inicial, coluna_inicial = 0, 6  # Posição inicial do cavalo
    tabuleiro[linha_inicial][coluna_inicial] = 0  # Marca o ponto inicial
    
    def contar_saidas(linha, coluna):
        """
        Conta quantos movimentos válidos restam a partir de uma posição.
        """
        count = 0
        for dl, dc in movimentos:
            ln, cn = linha + dl, coluna + dc
            if 0 <= ln < tamanho_tabuleiro and 0 <= cn < tamanho_tabuleiro and tabuleiro[ln][cn] == -1:
                count += 1
        return count

    def encontrar_passeio(linha, coluna, passo):
        if passo == tamanho_tabuleiro * tamanho_tabuleiro:
            return True  # Solução encontrada
        
        # Ordena os movimentos pelo critério de Warnsdorff (menos saídas primeiro)
        movimentos_ordenados = sorted(movimentos, key=lambda m: contar_saidas(linha + m[0], coluna + m[1]))

        for dl, dc in movimentos_ordenados:
            linha_nova, coluna_nova = linha + dl, coluna + dc
            if 0 <= linha_nova < tamanho_tabuleiro and 0 <= coluna_nova < tamanho_tabuleiro and tabuleiro[linha_nova][coluna_nova] == -1:
                tabuleiro[linha_nova][coluna_nova] = passo
                
                if encontrar_passeio(linha_nova, coluna_nova, passo + 1):
                    return True  # Caminho válido encontrado
                
                tabuleiro[linha_nova][coluna_nova] = -1  # Backtracking
        
        return False  # Nenhuma solução encontrada

    if encontrar_passeio(linha_inicial, coluna_inicial, 1):
        return tabuleiro
    else:
        return None

# Teste com tabuleiro 8x8
tamanho = 8
passeio = passeio_cavalo(tamanho)

if passeio:
    for linha in passeio:
        print(linha)
else:
    print("Não foi encontrado um passeio do cavalo para este tabuleiro.")
    