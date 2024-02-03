const infraAccessibilityWidgetHTML = `
    <div id="infra-readingRuler"></div>

    <div id="infra-accessibility-icon">
      <svg
        fill="none"
        height="56"
        viewBox="0 0 56 56"
        width="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path
            d="m28 21c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4-4 1.7909-4 4 1.7909 4 4 4z"
          />
          <path
            d="m30.5 30c0 1.1164.2268 2.2212.6666 3.2474l3.7121 8.6617c.3264.7615-.0264 1.6433-.7878 1.9696-.7615.3264-1.6433-.0264-1.9696-.7878l-3.7122-8.6617c-.0288-.0672-.0569-.1346-.0843-.2023-.0552-.136-.1863-.2269-.333-.2269-.1503 0-.2837.0951-.336.236-.0773.208-.1597.4144-.2474.6188l-3.5297 8.2361c-.3263.7614-1.2081 1.1142-1.9696.7878-.7614-.3263-1.1142-1.2081-.7878-1.9696l3.5297-8.236c.5602-1.307.849-2.7142.849-4.1362v-2.6775c-3.6006-.4075-6.9399-1.6847-9.7997-3.6164-.6865-.4637-.8672-1.3961-.4035-2.0826s1.3962-.8671 2.0826-.4034c3.0314 2.0475 6.6841 3.243 10.6206 3.243s7.5892-1.1955 10.6206-3.243c.6865-.4637 1.6189-.2831 2.0826.4034s.283 1.6189-.4035 2.0826c-2.8598 1.9317-6.1991 3.2089-9.7997 3.6164z"
          />
          <path
            clip-rule="evenodd"
            d="m52 28c0 13.2548-10.7452 24-24 24s-24-10.7452-24-24 10.7452-24 24-24 24 10.7452 24 24zm-3 0c0 11.598-9.402 21-21 21s-21-9.402-21-21 9.402-21 21-21 21 9.402 21 21z"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </div>

    <div id="infra-accessibility-widget">
      <div class="infra-widget-header">
        <h3>Widget Acessibilidade</h3>
      </div>

      <div class="infra-widget-body">
        <button class="infra-tool-btn" onclick="toggleTextSize()">
          Aumentar Texto
        </button>
        <button class="infra-tool-btn" onclick="toggleHighContrast()">
          Contraste Alto
        </button>
        <button class="infra-tool-btn" onclick="speakPageContent()">
          Ler Conteúdo
        </button>
        <button class="infra-tool-btn" onclick="activeRuler()">
          Ativar Régua de Leitura
        </button>
        <button class="infra-tool-btn" onclick="toggleSaturation()">
          Ajustar Saturação
        </button>
        <button class="infra-tool-btn" onclick="highlightLinks()">
          Destacar Links
        </button>
        <button class="infra-tool-btn" onclick="toggleVLibras()">
          Ativar/Desativar VLibras
        </button>
      </div>
      <div class="infra-widget-footer">
        <h3>Powered By &copy; Infracommerce</h3>
      </div>
    </div>

    <!-- Início do widget VLibras -->
    <div vw class="enabled">
      <div vw-access-button></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    </script>
    <!-- Fim do widget VLibras -->
 
`;

const infraAccessibilityWidgetCSS = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

#infra-readingRuler {
  position: absolute;
  width: 30%;
  height: 20px;
  background-color: rgba(255, 255, 0, 0.5);
  pointer-events: none;
  display: none;
}

#infra-readingRuler::after {
  content: '→';
  font-size: 20px;
  position: absolute;
  left: 0;
  line-height: 0.65;
  top: 0;
}

/* Estilo do Ícone Flutuante */
#infra-accessibility-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  /* Garante que o ícone fique acima do menu lateral */
  cursor: pointer;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* TESTE */
#infra-accessibility-widget {
  position: fixed;
  top: 0;
  right: -350px;
  /* Esconde o menu inicialmente */
  width: 350px;
  height: 100%;
  background: #efefef;
  transition: left 0.3s;
  /* Animação suave */
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* Abaixo do ícone flutuante */
  display: flex;
  flex-direction: column;
}

.infra-widget-header {
  background-color: #e9ecef;
  font-size: 24px;
  color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.infra-widget-footer {
  background-color: #e9ecef;
  color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  font-size: 0.875rem;
  font-weight: lighter;
}

.infra-widget-body {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Duas colunas */
  gap: 10px;
  overflow-y: auto;
}

.infra-tool-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex-basis: 50%;
  height: 100px;
  font-size: 1rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.infra-tool-btn:hover {
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
`;

let textSize = 1;
let highContrast = false;
let img = document.querySelector("img");
let rulerActive = false;

function toggleWidgetMenu() {
  const sideMenu = document.getElementById("infra-accessibility-widget");

  if (sideMenu.style.right === "-350px") {
    sideMenu.style.right = "0";
  } else {
    sideMenu.style.right = "-350px";
  }
}

function toggleTextSize() {
  if (textSize >= 2) {
    document.body.style.fontSize = "1em";
    textSize = 1;
  } else {
    textSize += 0.5;
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
  window.speechSynthesis.cancel();
  const text = document.body.textContent || document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function activeRuler() {
  rulerActive = !rulerActive; // Inverte o estado da régua
  document.getElementById("infra-readingRuler").style.display = rulerActive
    ? "block"
    : "none";

  document.addEventListener("mousemove", function (e) {
    if (!rulerActive) return;
    const ruler = document.getElementById("infra-readingRuler");
    ruler.style.top = e.pageY + "px";
  });
}

let saturationLevel = 0;
function toggleSaturation() {
  saturationLevel = (saturationLevel + 1) % 4;

  switch (saturationLevel) {
    case 0:
      document.body.style.filter = "none";
      break;
    case 1:
      document.body.style.filter = "saturate(0%)";
      break;
    case 2:
      document.body.style.filter = "saturate(50%)";
      break;
    case 3:
      document.body.style.filter = "saturate(100%)";
      break;
    default:
      document.body.style.filter = "none";
  }
}

let linksHighlighted = false;
function highlightLinks() {
  const links = document.querySelectorAll("a");
  if (!linksHighlighted) {
    links.forEach((link) => {
      link.style.backgroundColor = "red";
      link.style.border = "1px solid black";
      link.style.color = "black";
    });
    linksHighlighted = true;
  } else {
    links.forEach((link) => {
      link.style.backgroundColor = "";
      link.style.border = "";
      link.style.color = "";
    });
    linksHighlighted = false;
  }
}

function toggleVLibras() {
  const vwPlugin = document.querySelector("[vw-access-button]");

  if (vwPlugin.classList.contains("active")) {
    vwPlugin.classList.remove("active");
  } else {
    vwPlugin.classList.add("active");
  }
}

function initAccessibilityPlugin() {
  document.body.insertAdjacentHTML("beforeend", infraAccessibilityWidgetHTML);

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = infraAccessibilityWidgetCSS;
  document.head.appendChild(styleSheet);
}

function addListeners() {
  document.body.addEventListener("click", toggleWidgetMenu);
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.body.insertAdjacentHTML("beforeend", infraAccessibilityWidgetHTML);
  addListeners();
});

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = infraAccessibilityWidgetCSS;
document.head.appendChild(styleSheet);
