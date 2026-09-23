# Nova seção de provas sociais

## Resultado
Adicionar uma seção nativa antes da oferta existente, preservando todo o restante da página e os vídeos originais sem edição.

## Implementação
- Criar um componente reutilizável de carrossel com setas laterais, navegação por toque, indicadores e controles acessíveis.
- Exibir os três vídeos verticais na ordem enviada, com controles nativos, carregamento sob demanda e identificação editável `[NOME] — [ESTADO]`.
- Transformar as quatro provas sociais em imagem já existentes em um segundo carrossel independente.
- Inserir a copy fornecida, a lista de benefícios e o CTA que rola até a oferta atual.
- Mover a seção de imagens para antes da oferta, sem excluir nenhuma imagem ou alterar os blocos de compra.
- Ajustar a frase existente de economia para deixar explícito que é uma possibilidade dependente do consumo e da configuração.

## Validação
- Conferir setas, toque, reprodução dos vídeos e CTA em celular e desktop.
- Confirmar que os três vídeos e as quatro imagens continuam disponíveis e que a oferta permanece inalterada.
- Verificar acessibilidade dos controles, carregamento da página e ausência de erros.

## Detalhes técnicos
- Usar os componentes e tokens visuais já existentes no projeto.
- Manter proporções fixas nos cards para evitar saltos de layout.
- Pausar os outros vídeos quando um novo depoimento começar a tocar.
