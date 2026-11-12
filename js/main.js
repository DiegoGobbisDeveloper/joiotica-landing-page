// Interações da landing page da JoiÓtica.
// Aqui ficam só duas coisas: o menu lateral do celular e os painéis de marcas do catálogo.

// Guarda qual categoria do catálogo está aberta agora ('solar', 'grau'...). null = nenhuma.
let categoriaAberta = null;

// Largura em que o menu de celular deixa de existir (precisa bater com o media query do CSS).
const LARGURA_DESKTOP = 900;


/* ---------- Menu do celular ---------- */

// Abre ou fecha o menu. Se receber true/false, força o estado; sem argumento, só inverte.
function toggleMenu(abrir) {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const botao = document.querySelector('.nav-hamburger');

  const vaiAbrir = typeof abrir === 'boolean' ? abrir : !menu.classList.contains('open');

  menu.classList.toggle('open', vaiAbrir);
  overlay.classList.toggle('open', vaiAbrir);
  botao.classList.toggle('open', vaiAbrir);
  botao.setAttribute('aria-expanded', vaiAbrir);

  // Com o menu aberto a página de trás não deve rolar junto.
  document.body.style.overflow = vaiAbrir ? 'hidden' : '';
}

// Tecla Esc fecha o menu, como em qualquer janela que se preze.
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') toggleMenu(false);
});

// Se a pessoa gira o tablet ou aumenta a janela com o menu aberto, ele some pelo CSS,
// mas o fundo escuro e o bloqueio de rolagem ficavam presos na tela. Isso resolve.
window.addEventListener('resize', () => {
  if (window.innerWidth > LARGURA_DESKTOP) toggleMenu(false);
});


/* ---------- Catálogo ---------- */

// Mostra o painel de marcas da categoria clicada. Clicar de novo na mesma categoria fecha.
function toggleCategoria(id) {
  if (categoriaAberta === id) {
    fecharPainel(id);
    return;
  }

  // Só um painel aberto por vez.
  if (categoriaAberta) fecharPainel(categoriaAberta);

  const painel = document.getElementById('painel-' + id);
  const botao = document.querySelector(`.categoria-btn[data-categoria="${id}"]`);

  painel.classList.add('open');
  botao.classList.add('active');
  botao.setAttribute('aria-expanded', 'true');
  categoriaAberta = id;

  // Espera o painel aparecer antes de rolar, senão o navegador calcula a posição errada.
  setTimeout(() => painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

// Esconde o painel e tira o destaque do botão da categoria.
function fecharPainel(id) {
  document.getElementById('painel-' + id).classList.remove('open');

  const botao = document.querySelector(`.categoria-btn[data-categoria="${id}"]`);
  botao.classList.remove('active');
  botao.setAttribute('aria-expanded', 'false');

  categoriaAberta = null;
}
