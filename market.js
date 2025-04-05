// market.js

document.addEventListener("DOMContentLoaded", function () {
  const hediyeler = document.querySelectorAll(".hediye");

  hediyeler.forEach((hediye) => {
    hediye.addEventListener("click", () => {
      const secilenHediye = hediye.getAttribute("data-path");

      if (secilenHediye) {
        // 🎁 Hediye localStorage'a kaydediliyor
        localStorage.setItem("alinanHediye", secilenHediye);

        // 🧠 Kullanıcıya bilgi ver
        alert("Hediye seçildi! Şimdi senaryo oyununa geçiyoruz.");

        // 🎮 Senaryo oyununa yönlendirme
        window.location.href = "senaryo.html";
      }
    });
  });
});
şimdi bulmacaları yollayacağım  
        durum: "Arkadaşın sana kırıcı bir şey söyledi.",
        cevaplar: [
            { metin: "Ona bağırırım.", dogru: false },
            { metin: "Ona neden böyle söylediğini sorarım.", dogru: true },
            { metin: "Ona küserim.", dogru: false },
            { metin: "Onu görmezden gelirim.", dogru: false }
        ]
    },
    {
        durum: "Sınavdan düşük not aldın.",
        cevaplar: [
            { metin: "Kendimi aptal hissederim.", dogru: false },
            { metin: "Nerede hata yaptığımı öğrenmeye çalışırım.", dogru: true },
            { metin: "Sınavı umursamam.", dogru: false },
            { metin: "Ağlarım.", dogru: false }
        ]
    },
    {
        durum: "Bir sunum yapman gerekiyor.",
        cevaplar: [
            { metin: "Çok heyecanlanırım.", dogru: false },
            { metin: "Sunuma iyi hazırlanırım.", dogru: true },
            { metin: "Sunum yapmaktan vazgeçerim.", dogru: false },
            { metin: "Sunumu ertelerim.", dogru: false }
        ]
    },
    {
        durum: "Bir hata yaptın.",
        cevaplar: [
            { metin: "Kendimi suçlarım.", dogru: false },
            { metin: "Hatayı düzeltmeye çalışırım.", dogru: true },
            { metin: "Hatayı başkasının üzerine atarım.", dogru: false },
            { metin: "Hatayı görmezden gelirim.", dogru: false }
        ]
    },
    {
        durum: "Bir karar vermen gerekiyor.",
        cevaplar: [
            { metin: "Karar vermekten kaçınırım.", dogru: false },
            { metin: "Seçenekleri değerlendiririm.", dogru: true },
            { metin: "Rastgele bir karar veririm.", dogru: false },
            { metin: "Başkalarının ne dediğine göre karar veririm.", dogru: false }
        ]
    }
];

let senaryoIndex = 0;
let dogruCevapSayisi = 0;
let yanlisCevapSayisi = 0;

//  Karakter ve hediye gösterimi
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

//  Senaryo oyun fonksiyonları
function senaryoGoster() {
    const senaryo = senaryolar[senaryoIndex];
    document.getElementById("durum").textContent = senaryo.durum;

    const cevaplarDiv = document.getElementById("cevaplar");
    cevaplarDiv.innerHTML = "";

    senaryo.cevaplar.forEach((cevap) => {
        const cevapBtn = document.createElement("button");
        cevapBtn.textContent = cevap.metin;
        cevapBtn.addEventListener("click", () => cevapKontrol(cevap.dogru));
        cevaplarDiv.appendChild(cevapBtn);
    });
}

function cevapKontrol(dogru) {
    if (dogru) {
        dogruCevapSayisi++;
        mesajKutusuGoster("Harika bir seçim! Bu, durumu ele almanın etkili bir yolu.", "https://image.pollinations.ai/prompt/onay%20gif?width=200&height=200&nologo=true");
    } else {
        yanlisCevapSayisi++;
        mesajKutusuGoster("Bu tepki, otomatik bir düşünce olabilir. Biraz daha derinlemesine düşünerek farklı bir seçenek bulabilirsin.", "https://image.pollinations.ai/prompt/tekrar%20dene%20png?width=200&height=200&nologo=true");
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
    const mesajKutusu = document.createElement("div");
    mesajKutusu.classList.add("mesaj-kutusu");

    const mesajMetni = document.createElement("p");
    mesajMetni.textContent = mesaj;
    mesajKutusu.appendChild(mesajMetni);

    const mesajResmi = document.createElement("img");
    mesajResmi.src = resim;
    mesajKutusu.appendChild(mesajResmi);

    document.body.appendChild(mesajKutusu);

    setTimeout(() => {
        document.body.removeChild(mesajKutusu);
    }, 3000);
}

function oyunBitti() {
    localStorage.setItem("senaryoTamamlandi", "true"); // Senaryonun tamamlandığını işaretle
    window.location.href = "market.html"; // Markete geri dön
}

senaryoGoster();
karakterVeHediyeGoster();