document.addEventListener("DOMContentLoaded", function() {
    let okulResmi = document.getElementById("okulResmi");
    if (okulResmi) {
        okulResmi.classList.add("yakinlas");

        okulResmi.addEventListener("transitionend", function() {
            window.location.href = "karaktersecim.html";
        });
    }
});

function karakterSec(gorsel) {
    localStorage.setItem("secilenKarakter", gorsel);
    window.location.href = "hafiza.html"; // hafiza.html sayfasına yönlendir
}