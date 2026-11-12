# JoiÓtica – Landing Page

Este é o site da **JoiÓtica**, uma joalheria e ótica de Ituiutaba-MG que vende óculos de grau e de sol, relógios e joias em ouro 18k, e que fabrica as próprias joias.

A ideia é simples: quem entra no site precisa entender rápido o que a loja oferece e chegar no WhatsApp com o mínimo de cliques. Por isso a página é uma só, rola de cima para baixo e quase todos os botões levam para a conversa com a loja.

Fiz tudo em HTML, CSS e JavaScript puro, sem framework e sem nada para instalar. Abriu o `index.html` no navegador, está rodando.

---

## Como rodar

Não tem build nem dependência. Você pode:

- dar dois cliques no `index.html`, ou
- usar a extensão **Live Server** do VS Code, que atualiza a página sozinha a cada vez que você salva.

Para colocar no ar, basta subir a pasta inteira em qualquer hospedagem de site estático (GitHub Pages, Netlify, Vercel, a hospedagem que a loja já tiver...).

---

## Como as pastas estão organizadas

```
Landing-Page-JoiOtica/
├── index.html          → a página inteira
├── css/
│   └── style.css       → todo o visual, inclusive a versão de celular
├── js/
│   └── main.js         → o menu do celular e o catálogo que abre e fecha
└── assets/
    └── images/
        ├── logo-joiotica-png.png   → logo do topo, do rodapé e ícone da aba
        └── logo-joiotica.png       → logo grande e apagadinha no fundo da primeira tela
```

---

## O que tem na página

Na ordem em que a pessoa vê, rolando de cima para baixo:

1. **Barra do topo.** Fica presa no alto da tela o tempo todo, com a logo, os atalhos para as seções e o botão "Fale Conosco". No celular os links viram um menu que desliza da lateral.
2. **Primeira tela.** O "Valorize a sua beleza!", um texto curto sobre a loja e o primeiro botão para o WhatsApp.
3. **Nossas Lentes.** Explica que a loja só trabalha com lentes de qualidade e mostra as fábricas parceiras: Essilor, Hoya, Haytek e Uber Lentes.
4. **Catálogo.** Quatro botões (Óculos Solar, Óculos de Grau, Relógios e Joias). Clicou em um, abre um painel com as marcas daquela categoria. Clicou de novo, fecha.
5. **Diferenciais.** Quatro cartões contando por que vale a pena comprar na JoiÓtica.
6. **Chamada para o WhatsApp.** O botão verde grande, que é o objetivo da página inteira.
7. **Rodapé.** Produtos, contatos e Instagram.

---

## Tarefas comuns

### Trocar o número do WhatsApp

O número aparece em vários lugares do `index.html`. Procure por `wa.me/553432611188` e troque todos. O formato é `55` + DDD + número, tudo junto e sem espaço.

### Adicionar ou remover uma marca do catálogo

Dentro do painel da categoria (por exemplo `id="painel-solar"`), copie uma linha como esta e troque o nome:

```html
<div class="marca-card"><div class="marca-nome">Ray-Ban</div></div>
```

Depois **atualize o número no botão da categoria** ("9 marcas", "13 marcas"...). Ele é escrito à mão e não se atualiza sozinho.

### Criar uma categoria nova

Siga o padrão das que já existem. O botão precisa de `data-categoria="nome"` e chamar `toggleCategoria('nome')`, e o painel precisa de `id="painel-nome"`. Se os dois nomes baterem, o JavaScript cuida do resto.

### Mudar as cores

Fica tudo no começo do `style.css`, dentro de `:root`:

| Variável | Cor | Onde aparece |
|---|---|---|
| `--azul` | `#11315e` | cor principal, a mesma da logo |
| `--lilas` | `#9692c5` | detalhes, itálicos dos títulos e hover |
| `--cinza-claro` | `#f5f5f7` | fundo dos cartões de marca |
| `--cinza-texto` | `#444` | textos de apoio |

Trocou ali, mudou no site inteiro.

---

## Detalhes técnicos que vale saber

- **Celular primeiro.** O layout tem três pontos de quebra: até 900px (tablet, entra o menu lateral), até 600px (celular) e até 390px (celulares bem estreitos).
- **Cuidado com o `.marca-card`.** Essa classe aparece na seção de lentes e também no catálogo, com visuais diferentes. No CSS, cada uma vem prefixada (`#lentes .marca-card` e `.marcas-painel .marca-card`). Se tirar o prefixo, uma estraga a outra.
- **Logos que não carregam.** Se a imagem de alguma fábrica de lentes falhar, ela some e o nome da marca aparece escrito no lugar. O visitante nunca vê ícone de imagem quebrada.
- **Barra fixa sem esconder títulos.** Quando alguém clica num atalho do menu, a seção para logo abaixo da barra do topo em vez de ficar escondida atrás dela.
- **Acessibilidade.** Dá para navegar pelo teclado (Tab, Enter e Esc para fechar o menu), os botões avisam leitores de tela se estão abertos ou fechados, e quem pediu ao sistema para reduzir animações não vê nada pulando.
- **iPhone.** O rodapé e o menu respeitam a barrinha de baixo da tela, e o menu usa `100dvh` para não ficar com a altura errada no Safari.

---

## O que ainda falta

- [ ] **Logos das fábricas de lentes.** A pasta `assets/images/marcas/` ainda não existe, então hoje aparecem os nomes escritos. É só criar a pasta e colocar `essilor.png`, `hoya.png`, `haytek.png` e `uber-lentes.png`.
- [ ] **Deixar a logo do fundo mais leve.** O `logo-joiotica.png` tem quase 1,6 MB e é só decoração. Convertida para WebP, ela fica bem menor e a página abre mais rápido no 4G.
- [ ] **Imagens que nada usa.** `logo empresa.jpeg` e `logo_empresa.png` não aparecem em lugar nenhum da página. Dá para apagar se não forem mais necessárias.

---

## Contato da loja

- **Endereço:** Rua 22 esq. com Av. 15, nº 775 – Ituiutaba-MG
- **Horário:** segunda a sexta, das 8h às 18h. Sábado, das 8h às 18h.
- **WhatsApp e telefone:** (34) 3261-1188
- **Instagram:** [@joioticaituiutaba](https://www.instagram.com/joioticaituiutaba)
