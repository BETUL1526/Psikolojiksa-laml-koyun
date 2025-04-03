const senaryolar = [
    {
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

function senaryoGoster() {
    const senaryo = senaryolar[senaryoIndex];
    document.getElementById("durum").textContent = senaryo.durum;

    const cevaplarDiv = document.getElementById("cevaplar");
    cevaplarDiv.innerHTML = "";

    senaryo.cevaplar.forEach(cevap => {
        const cevapBtn = document.createElement("button");
        cevapBtn.textContent = cevap.metin;
        cevapBtn.addEventListener("click", () => cevapKontrol(cevap.dogru));
        cevaplarDiv.appendChild(cevapBtn);
    });
}

function cevapKontrol(dogru) {
    if (dogru) {
        dogruCevapSayisi++;
        alert("Doğru cevap! Devam et.");
    } else {
        yanlisCevapSayisi++;
        alert("Yanlış cevap! Tekrar dene.");
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

function oyunBitti() {
    const odulImg = document.createElement("img");
    odulImg.src = "assets/oduller/cicekler.jpg";
    odulImg.style.width = "100%";
    odulImg.style.height = "100%";
    odulImg.style.position = "absolute";
    odulImg.style.top = "0";
    odulImg.style.left = "0";
    document.body.appendChild(odulImg);

    const tebrikler = document.createElement("h1");
    tebrikler.textContent = "Sen tam bir psikolojik sağlamlık ustasısın!";
    tebrikler.style.position = "absolute";
    tebrikler.style.top = "50%";
    tebrikler.style.left = "50%";
    tebrikler.style.transform = "translate(-50%, -50%)";
    tebrikler.style.color = "white";
    document.body.appendChild(tebrikler);

    setTimeout(() => {
        window.location.href = "https://piga-ai.onrender.com";
    }, 3000);
}

senaryoGoster(); // senaryoGoster fonksiyonunu çağır