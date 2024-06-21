const slides = [
    {
        number: '01',
        title: 'СМАРТФОНЫ',
        description: 'РЕМОНТ МОБИЛЬНОЙ ТЕХНИКИ В АБАКАНЕ',
        image: 'images/phones/image 3.png'
    },
    {
        number: '02',
        title: 'ПЛАНШЕТЫ',
        description: 'РЕМОНТ ПЛАНШЕТОВ В АБАКАНЕ',
        image: 'images/phones/image 9.png'
    },
    {
        number: '03',
        title: 'НОУТБУКИ',
        description: 'РЕМОНТ НОУТБУКОВ В АБАКАНЕ',
        image: 'images/phones/image 25.png'
    }
];

let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;
    
    // Update text and image content
    const slideNumber = document.getElementById('slide-number');
    const slideTitle = document.getElementById('slide-title');
    const slideDescription = document.getElementById('slide-description');
    const slideImage = document.getElementById('slide-image');

    slideNumber.innerText = slides[index].number;
    slideTitle.innerText = slides[index].title;
    slideDescription.innerText = slides[index].description;
    slideImage.src = slides[index].image;

    void slideImage.offsetWidth;

    slideImage.style.opacity = 1;

    const buttons = document.querySelectorAll('.point_slide');
    buttons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);

showSlide(0);

document.getElementById('slide-image').addEventListener('load', function() {
    this.style.opacity = 1;
});


// Vertical Slider
const serviceSlides = [
    {
        title: 'iPhone:',
        description: 'РЕМОНТ ВСЕХ МОДЕЛЕЙ ОТ 30 МИНУТ.',
        image: 'images/phones/image 3.png'
    },
    {
        title: 'Samsung:',
        description: 'РЕМОНТ ВСЕХ МОДЕЛЕЙ ОТ 45 МИНУТ.',
        image: 'images/phones/image 9.png'
    },
    {
        title: 'Huawei:',
        description: 'РЕМОНТ ВСЕХ МОДЕЛЕЙ ОТ 60 МИНУТ.',
        image: 'images/phones/image 25.png'
    }
];

let currentServiceIndex = 0;
let currentSlide = document.getElementById('service-slide');

function showServiceSlide(index) {
    const slideContainer = document.getElementById('service-slide-container');
    const newSlide = document.createElement('div');
    newSlide.className = 'service_slide';

    newSlide.innerHTML = `
        <h2 class="text_slider_medium" id="service-title">${serviceSlides[index].title}</h2>
        <h3 id="service-description">${serviceSlides[index].description}</h3>
        <div class="services_slide_img none_media">
            <img src="${serviceSlides[index].image}" class="img" alt="img" id="service-image">
        </div>
    `;

    slideContainer.appendChild(newSlide);

    setTimeout(() => {
        newSlide.classList.add('active');
    }, 20); // Small delay to allow the entering class to apply

    setTimeout(() => {
        currentSlide.classList.add('exiting');
        setTimeout(() => {
            slideContainer.removeChild(currentSlide);
            currentSlide = newSlide;
        }, 500); // Match this duration with your CSS transition duration
    }, 10); // Ensure exiting animation starts after entering animation
}

function nextServiceSlide() {
    currentServiceIndex = (currentServiceIndex + 1) % serviceSlides.length;
    showServiceSlide(currentServiceIndex);
}

setInterval(nextServiceSlide, 5000);

// Initialize the first slide
showServiceSlide(0);