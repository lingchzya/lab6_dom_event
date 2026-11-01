const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");
tambahTugas.addEventListener("click", function () {
const teks = inputTugas.value.trim();
if (teks === "") {
pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
return;
}
const item = document.createElement("li");
const label = document.createElement("span");
const selesai = document.createElement("button");
label.textContent = teks + " ";
selesai.type = "button";
selesai.textContent = "Tandai selesai";
selesai.addEventListener("click", function () {
item.classList.toggle("selesai");
selesai.textContent = item.classList.contains("selesai")
? "Batalkan selesai" : "Tandai selesai";
});
item.append(label, selesai);
daftarTugas.appendChild(item);
inputTugas.value = "";
pesanTugas.textContent = "Tugas ditambahkan.";
inputTugas.focus();
});
.selesai span { text-decoration: line-through; color: #687386; }
li { margin-bottom: 8px; }