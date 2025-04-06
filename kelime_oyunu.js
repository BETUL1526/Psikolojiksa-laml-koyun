document.addEventListener('DOMContentLoaded', () => {
    const oyunAlani = document.querySelector('.oyun-alani');
    const ipucuAlani = document.getElementById('ipucu-alani');
    const kelimeAlani = document.getElementById('kelime-alani');
    const harfGiris = document.getElementById('harf-giris');
    const geriBildirim = document.getElementById('geri-bildirim');
    const bdtTepkiKutusu = document.getElementById('bdt-tepki-kutusu');
    const bdtTepkiMetni = document.getElementById('bdt-tepki-metni');
    const tatliItem = document.getElementById('tatli-item');
    const karakterVeHediyelerDiv = document.getElementById('karakterVeHediyelerKelime');
    let bdtButonlarAlani;
    let yeniSoruButonu;
    let chatbotBaglanButonu;

    const kelimeler = [
        {
            kelime: "ÜZÜNTÜ",
            ipucu: "Bir şeyini kaybettiğinde ya da canın sıkıldığında hissettiğin o boşluk hissi.",
            bdtTepkisi: "Sevdiğin bir şey gittiğinde ya da işler yolunda gitmediğinde üzüntü hissetmen çok doğal. Bu duyguyu yaşamak önemli ama uzun sürerse Duygu Dedektifi Ol! Üzgün hissettiğinde bir yere yaz: 1. Seni ne üzdü? 2. Duygun ne kadar güçlü? 3. O an ne düşünüyordun? Bunu birkaç gün yapınca, üzüntünü neyin tetiklediğini görebilirsin. Belki de sürekli aynı şeyler yüzünden üzülüyorsundur. İşte o zaman, bu düşünceleri değiştirmek için neler yapabileceğini düşünebilirsin. Unutma, her yağmurun ardından güneş açar. Üzüntü de geçicidir."
        },
        {
            kelime: "HAYALKIRIKLIĞI",
            ipucu: "Bir şey ummuştun ama olmadı, işte o anki his.",
            bdtTepkisi: "Hayal kırıklığı, beklentilerin tutmayınca ortaya çıkar. Belki beklentilerin çok yüksekti. Beklentilerini Gözden Geçir! Seni hayal kırıklığına uğratan olayı ve o olayla ilgili ne beklediğini yaz bir yere. Sonra da kendine şu soruları sor: Bu beklentim gerçekten olası mıydı? Benim elimde olan şeyler nelerdi? Bu durumu başka açılardan da düşünebilir miyim? Belki de bir dahaki sefere daha gerçekçi beklentiler koyabilirsin. Unutma, bazen işler istediğimiz gibi gitmez. Her düşüş yeni bir kalkış için fırsattır."
        },
        {
            kelime: "ÖFKE",
            ipucu: "Birine çok sinirlendiğinde ya da bir şeye haksızlık edildiğini düşündüğünde hissettiğin o gerginlik.",
            bdtTepkisi: "Öfkelenmek bazen normaldir, özellikle haksızlığa uğradığını düşünüyorsan. Ama kontrolü kaybedip öfkeyle hareket etmek hem sana hem de çevrendekilere zarar verebilir. Sakinleşme Molası Ver (Derin Nefes)! Öfkelendiğini hissettiğin anlarda, hemen dur. Otur ya da ayakta kal fark etmez. Burnundan yavaşça derin bir nefes al (4 saniye kadar sürsün). Birkaç saniye nefesini tut ve sonra ağzından yavaşça ver (6 saniye kadar sürsün). Bunu 5-10 kere tekrarla. Bu basit nefes egzersizi, kalbinin daha yavaş atmasına ve sakinleşmene yardımcı olabilir. Her sinirlendiğinde deneyebilirsin. Güç, öfkeni kontrol edebilmektir."
        },
        {
            kelime: "KAYGI",
            ipucu: "Gelecekle ilgili belirsizlikler ya da önemli bir olay öncesinde hissettiğin o huzursuzluk.",
            bdtTepkisi: "Kaygı, gelecekle ilgili belirsizlikler yüzünden olabilir. Çoğu endişe gerçekleşmez. 'Şimdi ve Burada' Egzersizi Yap (5 Duyu)! Kaygılı hissettiğinde, bulunduğun ortama odaklan. Şunları fark etmeye çalış: 5 tane gördüğün şeyin adını söyle. 4 tane dokunduğun şeyin ne hissettirdiğini söyle. 3 tane duyduğun sesi fark et. 2 tane kokuyu ayırt et (olmasa bile hayal et). 1 tane tadı hatırla. Bu egzersiz, zihnini gelecekteki endişelerden uzaklaştırıp ana odaklanmana yardımcı olur. Şu ana odaklanmak ve küçük adımlarla ilerlemek seni rahatlatacaktır."
        },
        {
            kelime: "YALNIZLIK",
            ipucu: "Kendini kimse anlamıyormuş gibi hissettiğin ya da etrafında kimse yokmuş gibi hissettiğin o buruk duygu.",
            bdtTepkisi: "Yalnızlık, sosyal bağlantı ihtiyacımızın karşılanmaması sonucu ortaya çıkan bir duygudur. Herkes zaman zaman yalnız hissedebilir. Ancak uzun süren yalnızlık mutsuzluğa yol açabilir. Küçük Bir Adım At (Sosyal Bağlantı)! Yalnız hissettiğinde, güvendiğin bir arkadaşına ya da aile üyesine mesaj atabilir ya da onu arayabilirsin. Belki de ortak bir aktivite yapmak için plan yapabilirsiniz. Eğer bu mümkün değilse, ilgi duyduğun bir konuda bir kulübe katılmayı ya da yeni bir hobi edinmeyi düşünebilirsin. Küçük bir sosyal etkileşim bile yalnızlık hissini azaltmaya yardımcı olabilir. İlk adım zor olabilir ama denemekten çekinme. Aslında etrafında seni önemseyen insanlar olabilir."
        }
    ];

    let aktifKelimeIndex = 0;
    let aktifKelime = kelimeler[aktifKelimeIndex].kelime;
    let dogruTahminler = Array(aktifKelime.length).fill("");

    function kelimeyiGoster() {
        kelimeAlani.innerHTML = '';
        for (let i = 0; i < aktifKelime.length; i++) {
            const kutu = document.createElement('div');
            kutu.classList.add('harf-kutusu');
            kutu.textContent = dogruTahminler[i];
            kelimeAlani.appendChild(kutu);
        }
    }

    function ipucunuGoster() {
        ipucuAlani.textContent = kelimeler[aktifKelimeIndex].ipucu;
    }

    function oyunaBasla() {
        aktifKelimeIndex = 0;
        aktifKelime = kelimeler[aktifKelimeIndex].kelime;
        dogruTahminler = Array(aktifKelime.length).fill("");
        ipucunuGoster();
        kelimeyiGoster();
        harfGiris.value = '';
        harfGiris.disabled = false;
        harfGiris.classList.remove('gizli');
        ipucuAlani.classList.remove('gizli');
        kelimeAlani.classList.remove('gizli');
        bdtTepkiKutusu.classList.add('gizli');
        if (bdtButonlarAlani) {
            bdtButonlarAlani.remove();
        }
        oyunAlani.classList.remove('arkaplan-kaybol');

        karakterVeHediyeleriGoster(); // Karakter ve ödülleri göster
    }

    function harfKontrol(girilenHarf) {
        girilenHarf = girilenHarf.toUpperCase();
        let dogruTahminVarMi = false;
        for (let i = 0; i < aktifKelime.length; i++) {
            if (aktifKelime[i] === girilenHarf) {
                dogruTahminler[i] = girilenHarf;
                dogruTahminVarMi = true;
            }
        }
        kelimeyiGoster();
        return dogruTahminVarMi;
    }

    function kelimeTamamlandiMi() {
        return dogruTahminler.join("") === aktifKelime;
    }

    function bdtTepkisiGoster() {
        oyunAlani.classList.add('arkaplan-kaybol'); // CSS ile arka planı kaldırabiliriz (isteğe bağlı)
        ipucuAlani.classList.add('gizli'); // İpucu alanını gizle
        kelimeAlani.classList.add('gizli'); // Kelime alanını gizle
        harfGiris.classList.add('gizli'); // Harf girişini gizle
        geriBildirim.classList.add('gizli'); // Geri bildirimi de gizleyelim

        bdtTepkiMetni.textContent = kelimeler[aktifKelimeIndex].bdtTepkisi;
        const rastgeleRenk = '#' + Math.floor(Math.random()*16777215).toString(16);
        bdtTepkiKutusu.style.backgroundColor = rastgeleRenk;
        const tatliIkonlar = ["😊", "⭐", "🌸", "👍", "💙", "💚", "💛", "💜"];
        const rastgeleIkon = tatliIkonlar[Math.floor(Math.random() * tatliIkonlar.length)];
        tatliItem.textContent = rastgeleIkon;
        bdtTepkiKutusu.classList.remove('gizli');
        harfGiris.disabled = true; // Girişi devre dışı bırak

        // Butonları oluştur
        bdtButonlarAlani = document.createElement('div');
        bdtButonlarAlani.classList.add('bdt-butonlar');

        yeniSoruButonu = document.createElement('button');
        yeniSoruButonu.textContent = 'Yeni Soru';
        yeniSoruButonu.classList.add('bdt-butonu', 'yeni-soru-butonu');
        yeniSoruButonu.addEventListener('click', sonrakiKelime);
        bdtButonlarAlani.appendChild(yeniSoruButonu);

        chatbotBaglanButonu = document.createElement('button');
        chatbotBaglanButonu.textContent = 'BDT Chatbot\'a Bağlan';
        chatbotBaglanButonu.classList.add('bdt-butonu', 'chatbot-baglan-butonu');
        chatbotBaglanButonu.addEventListener('click', () => {
            window.open('https://piga-ai.onrender.com', '_blank');
        });
        bdtButonlarAlani.appendChild(chatbotBaglanButonu);

        oyunAlani.appendChild(bdtButonlarAlani);
    }

    function sonrakiKelime() {
        aktifKelimeIndex++;
        if (aktifKelimeIndex < kelimeler.length) {
            aktifKelime = kelimeler[aktifKelimeIndex].kelime;
            dogruTahminler = Array(aktifKelime.length).fill("");
            ipucunuGoster();
            kelimeyiGoster();
            harfGiris.value = '';
            harfGiris.disabled = false; // Girişi tekrar aktif et
            harfGiris.classList.remove('gizli');
            ipucuAlani.classList.remove('gizli');
            kelimeAlani.classList.remove('gizli');
            bdtTepkiKutusu.classList.add('gizli');
            if (bdtButonlarAlani) {
                bdtButonlarAlani.remove();
            }
            oyunAlani.classList.remove('arkaplan-kaybol'); // Arka planı geri getir (isteğe bağlı)
            harfGiris.focus();
        } else {
            oyunBitti(); // Tüm kelimeler bittiğinde oyunBitti fonksiyonunu çağır
        }
    }

    function oyunBitti() {
        ipucuAlani.textContent = "Tebrikler, tüm kelimeleri buldunuz!";
        kelimeAlani.innerHTML = '';
        harfGiris.disabled = true;
        if (bdtButonlarAlani) {
            bdtButonlarAlani.remove();
        }
        // Oyun bittiğinde mektup.html'e yönlendir
        window.location.href = "mektup.html";
    }

    harfGiris.addEventListener('input', function() {
        const girilenHarf = this.value.slice(-1); // Sadece son girilen harfi al
        if (girilenHarf && harfKontrol(girilenHarf)) {
            geriBildirim.classList.add('gizli');
            this.value = ''; // Giriş alanını temizle
            if (kelimeTamamlandiMi()) {
                bdtTepkisiGoster();
            }
        } else if (girilenHarf) {
            geriBildirim.textContent = "Yanlış harf!";
            geriBildirim.classList.remove('gizli');
            setTimeout(() => geriBildirim.classList.add('gizli'), 500); // Kısa süreli geri bildirim
            this.value = ''; // Giriş alanını temizle
        }
    });

    function karakterVeHediyeleriGoster() {
        karakterVeHediyelerDiv.innerHTML = ''; // Önceki içeriği temizle

        const secilenKarakter = localStorage.getItem("secilenKarakter");
        const alinanHediye = localStorage.getItem("alinanHediye");
        const ikinciHediye = localStorage.getItem("ikinciHediye");
        const ucuncuHediye = localStorage.getItem("ucuncuHediye");

        if (secilenKarakter) {
            const karakterImg = document.createElement('img');
            karakterImg.src = "assets/" + secilenKarakter;
            karakterImg.alt = "Seçilen Karakter";
            karakterVeHediyelerDiv.appendChild(karakterImg);
        }

        if (alinanHediye) {
            const hediyeImg = document.createElement('img');
            hediyeImg.src = alinanHediye;
            hediyeImg.alt = "Alınan Hediye";
            karakterVeHediyelerDiv.appendChild(hediyeImg);
        }

        if (ikinciHediye) {
            const ikinciHediyeImg = document.createElement('img');
            ikinciHediyeImg.src = ikinciHediye;
            ikinciHediyeImg.alt = "İkinci Hediye";
            karakterVeHediyelerDiv.appendChild(ikinciHediyeImg);
        }

        if (ucuncuHediye) {
            const ucuncuHediyeImg = document.createElement('img');
            ucuncuHediyeImg.src = ucuncuHediye;
            ucuncuHediyeImg.alt = "Üçüncü Hediye";
            karakterVeHediyelerDiv.appendChild(ucuncuHediyeImg);
        }
    }

    oyunaBasla();
});
