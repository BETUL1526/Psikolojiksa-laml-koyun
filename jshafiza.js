<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafıza Oyunu</title>
    <style>
        .kart {
            width: 100px;
            height: 100px;
            background-color: lightgray;
            display: inline-block;
            margin: 10px;
            text-align: center;
            line-height: 100px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="oyunAlani"></div>
    <script>
        const oyunAlani = document.getElementById("oyunAlani");
        const kartlar = [
            "Dayanıklılık", "Umut", "Özşefkat", "Motivasyon", "İnanç", 
            "Dayanıklılık", "Umut", "Özşefkat", "Motivasyon", "İnanç"
        ];
        let secilenKartlar = [];
        let eslesenKartSayisi = 0;

        function karistir(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        karistir(kartlar);

        kartlar.forEach((kelime, index) => {
            const kart = document.createElement("div");
            kart.classList.add("kart");
            kart.dataset.metin = kelime;
            kart.dataset.index = index;
            kart.addEventListener("click", kartTiklama);
            oyunAlani.appendChild(kart);
        });

        function kartTiklama() {
            if (secilenKartlar.length < 2 && !this.classList.contains("acik")) {
                this.textContent = this.dataset.metin;
                this.classList.add("acik");
                secilenKartlar.push(this);
            }

            if (secilenKartlar.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            const [kart1, kart2] = secilenKartlar;
            if (kart1 && kart2 && kart1.dataset.metin === kart2.dataset.metin) {
                kart1.removeEventListener("click", kartTiklama);
                kart2.removeEventListener("click", kartTiklama);
                eslesenKartSayisi += 2;
            } else {
                if (kart1) kart1.textContent = "";
                if (kart2) kart2.textContent = "";
                if (kart1) kart1.classList.remove("acik");
                if (kart2) kart2.classList.remove("acik");
            }
            secilenKartlar = [];
            
            if (eslesenKartSayisi === kartlar.length) {
                setTimeout(() => {
                    alert("Tebrikler! Psikolojik sağlamlık, umut ve özşefkatle güçlenir. Sen harikasın!");
                    window.location.href = "market.html";
                }, 500);
            }
        }
    </script>
</body>
</html>
