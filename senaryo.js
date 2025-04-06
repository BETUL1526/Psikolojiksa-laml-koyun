const senaryolar = [
    {
        durum: "Arkadaşın sana kırıcı bir şey söyledi.",
        cevaplar: [
            { metin: "Ona bağırırım.", dogru: false, mesaj: "Bu tepki, durumu daha da kötüleştirebilir. Bu durumda ona neden böyle söylediğini sormayı düşünebilirsin." },
            { metin: "Ona neden böyle söylediğini sorarım.", dogru: true, mesaj: "Harika bir seçim! Bu, durumu ele almanın etkili bir yolu." },
            { metin: "Ona küserim.", dogru: false, mesaj: "Bu tepki, ilişkinizi daha da zorlaştırabilir. Bu durumda ona neden böyle söylediğini sormayı düşünebilirsin." },
            { metin: "Onu görmezden gelirim.", dogru: false, mesaj: "Bu tepki, sorunu çözmez. Bu durumda ona neden böyle söylediğini sormayı düşünebilirsin." }
        ]
    },
    {
        durum: "Sınavdan düşük not aldın.",
        cevaplar: [
            { metin: "Kendimi aptal hissederim.", dogru: false, mesaj: "Bu düşüncenin seni olumsuz etkilemesine izin verme. Nerede hata yaptığını öğrenmeye çalışmak daha yararlı olabilir." },
            { metin: "Nerede hata yaptığımı öğrenmeye çalışırım.", dogru: true, mesaj: "Harika bir seçim! Bu, durumu ele almanın etkili bir yolu." },
            { metin: "Sınavı umursamam.", dogru: false, mesaj: "Bu tepki, gelecekteki performansını olumsuz etkileyebilir. Kendine biraz zaman ver ve nerede hata yaptığını öğrenmeye çalış." },
            { metin: "Ağlarım.", dogru: false, mesaj: "Bu tepki, duygusal olarak seni zorlayabilir. Nerede hata yaptığını öğrenmeye çalışmak daha yararlı olabilir." }
        ]
    },
    {
        durum: "Bir sunum yapman gerekiyor.",
        cevaplar: [
            { metin: "Çok heyecanlanırım.", dogru: false, mesaj: "Heyecanlanmak doğal bir tepki, ancak sunuma iyi hazırlanarak bu heyecanı yönetebilirsin." },
            { metin: "Sunuma iyi hazırlanırım.", dogru: true, mesaj: "Harika bir seçim! Bu, durumu ele almanın etkili bir yolu." },
            { metin: "Sunum yapmaktan vazgeçerim.", dogru: false, mesaj: "Bu tepki, fırsatları kaçırmana neden olabilir. Sunuma iyi hazırlanarak başarılı olabilirsin." },
            { metin: "Sunumu ertelerim.", dogru: false, mesaj: "Bu tepki, stresini artırabilir. Sunuma iyi hazırlanarak başarılı olabilirsin." }
        ]
    },
    {
        durum: "Bir hata yaptın.",
        cevaplar: [
            { metin: "Kendimi suçlarım.", dogru: false, mesaj: "Kendini suçlamak yerine hatayı düzeltmeye odaklanmak daha yapıcı olabilir." },
            { metin: "Hatayı düzeltmeye çalışırım.", dogru: true, mesaj: "Harika bir seçim! Bu, durumu ele almanın etkili bir yolu." },
            { metin: "Hatayı başkasının üzerine atarım.", dogru: false, mesaj: "Bu tepki, ilişkilerini olumsuz etkileyebilir. Hatayı düzeltmeye çalışmak daha yapıcı olabilir." },
            { metin: "Hatayı görmezden gelirim.", dogru: false, mesaj: "Bu tepki, sorunun devam etmesine neden olabilir. Hatayı düzeltmeye çalışmak daha yapıcı olabilir." }
        ]
    },
    {
        durum: "Bir karar vermen gerekiyor.",
        cevaplar: [
            { metin: "Karar vermekten kaçınırım.", dogru: false, mesaj: "Karar vermekten kaçınmak belirsizlik yaratabilir. Seçenekleri değerlendirerek daha iyi bir karar verebilirsin." },
            { metin: "Seçenekleri değerlendiririm.", dogru: true, mesaj: "Harika bir seçim! Bu, durumu ele almanın etkili bir yolu." },
            { metin: "Rastgele bir karar veririm.", dogru: false, mesaj: "Rastgele karar vermek istenmeyen sonuçlara yol açabilir. Seçenekleri değerlendirerek daha iyi bir karar verebilirsin." },
            { metin: "Başkalarının ne dediğine göre karar veririm.", dogru: false, mesaj: "Başkalarının ne dediğine göre karar vermek kendi ihtiyaçlarını göz ardı etmene neden olabilir. Seçenekleri değerlendirerek daha iyi bir karar verebilirsin." }
        ]
    }
];

