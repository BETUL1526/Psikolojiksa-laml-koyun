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
