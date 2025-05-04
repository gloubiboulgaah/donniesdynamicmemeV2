const door = document.getElementById("door");
const son = document.getElementById("son");
const doorAudio = new Audio("../audio/door.mp3");
const winningSon = new Audio("../audio/areyouwinning.wav");
let index = 0;
const nedim = document.getElementById("nedim");
// Get video value from cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

nedim.src =
    "../videos/" + getCookie("video") + ".mp4" || "../videos/controle.mp4"; // Default if cookie not set
console.log("Video source set to: " + nedim.src);
door.addEventListener("click", function () {
    if (index === 0) {
        index++;
        doorAudio.play();
        doorAudio.addEventListener("ended", function () {
            door.src = "../images/dad.png";
            winningSon.play();
            winningSon.addEventListener("ended", function () {
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
