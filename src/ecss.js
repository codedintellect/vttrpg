style = document.createElement("style");
document.currentScript.parentNode.insertBefore(style, document.currentScript);
css = {}

function editCSS(obj, type, value) {
  if (!css[obj]) {
    css[obj] = {};
  }
  css[obj][type] = value;
  compileCSS();
}

function compileCSS() {
  var s = ""
  for (const [obj, k] of Object.entries(css)) {
    s += `${obj} {\n`;
    for (const [type, value] of Object.entries(k)) {
      s += `  ${type}: ${value};\n`;
    }
    s += "}\n";
  }
  style.innerHTML = s;
}
