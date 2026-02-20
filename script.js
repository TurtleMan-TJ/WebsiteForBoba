const stars = document.querySelectorAll(".star");
const result = document.getElementById("result");

stars.forEach(star => {
    star.addEventListener("click", () => {
        const rating = star.dataset.value;

        stars.forEach(s => {
            s.classList.remove("active");
            if (s.dataset.value <= rating) {
                s.classList.add("active");
            }
        });

        result.textContent = "You rated your day " + rating + "/5 ";
    });
});