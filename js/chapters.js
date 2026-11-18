/**
 * CULTUURSTELSEL: Digital Historical Archive (1830–1870)
 * Data Arsip Lengkap 6 Bab Sejarah Sistem Tanam Paksa Hindia Belanda
 * Sumber: ANRI, KITLV Leiden, C. Fasseur, Sartono Kartodirdjo, Onghokham, M.C. Ricklefs
 */

window.CHAPTERS_DATA = [
  {
    id: 1,
    number: "01",
    roman: "BAB I",
    title: "Latar Belakang Munculnya Sistem Tanam Paksa",
    subtitle: "Krisis Keuangan Pasca-Perang, Utang Kolonial, dan Gagasan Van den Bosch",
    period: "1825–1830",
    summary: "Belanda terancam bangkrut akibat Perang Napoleon dan Perang Jawa (1825–1830). Johannes van den Bosch diutus merancang eksploitasi agraris terpusat untuk memeras keuntungan dari tanah dan tenaga kerja rakyat Nusantara.",
    heroImage: "./assets/images/van_den_bosch_portrait_1794391769655.jpg",
    heroImageCaption: "Potret resmi Gubernur Jenderal Johannes van den Bosch (1780–1844), arsitek utama Sistem Tanam Paksa. Sumber: Rijksmuseum Amsterdam / Koleksi KITLV.",
    readingTime: "12 menit bacaan",
    sections: [
      {
        id: "krisis-keuangan",
        title: "1. Krisis Keuangan Kerajaan Belanda Pasca-Perang Eropa",
        content: `
          <p class="drop-cap">Awal abad ke-19 merupakan periode paling genting dalam sejarah monarki Kerajaan Belanda. Runtuhnya kongsi dagang VOC (Vereenigde Oostindische Compagnie) pada 31 Desember 1799 meninggalkan beban utang raksasa sebesar 134,7 juta gulden yang harus ditanggung sepenuhnya oleh kas negara Belanda. Situasi diperparah oleh keterlibatan Belanda dalam Perang Napoleon di Eropa serta pemisahan diri Belgia pada tahun 1830 melalui Revolusi Belgia, yang mengakibatkan hilangnya wilayah industri termaju dan menghabiskan kas kerajaan untuk biaya mobilisasi militer berkepanjangan.</p>
          <p>Raja Willem I menghadapi jurang kebangkrutan nasional. Upaya menerapkan sistem pemungutan pajak tanah (<em>landrente</em>) yang diperkenalkan sebelumnya oleh Thomas Stamford Raffles (1811–1816) dan dilanjutkan oleh Komisaris Jenderal Hindia Belanda tidak membuahkan hasil yang memadai karena perekonomian desa Jawa belum mengenal monetisasi secara luas dan sistem birokrasi kolonial belum mampu mengaudit luas tanah secara akurat.</p>
        `
      },
      {
        id: "dampak-perang-jawa",
        title: "2. Dampak Finansial dan Politik Perang Jawa (1825–1830)",
        content: `
          <p>Kondisi kas di Batavia bahkan jauh lebih kritis. Perang Diponegoro atau Perang Jawa yang berkobar selama lima tahun (1825–1830) menjadi perlawanan rakyat paling menghancurkan bagi hegemoni Belanda di tanah Jawa. Untuk menumpas perlawanan Pangeran Diponegoro, pemerintah kolonial di bawah Jenderal Hendrik Merkus de Kock harus menggelontorkan dana lebih dari 20–25 juta gulden serta menderita kerugian ribuan serdadu Eropa dan pribumi.</p>
          <p>Setelah Pangeran Diponegoro ditangkap melalui tipu muslihat di Magelang pada Maret 1830, Jawa berada dalam kehancuran ekonomi. Sawah-sawah telantar, jalur irigasi rusak, dan jutaan rakyat berada dalam kondisi sangat miskin. Namun, alih-alih melakukan rekonstruksi kemanusiaan, Den Haag memandang Jawa sebagai satu-satunya aset kolonial yang harus segera diperas untuk menyelamatkan kas Kerajaan Belanda dari kebangkrutan total.</p>
        `
      },
      {
        id: "gagasan-van-den-bosch",
        title: "3. Johannes van den Bosch dan Doktrin Eksploitasi Agraris",
        content: `
          <p>Menghadapi defisit tak tertahankan, Raja Willem I mengangkat Johannes van den Bosch sebagai Gubernur Jenderal Hindia Belanda pada tahun 1830. Van den Bosch mengajukan proposal revolusioner namun kejam: membalikkan sistem pajak uang (<em>landrente</em>) menjadi pajak komoditas dan tenaga kerja wajib (<em>in natura</em>).</p>
          <p>Van den Bosch berargumen bahwa rakyat pedesaan Jawa tidak memiliki cukup uang tunai untuk membayar pajak, tetapi mereka memiliki tanah yang subur dan surplus tenaga kerja yang melimpah. Doktrin Van den Bosch menyatakan bahwa secara tradisional penguasa feodal Jawa memiliki hak atas tenaga dan tanah rakyatnya. Pemerintah kolonial Hindia Belanda, sebagai pewaris kekuasaan monarki lokal, berhak memanfaatkan hak tradisional tersebut untuk mewajibkan rakyat menanam tanaman komersial yang bernilai tinggi di pasar dunia.</p>
          <div class="editorial-quote-block">
            <span class="quote-symbol">“</span>
            <blockquote>Jawa harus dipaksa memproduksi tanaman ekspor dengan memanfaatkan struktur feodal pribumi. Tanah dan tenaga mereka adalah modal pengganti pajak yang akan menyelamatkan kas Kerajaan Belanda.</blockquote>
            <cite>— Ringkasan Doktrin Johannes van den Bosch kepada Raja Willem I, Den Haag (1829)</cite>
          </div>
        `
      },
      {
        id: "komoditas-ekspor",
        title: "4. Perdagangan Internasional dan Pemilihan Komoditas Ekspor",
        content: `
          <p>Revolusi Industri di Eropa Barat pada pertengahan abad ke-19 memicu lonjakan permintaan yang luar biasa terhadap komoditas tropis. Industri tekstil membutuhkan zat pewarna nila (<em>indigo</em>) dalam skala masif. Konsumsi gula dan kopi meningkat drastis di kalangan masyarakat perkotaan Eropa dan Amerika Utara.</p>
          <p>Belanda memilih sektor pertanian perkebunan tropis karena beberapa alasan strategis:</p>
          <ul class="styled-archive-list">
            <li><strong>Permintaan Pasar Global Stabil:</strong> Kopi Jawa (<em>Java Coffee</em>) sudah memiliki reputasi premium di bursa komoditas Amsterdam dan London.</li>
            <li><strong>Siklus Tanam yang Cocok:</strong> Iklim tropis dan tanah vulkanik Jawa yang kaya unsur hara sangat ideal untuk tebu, kopi, teh, tembakau, dan nila.</li>
            <li><strong>Monopoli Perdagangan Terintegrasi:</strong> Hasil panen langsung diserahkan kepada NHM (<em>Nederlandsche Handel-Maatschappij</em>), maskapai dagang bentukan Raja Willem I yang memegang monopoli pelayaran dan pelelangan di Belanda.</li>
          </ul>
        `
      }
    ],
    timeline: [
      { year: "1799", text: "VOC resmi bangkrut dan dibubarkan; seluruh utang 134,7 juta gulden dialihkan ke Kerajaan Belanda." },
      { year: "1825", text: "Perang Jawa pecah dipimpin Pangeran Diponegoro; menguras kas kolonial Batavia hingga 25 juta gulden." },
      { year: "1828", text: "Johannes van den Bosch memaparkan memori rancangan eksploitasi agraris di hadapan Raja Willem I di Den Haag." },
      { year: "1830", text: "Perang Jawa berakhir; Johannes van den Bosch tiba di Batavia dan secara resmi memberlakukan Cultuurstelsel." }
    ],
    insight: {
      headline: "Analisis Kritis: Pertukaran Beban Utang Bangsa Kolonial ke Pundak Petani Jawa",
      body: "Cultuurstelsel lahir bukan dari perkembangan alami perdagangan bebas, melainkan rekayasa fiskal keputusasaan sebuah kerajaan Eropa yang bangkrut. Petani Jawa yang baru saja kehilangan ratusan ribu jiwa akibat perang dipaksa menanggung biaya rekonstruksi ekonomi monarki Belanda tanpa hak politik maupun kompensasi yang layak."
    },
    sources: [
      "Fasseur, Cees. (1992). The Politics of Colonial Exploitation: Java, the Dutch, and the Cultivation System. Cornell SEAP.",
      "Ricklefs, M.C. (2008). A History of Modern Indonesia since c. 1200 (4th ed.). Palgrave Macmillan.",
      "Kartodirdjo, Sartono. (1987). Pengantar Sejarah Indonesia Baru: 1500–1900. Gramedia.",
      "Arsip Nasional Republik Indonesia (ANRI) — Inventaris Arsip Algemeene Secretarie Seri Grote Bundel (1830–1835)."
    ]
  },
  {
    id: 2,
    number: "02",
    roman: "BAB II",
    title: "Kebijakan dan Aturan Resmi Sistem Tanam Paksa",
    subtitle: "Staatsblad 1834 No. 22: Ketentuan Hukum di Atas Kertas Melawan Realitas Penindasan",
    period: "Mulai 1830",
    summary: "Aturan resmi Cultuurstelsel memuat pasal-pasal yang tampak rasional dan moderat. Namun insentif persenan hasil (cultuurprocenten) dan kolusi birokrasi kolonial-feodal memutarbalikkan regulasi menjadi eksploitasi tanpa batas.",
    heroImage: "./assets/images/perkebunan_tebu_pabrik_1794391771206.jpg",
    heroImageCaption: "Litografi pabrik gula dan perkebunan tebu Kaliwungu, Jawa Tengah (sekitar 1850). Sumber: Koleksi KITLV / Rijksmuseum.",
    readingTime: "14 menit bacaan",
    sections: [
      {
        id: "pengertian-dasar",
        title: "1. Pengertian dan Kerangka Yuridis Cultuurstelsel",
        content: `
          <p class="drop-cap">Secara harfiah, istilah Belanda <em>Cultuurstelsel</em> diterjemahkan sebagai 'Sistem Budidaya' (<em>Cultivation System</em>). Namun di kalangan bangsa Indonesia, kebijakan ini secara tepat diabadikan dengan nama <strong>Sistem Tanam Paksa</strong>, mencerminkan sifat koersif dan kekerasan struktural yang menyertai seluruh tahapan pelaksanaannya.</p>
          <p>Secara yuridis formal, pokok-pokok aturan Sistem Tanam Paksa kemudian dimuat dalam lembaran negara <em>Staatsblad van Nederlandsch-Indië</em> Tahun 1834 Nomor 22. Di atas kertas, aturan ini dirancang seolah-olah merupakan perjanjian sukarela antara pemerintah kolonial dengan desa-desa di Jawa untuk menyerahkan sebagian hasil bumi sebagai ganti pajak tanah.</p>
        `
      },
      {
        id: "tabel-komparasi",
        title: "2. Aturan Resmi Staatsblad vs Kenyataan Lapangan",
        content: `
          <p>Sejarah mencatat jurang pemisah yang sangat lebar antara pasal-pasal hukum tertulis dengan praktik yang dijalankan para residen Belanda dan bupati pribumi. Di bawah ini adalah perbandingan sistematis ketentuan formal dan fakta historis di lapangan:</p>
          <div class="interactive-comparison-wrapper">
            <table class="archive-comparison-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Ketentuan Resmi (Staatsblad 1834 No. 22)</th>
                  <th style="width: 45%;">Praktik & Realitas di Lapangan</th>
                  <th style="width: 30%;">Dampak Riil bagi Rakyat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pasal 1: Batas Tanah 1/5 (20%)</strong><br>Desa menyediakan tidak lebih dari seperlima tanah pertaniannya untuk tanaman ekspor.</td>
                  <td>Para bupati dan kepala desa sering memaksakan 1/3, 1/2, bahkan seluruh lahan sawah terbaik milik petani untuk tebu dan nila.</td>
                  <td>Petani kehilangan sawah subur penghasil beras dan terpaksa menanam padi di lereng gersang yang sulit diairi.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 2: Pembebasan Pajak</strong><br>Lahan yang digunakan untuk tanaman wajib dibebaskan dari pungutan pajak tanah (landrente).</td>
                  <td>Petani tetap diwajibkan membayar pajak tanah secara penuh, ditambah pungutan liar oleh aparat desa dan pejabat kolonial.</td>
                  <td>Beban ganda finansial; petani harus menyetor hasil panen komersial sekaligus uang pajak tunai.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 3: Waktu Kerja Terbatas</strong><br>Waktu kerja untuk tanaman ekspor tidak boleh melebihi waktu kerja penanaman padi sawah (sekitar 66 hari per tahun).</td>
                  <td>Petani dipaksa bekerja di perkebunan dan pabrik pengolahan selama 150 hingga lebih dari 200 hari dalam setahun secara terus-menerus.</td>
                  <td>Rakyat kehabisan waktu mengurus padi sawah sendiri; musim panen pangan terlambat dan terbengkalai.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 4: Kualitas Tanah</strong><br>Tanah yang disediakan harus setara mutunya dengan tanah sawah biasa.</td>
                  <td>Aparat kolonial menyita sawah beririgasi teknis terbaik dekat pabrik, meninggalkan tanah kritis berbatu untuk tanaman pangan petani.</td>
                  <td>Produktivitas pangan hancur drastis karena air irigasi dialihkan khusus untuk membasahi kebun tebu kolonial.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 5: Kelebihan Hasil Panen</strong><br>Jika nilai hasil panen melebihi taksiran pajak tanah, selisih kelebihan harus dikembalikan kepada petani.</td>
                  <td>Kelebihan hasil panen hampir tidak pernah dibayarkan kepada petani; uang selisih dikantongi oleh bupati dan residen sebagai cultuurprocenten.</td>
                  <td>Petani miskin tidak menerima kompensasi atas kerja keras ekstra mereka di kebun.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 6: Gagal Panen</strong><br>Kegagalan panen yang diakibatkan oleh hama atau bencana alam ditanggung sepenuhnya oleh pemerintah.</td>
                  <td>Pemerintah kolonial hampir selalu menuduh kegagalan panen akibat 'kemalasan petani'. Petani diwajibkan mengganti kerugian panen.</td>
                  <td>Petani terjerat utang berkepanjangan kepada lintah darat atau aparat birokrasi feodal.</td>
                </tr>
                <tr>
                  <td><strong>Pasal 7: Tenaga Tanpa Tanah</strong><br>Penduduk yang tidak memiliki tanah diwajibkan bekerja di perkebunan pemerintah selama 66 hari per tahun.</td>
                  <td>Buruh tanpa tanah dijadikan pekerja rodi tanpa upah layak, dipaksa mengangkut komoditas puluhan kilometer menuju gudang dan pelabuhan.</td>
                  <td>Beban fisik ekstrem; kelelahan massal, wabah penyakit, dan meningkatnya angka kematian buruh kasar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "cultuurprocenten",
        title: "3. Sistem Cultuurprocenten: Mesin Pemicu Pemerasan",
        content: `
          <p>Faktor terpenting yang mengubah Sistem Tanam Paksa menjadi mesin eksploitasi brutal adalah kebijakan <strong>Cultuurprocenten</strong> (persenan budidaya). Pemerintah kolonial memberikan bonus persentase uang tunai kepada pegawai Eropa (Residen, Asisten Residen, Kontrolir) dan pejabat pribumi (Bupati, Wedana, Kepala Desa) berdasarkan volume komoditas yang berhasil mereka kumpulkan dari wilayah kekuasaannya.</p>
          <p>Semakin banyak kopi, gula, atau nila yang berhasil diperas dari rakyat dan semakin cepat hasil panen disetor ke gudang pemerintah, semakin besar pundi-pundi kekayaan pribadi para pejabat tersebut. Sistem insentif korup ini secara langsung mendorong para bupati pribumi berlomba-lomba memperpanjang jam kerja rakyat, memperluas rampasan lahan sawah, dan mengabaikan keselamatan warga desa demi memperkaya diri sendiri.</p>
        `
      }
    ],
    timeline: [
      { year: "1830", text: "Johannes van den Bosch mengeluarkan instruksi kerja awal Tanam Paksa di Jawa Tengah dan Jawa Timur." },
      { year: "1832", text: "Sistem persenan budidaya (Cultuurprocenten) diresmikan untuk memotivasi korps birokrasi kolonial dan bupati." },
      { year: "1834", text: "Penerbitan Staatsblad 1834 No. 22 sebagai regulasi formal Tanam Paksa di Hindia Belanda." },
      { year: "1836", text: "Laporan rahasia mencatat perluasan pemaksaan tanah hingga lebih dari 50% di Karesidenan Pekalongan dan Kedu." }
    ],
    insight: {
      headline: "Analisis Kritis: Ilusi Legalitas Kolonial",
      body: "Staatsblad 1834 No. 22 sengaja disusun dengan bahasa yang tampak melindungi hak-hak pribumi untuk meredam kekhawatiran moral di parlemen Belanda. Namun di lapangan, ketiadaan lembaga pengadilan independen bagi rakyat pribumi menjadikan aturan resmi tersebut sekadar kedok administratif untuk legalisasi perbudakan terselubung."
    },
    sources: [
      "Staatsblad van Nederlandsch-Indië, 1834 No. 22.",
      "Fasseur, C. (1975). Kultuurstelsel en Koloniale Baten: Het Nederlandse bewind op Java 1830–1870. Leiden University Press.",
      "Kartodirdjo, Sartono & Djoko Suryo. (1991). Sejarah Perkebunan di Indonesia: Kajian Sosial-Ekonomi. Aditya Media.",
      "Onghokham. (2003). Runtuhnya Hindia Belanda. LP3ES Jakarta."
    ]
  },
  {
    id: 3,
    number: "03",
    roman: "BAB III",
    title: "Pelaksanaan dan Mekanisme Rantai Produksi",
    subtitle: "Dari Petak Sawah Jawa Menuju Bursa Lelang Kolonial Amsterdam",
    period: "1830–1860",
    summary: "Cultuurstelsel beroperasi sebagai konglomerasi manufaktur agraris raksasa yang mengawinkan tenaga kerja paksa pedesaan, pabrik pengolahan uap Eropa, dan armada kapal dagang NHM menuju pasar internasional.",
    heroImage: "./assets/images/pelabuhan_batavia_ekspor_1794391771490.jpg",
    heroImageCaption: "Pelabuhan Batavia (Sunda Kelapa) pada pertengahan abad ke-19: Kapal-kapal bertiang tinggi mengangkut berpeti-peti komoditas ke Eropa. Sumber: Arsip Engraving Maritim Nasional.",
    readingTime: "15 menit bacaan",
    sections: [
      {
        id: "rantai-ekonomi",
        title: "1. Visualisasi Rantai Alur Komoditas Tanam Paksa",
        content: `
          <p class="drop-cap">Sistem Tanam Paksa bukan sekadar perintah menanam tanaman di ladang, melainkan rantai logistik internasional yang terintegrasi secara ketat dari tingkat petak sawah hingga bursa komoditas di Belanda. Setiap tahapan memiliki mata rantai kekuasaan dan pemaksaan:</p>
          <div class="flowchart-editorial-container">
            <div class="flow-step-card">
              <span class="step-num">01</span>
              <h4>Petani Desa Jawa</h4>
              <p>Mengerjakan lahan, menyemai bibit, menyiram, dan menjaga tanaman wajib di bawah ancaman hukuman cambuk aparat desa.</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step-card">
              <span class="step-num">02</span>
              <h4>Penyitaan Sawah & Kerja Rodi</h4>
              <p>Lahan terbaik disita untuk tebu/nila. Rakyat dikerahkan tanpa upah membuka jalan dan saluran irigasi.</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step-card">
              <span class="step-num">03</span>
              <h4>Pabrik Pengolahan Kolonial</h4>
              <p>Penggilingan tebu, fermentasi pasta nila, dan pengeringan biji kopi di fasilitas kontrak pemerintah kolonial.</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step-card">
              <span class="step-num">04</span>
              <h4>Gudang Karesidenan</h4>
              <p>Pengumpulan hasil panen, inspeksi kontrolir Belanda, pemotongan persenan cultuurprocenten untuk bupati.</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step-card">
              <span class="step-num">05</span>
              <h4>Pelabuhan Ekspor Batavia & Semarang</h4>
              <p>Pemuatan ke lambung kapal layar Nederlandsche Handel-Maatschappij (NHM) menuju Selat Sunda.</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step-card highlight-step">
              <span class="step-num">06</span>
              <h4>Pasar Lelang Amsterdam & Kas Belanda</h4>
              <p>Dilelang dengan harga emas dunia; menghasilkan keuntungan Batig Slot yang langsung mengisi perbendaharaan Kerajaan Belanda.</p>
            </div>
          </div>
        `
      },
      {
        id: "komoditas-utama",
        title: "2. Komoditas Unggulan yang Diwajibkan",
        content: `
          <p>Tidak semua tanaman memiliki nilai ekonomi yang sama bagi kas kolonial. Pemerintah Batavia memusatkan perhatian pada enam komoditas komersial strategis:</p>
          <div class="commodity-grid">
            <div class="commodity-box">
              <span class="commodity-tag">KOMODITAS EMAS</span>
              <h4>Kopi (Coffea arabica)</h4>
              <p>Menjadi tambang emas terbesar Cultuurstelsel. Ditanam luas di wilayah pegunungan Priangan (Jawa Barat), Kedu, Pasuruan, dan Malang. Memerlukan perawatan intensif selama bertahun-tahun. Sistem kopi Priangan (<em>Preangerstelsel</em>) bahkan bertahan paling lama hingga awal abad ke-20.</p>
            </div>
            <div class="commodity-box">
              <span class="commodity-tag">KOMODITAS PABRIK</span>
              <h4>Tebu (Saccharum officinarum)</h4>
              <p>Paling merusak sistem ketahanan pangan lokal karena tebu harus ditanam di sawah beririgasi teknis yang sama dengan sawah padi. Petani harus mengantre air, menebang tebu di bawah terik matahari, dan membawanya dengan pedati sapi ke pabrik gula swasta Eropa rekanan pemerintah.</p>
            </div>
            <div class="commodity-box">
              <span class="commodity-tag">KOMODITAS KIMIA</span>
              <h4>Nila / Indigo (Indigofera tinctoria)</h4>
              <p>Zat pewarna biru tua untuk industri garmen Eropa. Menanam nila sangat melelahkan dan menimbulkan bau busuk menyengat saat daun difermentasikan di kolam-kolam perendaman. Banyak petani menderita penyakit pernapasan dan kulit parah akibat cairan nila.</p>
            </div>
            <div class="commodity-box">
              <span class="commodity-tag">KOMODITAS KONSUMSI</span>
              <h4>Teh, Tembakau, & Kayu Manis</h4>
              <p>Teh ditanam di lereng bukit Garut dan Bogor; tembakau di Besuki, Kedu, dan Yogyakarta; sedangkan kayu manis diusahakan di Sumatra Barat dan Jawa Tengah sesuai karakteristik tanah dan ketinggian lereng.</p>
            </div>
          </div>
        `
      },
      {
        id: "peran-nhm",
        title: "3. Monopoli Nederlandsche Handel-Maatschappij (NHM)",
        content: `
          <p>Didirikan oleh Raja Willem I pada tahun 1824, NHM berfungsi sebagai agen pengapalan, asuransi, dan pelelangan tunggal bagi seluruh hasil bumi Cultuurstelsel. NHM dijuluki sebagai 'De Groote Factorij' (Faktor Besar) yang memonopoli pelayaran dari Batavia, Semarang, dan Surabaya ke Rotterdam dan Amsterdam.</p>
          <p>Keuntungan yang diraup NHM sangat fantastis. Melalui sistem konsinyasi tertutup, NHM memastikan harga beli di tingkat petani Jawa ditekan serendah mungkin dengan tarif patokan pemerintah, sementara di pasar lelang Amsterdam komoditas tersebut dijual dengan marjin keuntungan berlipat-lipat ganda.</p>
        `
      }
    ],
    timeline: [
      { year: "1831", text: "NHM menandatangani kontrak monopoli pengapalan komoditas Tanam Paksa ke bursa lelang Belanda." },
      { year: "1838", text: "Pemasangan mesin uap pertama pada pabrik gula di Jawa Timur mempercepat pemrosesan hasil tebu rakyat." },
      { year: "1840", text: "Ekspor kopi Jawa mencapai rekor 1,1 juta pikul, menyuplai lebih dari sepertiga kebutuhan kopi dunia." },
      { year: "1850", text: "Pabrik-pabrik pengolahan nila di Jawa Tengah mulai dikurangi karena kerusakan tanah dan protes keras warga." }
    ],
    insight: {
      headline: "Analisis Kritis: Industrialisasi Semu di Atas Penghisapan Tenaga",
      body: "Pembangunan pabrik gula, jalur rel lori tebu, dan perbaikan dermaga pelabuhan pada era Cultuurstelsel kerap diklaim sebagai bentuk modernisasi kolonial. Kenyataannya, infrastruktur tersebut dibangun bukan untuk melayani kesejahteraan masyarakat lokal, melainkan mempercepat evakuasi kekayaan alam tanah jajahan menuju kapal-kapal pengangkut Eropa."
    },
    sources: [
      "Mansvelt, W.M.F. (1924). Geschiedenis van de Nederlandsche Handel-Maatschappij 1824–1924. Haarlem.",
      "Elson, R.E. (1984). Javanese Peasants and the Colonial Sugar Industry. Oxford University Press.",
      "Fernando, Radin. (1982). Famine in Cirebon Residency in Java 1844–1850: A New Perspective. Monash University.",
      "Arsip KITLV — Koleksi Foto dan Dokumen Perkebunan Gula Abad ke-19."
    ]
  },
  {
    id: 4,
    number: "04",
    roman: "BAB IV",
    title: "Dampak Sistem Tanam Paksa terhadap Indonesia dan Belanda",
    subtitle: "Pundi Emas Kerajaan Belanda di Balik Bencana Kelaparan Cirebon dan Grobogan",
    period: "1835–1860",
    summary: "Cultuurstelsel melahirkan kontras paling mencolok dalam sejarah kolonialisme: kas Kerajaan Belanda menikmati surplus ratusan juta gulden (Batig Slot), sementara pedesaan Jawa dilanda kelaparan hebat, kemiskinan ekstrem, dan dislokasi sosial.",
    heroImage: "./assets/images/famine_krisis_pangan_1794391771222.jpg",
    heroImageCaption: "Dokumentasi arsip: Desa pedesaan Jawa Tengah yang dilanda krisis kekeringan dan kelaparan hebat pada masa Tanam Paksa (dekade 1840-an). Sumber: Dokumen Sejarah Nasional.",
    readingTime: "18 menit bacaan",
    sections: [
      {
        id: "dampak-ekonomi-belanda",
        title: "1. Batig Slot: Penyelamat Fiskal Kerajaan Belanda",
        content: `
          <p class="drop-cap">Bagi Kerajaan Belanda, Cultuurstelsel adalah mukjizat finansial yang luar biasa. Seluruh keuntungan bersih dari penjualan komoditas ekspor Hindia Belanda di bursa Eropa dialirkan langsung ke kas negara Belanda melalui pos anggaran yang disebut <strong>Batig Slot</strong> (surplus finansial kolonial).</p>
          <p>Berdasarkan kajian sejarawan Cees Fasseur (1975), antara kurun waktu 1831 hingga 1877, total keuntungan bersih yang berhasil disedot pemerintah Belanda dari tanah Jawa mencapai angka mencengangkan: lebih dari <strong>832 juta gulden</strong>. Pada puncaknya di dekade 1850-an, pos <em>Batig Slot</em> menyumbang sekitar 30% hingga 50% dari seluruh total pendapatan anggaran belanja nasional Kerajaan Belanda!</p>
          <p>Uang berdarah dari keringat petani Jawa tersebut digunakan pemerintah Belanda untuk:</p>
          <ul class="styled-archive-list">
            <li>Melunasi seluruh utang luar negeri Kerajaan Belanda warisan era perang.</li>
            <li>Membangun jaringan jalan kereta api nasional modern di seantero negeri Belanda.</li>
            <li>Membangun Terusan Air Baru (<em>Nieuwe Waterweg</em>) dan dermaga modern di pelabuhan Rotterdam dan Amsterdam.</li>
            <li>Membiayai pembangunan benteng pertahanan militer nasional Belanda di perbatasan Eropa.</li>
          </ul>
        `
      },
      {
        id: "tragedi-kelaparan",
        title: "2. Bencana Pangan dan Tragedi Kemanusiaan di Jawa (1840-an)",
        content: `
          <p>Kebalikan dari kemakmuran Belanda, rakyat Jawa mengalami kehancuran fisik dan sosial yang tak terperi. Puncak penderitaan rakyat terjadi pada pertengahan dekade 1840-an, terutama di Karesidenan Cirebon (1844–1845), Demak (1848–1849), dan Grobogan (1849–1850).</p>
          <p>Tragedi ini terjadi akibat kombinasi pemaksaan penanaman nila dan tebu yang menyita seluruh air irigasi serta lahan sawah padi terbaik, ditambah kewajiban kerja rodi yang membuat petani tidak memiliki waktu menanam padi. Ketika musim paceklik dan serangan hama wereng melanda, rakyat tidak memiliki cadangan beras sebutir pun di lumbung desa.</p>
          <div class="historical-warning-card">
            <h4>Catatan Demografi Kelaparan Grobogan & Demak (1849–1850)</h4>
            <p>Di Karesidenan Grobogan, populasi penduduk anjlok dari sekitar <strong>89.500 jiwa menjadi hanya 9.000 jiwa</strong> akibat kematian massal akibat kelaparan, wabah tipus, kolera, dan gelombang pengungsian ribuan keluarga yang putus asa ke wilayah lain. Di Demak, dari sekitar 336.000 jiwa penduduk, lebih dari setengahnya meninggal atau melarikan diri meninggalkan jasad sanak saudaranya di pinggir-pinggir jalan desa.</p>
          </div>
        `
      },
      {
        id: "dampak-sosial-politik",
        title: "3. Feodalisasi Birokrasi dan Ketimpangan Struktur Sosial Desa",
        content: `
          <p>Secara politik, Cultuurstelsel merekayasa birokrasi tradisional menjadi alat penindas kolonial. Para bupati pribumi diangkat secara turun-temurun dan digaji besar dengan tunjangan persenan hasil panen. Hal ini memutuskan ikatan kepemimpinan moral bupati dengan rakyatnya; bupati berubah menjadi mandor kolonial yang menjaga agar target produksi gula dan kopi terpenuhi tanpa peduli rintihan rakyat.</p>
          <p>Secara sosial, struktur desa mengalami pergeseran hak milik komunal. Demi membagi beban kerja paksa, tanah-tanah sawah milik pribadi kerap diubah statusnya oleh kepala desa menjadi tanah komunal desa (tanah lungguh/bengkok), sehingga seluruh warga miskin tanpa tanah dapat diwajibkan ikut memikul beban kerja perkebunan.</p>
        `
      },
      {
        id: "dampak-jangka-panjang",
        title: "4. Warisan Struktural bagi Perekonomian Modern Indonesia",
        content: `
          <p>Meski bersifat destruktif, Tanam Paksa meninggalkan warisan struktural yang bertahan hingga berabad-abad kemudian:</p>
          <ul class="styled-archive-list">
            <li><strong>Pengenalan Komoditas Ekspor Bernilai Tinggi:</strong> Petani Indonesia mengenal teknik pembibitan dan pemeliharaan tebu, kopi, teh, dan tembakau.</li>
            <li><strong>Monetisasi Ekonomi Desa:</strong> Masuknya uang tunai dari pembayaran upah tebang dan pemotongan pajak secara bertahap memperkenalkan ekonomi uang ke pelosok pedesaan Jawa.</li>
            <li><strong>Pembangunan Infrastruktur Angkutan:</strong> Dibangunnya jaringan jalan pos penghubung antardesa dan rel kereta pengangkut tebu yang kelak menjadi cikal bakal jaringan transportasi nasional.</li>
            <li><strong>Dualisme Ekonomi Berkelanjutan:</strong> Terbentuknya ketimpangan struktural permanen antara sektor perkebunan ekspor modern yang dikuasai modal besar dengan sektor pertanian pangan rakyat yang subsisten dan miskin.</li>
          </ul>
        `
      }
    ],
    timeline: [
      { year: "1831–1877", text: "Total surplus Batig Slot yang disetor Hindia Belanda ke perbendaharaan Belanda mencapai 832 juta gulden." },
      { year: "1844", text: "Krisis beras dan kelaparan hebat melanda Karesidenan Cirebon akibat pemaksaan tanaman nila dan tebu." },
      { year: "1849", text: "Bencana kelaparan Demak dan Grobogan membunuh puluhan ribu rakyat; laporan rahasia mengguncang Batavia." },
      { year: "1854", text: "Regeringsreglement (RR) 1854 mulai membatasi kewenangan mutlak gubernur jenderal atas tenaga kerja desa." }
    ],
    insight: {
      headline: "Analisis Kritis: Kesejahteraan Bangsa Penjajah di Atas Kuburan Bangsa Terjajah",
      body: "Tidak ada contoh lain dalam sejarah modern di mana sebuah negeri kecil di Eropa Barat mampu melipatgandakan modernitas industri domestiknya dalam tempo tiga puluh tahun semata-mata dengan memeras keringat jutaan petani pulau jajahan yang terkurung dalam tirani agraris tanpa perlindungan hak asasi manusia."
    },
    sources: [
      "Fasseur, C. (1975). Kultuurstelsel en Koloniale Baten. Leiden University Press.",
      "Onghokham. (1983). Tradisi Kerakyatan dan Gerakan Protes dalam Sejarah Indonesia. Yayasan Obor Indonesia.",
      "Vitalis, L. (1851). De Invoering van het Kultuurstelsel in de Residentie Cheribon. Batavia.",
      "Geertz, Clifford. (1963). Agricultural Involution: The Processes of Ecological Change in Indonesia. University of California Press."
    ]
  },
  {
    id: 5,
    number: "05",
    roman: "BAB V",
    title: "Perlawanan Rakyat dan Kritik Moral terhadap Tanam Paksa",
    subtitle: "Dari Strategi Bertahan di Sawah hingga Guncangan Pena Max Havelaar",
    period: "1840–1865",
    summary: "Rakyat tidak pasrah menerima penindasan. Bentuk perlawanan bermekaran: mulai dari sabotase bibit, mogok kerja, pembakaran kebun tebu, hingga lahirnya gelombang kritik moral cendekiawan liberal di Eropa dipimpin Multatuli.",
    heroImage: "./assets/images/multatuli_max_havelaar_1794391772120.jpg",
    heroImageCaption: "Eduard Douwes Dekker (Multatuli) menulis mahakarya Max Havelaar di pengasingan (1860). Sumber: Museum Multatuli Rangkasbitung / Rijksmuseum.",
    readingTime: "16 menit bacaan",
    sections: [
      {
        id: "bentuk-perlawanan",
        title: "1. Bentuk-Bentuk Perlawanan Nyata Rakyat di Lapangan",
        content: `
          <p class="drop-cap">Perlawanan rakyat terhadap Cultuurstelsel jarang berwujud pemberontakan frontal bersenjata berskala pulau seperti Perang Jawa, mengingat kekuatan militer Hindia Belanda yang diperkuat benteng-benteng <em>Benteng Stelsel</em>. Namun rakyat mengembangkan resistensi aktif dan pasif yang sangat persisten:</p>
          <ul class="styled-archive-list">
            <li><strong>Sabotase dan Pembakaran Kebun Tebu:</strong> Pada dekade 1840-an dan 1850-an, kebakaran misterius kerap melanda hamparan kebun tebu siap panen di Jepara, Kudus, dan Surabaya menjelang musim giling, menimbulkan kerugian besar bagi pabrik kolonial.</li>
            <li><strong>Eksodus dan Migrasi Massal (Desersi Desa):</strong> Ketika beban tanam paksa melampaui daya tahan fisik, seluruh warga dusun diam-diam mengungsi pada malam hari melintasi batas karesidenan lain atau masuk ke hutan perbukitan di luar pengawasan birokrasi bupati.</li>
            <li><strong>Perlawanan Petani Beras & Penyelundupan:</strong> Petani dengan sengaja merawat bibit padi secara sembunyi-sembunyi pada malam hari dan memprioritaskan air untuk sawah padi mereka sendiri dengan membobol tanggul irigasi tebu kolonial.</li>
            <li><strong>Gerakan Keagamaan dan Kerusuhan Lokal:</strong> Munculnya figur-figur ulama pedesaan dan tarekat yang menyerukan perlawanan terhadap pejabat bupati yang korup dan kaki tangan kafir Belanda, seperti kerusuhan Cilegon dan perlawanan lokal di Banten dan Priangan.</li>
          </ul>
        `
      },
      {
        id: "strategi-bertahan",
        title: "2. Cara Masyarakat Bertahan Hidup (Kearifan Komunitas)",
        content: `
          <p>Dalam kondisi tekanan ekstrem, masyarakat Jawa mengandalkan modal sosial tradisional untuk bertahan dari kepunahan:</p>
          <p>Tradisi <em>sambatan</em> dan gotong royong diperkuat antar-keluarga. Ketika seorang kepala keluarga dipaksa menjalani kerja rodi di pabrik gula selama berbulan-bulan, tetangga dan kerabat bahu-membahu merawat anak-istri dan mencangkul sawah pangan miliknya. Rakyat juga beralih mengonsumsi umbi-umbian hutan (gadung, uwi, singkong) ketika pasokan gabah padi habis disita atau dijual demi membayar denda pajak.</p>
        `
      },
      {
        id: "multatuli-havelaar",
        title: "3. Eduard Douwes Dekker (Multatuli) dan Ledakan Max Havelaar (1860)",
        content: `
          <p>Guncangan terbesar terhadap legitimasi moral Sistem Tanam Paksa datang dari dalam tubuh birokrasi kolonial sendiri. Eduard Douwes Dekker, seorang mantan Asisten Residen Lebak (Banten), menyaksikan dengan mata kepala sendiri bagaimana Bupati Lebak Raden Adipati Karta Natanegara memeras rakyat miskin dengan merampas kerbau-kerbau petani demi memenuhi gaya hidup dan setoran kepada penguasa Belanda.</p>
          <p>Setelah pengaduannya kepada Residen Brest van Kempen dan Gubernur Jenderal Duymaer van Twist diabaikan, Douwes Dekker mengundurkan diri dan menulis novel satir politik dengan nama pena <strong>Multatuli</strong> (bahasa Latin: 'Aku yang banyak menderita'). Buku berjudul <em>Max Havelaar: Of de koffiveilingen der Nederlandsche Handel-Maatschappij</em> (1860) meledak bagai halilintar di Eropa.</p>
          <div class="editorial-quote-block">
            <span class="quote-symbol">“</span>
            <blockquote>Ada sebuah bangsa di kepulauan tropis yang terdiri dari tiga puluh juta manusia. Mereka patuh, rajin, dan sabar. Dan mereka dihisap darahnya oleh sebuah bangsa di tepi Laut Utara yang mengaku bertamadun tinggi!</blockquote>
            <cite>— Eduard Douwes Dekker (Multatuli), Max Havelaar (1860)</cite>
          </div>
          <p>Kisah pilu <em>Saijah dan Adinda</em> dalam buku tersebut membukakan mata rakyat Eropa mengenai kebiadaban sistem tanam paksa, meruntuhkan mitos bahwa Cultuurstelsel membawa kemakmuran damai bagi penduduk pribumi.</p>
        `
      },
      {
        id: "kaum-liberal",
        title: "4. Peranan Baron van Hoëvell dan Kaum Liberal Belanda",
        content: `
          <p>Di parlemen Belanda (<em>Tweede Kamer</em>), suara keras menentang Sistem Tanam Paksa disuarakan oleh <strong>Baron Wolter Robert van Hoëvell</strong>, seorang mantan pendeta yang pernah tinggal bertahun-tahun di Batavia. Bersama tokoh-tokoh partai liberal seperti I.D. Fransen van de Putte, Van Hoëvell membeberkan dokumen rahasia mengenai bencana kelaparan di Cirebon dan Grobogan di depan sidang perwakilan rakyat.</p>
          <p>Kaum liberal Belanda menuntut penghapusan Sistem Tanam Paksa bukan semata demi perikemanusiaan, melainkan juga demi kepentingan ekonomi: mereka menginginkan agar tanah dan tenaga kerja Hindia Belanda dibuka bagi modal swasta tanpa monopoli birokrasi negara.</p>
        `
      }
    ],
    timeline: [
      { year: "1848", text: "Baron van Hoëvell memimpin aksi petisi reformasi kolonial di Batavia; diusir oleh pemerintah Belanda." },
      { year: "1856", text: "Eduard Douwes Dekker mundur sebagai Asisten Residen Lebak setelah laporannya tentang penindasan rakyat ditolak." },
      { year: "1860", text: "Novel Max Havelaar terbit di Brussel; mengguncang opini publik dan parlemen Kerajaan Belanda." },
      { year: "1863", text: "Fransen van de Putte menjadi Menteri Koloni Belanda dan memelopori penghapusan tanaman wajib secara bertahap." }
    ],
    insight: {
      headline: "Analisis Kritis: Perpaduan Perlawanan Senyap Rakyat dan Hantaman Opini Publik",
      body: "Runtuhnya Tanam Paksa tidak bisa dilepaskan dari kombinasi dua arus: di satu sisi, ketidakmampuan rakyat Jawa menanggung beban yang memicu penurunan produktivitas dan keputusasaan desa; di sisi lain, runtuhnya benteng moral kolonialisme di Eropa akibat terungkapnya kebenaran fakta oleh para pembangkang nurani seperti Multatuli."
    },
    sources: [
      "Multatuli. (1860). Max Havelaar: of de koffiveilingen der Nederlandsche Handel-Maatschappij. Amsterdam.",
      "Van Hoëvell, W.R. (1851). Reis over Java, Madura en Bali. Amsterdam.",
      "Kartodirdjo, Sartono. (1973). Protest Movements in Rural Java. Oxford University Press.",
      "Nieuwenhuys, Rob. (1982). Mirror of the Indies: A History of Dutch Colonial Literature. University of Massachusetts Press."
    ]
  },
  {
    id: 6,
    number: "06",
    roman: "BAB VI",
    title: "Penghapusan Sistem Tanam Paksa dan Warisan Sejarah",
    subtitle: "Undang-Undang Agraria 1870, Transisi Kapitalisme Swasta, dan Refleksi Kemerdekaan",
    period: "1860–1870",
    summary: "Kemenangan politik kaum liberal melahirkan UU Agraria (Agrarische Wet) 1870 yang mengakhiri monopoli Cultuurstelsel. Namun penghapusan Tanam Paksa bukanlah kemerdekaan; eksploitasi bertransformasi menjadi kapitalisme perkebunan swasta dan kuli kontrak.",
    heroImage: "./assets/images/hero_cultuurstelsel_jawa_1794391767874.jpg",
    heroImageCaption: "Lanskap perkebunan Hindia Belanda pada masa transisi menuju era perkebunan swasta dan industrialisasi kolonial (1870). Sumber: Koleksi Arsip Nasional RI.",
    readingTime: "15 menit bacaan",
    sections: [
      {
        id: "penghapusan-bertahap",
        title: "1. Kronologi Penghapusan Bertahap Komoditas Tanam Paksa",
        content: `
          <p class="drop-cap">Penghapusan Sistem Tanam Paksa tidak terjadi dalam satu malam melalui sebuah dekrit tunggal, melainkan berjalan secara gradual selama lebih dari satu dekade karena ketergantungan kas Belanda yang teramat dalam terhadap aliran dana <em>Batig Slot</em>:</p>
          <ul class="styled-archive-list">
            <li><strong>1860:</strong> Kewajiban penanaman lada dan cengkeh di Maluku dan Sumatra resmi dicabut karena biaya pengawasan yang tidak lagi sebanding dengan margin laba.</li>
            <li><strong>1865:</strong> Penghapusan kewajiban penanaman nila (indigo) dan teh setelah terbukti memicu kerusakan lahan sawah dan wabah penyakit terparah di kalangan petani.</li>
            <li><strong>1866:</strong> Penghapusan tanam paksa tembakau di Jawa Tengah dan Jawa Timur.</li>
            <li><strong>1870:</strong> Penerbitan <em>Suikerwet</em> (Undang-Undang Gula) yang menginstruksikan penghentian monopoli tebu oleh pemerintah secara bertahap selama 20 tahun hingga tuntas tahun 1890.</li>
            <li><strong>Pengecualian Kopi (Hingga 1917):</strong> Tanaman kopi di Karesidenan Priangan dan Sumatra Barat tetap diwajibkan secara koersif hingga awal abad ke-20 karena masih menjadi sumber devisa andalan pemerintah Batavia.</li>
          </ul>
        `
      },
      {
        id: "agrarische-wet",
        title: "2. Undang-Undang Agraria 1870 (Agrarische Wet): Tonggak Pintu Terbuka",
        content: `
          <p>Pada tahun 1870, parlemen Belanda di bawah kepemimpinan Menteri Koloni de Waal mengesahkan <strong>Agrarische Wet 1870</strong> (Undang-Undang Agraria). Regulasi bersejarah ini menandai berakhirnya monopoli eksploitasi negara secara resmi dan membukakan pintu seluas-luasnya bagi modal swasta internasional (era <em>Politik Pintu Terbuka / Open Door Policy</em>).</p>
          <p>Prinsip utama UU Agraria 1870 adalah doktrin <em>Domeinverklaring</em> (Pernyataan Domein): <em>"Semua tanah yang tidak dapat dibuktikan kepemilikannya oleh rakyat dengan bukti kepemilikan tertulis dinyatakan sebagai milik mutlak negara (domain pemerintah kolonial)."</em></p>
          <p>Berdasarkan klausul ini, jutaan hektar hutan adat, lahan ulayat, dan tanah ladang leluhur disita negara dan disewakan kepada pengusaha perkebunan swasta Eropa dan Amerika dengan hak sewa jangka panjang (<em>Erfpacht</em>) hingga 75 tahun.</p>
        `
      },
      {
        id: "merdeka-atau-eksploitasi-baru",
        title: "3. Refleksi Historis: Apakah Penghapusan Tanam Paksa Membuat Rakyat Merdeka?",
        content: `
          <p class="drop-cap">Pertanyaan fundamental yang harus dijawab oleh generasi penerus adalah: <strong>Apakah penghapusan Sistem Tanam Paksa pada tahun 1870 membawa kebebasan dan kemakmuran bagi rakyat Indonesia?</strong></p>
          <p>Sejarah membuktikan bahwa jawabannya adalah <strong>TIDAK</strong>. Penghapusan Cultuurstelsel bukanlah akhir dari penjajahan, melainkan pergeseran bentuk penjajahan dari <em>kapitalisme birokrasi negara kolonial</em> menuju <em>kapitalisme perkebunan korporasi swasta</em>.</p>
          <div class="historical-warning-card">
            <h4>Dari Petani Tanam Paksa Menjadi Kuli Kontrak (Poenale Sanctie)</h4>
            <p>Rakyat yang semula diperas di desanya sendiri kini dipaksa menjadi kuli kontrak murah di perkebunan-perkebunan tembakau Deli (Sumatra Timur), karet, dan kelapa sawit. Di bawah peraturan <em>Poenale Sanctie</em> (1881), kuli yang melarikan diri atau memprotes upah rendah dapat ditangkap oleh polisi dan dihukum cambuk atau kerja paksa. Penindasan hanya berpindah seragam: dari mandor bupati menjadi pengawas perkebunan swasta Barat.</p>
          </div>
        `
      },
      {
        id: "pelajaran-sejarah",
        title: "4. Warisan Abadi dan Pelajaran untuk Kedaulatan Bangsa",
        content: `
          <p>Pemberlakuan Cultuurstelsel selama empat dekade (1830–1870) meninggalkan luka mendalam sekaligus pelajaran tak ternilai bagi bangsa Indonesia merdeka:</p>
          <ul class="styled-archive-list">
            <li><strong>Kedaulatan atas Tanah dan Pangan:</strong> Pasal 33 UUD 1945 yang menegaskan <em>"Bumi, air, dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat"</em> lahir langsung dari memori kolektif penolakan terhadap eksploitasi model Cultuurstelsel dan Agrarische Wet.</li>
            <li><strong>Bahaya Kompradorisme Kekuasaan:</strong> Pengkhianatan para bupati feodal yang tega menindas rakyat bangsanya sendiri demi persenan <em>cultuurprocenten</em> menjadi pengingat abadi akan bahaya mentalitas elit yang menjual kepentingan rakyat kepada modal asing.</li>
            <li><strong>Hak Asasi Petani:</strong> Tanpa perlindungan hukum yang berpihak kepada petani kecil, reformasi ekonomi apa pun berisiko mengulangi kembali penindasan agraria dalam kemasan modern.</li>
          </ul>
        `
      }
    ],
    timeline: [
      { year: "1865", text: "Kewajiban penanaman nila dan teh resmi dihapus setelah puluhan tahun menuai bencana ekologis dan manusia." },
      { year: "1870", text: "Pengesahan Agrarische Wet dan Suikerwet 1870; pintu investasi modal swasta perkebunan internasional dibuka." },
      { year: "1881", text: "Pemberlakuan Koelie Ordonnantie dan Poenale Sanctie di Sumatra Timur; babak baru penindasan kuli kontrak." },
      { year: "1917", text: "Kewajiban tanam kopi di Priangan resmi diakhiri secara total; menandai tuntasnya sisa-sisa terakhir Cultuurstelsel." }
    ],
    insight: {
      headline: "Analisis Kritis: Dari Pemerasan Negara ke Perbudakan Korporasi",
      body: "Kemenangan kaum liberal Belanda pada tahun 1870 sering digambarkan sebagai fajar kemanusiaan. Kenyataannya, liberalisme kolonial hanya memfasilitasi pengalihan keuntungan dari kantong monarki ke saku-saku kaum kapitalis swasta Eropa, sementara nasib kaum pribumi tetap terjepit di dasar piramida peradaban kolonial."
    },
    sources: [
      "Fasseur, C. (1992). The Politics of Colonial Exploitation. Cornell SEAP.",
      "Breman, Jan. (1989). Taming the Coolie Beast: Plantation Society and the Colonial Order in Southeast Asia. Oxford University Press.",
      "Ricklefs, M.C. (2008). A History of Modern Indonesia since c. 1200. Palgrave.",
      "Laporan Komisi Penyelidikan Kemunduran Kesejahteraan Pribumi di Jawa dan Madura (Mindere Welvaart Onderzoek, 1904–1914)."
    ]
  }
];

// Data Timeline Interaktif Dampak Ekonomi per Dekade
window.DECADAL_ECONOMIC_DATA = [
  {
    decade: "1830–1839",
    title: "Dekade Peletakan Pondasi & Reorganisasi Agraria",
    summary: "Fase konsolidasi awal Van den Bosch. Mobilisasi birokrasi bupati untuk mengamankan lahan kopi dan tebu. Kas Belanda mulai merasakan kucuran surplus perdana.",
    stats: {
      batigSlot: "f 39,2 Juta",
      laborDays: "80 – 120 Hari/thn",
      landSeized: "15% – 25% Sawah",
      riceImpact: "Defisit lokal mulai muncul"
    },
    batigSlotNum: 39.2, // in million guilders
    peasantBurdenIndex: 55, // index 0-100
    details: "Van den Bosch merombak tatanan desa Jawa. Sistem cultuurprocenten pertama kali diuji coba. Komoditas kopi dan nila mendominasi pengapalan kapal NHM pertama ke Amsterdam.",
    majorEvent: "1834: Pengesahan Staatsblad 1834 No. 22; petani mulai diwajibkan kerja rodi tanpa upah di pabrik-pabrik penggilingan."
  },
  {
    decade: "1840–1849",
    title: "Puncak Eksploitasi & Tragedi Kemanusiaan",
    summary: "Dekade paling kelam dalam sejarah Tanam Paksa. Laba kas Belanda melonjak tajam, sementara bencana kelaparan hebat menewaskan ratusan ribu warga di Cirebon, Demak, dan Grobogan.",
    stats: {
      batigSlot: "f 126,8 Juta",
      laborDays: "150 – 220 Hari/thn",
      landSeized: "35% – 60% Sawah",
      riceImpact: "Bencana Kelaparan Massal"
    },
    batigSlotNum: 126.8,
    peasantBurdenIndex: 98,
    details: "Pabrik gula uap mulai menyedot air irigasi secara total. Sawah padi terlambat digarap. Penduduk Grobogan merosot dari 89.500 menjadi 9.000 jiwa akibat kematian dan gelombang pengungsian.",
    majorEvent: "1844–1849: Bencana Kelaparan Cirebon, Grobogan, dan Demak mengguncang moral birokrasi kolonial."
  },
  {
    decade: "1850–1859",
    title: "Pundi Emas Belanda & Awal Perlawanan Moral",
    summary: "Batig Slot menyumbang lebih dari 35% APBN Belanda. Uang hasil bumi Jawa membiayai rel kereta dan terusan air di Belanda. Di parlemen Den Haag, suara pembangkangan mulai bergema.",
    stats: {
      batigSlot: "f 231,5 Juta",
      laborDays: "120 – 180 Hari/thn",
      landSeized: "30% – 45% Sawah",
      riceImpact: "Krisis gizi kronis & tipus"
    },
    batigSlotNum: 231.5,
    peasantBurdenIndex: 82,
    details: "Baron van Hoëvell menggugat kekejaman sistem di hadapan parlemen Belanda. Eduard Douwes Dekker mundur sebagai Asisten Residen Lebak setelah membela rakyat dari kesewenang-wenangan bupati.",
    majorEvent: "1856: Douwes Dekker mengundurkan diri dari Lebak dan mulai menyusun naskah Max Havelaar."
  },
  {
    decade: "1860–1869",
    title: "Guncangan Max Havelaar & Reformasi Kebijakan",
    summary: "Penerbitan Max Havelaar (1860) meruntuhkan legitimasi moral Tanam Paksa. Kaum liberal Belanda mendesak pembongkaran monopoli negara demi membuka pasar bebas.",
    stats: {
      batigSlot: "f 285,4 Juta",
      laborDays: "90 – 130 Hari/thn",
      landSeized: "20% – 30% Sawah",
      riceImpact: "Pemulihan lambat di Jawa"
    },
    batigSlotNum: 285.4,
    peasantBurdenIndex: 65,
    details: "Pemerintah Belanda terpaksa menghapus kewajiban tanaman nila (1865) dan teh (1865) yang terbukti paling destruktif bagi kesehatan dan lahan pangan rakyat.",
    majorEvent: "1860: Max Havelaar terbit; debat parlemen memicu kejatuhan faksi konservatif pro-Tanam Paksa."
  },
  {
    decade: "1870–1879",
    title: "Undang-Undang Agraria & Lahirnya Kapitalisme Swasta",
    summary: "Berakhirnya era monopoli Tanam Paksa dan dimulainya era Politik Pintu Terbuka. Tanah rakyat dialihkan melalui doktrin Domeinverklaring untuk konglomerasi perkebunan swasta Barat.",
    stats: {
      batigSlot: "f 149,1 Juta",
      laborDays: "Berubah jadi Kuli",
      landSeized: "Sewa Erfpacht 75 Thn",
      riceImpact: "Dualisme ekonomi agraria"
    },
    batigSlotNum: 149.1,
    peasantBurdenIndex: 58,
    details: "Agrarische Wet 1870 dan Suikerwet 1870 mengakhiri sebagian besar penanaman paksa pemerintah. Namun sistem kerja paksa bermutasi menjadi perbudakan kuli kontrak di perkebunan swasta luar Jawa.",
    majorEvent: "1870: Pengesahan Agrarische Wet 1870 menandai transisi resmi menuju imperialisme modern."
  }
];

// Tokoh Historis Penting
window.HISTORICAL_FIGURES_DATA = [
  {
    name: "Johannes van den Bosch",
    years: "1780 – 1844",
    role: "Gubernur Jenderal Hindia Belanda (1830–1834)",
    image: "./assets/images/van_den_bosch_portrait_1794391769655.jpg",
    bio: "Pencetus dan pelaksana utama Cultuurstelsel. Bertekad menyelamatkan kas monarki Belanda dari kebangkrutan pasca-Perang Jawa dengan memeras potensi pertanian dan kerja rodi rakyat pedesaan Jawa. Dianugerahi gelar Graf van den Bosch oleh Raja Willem I.",
    stance: "Arsitek Eksploitasi Kolonial"
  },
  {
    name: "Eduard Douwes Dekker (Multatuli)",
    years: "1820 – 1887",
    role: "Mantan Asisten Residen Lebak & Sastrawan",
    image: "./assets/images/multatuli_max_havelaar_1794391772120.jpg",
    bio: "Pejabat kolonial berhati nurani yang menolak berkompromi dengan pemerasan rakyat oleh bupati feodal Lebak. Menulis mahakarya sastra Max Havelaar (1860) yang mengguncang nurani masyarakat Eropa dan memicu desakan pembubaran Sistem Tanam Paksa.",
    stance: "Kritikus Moral Terdepan"
  },
  {
    name: "Baron Wolter Robert van Hoëvell",
    years: "1812 – 1879",
    role: "Pendeta & Politisi Parlemen Liberal Belanda",
    image: "./assets/images/van_den_bosch_portrait_1794391769655.jpg", // fallback portrait
    bio: "Tokoh gereja dan politikus Partai Liberal di Tweede Kamer yang gigih menyuarakan nasib buruk pribumi Jawa. Beliau membeberkan laporan rahasia tragedi kelaparan Cirebon dan Grobogan di depan sidang parlemen Den Haag.",
    stance: "Pembela HAM di Parlemen Belanda"
  },
  {
    name: "Raja Willem I",
    years: "1772 – 1843",
    role: "Raja Kerajaan Belanda (1815–1840)",
    image: "./assets/images/pelabuhan_batavia_ekspor_1794391771490.jpg",
    bio: "Raja saudagar yang merestui rancangan Johannes van den Bosch dan mendirikan maskapai dagang NHM (Nederlandsche Handel-Maatschappij) untuk memonopoli seluruh pelayaran dan pelelangan hasil komoditas Jawa.",
    stance: "Penguasa Monarki Pemilik Monopoli"
  }
];
