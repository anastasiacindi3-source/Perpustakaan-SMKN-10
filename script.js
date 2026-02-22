let dataPinjam = [];
let buku = [
    { judul:"Laskar Pelangi", penulis:"Andrea Hirata", img:"https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg", kesimpulan:"Novel Laskar Pelangi menceritakan perjuangan sepuluh anak dari keluarga sederhana di Belitung yang bersekolah di SD Muhammadiyah dengan segala keterbatasan fasilitas. Meski bangunan sekolah hampir roboh dan kekurangan guru, mereka tetap semangat menuntut ilmu berkat ketulusan dan dedikasi Bu Muslimah dan Pak Harfan.Melalui tokoh Ikal dan teman-temannya, cerita ini menggambarkan bahwa pendidikan adalah jalan untuk mengubah masa depan. Persahabatan, kerja keras, mimpi, dan pantang menyerah menjadi nilai utama dalam kisah ini. Lintang yang jenius namun harus berhenti sekolah karena keadaan ekonomi menjadi bukti bahwa kemiskinan sering menjadi penghalang, tetapi tidak mampu memadamkan semangat belajar.Secara keseluruhan, Laskar Pelangi menyampaikan pesan bahwa keterbatasan bukan alasan untuk menyerah. Dengan tekad, keberanian bermimpi, dan dukungan orang-orang baik di sekitar kita, masa depan bisa diperjuangkan." },
    { judul:"Dilan 1990", penulis:"Pidi Baiq", img:"https://cdn.gramedia.com/uploads/items/9786027870864_dilan-1990.jpg", kesimpulan:"Novel Dilan 1990 menceritakan kisah cinta remaja antara Dilan dan Milea yang berlatar di Bandung tahun 1990. Milea adalah siswi pindahan dari Jakarta yang kemudian didekati oleh Dilan dengan cara yang unik, lucu, dan berbeda dari remaja pada umumnya. Perhatian-perhatian kecil yang diberikan Dilan membuat Milea perlahan jatuh hati. Hubungan mereka dipenuhi momen manis, candaan, rasa cemburu, serta konflik remaja termasuk masalah geng motor yang melibatkan Dilan. Secara keseluruhan, novel ini menggambarkan cinta remaja yang tulus dan sederhana serta menunjukkan pentingnya rasa saling menghargai dan komunikasi dalam sebuah hubungan." },
    { judul:"Laut Bercerita", penulis:"Leila S.Chudori", img:"https://s3-ap-southeast-1.amazonaws.com/ebook-previews/40678/143505/1.jpg", kesimpulan:"Novel Laut Bercerita menceritakan tentang perjuangan para aktivis mahasiswa pada masa Orde Baru yang memperjuangkan keadilan dan demokrasi. Tokoh utama, Biru Laut, adalah seorang mahasiswa yang aktif menyuarakan kebenaran hingga akhirnya menjadi korban penculikan dan penghilangan paksa. Cerita disampaikan dari sudut pandang Laut dan juga keluarganya, terutama sang adik, yang terus mencari kejelasan tentang nasibnya. Novel ini menggambarkan rasa kehilangan, ketakutan, harapan, serta luka yang dialami keluarga korban pelanggaran HAM. Secara keseluruhan, Laut Bercerita menyampaikan pesan tentang keberanian memperjuangkan kebenaran, pentingnya keadilan, dan bahwa suara mereka yang hilang tidak boleh dilupakan." },
    { judul:"Rumah Untuk Alie", penulis:"Lenn Liu", img:"https://cdn.gramedia.com/uploads/product-metas/lu46a861-i.png", kesimpulan:"Novel Rumah untuk Alie menceritakan tentang kehidupan Alie, seorang remaja yang mengalami perlakuan tidak adil dan kekerasan dalam keluarganya setelah ibunya meninggal dunia. Ia sering disalahkan atas berbagai hal dan tidak mendapatkan kasih sayang yang seharusnya ia terima. Meski hidup dalam tekanan dan kesedihan, Alie tetap berusaha bertahan, bersabar, dan tidak membalas kebencian dengan kebencian. Seiring berjalannya waktu, kebenaran tentang dirinya mulai terungkap dan orang-orang di sekitarnya menyadari kesalahan mereka. Secara keseluruhan, novel ini menyampaikan pesan tentang ketabahan, pentingnya kasih sayang dalam keluarga, serta bahwa setiap orang berhak memiliki tempat yang aman dan penuh cinta untuk pulang." },
    { judul:"Tentang Kamu", penulis:"Tere Liye", img:"https://cdn.gramedia.com/uploads/items/9786239554569.jpg", kesimpulan:"Novel Tentang Kamu menceritakan perjalanan hidup Sri Ningsih, seorang perempuan tangguh yang sejak kecil menghadapi banyak penderitaan, kehilangan, dan ketidakadilan. Cerita dimulai ketika seorang pengacara muda ditugaskan untuk mengurus warisan besar milik Sri Ningsih di London, lalu perlahan masa lalu Sri terungkap melalui penelusuran tersebut. Dari kehidupan di pulau terpencil, perjuangan di Jakarta, hingga perjalanannya ke luar negeri, Sri tetap menjadi pribadi yang kuat, sabar, dan penuh kebaikan meski sering disakiti. Secara keseluruhan, novel ini menyampaikan pesan tentang keteguhan hati, keikhlasan, dan bahwa kebaikan yang dilakukan dengan tulus pada akhirnya akan menemukan jalannya sendiri." },

    { judul:"Gadis Kretek", penulis:"Ratih Kumala", img:"https://www.gramedia.com/blog/content/images/2025/08/gk-1.jpg", kesimpulan:"Novel Gadis Kretek menceritakan tentang perjalanan hidup Dasiyah atau Jeng Yah, seorang perempuan berbakat yang memiliki kemampuan luar biasa dalam meracik kretek. Kisah ini juga berkaitan dengan Soeraja, pemilik perusahaan rokok besar, yang di masa tuanya ingin mencari kembali sosok Jeng Yah. Melalui alur maju-mundur, cerita mengungkap cinta, pengkhianatan, ambisi, serta konflik keluarga yang berlatar industri kretek di Indonesia. Novel ini tidak hanya berbicara tentang romansa, tetapi juga tentang sejarah, persaingan usaha, dan perubahan zaman. Secara keseluruhan, Gadis Kretek menyampaikan pesan tentang cinta yang tak selesai, harga sebuah ambisi, serta bagaimana masa lalu dapat membentuk kehidupan seseorang di masa depan." },
    { judul:"Bumi Manusia", penulis:"Pramoedya Ananta", img:"https://cdn.gramedia.com/uploads/items/bumi-manusia-edit.jpg", kesimpulan:"Novel Bumi Manusia menceritakan kehidupan Minke, seorang pribumi terpelajar pada masa penjajahan Belanda, yang berusaha melawan ketidakadilan sistem kolonial melalui pendidikan dan pemikiran modern. Ia jatuh cinta kepada Annelies, putri Nyai Ontosoroh, seorang perempuan tangguh yang meskipun hanya dianggap gundik oleh hukum kolonial, memiliki kecerdasan dan kekuatan luar biasa dalam mengelola usaha serta membela haknya. Konflik muncul ketika hukum kolonial tidak mengakui hak-hak pribumi dan merampas kebahagiaan mereka. Secara keseluruhan, novel ini menggambarkan perjuangan melawan penindasan, pentingnya pendidikan, serta kesadaran akan harga diri dan identitas bangsa di tengah ketidakadilan." },
    { judul:"Cantik Itu Luka", penulis:"Eka Kurniawan", img:"https://ebooks.gramedia.com/ebook-covers/41260/general_small_covers/ID_GPU2018MTH01CILLE.jpg", kesimpulan:"Novel Cantik Itu Luka menceritakan kehidupan Dewi Ayu, seorang perempuan yang bangkit kembali setelah kematiannya dan memiliki kisah hidup penuh penderitaan sejak masa penjajahan hingga setelah kemerdekaan. Cerita menggambarkan perjalanan hidup Dewi Ayu dan keempat putrinya yang dipenuhi tragedi, kekerasan, cinta, dan dendam. Dengan gaya realisme magis, novel ini menampilkan sisi kelam sejarah dan kehidupan masyarakat melalui sudut pandang yang unik dan simbolis. Secara keseluruhan, Cantik Itu Luka menyampaikan pesan tentang luka masa lalu, dampak kekuasaan dan keserakahan, serta bagaimana trauma dapat diwariskan dari satu generasi ke generasi berikutnya." },
    { judul:"Home Sweet Loan", penulis:"Almira Bastari", img:"https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg", kesimpulan:"Novel Home Sweet Loan menceritakan tentang kehidupan pasangan muda yang berjuang mewujudkan impian memiliki rumah sendiri di tengah tekanan finansial dan realita kehidupan kota besar. Mereka harus menghadapi cicilan, biaya hidup, perbedaan pandangan tentang uang, serta ekspektasi keluarga. Cerita ini menggambarkan bagaimana keputusan finansial bisa memengaruhi hubungan dan kondisi mental seseorang. Secara keseluruhan, Home Sweet Loan menyampaikan pesan bahwa membangun rumah tangga bukan hanya soal cinta, tetapi juga kesiapan mental, komunikasi yang sehat, dan tanggung jawab dalam mengelola keuangan demi masa depan bersama." },
    { judul:"Hujan", penulis:"Tere Liye", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ938zLq7VNoof2AFRwnH8KAhFca6xoefqHUw&s", kesimpulan:"Novel Hujan menceritakan tentang kehidupan Lail yang harus menghadapi kehilangan besar setelah bencana dahsyat menghancurkan kota dan merenggut orang-orang yang ia cintai. Dalam situasi dunia yang berubah dan penuh duka, Lail bertemu dengan Esok, sosok yang menemaninya tumbuh dan bangkit dari keterpurukan. Cerita bergerak antara kenangan masa lalu dan proses Lail berusaha melupakan rasa sakit melalui terapi penghapusan ingatan. Secara keseluruhan, novel ini menyampaikan pesan tentang kekuatan untuk bangkit dari kehilangan, pentingnya menerima masa lalu, serta bahwa kenangan—baik menyakitkan maupun indah—adalah bagian dari perjalanan hidup yang membentuk diri seseorang." }
    
];
document.getElementById("totalBuku").innerText = buku.length;

/* Navigasi */
function showPage(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* Tampilkan Buku */
function tampilBuku(){
    let container = document.getElementById("bookContainer");
    container.innerHTML = "";

    buku.forEach((b, i)=>{
        container.innerHTML += `
        <div class="book-card">
            <img src="${b.img}">
            <h4>${b.judul}</h4>
            <small>${b.penulis}</small><br>
            <button onclick="lihatDetail('${b.judul}')">Detail</button>
        </div>
        `;
    });
}

/* Detail Buku */
function lihatDetail(judul){
    let bukuDipilih = buku.find(b => b.judul === judul);

    document.getElementById("detailJudul").innerText = bukuDipilih.judul;
    document.getElementById("detailPenulis").innerText = bukuDipilih.penulis;
    document.getElementById("detailIsi").innerText = bukuDipilih.kesimpulan;

    showPage("detail");
}

/* Tambah Pinjaman */
function tambahPinjam() {

    let nama = document.getElementById("nama").value;
    let nisn = document.getElementById("nisn").value;
    let kelas = document.getElementById("kelas").value;
    let bukuDipinjam = document.getElementById("bukuDipinjam").value;

    // Masukkan ke array
    dataPinjam.push({
        nama: nama,
        nisn: nisn,
        kelas: kelas,
        bukuDipinjam: bukuDipinjam
    });

    // Tambah ke tabel
    let tabel = document.getElementById("tabelPinjam");

    let row = tabel.insertRow();
    row.insertCell(0).innerHTML = nama;
    row.insertCell(1).innerHTML = nisn;
    row.insertCell(2).innerHTML = kelas;
    row.insertCell(3).innerHTML = bukuDipinjam;

    updateProgress();
    updateStats();

    // Reset input
    document.getElementById("nama").value = "";
    document.getElementById("nisn").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("bukuDipinjam").value = "";
}

/* Tampilkan Pinjaman */
function tampilPinjaman(){
    let tabel = document.getElementById("tabelPinjam");
    tabel.innerHTML = "";

    dataPinjam.forEach(p=>{
        tabel.innerHTML += `
        <tr>
            <td>${p.nama}</td>
            <td>${p.nisn}</td>
            <td>${p.kelas}</td>
            <td>${p.bukuDipinjam}</td>
        </tr>
        `;
    });
}

/* Search */
function cariPeminjam(){
    let keyword = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#tabelPinjam tr");

    rows.forEach(row=>{
        row.style.display = row.innerText.toLowerCase().includes(keyword) ? "" : "none";
    });
}

tampilBuku();
// ================= JAM & TANGGAL WIB =================
function updateWaktu() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Jakarta'
    };

    const tanggal = now.toLocaleDateString('id-ID', options);

    const waktu = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
    });

    document.getElementById("tanggalWaktu").innerHTML =
        `🗓 ${tanggal} | 🕒 ${waktu} WIB`;
}

