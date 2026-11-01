// ==========================================
// MINI PROJECT: Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const counterWorkshop = document.getElementById("counterWorkshop");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWorkshop = document.getElementById("btnResetWorkshop");

// Fitur 1: Character Counter Real-time (Event input)
namaWorkshop.addEventListener("input", function () {
  counterWorkshop.textContent = namaWorkshop.value.length;
});

// Fitur 2: Ringkasan Sesi Real-time (Event change)
sesiWorkshop.addEventListener("change", function () {
  const sesiTerpilih = sesiWorkshop.value;
  ringkasanSesi.innerHTML = sesiTerpilih 
    ? `Sesi yang dipilih: <strong>${sesiTerpilih}</strong>` 
    : "Sesi yang dipilih: <em>Belum memilih</em>";
});

// Fitur 3: Validasi Form & Submisi (Event submit)
formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validasi kondisi input
  if (nama === "") {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Nama lengkap wajib diisi.";
  } else if (nama.length < 3) {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Nama minimal terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Format email tidak valid.";
  } else if (sesi === "") {
    pesanWorkshop.style.color = "red";
    pesanWorkshop.textContent = "Gagal: Silakan pilih salah satu sesi workshop.";
  } else {
    // Jika semua input valid
    pesanWorkshop.style.color = "green";
    pesanWorkshop.textContent = `Pendaftaran Berhasil! Terima kasih ${nama}, Anda terdaftar pada sesi ${sesi}.`;
  }
});

// Fitur 4: Reset Form (Event click)
btnResetWorkshop.addEventListener("click", function () {
  formWorkshop.reset();
  counterWorkshop.textContent = "0";
  ringkasanSesi.innerHTML = "Sesi yang dipilih: <em>Belum memilih</em>";
  pesanWorkshop.textContent = "";
});