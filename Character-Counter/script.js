let textarea = document.querySelector("textarea");
let rem = document.querySelector(".remaining");
let words = document.querySelector(".entered");

textarea.addEventListener("input", function (e) {
  words.innerHTML = textarea.value.split("").length;
  rem.innerHTML = 50 - textarea.value.split("").length;
});