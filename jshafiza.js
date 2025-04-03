document.addEventListener("DOMContentLoaded", function () {
    const oyunAlani = document.getElementById("hafizaOyunAlani");
    const kartlar = ["Güçlüyüm", "Başarılıyım", "Mutluyum", "Özgüvenliyim", "Güçlüyüm", "Başarılıyım", "Mutluyum", "Özgüvenliyim"];
    let acikKartlar = [];
    let eslesenKartlar = [];
    let altinSayisi = 0;

    kartlar.sort(() => 0.5 - Math.random());

    function kartTiklama() {
        if (acikKartlar.length < 2 && !acikKartlar.includes(this) && !eslesenKartlar.includes(this)) {
            this.style.backgroundImage = "none";
            this.textContent = this.dataset.metin;
            this.classList.add("acik");
            acikKartlar.push(this);

            if (acikKartlar.length === 2) {
                if (acikKartlar[0].dataset.metin === acikKartlar[1].dataset.metin) {
                    setTimeout(() => {
                        acikKartlar.forEach(kart => kart.remove());
                        eslesenKartlar.push(...acikKartlar);
                        acikKartlar = [];
                        altinSayisi++;
                        altinGuncelle();

                        if (eslesenKartlar.length === kartlar.length) {
                            oyunBitti();
                        }
                    }, 500);
                } else {
                    setTimeout(() => {
                        acikKartlar.forEach(kart => {
                            kart.style.backgroundImage = "url('assets/arkayuz.jpg')";
                            kart.textContent = "";
                            kart.classList.remove("acik");
                        });
                        acikKartlar = [];
                    }, 1000);
                }
            }
        }
    }

    for (let i = 0; i < kartlar.length; i++) {
        const kart = document.createElement("div");
        kart.classList.add("kart");
        kart.dataset.index = i;
        kart.dataset.metin = kartlar[i];
        kart.style.backgroundImage = "url('assets/arkayuz.jpg')";
        kart.addEventListener("click", kartTiklama);
        oyunAlani.appendChild(kart);
    }

    function altinGuncelle() {
        document.getElementById("altinlar").innerHTML = `<img src="assets/altin.png" width="50px">`.repeat(altinSayisi);
    }

    function oyunBitti() {
        let kalp = document.createElement("img");
        kalp.src = "assets/oduller/kalpler.jpg";
        kalp.style.position = "fixed";
        kalp.style.top = "50%";
        kalp.style.left = "50%";
        kalp.style.width = "50px";
        kalp.style.height = "50px";
        kalp.style.transform = "translate(-50%, -50%)";
        kalp.style.transition = "all 2s ease-in-out";
        kalp.style.zIndex = "9999"; // Önde olsun

        document.body.appendChild(kalp);
        
        setTimeout(() => {
            kalp.style.width = "100vw"; // Kalp tüm ekranı kaplasın
            kalp.style.height = "100vh";
        }, 100);

        setTimeout(() => {
            window.location.href = "senaryo.html"; // Senaryo oyununa yönlendirme
        }, 3000); // 3 saniye sonra senaryo oyununa geç
    }
});