let senaryoIndex = 0;
let dogruCevapSayisi = 0;
let yanlisCevapSayisi = 0;

// Karakter ve hediye gösterimi
function karakterVeHediyeGoster() {
    const karakterPath = localStorage.getItem("secilenKarakter");
    const hediyePath = localStorage.getItem("alinanHediye");

    const container = document.getElementById("karakterVeHediye");
    container.innerHTML = ""; // Önceki içeriği temizle

    if (karakterPath) {
        const karakterImg = document.createElement("img");
        karakterImg.src = "assets/" + karakterPath;
        karakterImg.style.width = "100px";
        karakterImg.style.height = "100px";
        karakterImg.alt = "Karakter";
        container.appendChild(karakterImg);
    }

    if (hediyePath) {
        const hediyeImg = document.createElement("img");
        hediyeImg.src = hediyePath;
        hediyeImg.style.width = "100px";
        hediyeImg.style.height = "100px";
        hediyeImg.alt = "Hediye";
        container.appendChild(hediyeImg);
    }
}

// Senaryo oyun fonksiyonları
function senaryoGoster() {
    const senaryo = senaryolar[senaryoIndex];
    document.getElementById("durum").textContent = senaryo.durum;

    const cevaplarDiv = document.getElementById("cevaplar");
    cevaplarDiv.innerHTML = "";

    senaryo.cevaplar.forEach((cevap) => {
        const cevapBtn = document.createElement("button");
        cevapBtn.textContent = cevap.metin;
        cevapBtn.addEventListener("click", () => cevapKontrol(cevap.dogru, cevap.mesaj));
        cevaplarDiv.appendChild(cevapBtn);
    });
}

function cevapKontrol(dogru, mesaj) {
    if (dogru) {
        dogruCevapSayisi++;
        mesajKutusuGoster(mesaj, "https://image.pollinations.ai/prompt/onay%20gif?width=200&height=200&nologo=true");
    } else {
        yanlisCevapSayisi++;
        mesajKutusuGoster(mesaj, "https://image.pollinations.ai/prompt/tekrar%20dene%20png?width=200&height=200&nologo=true");
    }

    if (yanlisCevapSayisi === 3) {
        window.location.href = "https://piga-ai.onrender.com";
    } else if (senaryoIndex === senaryolar.length - 1) {
        oyunBitti();
    } else {
        senaryoIndex++;
        senaryoGoster();
    }
}

function mesajKutusuGoster(mesaj, resim) {
    const notification = document.getElementById("notification");
    const notificationImage = document.getElementById("notificationImage");
    const notificationMessage = document.getElementById("notificationMessage");

    notificationImage.src = resim;
    notificationMessage.textContent = mesaj;
    notification.style.display = "flex";

    setTimeout(() => {
        notification.style.display = "none";
    }, 7000);
}

function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}

function oyunBitti() {
    localStorage.setItem("senaryoTamamlandi", "true"); // Senaryonun tamamlandığını işaretle
    window.location.href = "market.html"; // Markete geri dön
}

senaryoGoster();
karakterVeHediyeGoster();