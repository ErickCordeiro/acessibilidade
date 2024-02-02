let textSize = 1;
let highContrast = false;
let img = document.querySelector("img");
let rulerActive = false;

document.getElementById("accessibility-icon").addEventListener("click", function () {
  const sideMenu = document.getElementById("accessibility-widget");

  if (sideMenu.style.right === "-350px") {
    sideMenu.style.right = "0";
  } else {
    sideMenu.style.right = "-350px";
  }
});

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
  document.getElementById("readingRuler").style.display = rulerActive
    ? "block"
    : "none";

  document.addEventListener("mousemove", function (e) {
    if (!rulerActive) return;
    const ruler = document.getElementById("readingRuler");
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
