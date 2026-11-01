// ==========================================
// Latihan 1: Mengubah Teks
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// ==========================================
// Latihan 2: Event Click & Waktu
// ==========================================
const tombolAksi = document.getElementById("tombolAksi");
tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// ==========================================
// Latihan 3 & Eksperimen 4: Gaya & Toggle Sembunyi
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// EKSPERIMEN MANDIRI POIN 4: Menyembunyikan dan menampilkan paragraf
tombolSembunyi.addEventListener("click", function () {
  teksGaya.classList.toggle("sembunyi");
});

// ==========================================
// Latihan 4: Event Input & Character Counter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// ==========================================
// Latihan 6 & EKSPERIMEN MANDIRI POIN 1: To-Do List dengan Tombol Hapus
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.style.color = "red";
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button"); // Tombol Hapus (Eksperimen 1)

  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  
  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "btn-hapus";

  // Toggle Selesai
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai") 
      ? "Batalkan selesai" 
      : "Tandai selesai";
  });

  // EKSPERIMEN MANDIRI POIN 1: Menghapus satu item dari To-do List
  hapus.addEventListener("click", function () {
    daftarTugas.removeChild(item);
    pesanTugas.style.color = "orange";
    pesanTugas.textContent = "Tugas berhasil dihapus.";
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.style.color = "green";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});

// ==========================================
// Mini Project & EKSPERIMEN MANDIRI POIN 2 & 3: Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const counterWorkshop = document.getElementById("counterWorkshop");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWorkshop = document.getElementById("btnResetWorkshop");

// Character Counter
namaWorkshop.addEventListener("input", function () {
  counterWorkshop.textContent = namaWorkshop.value.length;
});

// EKSPERIMEN MANDIRI POIN 3: Event change pada dropdown sesi workshop
sesiWorkshop.addEventListener("change", function () {
  const sesiTerpilih = sesiWorkshop.value;
  ringkasanSesi.innerHTML = sesiTerpilih 
    ? `Sesi yang dipilih: <strong>${sesiTerpilih}</strong>` 
    : "Sesi yang dipilih: <em>Belum memilih</em>";
});

// Submisi Form & Validasi
formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // EKSPERIMEN MANDIRI POIN 2: Nama minimal 3 karakter
  if (nama === "") {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Nama lengkap wajib diisi.";
  } else if (nama.length < 3) {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Nama harus minimal terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Format email tidak valid.";
  } else if (sesi === "") {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Silakan pilih salah satu sesi workshop.";
  } else {
    pesanWorkshop.style.color = "green";
    pesanWorkshop.textContent = `Pendaftaran Berhasil! Terima kasih ${nama}, Anda terdaftar pada sesi ${sesi}.`;
  }
});

// Reset Form
btnResetWorkshop.addEventListener("click", function () {
  formWorkshop.reset();
  counterWorkshop.textContent = "0";
  ringkasanSesi.innerHTML = "Sesi yang dipilih: <em>Belum memilih</em>";
  pesanWorkshop.textContent = "";
});