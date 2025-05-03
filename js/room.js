const door = document.getElementById("door");
const son = document.getElementById("son");
const doorAudio = new Audio("../audio/door.mp3");
const winningSon = new Audio("../audio/areyouwinning.wav");
door.addEventListener("click", function () {
    doorAudio.play();
    doorAudio.addEventListener("ended", function () {
        door.src = "../images/dad.png";
        winningSon.play();
        winningSon.addEventListener("ended", function () {
            son.addEventListener("click", function () {
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
    });
});
