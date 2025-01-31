const mediaQuery = window.matchMedia("(max-width: 768px)");

const demo = document.querySelectorAll('.demo');
const myModal = document.getElementById("myModal");
const cursor = document.querySelectorAll(".cursor");
const close = document.getElementById("close-modal");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const prevMobile = document.getElementById("prev-mobile");
const nextMobile = document.getElementById("next-mobile");
const myDropdown = document.getElementById("myDropdown");
const cartBtn = document.getElementById("cartBtn");
const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');
const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const removeItem = document.getElementById('remove-item');
const emptyCart = document.getElementById('empty-cart');
const fullCart = document.getElementById('full-cart');

menuHamburger.addEventListener("click", () => {
    nav_menu.style.display = "block";
    document.body.style.backgroundColor = "hsla(240 100% 5% / 0.4)";
});

closeMenu.addEventListener("click", () => {
    nav_menu.style.display = "none";
    document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
});

function openModal() {
    myModal.style.display = "block";
}

function closeModal() {
    myModal.style.display = "none";
}

let slideIndex = 1;
let amount = 0;

if (mediaQuery.matches) {
    showSlidesMobile(slideIndex);
} else {
    showSlides(slideIndex);
}

function plusSlides(n) {
    slideIndex += n;
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlidesMobile(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("modal-images");
    const dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

demo.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        currentSlide(i + 1);
    });
});

cursor.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        currentSlide(i + 1);
        openModal();
    });
});

close.addEventListener('click', () => {
    closeModal();
});

prev.addEventListener('click', () => {
    plusSlides(-1);
    showSlides(slideIndex);
});
next.addEventListener('click', () => {
    plusSlides(1)
    showSlides(slideIndex);
});

prevMobile.addEventListener('click', () => {
    plusSlides(-1)
    showSlidesMobile(slideIndex);
});
nextMobile.addEventListener('click', () => {
    plusSlides(1)
    showSlidesMobile(slideIndex);
});

cartBtn.addEventListener("click", () => {
    myDropdown.classList.toggle('show');
});

window.onclick = (event) => {
    if (!event.target.matches('.cart')) {
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

decrement.addEventListener('click', () => {
    if (amount > 0) {
        amount--;
    }
    document.getElementById('amount').innerHTML = amount;
});

increment.addEventListener('click', () => {
    amount++;
    document.getElementById('amount').innerHTML = amount;
});

addToCartBtn.addEventListener('click', () => {
    if(amount > 0) {
        document.getElementById('qty').innerHTML = amount;
        const total = amount * 125;
        document.getElementById('total').innerHTML = `$${total}.00`;
        emptyCart.style.display = "none";
        fullCart.style.display = "block";
        myDropdown.style.display = "block";
	}
});

removeItem.addEventListener('click', () => {
    emptyCart.style.display = "block";
    fullCart.style.display = "none";
});