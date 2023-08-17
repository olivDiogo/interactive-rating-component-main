const container = document.querySelector(".container");
const thank_you_container = document.querySelector(".thank-you-container");
let result = document.querySelector("span");
let rating_selected = 0;

function reply_click(clicked_id) {
    rating_selected = clicked_id;
}

function submit() {

    if (rating_selected < 1) {
        alert("You haven't selected a rating yet!");
    } else {
    container.classList.add("hidden");
    thank_you_container.classList.remove("hidden");
    result.innerHTML = rating_selected;
    }
}