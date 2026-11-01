const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
event.preventDefault();
const nama = document.getElementById("nama").value.trim();
const email = document.getElementById("email").value.trim();
const usiaInput = document.getElementById("usia").value;
const usia = Number(usiaInput);
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (nama === "") {
pesanForm.textContent = "Nama wajib diisi.";
} else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
} else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
} else {
pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
form.reset();
}
});