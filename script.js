const slides = [
  {
    image: "assets/nutri-1.png",
    name: "NUTRIÇÃO ESTÉTICA",
    info: "A nutrição aplicada à estética desempenha um papel fundamental na promoção da saúde - considerando o impacto da autoestima na saúde mental, e na melhoria da aparência física das pessoas. Esse campo combina conhecimentos de nutrição e estética para otimizar a alimentação, visando não apenas a saúde geral, mas também aspectos como a pele, cabelo e composição corporal. Ao entender como diferentes nutrientes afetam a beleza e o bem-estar, é possível desenvolver estratégias nutricionais personalizadas que ajudam indivíduos a alcançar seus objetivos estéticos de maneira sustentável e saudável.",
  },
  {
    image: "assets/nutri-2.png",
    name: "CELULITE E ESTRIAS",
    info: "A maior parte dos tratamentos de eficácia comprovada para celulites e estrias estão fora do alcance da nutrição, mas é possível previnir com a alimentação correta. Precisamos ressaltar que esses traços, na maioria dos casos, ocorrem devido ao crescimento e envelhecimento natural do corpo. Logo, uma dieta balanceada com foco na elasticidade e firmeza da pele é indicada. As vitaminas A, B5 e E são ricas em antioxidantes que ajudam a proteger a pele contra a ação dos radicais livres, hidratando-a e melhorando a elasticidade da pele. Já alimentos ricos em potássio (como banana e água de coco), com alto teor de água (como melão e pepino) e alimentos ricos em cafeína (como o chá verde e café) aumentam a eliminação de líquidos do organismo. Essa ação diurética ajuda a “desinchar”.",
  },
  {
    image: "assets/nutri-3.png",
    name: "CABELOS",
    info: "A saúde do cabelo e couro cabeludo é influenciada por uma combinação de fatores genéticos, ambientais e nutricionais. As vitaminas do complexo B (como biotina e ácido pantotênico) desempenham papéis cruciais na manutenção da saúde capilar. A biotina, por exemplo, é conhecida por fortalecer os fios, enquanto o zinco e o ferro são importantes para o crescimento capilar adequado. O selênio, por sua vez, é antioxidante e evita o envelhecimento das células responsáveis por manter o couro cabeludo saudável. É um nutriente que participa ativamente do crescimento e fortalecimento das células capilares.",
  },
  {
    image: "assets/nutri-4.png",
    name: "PELE",
    info: "Durante qualquer tratamento para a pele, é preciso lembrar que estamos lidando com um órgão vivo, que deve ser tratado de dentro para fora. A vitamina B3, também chamada de niacinamida, tem ação direta na glândula sebácea. Ela diminui a produção de sebo e auxilia na redução das lesões de acne, rosácea e atopia. Já a B5, age na renovação celular, além de possuir ação anti-inflamatória e cicatrizante. Quando se trata de cuidados com a pele, é preciso evitar a ingestão exagerada de açúcares (especialmente a lactose) e gorduras. Esses macros, além de agravarem casos de acne, aceleram o processo de envelhecimento cutâneo, tornando mais rápido o aparecimento de rugas e flacidez.",
  },
  {
    image: "assets/nutri-5.png",
    name: "COMPOSIÇÃO CORPORAL",
    info: "A nutrição influencia a composição corporal através de mecanismos metabólicos e fisiológicos. A ingestão adequada de macronutrientes como proteínas, carboidratos e gorduras é crucial para a síntese proteica muscular, que por sua vez afeta diretamente a massa magra e a taxa metabólica basal. Proteínas fornecem aminoácidos essenciais para a construção e reparação muscular, enquanto carboidratos e gorduras são fontes de energia que impactam a disponibilidade de substratos para atividade física e manutenção das funções corporais. Além dos macros, micronutrientes como vitaminas e minerais desempenham papéis cruciais na regulação do metabolismo energético e na saúde óssea, afetando indiretamente a composição corporal. Por exemplo, a vitamina D está associada à função muscular e à saúde óssea, influenciando a capacidade do corpo de exercer e manter massa magra. Da mesma forma, minerais como o cálcio contribuem para a integridade óssea e podem influenciar a distribuição de gordura corporal. Portanto, uma abordagem nutricional adequada e balanceada não apenas suporta a saúde geral, mas também é fundamental para otimizar a composição corporal, promovendo uma relação equilibrada entre massa magra e gordura, essencial para a estética corporal e o bem-estar geral.",
  },
  {
    image: "assets/nutri-6.png",
    name: "ENVELHECIMENTO",
    info: "A vitamina C é uma das mais utilizadas entre os produtos dermocosméticos devido aos benefícios que proporciona à pele. Sua propriedade antioxidante, que previne e minimiza rugas e linhas finas, é indispensável nos tratamentos antienvelhecimento e ainda estimula a produção de colágeno e elastina. É possível auxiliar na transição para a idade avançada com mais saúde e retardo do envelhecimento físico com a suplementação dos micronutrientes reduzidos no sistema ao longo dos anos.",
  },
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
    }, 800);
  }
};

nextBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  displaySlides();
});

prevBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  displaySlides();
});

window.onload = displaySlides;
