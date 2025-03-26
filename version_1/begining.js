const text = "I am broadly interested in Applied Mathematics, Fluid Dynamics, FSI, Machine Learning Applied to Fluid Dynamics.";
const interestsText = document.querySelector('.interests-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        interestsText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(() => {
            interestsText.innerHTML = '';
            i = 0;
            typeWriter();
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});
