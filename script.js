const slides = [
    {
        image: "assets/nutri-1.png",
        name: "Nutricao estetica",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    },
    {
        image: "assets/nutri-2.png",
        name: "celulites e estrias",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    },
    {
        image: "assets/nutri-3.png",
        name: "Cabelo e unhas",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    },
    {
        image: "assets/nutri-4.png",
        name: "pele",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    },
    {
        image: "assets/nutri-5.png",
        name: "composicao corporal",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    },
    {
        image: "assets/nutri-6.png",
        name: "envelhecimento",
        info: "awedcwa awcdawdca acdwcwda dcawdacd dawcdawdcac dcawdcadaw cadawcadawc adcawdcadcawd adbawdbab adbawdbawd awbadba abdwabda abdwa abyr utbu btuw vruybn bubrt rv ybrv rbybryb"
    }
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
    if (sliderContainer && nextBtn && prevBtn) {
        sliderContainer.style.opacity = 0;
        setTimeout(() => {
            const { image, name, info } = slides[currentSlideIndex];
            sliderContainer.innerHTML = `
                <div class="profile">
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                    <p>${info}</p>
                </div>
            `;
            sliderContainer.style.opacity = 1;
        }, 600); 
    }
}

nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    displaySlides();
})

prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    displaySlides();
});

window.onload = displaySlides;
