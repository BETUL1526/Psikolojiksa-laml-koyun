document.addEventListener('DOMContentLoaded', () => {
    const letterContentDiv = document.getElementById('letterContent');
    const mektupOlusturButton = document.querySelector('.button-buyuk-zarf'); // Büyük zarf butonu

    const senaryolar = [
        {
            ozellikler: ["meraklı", "öğrenmeye açık"],
            oneriler: [
                "Yeni bilgiler edinmek için araştırmalar yapmaya devam et. Farklı kaynaklardan öğrenerek vizyonunu genişletebilirsin.",
                "Öğrendiklerini başkalarıyla paylaşmak ve tartışmak, bilgilerini pekiştirmeni ve yeni bakış açıları kazanmanı sağlayacaktır."
            ]
        },
        {
            ozellikler: ["yardımsever", "düşünceli"],
            oneriler: [
                "Çevrendeki insanlara destek olmaya devam et. Küçük iyilikler bile büyük farklar yaratabilir.",
                "Başkalarının ihtiyaçlarını anlamaya çalışmak ve onlara karşı duyarlı olmak, ilişkilerini güçlendirecektir."
            ]
        },
        {
            ozellikler: ["sabırlı", "azimli"],
            oneriler: [
                "Ulaşmak istediğin hedeflere doğru istikrarlı bir şekilde ilerlemeye devam et. Küçük adımlar zamanla büyük sonuçlar doğuracaktır.",
                "Karşılaştığın zorluklar karşısında pes etmemek ve azmini korumak, başarıya ulaşmanda önemli bir anahtar olacaktır."
            ]
        },
        {
            ozellikler: ["mantıklı", "problem çözme odaklı"],
            oneriler: [
                "Sorunlara analitik bir yaklaşımla çözüm üretmeye devam et. Farklı bakış açıları geliştirmek işe yarayabilir.",
                "Karar verirken mantığını ve kanıtları ön planda tutmak, daha doğru ve etkili sonuçlar elde etmeni sağlayacaktır."
            ]
        },
        {
            ozellikler: ["yaratıcı", "hayal gücü yüksek"],
            oneriler: [
                "Hayal gücünü serbest bırakmaktan çekinme. Yeni fikirler üretmek ve sanatsal çalışmalar yapmak sana ilham verecektir.",
                "Yaratıcılığını farklı alanlarda kullanarak özgün projeler geliştirebilir ve kendini ifade etmenin yeni yollarını keşfedebilirsin."
            ]
        },
        {
            ozellikler: ["empatik", "anlayışlı"],
            oneriler: [
                "Başkalarının duygularını anlamaya çalışmak ve onlara destek olmak, güçlü ve sağlıklı ilişkiler kurmanı sağlayacaktır.",
                "Farklı insanların bakış açılarını anlamaya çalışmak, daha hoşgörülü ve yapıcı bir iletişim kurmana yardımcı olacaktır."
            ]
        },
        {
            ozellikler: ["iyimser", "pozitif"],
            oneriler: [
                "Hayata karşı olumlu bir bakış açısı geliştirmeye devam et. Bu, zorluklarla daha kolay başa çıkmanı sağlayacaktır.",
                "Her durumda iyi yönleri görmeye çalışmak ve umudunu korumak, motivasyonunu yüksek tutmana yardımcı olacaktır."
            ]
        },
        {
            ozellikler: ["esnek", "uyumlu"],
            oneriler: [
                "Değişen koşullara hızlı bir şekilde adapte olabilmek, beklenmedik durumlarla başa çıkmanı kolaylaştıracaktır.",
                "Yeni fikirlere ve farklı yaklaşımlara açık olmak, kişisel gelişimine katkı sağlayacaktır."
            ]
        },
        {
            ozellikler: ["çalışkan", "sorumluluk sahibi"],
            oneriler: [
                "Üzerine aldığın görevleri titizlikle yerine getirmeye devam et. Disiplinli olmak başarıya giden yolda önemli bir adımdır.",
                "Sorumluluklarını zamanında ve eksiksiz yerine getirmek, hem kendine hem de çevrendekilere olan güveni artıracaktır."
            ]
        },
        {
            ozellikler: ["açık fikirli", "dürüst"],
            oneriler: [
                "Farklı düşüncelere saygı duymak ve yeni perspektiflere açık olmak, ufkunu genişletecektir.",
                "Kendine ve başkalarına karşı dürüst olmak, sağlam ve güvenilir ilişkiler kurmanı sağlayacaktır."
            ]
        },
        {
            ozellikler: ["cana yakın", "girişken"],
            oneriler: [
                "Yeni insanlarla tanışmaktan ve sosyal çevreni genişletmekten çekinme. Farklı insanlarla kuracağın bağlar sana yeni bakış açıları kazandıracaktır.",
                "İletişim becerilerini kullanarak çevrendeki insanlarla olumlu ilişkiler kurmaya devam et."
            ]
        },
        {
            ozellikler: ["analitik", "meraklı bir zihne sahip"],
            oneriler: [
                "Olayları derinlemesine analiz etmeye ve neden-sonuç ilişkilerini anlamaya çalışmak, problem çözme becerini geliştirecektir.",
                "Merakını takip etmek ve sürekli öğrenme isteği içinde olmak, kişisel gelişimine önemli katkılar sağlayacaktır."
            ]
        },
        {
            ozellikler: ["güçlü iradeli", "kararlı"],
            oneriler: [
                "Hedeflerine ulaşmak için güçlü bir irade göstermeye devam et. Kararlılığın engelleri aşmanda sana yardımcı olacaktır.",
                "Zorluklar karşısında pes etmemek ve azmini korumak, içsel gücünü ortaya çıkarmanı sağlayacaktır."
            ]
        },
        {
            ozellikler: ["yeteneklerinin farkında", "özgüvenli"],
            oneriler: [
                "Kendi yeteneklerinin ve güçlü yönlerinin farkında olmak, kendine olan inancını artıracaktır.",
                "Başarılarından dolayı kendini takdir etmek ve kendine güvenmek, yeni zorlukların üstesinden gelmende sana destek olacaktır."
            ]
        },
        {
            ozellikler: ["duyarlı", "şefkatli"],
            oneriler: [
                "Başkalarının acılarına ve mutluluklarına karşı duyarlı olmak, insan ilişkilerini derinleştirecektir.",
                "Kendine karşı da şefkatli olmak ve hatalarını kabullenmek, psikolojik iyi oluşunu destekleyecektir."
            ]
        },
        {
            ozellikler: ["objektif", "açık fikirli"],
            oneriler: [
                "Olayları kişisel yargılarından bağımsız olarak değerlendirmeye çalışmak, daha adil kararlar almanı sağlayacaktır.",
                "Farklı görüşlere saygı duymak ve yeni fikirlere açık olmak, bakış açını genişletecektir."
            ]
        },
        {
            ozellikler: ["organize", "disiplinli"],
            oneriler: [
                "Günlük veya haftalık planlar yaparak zamanını daha verimli kullanabilir ve hedeflerine odaklanabilirsin.",
                "Disiplinli bir şekilde çalışmak ve sorumluluklarını yerine getirmek, başarıya ulaşmanı kolaylaştıracaktır."
            ]
        },
        {
            ozellikler: ["gelişime açık", "öğrenmeye istekli"],
            oneriler: [
                "Sürekli olarak yeni şeyler öğrenmeye ve kendini geliştirmeye istekli olmak, kişisel ve profesyonel hayatında ilerlemeni sağlayacaktır.",
                "Geri bildirimlere açık olmak ve hatalarından ders çıkarmak, kendini daha da geliştirmeni sağlayacaktır."
            ]
        },
        {
            ozellikler: ["neşeli", "eğlenceli bir ruh haline sahip"],
            oneriler: [
                "Hayata pozitif bir şekilde yaklaşmak ve neşeni korumak, hem kendi mutluluğunu artıracak hem de çevrendekilere enerji verecektir.",
                "Seni mutlu eden aktivitelere zaman ayırmak ve eğlenmek, stresle başa çıkmana yardımcı olacaktır."
            ]
        },
        {
            ozellikler: ["sakin", "kontrollü"],
            oneriler: [
                "Zorlayıcı durumlarla karşılaştığında sakinliğini korumak ve duygularını kontrol altında tutmak, daha sağlıklı kararlar almanı sağlayacaktır.",
                "Stres yönetimi tekniklerini öğrenmek ve uygulamak, iç huzurunu korumana yardımcı olacaktır."
            ]
        }
    ];

    const psikolojikSaglamlikGenelOneriler = [
        "Düzenli olarak egzersiz yapmaya özen göster. Fiziksel aktivite, zihinsel sağlığını olumlu etkiler ve enerji seviyeni yükseltir.",
        "Yeterli ve kaliteli uyku almak, zihinsel fonksiyonlarını ve duygusal dengeni korumak için hayati öneme sahiptir.",
        "Sağlıklı ve dengeli beslenmek, vücudunun ihtiyaç duyduğu enerjiyi sağlar ve genel iyi oluş halini destekler.",
        "Doğayla iç içe olmak, zihni dinlendirir, stresi azaltır ve ruh halini iyileştirir.",
        "Sevdiğin insanlarla düzenli olarak iletişim kurmak ve onlarla vakit geçirmek, duygusal bağlarını güçlendirir ve yalnızlık hissini azaltır.",
        "Hobilerine zaman ayırmak ve keyif aldığın aktivitelerle uğraşmak, stresini azaltır ve yaşamına renk katar.",
        "Minnettar olduğun şeyleri düşünmek ve bunları bir yere yazmak, pozitif odaklanmanı sağlar ve mutluluk düzeyini artırır.",
        "Kendine karşı nazik ve anlayışlı olmak, öz saygını güçlendirir ve hatalarını kabullenmeni kolaylaştırır.",
        "Sınırlarını belirlemek ve 'hayır' demeyi öğrenmek, kendi ihtiyaçlarına öncelik vermeni sağlar ve tükenmişliği önler.",
        "Gerekirse profesyonel yardım almaktan çekinme. Bir uzmanla konuşmak, zorluklarla başa çıkmanda sana destek olabilir."
    ];

    const nefesEgzersizleri = [
        {
            baslik: "Sakinleştirici Derin Nefes",
            yapilisi: "Rahat bir pozisyonda oturun veya uzanın. Bir elinizi karnınıza, diğerini göğsünüze koyun. Burnunuzdan yavaşça derin bir nefes alın, karnınızdaki elin yükseldiğini hissedin. Göğsünüzdeki elin çok az hareket ettiğinden emin olun. Nefesinizi birkaç saniye tutun. Ağzınızdan yavaşça nefesinizi verirken karnınızdaki elin indiğini hissedin. Bu işlemi birkaç kez tekrarlayın.",
            bdtNotu: "Bu egzersiz, vücudunuzun rahatlamasına ve stres seviyenizin düşmesine yardımcı olabilir. Düzenli yapıldığında kaygı ve gerginlik hislerini azaltmaya destek olur."
        },
        {
            baslik: "4-7-8 Nefes Tekniği (Rahatlatıcı Nefes)",
            yapilisi: "Rahat bir pozisyonda oturun. Dudaklarınızı hafifçe aralayın ve ağzınızdan 'hu' sesi çıkararak tüm nefesinizi verin. Dudaklarınızı kapatın ve burnunuzdan 4 saniye boyunca yavaşça nefes alın. Nefesinizi 7 saniye boyunca tutun. Ardından ağzınızdan 8 saniye boyunca yavaşça nefesinizi verin. Bu döngüyü 3-4 kez tekrarlayın.",
            bdtNotu: "Bu teknik, sinir sistemini sakinleştirmeye ve uykuya dalmayı kolaylaştırmaya yardımcı olabilir. Anksiyete ve stresle başa çıkmada etkili bir yöntemdir."
        }
    ];

    const meditasyonOrnekleri = [
        {
            baslik: "Farkındalık Meditasyonu (Basit Başlangıç)",
            yapilisi: "Sessiz bir yere oturun veya uzanın. Gözlerinizi kapatın veya hafifçe aşağıya doğru odaklayın. Nefesinize odaklanın. Herhangi bir çaba göstermeden nefesinizin girişini ve çıkışını fark edin. Zihniniz dağılırsa, dikkatinizi nazikçe tekrar nefesinize yönlendirin. Başlangıçta 5 dakika ile başlayıp süreyi yavaş yavaş artırabilirsiniz.",
            bdtNotu: "Farkındalık meditasyonu, 'şu an'a odaklanmanıza ve düşüncelerinizi yargılamadan gözlemlemenize yardımcı olur. Bu, stres ve kaygı düzeylerini azaltabilir ve duygusal farkındalığınızı artırabilir."
        }
    ];

    function rastgeleSec(dizi) {
        return dizi[Math.floor(Math.random() * dizi.length)];
    }

    const secilenSenaryo = rastgeleSec(senaryolar);
    const secilenOneriGenel = rastgeleSec(psikolojikSaglamlikGenelOneriler);
    const secilenNefes = rastgeleSec(nefesEgzersizleri);
    const secilenMeditasyon = rastgeleSec(meditasyonOrnekleri);

    let fullLetter = `Merhaba sevgili Kaşif!\n\nKeşif Akademisi oyunlarının tüm aşamalarını başarıyla geçtiğin için seni Keşif Akademisi Ekibi olarak yürekten tebrik ederiz! Gösterdiğin dikkat, merak ve azim sayesinde zorlu görevlerin üstesinden geldin.\n\nSeçimlerin bize gösteriyor ki sen ${secilenSenaryo.ozellikler.join(', ')} birisin. Bu özelliklerinin yolculuğunda sana rehberlik edeceğine inanıyoruz. Bu doğrultuda sana bazı önerilerimiz var: ${secilenSenaryo.oneriler.join(' ve ')} Ayrıca ${secilenOneriGenel}\n\nZihinsel ve duygusal sağlığını desteklemenin önemli yollarından biri de nefes egzersizleri ve meditasyondur:\n\nNefes Egzersizi: ${secilenNefes.baslik}\n${secilenNefes.yapilisi}\n${secilenNefes.bdtNotu ? '(' + secilenNefes.bdtNotu + ')' : ''}\n\nMeditasyon Örneği: ${secilenMeditasyon.baslik}\n${secilenMeditasyon.yapilisi}\n${secilenMeditasyon.bdtNotu ? '(' + secilenMeditasyon.bdtNotu + ')' : ''}\n\nUnutma sevgili Kaşif, seni mutlu eden aktiviteler aynı zamanda senin güçlü yönlerindir. Kendine iyi bakmaya ve bu kazanımlarını hayatının diğer alanlarında da kullanmaya devam et!\n\nİyi oluş yolculuğunda başarılar dileriz!\nKeşif Akademisi Ekibi\n\n`;

    fullLetter += `Daha fazla keşif yapmak ve yeni şeyler öğrenmek istersen buraya göz atabilirsin: <a href="https://piga-ai.onrender.com" target="_blank">Keşif Dünyası</a>`;

    letterContentDiv.innerHTML = fullLetter;
});