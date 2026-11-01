
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya"); // Perhatikan: 'teksGaya' (tanpa 'l' di akhir)

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar"); // Masukkan ke DALAM kurung kurawal event listener
});