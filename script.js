const newsList = [
  "Gubernur Riau Resmi Luncurkan Program Digitalisasi Desa 2026",
  "Harga Sawit Naik 12% Minggu Ini",
  "PSPS Riau Siap Tembus Liga Nasional",
  "Cuaca Ekstrem Diprediksi Hingga Akhir Bulan"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % newsList.length;
  document.getElementById("breakingNews").innerText = newsList[index];
}, 5000);
