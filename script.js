let toplamAtikKilosu = 0;
let ogrenciPuanlari = {};

function showPage(page) {
    const content = document.getElementById("page-content");
    content.innerHTML = ""; // Sayfayı temizle

    if (page === "ekolojik-kredi") {
        content.innerHTML = "<h2>Ekolojik Kredi Nedir?</h2><p>Ekolojik kredi, geri dönüşümü teşvik etmek için kullanılan bir puanlama sistemidir...</p>";
    } else if (page === "geri-donusum") {
        content.innerHTML = "<h2>Geri Dönüşüm Nedir?</h2><p>Geri dönüşüm, atık malzemelerin tekrar kullanıma kazandırılmasıdır...</p>";
    } else if (page === "toplam-atik") {
        content.innerHTML = `<h2>Toplam Atık Kilosu</h2><p>Sisteme girilen toplam atık miktarı: <strong>${toplamAtikKilosu} kg</strong></p>`;
    } else if (page === "kayit") {
        content.innerHTML = `
            <h2>Kayıt Ol</h2>
            <button onclick="showPage('ogrenci-kayit')">Öğrenci Kaydı</button>
            <button onclick="showPage('okul-kayit')">Okul Kaydı</button>
        `;
    } else if (page === "ogrenci-kayit") {
        content.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form id="ogrenci-kayit-form">
                <label>Ad:</label><input type="text" id="ogrenci-ad"><br>
                <label>Soyad:</label><input type="text" id="ogrenci-soyad"><br>
                <label>Email:</label><input type="email" id="ogrenci-email"><br>
                <label>Okul Numarası:</label><input type="text" id="ogrenci-numara"><br>
                <label>Sınıf:</label><input type="text" id="ogrenci-sinif"><br>
                <button type="button" onclick="kayitYap('ogrenci')">Kaydet</button>
            </form>
        `;
    } else if (page === "veri-giris") {
        content.innerHTML = `
            <h2>Veri Giriş</h2>
            <form id="veri-giris-form">
                <label>Okul Adı:</label><input type="text" id="okul-adi"><br>
                <label>Şifre:</label><input type="password" id="okul-sifre"><br>
                <button type="button" onclick="dogrulaOkul()">Giriş</button>
            </form>
        `;
    }
}

function dogrulaOkul() {
    const okulAdi = document.getElementById("okul-adi").value;
    const okulSifre = document.getElementById("okul-sifre").value;

    if (okulAdi === "Torbalı Anadolu Lisesi" && okulSifre === "1234") {
        const content = document.getElementById("page-content");
        content.innerHTML = `
            <h2>Veri Giriş Ekranı</h2>
            <form id="atik-veri-form">
                <label>Öğrenci Adı:</label><input type="text" id="ogrenci-ad"><br>
                <label>Öğrenci Soyadı:</label><input type="text" id="ogrenci-soyad"><br>
                <label>Okul Numarası:</label><input type="text" id="ogrenci-numara"><br>
                <label>Sınıf:</label><input type="text" id="ogrenci-sinif"><br>
                <label>Atık Türü:</label>
                <select id="atik-turu">
                    <option value="kağıt">Kağıt</option>
                    <option value="plastik">Plastik</option>
                    <option value="cam">Cam</option>
                    <option value="metal">Metal</option>
                    <option value="pil">Pil</option>
                    <option value="yağ">Yağ</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="tekstil">Tekstil</option>
                </select><br>
                <label>Atık Kilogramı:</label><input type="number" id="atik-kilo"><br>
                <button type="button" onclick="atikEkle()">Kaydet</button>
            </form>
        `;
    } else {
        alert("Okul bilgileri hatalı!");
    }
}

function atikEkle() {
    const atikTuru = document.getElementById("atik-turu").value;
    const atikKilo = parseFloat(document.getElementById("atik-kilo").value);

    const puanCarpanlari = {
        kağıt: 1,
        plastik: 2,
        cam: 1.5,
        metal: 3,
        pil: 4,
        yağ: 2.5,
        elektronik: 5,
        tekstil: 2
    };

    const puan = atikKilo * (puanCarpanlari[atikTuru] || 1);
    toplamAtikKilosu += atikKilo;

    alert(`Atık başarıyla eklendi! Kazanılan kredi: ${puan}`);
    showPage("toplam-atik");
}
