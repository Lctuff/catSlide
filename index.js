let cats = [
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg",
  "cat6.jpg",
  "cat7.jpg",
  "cat8.jpg",
];

let imgCaption = [
  "Worker Cat",
  "Space Cat",
  "On the Edge Cat",
  "Kitty Cat",
  "Sleepy Cat",
  "Playful Cat",
  "Halloween Cat",
  "Tough Cat",
];

let img = document.getElementById("img"),
  caption = document.getElementById("caption");

setInterval(function () {
  let pickPicture = Math.floor(Math.random() * 8);

  img.src = cats[pickPicture];
  caption.innerHTML = imgCaption[pickPicture];
}, 3000);
