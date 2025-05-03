const door = document.getElementById("door");
const son = document.getElementById("son");
const doorAudio = new Audio("../audio/door.mp3");
const winningSon = new Audio("../audio/areyouwinning.wav");
let index = 0;

door.addEventListener("click", function () {
    if (index === 0) {
        index++;
        doorAudio.play();
        doorAudio.addEventListener("ended", function () {
            door.src = "../images/dad.png";
            winningSon.play();
            winningSon.addEventListener("ended", function () {
                const nedim = document.getElementById("nedim");
                nedim.classList.remove("hidden");
                nedim.play();
                document.body.style.backgroundColor = "black";
                nedim.addEventListener("ended", function () {
                    console.log("Nedim has finished playing.");
                    window.location.href = "../index.html";
                });
            });
        });
    }
});
