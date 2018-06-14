let buttons = document.querySelectorAll(".btn-group button");
let svg_element = document.getElementsByClassName('cat-img')[0];

/* manageEyeColor = () => {
    if (this.getAttribute("data-add")) {
        svg_element.classList.add(this.getAttribute("data-add"));
    }
    if (this.getAttribute("data-remove")) {
        svg_element.classList.add(this.getAttribute("data-remove"));
    }
}

for (let button of buttons) {
    button.addEventListener('click', manageEyeColor);
} */

for (let button of buttons) {
    button.addEventListener('click',
        () => {
            if (button.getAttribute('data-add')) {
                svg_element.classList.add(button.getAttribute('data-add'));
            }
            if (button.getAttribute('data-remove')) {
                svg_element.classList.remove(button.getAttribute('data-remove'));
            }
        }
    );
}