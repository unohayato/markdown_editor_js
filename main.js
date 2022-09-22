let simplemde = new SimpleMDE({ 
  element: document.getElementById("editor"), 
  forceSync: true,
  spellChecker: false,
  showIcons: ["code", "table"],
 });

const markdown = document.getElementById("editor");

function drawPreview() {
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.getElementById("preview").innerHTML = html;
};

document.addEventListener("input", () => {
  drawPreview();
});