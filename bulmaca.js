document.addEventListener('DOMContentLoaded', function() {
    const karakterVeHediyelerDiv = document.getElementById('karakterVeHediyelerBulmaca');
    const negativeThoughtElement = document.getElementById('negative-thought');
    const optionButtons = document.querySelectorAll('.option-button');
    const feedbackArea = document.getElementById('feedback-area');
    const animationArea = document.getElementById('animation-area');

    const puzzles = [
        {
            negative: "Ben hiçbir şeyi doğru yapamıyorum.",
            positive: "Hata yapmak insanidir ve hatalarımdan ders çıkarabilirim.",
            options: [
                "Hata yapmak insanidir ve hatalarımdan ders çıkarabilirim.",
                "Her zaman mükemmel olmalıyım.",
                "Başarısızlık benim kaderim.",
                "Denememek en iyisi."
            ]
        },
        {
            negative: "Kimse beni sevmiyor.",
            positive: "Çevremde beni önemseyen insanlar var.",
            options: [
                "Çevremde beni önemseyen insanlar var.",
                "Herkes beni eleştiriyor.",
                "Yalnız kalmalıyım.",
                "Sevilmek için kusursuz olmalıyım."
            ]
        },
        {
            negative: "Herkes benden daha başarılı.",
            positive: "Herkesin kendi yolculuğu ve zaman çizelgesi farklıdır.",
            options: [
                "Herkesin kendi yolculuğu ve zaman çizelgesi farklıdır.",
                "Ben her zaman geride kalacağım.",
                "Başkalarının başarıları beni kıskandırıyor.",
                "Kendimi başkalarıyla kıyaslamalıyım."
            ]
        },
        {
            negative: "Gelecek çok kötü olacak.",
            positive: "Geleceği kesin olarak bilemeyiz ve olumlu şeyler de olabilir.",
            options: [
                "Geleceği kesin olarak bilemeyiz ve olumlu şeyler de olabilir.",
                "Hiçbir şey düzelmeyecek.",
                "Endişelenmek en doğrusu.",
                "Kontrol bende değil."
            ]
        },
        {
            negative: "Çok çaresizim.",
            positive: "Yardım isteyebilir ve destek alabilirim.",
            options: [
                "Yardım isteyebilir ve destek alabilirim.",
                "Her şeyi tek başıma halletmeliyim.",
                "Kimse bana yardım edemez.",
                "Pes etmek en kolayı."
            ]
        }
    ];

    let currentPuzzleIndex = 0;
    const numberOfPuzzlesToShow = 5; // Gösterilecek bulmaca sayısı

    function karakterVeHediyeleriGoster() {
        karakterVeHediyelerDiv.innerHTML = ''; // Önceki içeriği temizle

        const secilenKarakter = localStorage.getItem("secilenKarakter");
        const alinanHediye = localStorage.getItem("alinanHediye");
        const ikinciHediye = localStorage.getItem("ikinciHediye");

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
    }

    function loadPuzzle() {
        if (currentPuzzleIndex < numberOfPuzzlesToShow) {
            currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
            negativeThoughtElement.textContent = currentPuzzle.negative;

            const shuffledOptions = [...currentPuzzle.options].sort(() => Math.random() - 0.5);

            optionButtons.forEach((button, index) => {
                button.textContent = shuffledOptions[index];
                button.dataset.correct = (shuffledOptions[index] === currentPuzzle.positive).toString();
                button.classList.remove('correct', 'incorrect');
                button.disabled = false;
            });

            feedbackArea.textContent = "";
            feedbackArea.className = "feedback";
            animationArea.innerHTML = "";
        } else {
            // Oyun sonu mesajı göster
            negativeThoughtElement.textContent = "Tebrikler, oyunu tamamladınız!";
            optionButtons.forEach(button => {
                button.style.display = 'none'; // Butonları gizle
            });
            feedbackArea.textContent = "";
            animationArea.innerHTML = ""; // Konfeti animasyonu kaldırıldı
        }
    }

    function checkAnswer(selectedButton) {
        const isCorrect = selectedButton.dataset.correct === "true";

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            } else if (button === selectedButton) {
                button.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            const correctOptionText = selectedButton.textContent;
            let bdtPositiveResponse = "";

            switch (currentPuzzle.negative) {
                case "Ben hiçbir şeyi doğru yapamıyorum.":
                    if (correctOptionText === "Hata yapmak insanidir ve hatalarımdan ders çıkarabilirim.") {
                        bdtPositiveResponse = "Kesinlikle! Hatalar öğrenme sürecinin doğal ve değerli bir parçasıdır. Kendine karşı nazik olmayı unutma.";
                    }
                    break;
                case "Kimse beni sevmiyor.":
                    if (correctOptionText === "Çevremde beni önemseyen insanlar var.") {
                        bdtPositiveResponse = "Doğru! İlişkiler karşılıklıdır ve etrafında seni seven, değer veren insanlar olduğuna odaklanmak önemlidir.";
                    }
                    break;
                case "Herkes benden daha başarılı.":
                    if (correctOptionText === "Herkesin kendi yolculuğu ve zaman çizelgesi farklıdır.") {
                        bdtPositiveResponse = "Aynen öyle! Kendi hızında ilerlemek ve kendi başarılarını kutlamak çok daha anlamlıdır.";
                    }
                    break;
                case "Gelecek çok kötü olacak.":
                    if (correctOptionText === "Geleceği kesin olarak bilemeyiz ve olumlu şeyler de olabilir.") {
                        bdtPositiveResponse = "Harika bir bakış açısı! Gelecek belirsizdir ve olumlu olasılıkları göz ardı etmemek önemlidir.";
                    }
                    break;
                case "Çok çaresizim.":
                    if (correctOptionText === "Yardım isteyebilir ve destek alabilirim.") {
                        bdtPositiveResponse = "Evet! Yardım istemek bir güç işaretidir ve zor zamanlarda destek almak iyileşmene yardımcı olur.";
                    }
                    break;
            }
            displaySweetPositiveFeedback(bdtPositiveResponse);
            currentPuzzleIndex++;
            setTimeout(loadPuzzle, 2000);
        } else {
            const selectedOptionText = selectedButton.textContent;
            let bdtResponse = "";

            switch (currentPuzzle.negative) {
                case "Ben hiçbir şeyi doğru yapamıyorum.":
                    if (selectedOptionText === "Her zaman mükemmel olmalıyım.") {
                        bdtResponse = "Mükemmeliyetçilik, kaygı ve stres yaratabilir. Hata yapmak öğrenmenin bir parçasıdır.";
                    } else if (selectedOptionText === "Başarısızlık benim kaderim.") {
                        bdtResponse = "Geçmişteki deneyimlerin geleceğini belirlemez. Her yeni deneme bir fırsattır.";
                    } else if (selectedOptionText === "Denememek en iyisi.") {
                        bdtResponse = "Denemekten kaçınmak, potansiyel başarıları ve gelişimi engeller. Küçük adımlarla başlayabilirsin.";
                    }
                    break;
                case "Kimse beni sevmiyor.":
                    if (selectedOptionText === "Herkes beni eleştiriyor.") {
                        bdtResponse = "Eleştiriler incitici olabilir, ancak herkesin düşüncesi farklıdır. Seni seven ve değer veren insanlar da var.";
                    } else if (selectedOptionText === "Yalnız kalmalıyım.") {
                        bdtResponse = "Yalnızlık hissi zorlayıcı olabilir. Sosyal bağlantılar kurmak ve sürdürmek önemlidir.";
                    } else if (selectedOptionText === "Sevilmek için kusursuz olmalıyım.") {
                        bdtResponse = "Sevgi koşulsuz olmalıdır. Kendin olduğun için değerli ve sevilebilirsin.";
                    }
                    break;
                case "Herkes benden daha başarılı.":
                    if (selectedOptionText === "Ben her zaman geride kalacağım.") {
                        bdtResponse = "Kendini başkalarıyla kıyaslamak motivasyonunu düşürebilir. Kendi gelişimine odaklanmak daha yapıcıdır.";
                    } else if (selectedOptionText === "Başkalarının başarıları beni kıskandırıyor.") {
                        bdtResponse = "Kıskançlık yerine, başkalarının başarılarından ilham alabilir ve kendi hedeflerine odaklanabilirsin.";
                    } else if (selectedOptionText === "Kendimi başkalarıyla kıyaslamalıyım.") {
                        bdtResponse = "Herkesin yolculuğu farklıdır. Kendi ilerlemeni kendi ölçütlerinle değerlendirmek önemlidir.";
                    }
                    break;
                case "Gelecek çok kötü olacak.":
                    if (selectedOptionText === "Hiçbir şey düzelmeyecek.") {
                        bdtResponse = "Geleceği kesin olarak bilemeyiz. Olumlu olasılıkları da göz önünde bulundurmak önemlidir.";
                    } else if (selectedOptionText === "Endişelenmek en doğrusu.") {
                        bdtResponse = "Aşırı endişe, durumu değiştirmene yardımcı olmaz. Çözüm odaklı düşünmeye çalışabilirsin.";
                    } else if (selectedOptionText === "Kontrol bende değil.") {
                        bdtResponse = "Hayatta kontrol edemeyeceğimiz şeyler olsa da, kendi tepkilerimizi ve çabalarımızı kontrol edebiliriz.";
                    }
                    break;
                case "Çok çaresizim.":
                    if (selectedOptionText === "Her şeyi tek başıma halletmeliyim.") {
                        bdtResponse = "Yardım istemek güçsüzlük değil, aksine bir güç işaretidir. Destek almaktan çekinme.";
                    } else if (selectedOptionText === "Kimse bana yardım edemez.") {
                        bdtResponse = "Zor zamanlarda güvendiğin insanlardan destek istemeyi deneyebilirsin. Profesyonel yardım da alabilirsin.";
                    } else if (selectedOptionText === "Pes etmek en kolayı.") {
                        bdtResponse = "Zorluklar karşısında pes etmek yerine, küçük adımlarla ilerlemeye çalışmak uzun vadede daha iyi hissettirebilirsin.";
                    }
                    break;
            }
            displaySweetFeedback(bdtResponse);
            setTimeout(loadPuzzle, 2000);
        }
    }

    function displayFeedback(message, isCorrect) {
        feedbackArea.textContent = message;
        feedbackArea.className = `feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
    }

    function displaySweetFeedback(message) {
        const sweetBox = document.createElement('div');
        sweetBox.classList.add('sweet-feedback');
        sweetBox.textContent = message;

        sweetBox.style.backgroundColor = '#fce4ec'; /* Açık pembe (yanlış cevap) */
        sweetBox.style.border = '2px solid #f48fb1'; /* Pembe (yanlış cevap) */
        sweetBox.style.borderRadius = '10px';
        sweetBox.style.padding = '15px';
        sweetBox.style.marginTop = '10px';
        sweetBox.style.textAlign = 'left';
        sweetBox.style.position = 'relative';
        sweetBox.style.animation = 'slideIn 0.5s ease-out';

        const heartIcon = document.createElement('span');
        heartIcon.textContent = '❤️'; // Kalp ikonu
        heartIcon.style.fontSize = '2em';
        heartIcon.style.position = 'absolute';
        heartIcon.style.top = '-15px';
        heartIcon.style.left = '-15px';

        sweetBox.appendChild(heartIcon);
        feedbackArea.innerHTML = '';
        feedbackArea.appendChild(sweetBox);
    }

    function displaySweetPositiveFeedback(message) {
        const sweetBox = document.createElement('div');
        sweetBox.classList.add('sweet-feedback', 'positive-feedback');
        sweetBox.textContent = message;

        sweetBox.style.backgroundColor = '#e0f7fa'; /* Açık mavi (doğru cevap) */
        sweetBox.style.border = '2px solid #81d4fa'; /* Mavi (doğru cevap) */
        sweetBox.style.borderRadius = '10px';
        sweetBox.style.padding = '15px';
        sweetBox.style.marginTop = '10px';
        sweetBox.style.textAlign = 'left';
        sweetBox.style.position = 'relative';
        sweetBox.style.animation = 'slideIn 0.5s ease-out';

        const bearIcon = document.createElement('span');
        bearIcon.textContent = '🐻'; // Ayı ikonu
        bearIcon.style.fontSize = '2em';
        bearIcon.style.position = 'absolute';
        bearIcon.style.top = '-15px';
        bearIcon.style.left = '-15px';

        sweetBox.appendChild(bearIcon);
        feedbackArea.innerHTML = '';
        feedbackArea.appendChild(sweetBox);
    }

    function showAnimation(animationHTML) {
        animationArea.innerHTML = animationHTML;
    }

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            checkAnswer(this);
        });
    });

    karakterVeHediyeleriGoster(); // Sayfa yüklendiğinde karakter ve hediyeleri göster
    loadPuzzle();
});