setInterval(updateWaktu, 1000);
updateWaktu();


// ================= QUOTES =================
const quotes = [
    "Membaca adalah jendela dunia.",
    "Ilmu adalah cahaya kehidupan.",
    "Buku adalah sahabat terbaik sepanjang masa.",
    "Dengan membaca, kita menjelajah dunia tanpa batas.",
    "Perpustakaan adalah jantung sekolah."
];

function tampilQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = "✨ " + quotes[random];
}

tampilQuote();


// ================= TARGET PINJAMAN =================
function updateProgress() {
    const totalPinjam = document.querySelectorAll("#tabelPinjam tr").length;
    const target = 20; // target bulan ini

    const persen = Math.min((totalPinjam / target) * 100, 100);

    document.getElementById("progressBar").style.width = persen + "%";
    document.getElementById("progressText").innerText =
        `${totalPinjam} dari ${target} buku dipinjam`;
    
    document.getElementById("notifPinjam").innerText =
        totalPinjam > 0
        ? `📢 Ada ${totalPinjam} siswa sedang meminjam buku`
        : "📢 Belum ada data peminjaman";
}

setInterval(updateProgress, 1000);
function updateStats() {

    document.getElementById("totalBuku").innerText = buku.length;
    document.getElementById("totalPeminjam").innerText = dataPinjam.length;

    let hitung = {};

    dataPinjam.forEach(item => {
        if (hitung[item.buku]) {
            hitung[item.buku]++;
        } else {
            hitung[item.buku] = 1;
        }
    });

    let favorit = "Belum ada";
    let max = 0;

    for (let judul in hitung) {
        if (hitung[judul] > max) {
            max = hitung[judul];
            favorit = judul;
        }
    }

    document.getElementById("bukuFavorit").innerText = favorit;
}

// 🔥 Ambil data dari localStorage saat pertama kali buka website
const simpanData = localStorage.getItem("dataPinjam");

if (simpanData) {
    dataPinjam = JSON.parse(simpanData);
    tampilPinjaman();
    updateStats();
    updateProgress();

    document.getElementById("totalBuku").innerText = buku.length;
}
tampilBuku();
updateStats();