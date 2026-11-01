
const tombol = document.getElementById("tombolAksi");
const pesan = document.getElementById("pesan");
tombol.addEventListener("click", function () {
pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});