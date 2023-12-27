/* Form Validation */
const names = document.getElementById("names");
const email = document.getElementById("email");
const message = document.getElementById("msg");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage")

form.addEventListener('submit', (e) => {
    const errors =[];

    if (names.value.trim() === "") {
        errors.push("Name is required.");
    }

    else if (email.value === "") {
        errors.push("Email is required.");
    }

    else if (message.value === "") {
        errors.push("Message is required.")
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})

/* Navigation */
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

/* When clicking the images in the 'Project section' */
function clickImage(){
    document.querySelectorAll('.first img').forEach(image =>{
        image.onclick = () => {
            document.querySelector('.popup-img').style.display = 'block'; 
            document.querySelector('.popup-img img').src = image.getAttribute('src');
        }
    })

    document.querySelectorAll('.second img').forEach(image =>{
        image.onclick = () => {
            document.querySelector('.popup-img').style.display = 'block'; 
            document.querySelector('.popup-img img').src = image.getAttribute('src');
        }
    })

    document.querySelectorAll('.third img').forEach(image =>{
        image.onclick = () => {
            document.querySelector('.popup-img').style.display = 'block'; 
            document.querySelector('.popup-img img').src = image.getAttribute('src');
        }
    })
}

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none'; 
}

