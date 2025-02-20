let htmlText = "<html>";
let htmlText2 = "</html>";
let servic = "<services>";
let eservic = "</services>";
let works = "<works>";
let eworks = "</works>";
let skills = "<skills>";
let eskills = "</skills>";
let contact = "<contact>";
let econtact = "</contact>";
document.getElementById("ht").textContent = htmlText;
document.getElementById("ht2").textContent = htmlText2;
document.getElementById("Services-text").textContent = servic;
document.getElementById("ServicesEnd-text").textContent = eservic;
document.getElementById("works-text").textContent = works;
document.getElementById("worksEnd-text").textContent = eworks;
document.getElementById("Skills-text").textContent = skills;
document.getElementById("SkillsEnd-text").textContent = eskills;
document.getElementById("Contact-text").textContent = contact;
document.getElementById("eContact-text").textContent = econtact;

document.querySelectorAll(".neon-container").forEach((container) => {
  const rangeSlider = container.querySelector(".range-slider");
  const neonBorder = container.querySelector(".neon-border");

  rangeSlider.addEventListener("input", function () {
    let val = rangeSlider.value;
    neonBorder.style.opacity = val / 100;
  });
});