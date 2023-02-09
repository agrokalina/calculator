(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const script_button = document.querySelector(".page__button");
    const script_select = document.querySelector("#select1");
    const price = document.querySelector("#price");
    const marja = document.querySelector("#select2");
    const procent = document.querySelector("#salekof");
    const sale = document.querySelector("#sale");
    const region = document.querySelector("#region");
    const resultat = document.querySelector(".page__resultat");
    const noparaceProcent = function() {
        const res = (price.value * marja.value - price.value * marja.value * (procent.value / 100) - price.value * (sale.value / 100)) * region.value;
        resultat.textContent = `Ваш прибуток: ${res.toFixed(1)} грн.`;
        resultat.style.opacity = "1";
    };
    const noparaceSumma = function() {
        const res = (price.value * marja.value - price.value * marja.value * (procent.value / 100) - sale.value) * region.value;
        resultat.textContent = `Ваш прибуток: ${res.toFixed(1)} грн.`;
        resultat.style.opacity = "1";
    };
    const paraceProcent = function() {
        const res = (price.value * (+marja.value + .1) - price.value * (sale.value / 100) - price.value * marja.value * (procent.value / 100)) * region.value;
        resultat.textContent = `Ваш прибуток: ${res.toFixed(1)} грн.`;
        resultat.style.opacity = "1";
    };
    const paraceSumma = function() {
        const res = (price.value * (+marja.value + .1) - sale.value - price.value * marja.value * (procent.value / 100)) * region.value;
        resultat.textContent = `Ваш прибуток: ${res.toFixed(1)} грн.`;
        resultat.style.opacity = "1";
    };
    script_button.addEventListener("click", (function() {
        if (1 === +script_select.value) {
            noparaceProcent();
            console.log("1");
        }
        if (2 === +script_select.value) {
            noparaceSumma();
            console.log("2");
        }
        if (3 === +script_select.value) {
            paraceProcent();
            console.log("3");
        }
        if (4 === +script_select.value) {
            paraceSumma();
            console.log("4");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();