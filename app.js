let container = document.querySelector(".container");
let card = document.querySelector(".card");
let cardImge = document.querySelector(".card img");
let cardTitle = document.querySelector(".card .card-title");
let cardInfo = document.querySelector(".card p");
let cardBtn = document.querySelector(".card .cta-btn");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 22;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 22;

  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  cardImge.style.transform = "translateZ(200px) rotateZ(-35deg)";
  cardTitle.style.transform = "translateZ(125px)";
  cardInfo.style.transform = "translateZ(100px)";
  cardBtn.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all ease 0.2s";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  cardImge.style.transform = "translateZ(0px) rotateZ(0deg)";
  cardTitle.style.transform = "translateZ(0px)";
  cardInfo.style.transform = "translateZ(0px)";
  cardBtn.style.transform = "translateZ(0px)";
});
