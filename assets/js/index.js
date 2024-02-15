let btnJugar = document.getElementById("btnJugar");
btnJugar.addEventListener("click", function(e) {
  e.preventDefault();
  jugar();
});
function jugar() {
  let inputJuegos = document.getElementById("inputJuegos").value;
  console.log(inputJuegos);
}
