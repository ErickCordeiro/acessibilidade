let textSize = 1; // Tamanho padrão do texto
let highContrast = false; // Estado inicial do contraste alto
let img = document.querySelector("img");
let rulerActive = false;

function toggleTextSize() {
  if(textSize >= 2){
    document.body.style.fontSize = "1em";
    textSize = 1;
  } else {
    textSize += 0.1;
    document.body.style.fontSize = textSize + "1em";
  }
}

function toggleHighContrast() {
  highContrast = !highContrast;
  if (highContrast) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#FFF";
    img.style.filter = "invert(100%)";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    img.style.filter = "";
  }
}

function speakPageContent() {
  const text = document.body.textContent || document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function activeRuler() {
  rulerActive = !rulerActive; // Inverte o estado da régua
  document.getElementById("readingRuler").style.display = rulerActive
    ? "block"
    : "none"; // Mostra ou esconde a régua
  this.textContent = rulerActive
    ? "Desativar Régua de Leitura"
    : "Ativar Régua de Leitura"; // Atualiza o texto do botão

  document.addEventListener("mousemove", function (e) {
    if (!rulerActive) return; // Não faz nada se a régua estiver desativada
    const ruler = document.getElementById("readingRuler");
    ruler.style.top = e.pageY + "px"; // Atualiza a posição da régua com o mouse
  });
}

let saturationLevel = 0; // 0: Normal, 1: Sem Saturação, 2: Baixa, 3: Média

function toggleSaturation() {
  saturationLevel = (saturationLevel + 1) % 4; // Volta a 0 depois de atingir 3

  switch (saturationLevel) {
    case 0:
      document.body.style.filter = "none"; // Saturação normal
      break;
    case 1:
      document.body.style.filter = "saturate(0%)"; // Sem saturação
      break;
    case 2:
      document.body.style.filter = "saturate(50%)"; // Baixa saturação
      break;
    case 3:
      document.body.style.filter = "saturate(100%)"; // Média saturação (considerada normal)
      break;
    default:
      document.body.style.filter = "none";
  }
}

let linksHighlighted = false; // Estado inicial: links não destacados

function highlightLinks() {
  const links = document.querySelectorAll("a"); // Seleciona todos os links
  if (!linksHighlighted) {
    links.forEach((link) => {
      link.style.backgroundColor = "red"; // Muda o fundo para amarelo
      link.style.border = "1px solid black"; // Adiciona uma borda
      link.style.color = "black"; // Muda a cor do texto para preto (opcional)
    });
    linksHighlighted = true;
  } else {
    links.forEach((link) => {
      link.style.backgroundColor = ""; // Remove o fundo
      link.style.border = ""; // Remove a borda
      link.style.color = ""; // Retorna a cor do texto ao normal (opcional)
    });
    linksHighlighted = false;
  }
}
