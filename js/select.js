const select = document.querySelector(".select");
select.addEventListener("click", function (event) {
    const element = event.target;
    const id = element.id;
    if (id) {
        document.cookie = `video=${id}; path=/; max-age=86400`;
        console.log(`Stored ID ${id} in cookie`);
        window.location.href = "room.html";
    }
});
