const modal = document.getElementById("mus_modal");
const openModal = document.getElementById("mus_openModal");
const closeModal = document.getElementById("mus_closeModal");
const audioButtons = document.querySelectorAll(".select-audio");
const mainAudio = document.getElementById("mainAudio");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

audioButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const audioSrc = e.target.getAttribute("data-src");
    mainAudio.src = audioSrc;
    mainAudio.play();
    modal.style.display = "none";
  });
});
