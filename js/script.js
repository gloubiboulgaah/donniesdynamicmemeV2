document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const donnie = document.querySelector(".donnie");
    const textBox = document.getElementById("textbox");
    const response = document.querySelector(".response");
    const glitch = new Audio("audio/glitch.mp3");
    function talk() {
        donnie.style.animation = "psycho-shade 0.2s infinite";
        donnie.src = "images/donnie.png";
        glitch.play();
        response.classList.remove("hidden");
        // response.classList.remove("hidden");
        setTimeout(() => {
            donnie.style.animation = "vhs-tremble 0.2s infinite";
        }, 500);
        setTimeout(() => {
            donnie.src = "images/donnie-yellow.png";
        }, 250);
    }

    donnie.addEventListener("click", function () {
        if (index === 0) {
            talk();
            textBox.innerHTML =
                "Hey my friend! Do you want to try something new?";
            index++;
        }
    });

    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const donnieHand = document.querySelector(".donnieHand");
    yesButton.addEventListener("click", function () {
        textBox.innerHTML = "Nice! Take this!";
        donnieHand.classList.remove("hidden");
        response.classList.add("hidden");
        index++;
    });

    donnieHand.addEventListener("click", function () {
        window.location.href = "/html/select.html";
    });
});
