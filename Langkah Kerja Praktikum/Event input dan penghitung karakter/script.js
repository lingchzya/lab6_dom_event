const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
jumlahKarakter.textContent = namaInput.value.length;
});