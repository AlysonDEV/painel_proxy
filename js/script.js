let timer = document.querySelector("header h1")

setInterval(() => {
  // alert("Olá");
  timer.innerHTML = new Date().toLocaleString('pt-BR', {hour12: false}).split(' ')[1];
}, 500);
