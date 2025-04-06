document.addEventListener("DOMContentLoaded", function () {
    const hediyeler = document.querySelectorAll(".marketItem button"); // Butonlara tıklanmayı dinle

    hediyeler.forEach((button) => {
        button.addEventListener("click", function() {
            const item = this.parentElement.querySelector("h2").textContent; // Ürün adını al
            const imageUrl = this.parentElement.querySelector("img").src; // Ürün görselini al

            if (imageUrl) {
                // 🎁 Hediye localStorage'a kaydediliyor
                const ilkHediyeAlindi = localStorage.getItem("alinanHediye");
                const ikinciHediyeAlindi = localStorage.getItem("ikinciHediye");
                const ucuncuHediyeAlindi = localStorage.getItem("ucuncuHediye");

                if (!ilkHediyeAlindi) {
                    localStorage.setItem("alinanHediye", imageUrl); // İlk hediyeyi kaydet
                    alert("İlk hediye seçildi! Şimdi senaryo oyununa geçiyoruz.");
                    window.location.href = "senaryo.html"; // Senaryoya yönlendir
                } else if (!ikinciHediyeAlindi) {
                    localStorage.setItem("ikinciHediye", imageUrl); // İkinci hediyeyi kaydet
                    alert("İkinci hediye seçildi! Şimdi bulmaca oyununa geçiyoruz.");
                    window.location.href = "bulmaca.html"; // Bulmaca oyununa yönlendir
                } else if (!ucuncuHediyeAlindi) {
                    localStorage.setItem("ucuncuHediye", imageUrl); // Üçüncü hediyeyi kaydet
                    alert("Üçüncü hediye seçildi! Şimdi kelime oyununa geçiyoruz.");
                    window.location.href = "kelime_oyunu.html"; // Kelime oyununa yönlendir
                }
            }
        });
    });
});

// Sayfa yüklendiğinde alınan hediyeleri kontrol et ve yönlendirme yap
document.addEventListener("DOMContentLoaded", function() {
    const alinanHediye = localStorage.getItem("alinanHediye");

    // Eğer hediye alındıysa, alındığı mesajı göster
    if (alinanHediye) {
        document.getElementById("hediyeMesaj").innerText = "Alınan Hediye: " + alinanHediye;
    }

    // Senaryo tamamlanmış mı kontrol et
    if (localStorage.getItem("senaryoTamamlandi") === "true") {
        localStorage.removeItem("senaryoTamamlandi"); // Senaryo tamamlandığı işaretini temizle
        window.location.href = "market.html"; // Markete yönlendir
    }

    // Bulmaca tamamlanmış mı kontrol et
    if (localStorage.getItem("bulmacaTamamlandi") === "true") {
        localStorage.removeItem("bulmacaTamamlandi"); // Bulmaca tamamlandığı işaretini temizle
        window.location.href = "market.html"; // Markete yönlendir
    }

    // Kelime oyunu tamamlanmış mı kontrol et
    if (localStorage.getItem("kelimeTamamlandi") === "true") {
        localStorage.removeItem("kelimeTamamlandi"); // Kelime oyunu tamamlandığı işaretini temizle
        alert("Tebrikler! Oyunlar tamamlandı.");
    }
});