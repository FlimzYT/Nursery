const slides = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot-indicator li');
const hiddenDots = document.querySelectorAll('li.hidden')
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;
let autoScrollInterval;
let moveIntensity = 33.33;
let numberOfSlides = 4;


function adjustToScreenSize(){
  if(window.innerWidth <= 1000){
    moveIntensity = 100;
    numberOfSlides = 6;
    hiddenDots.forEach(dot => {
      dot.classList.remove('hidden')
    });
    

  }else{
    moveIntensity = 33.33;
    numberOfSlides = 4;

    hiddenDots.forEach(dot => {
      dot.classList.add('hidden')
    });

  }
}



function showSlide(index) { 
  slides.style.transform = `translateX(-${index * moveIntensity}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numberOfSlides; // Adjust the number based on the total number of slides
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides; // Adjust the number based on the total number of slides
  showSlide(currentIndex);
}

function startAutoScroll() {
  autoScrollInterval = setInterval(nextSlide, 3000); // Adjust the duration between slides
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    stopAutoScroll();
  });
});

prevButton.addEventListener('click', () => {
  prevSlide();
  stopAutoScroll();
});

nextButton.addEventListener('click', () => {
  nextSlide();
  stopAutoScroll();
});

function displayData(){
  fetch('../content/galleryContent.json')
  .then(response => response.json())
  .then(data => {
    const slides = document.querySelectorAll(".slide > img")
    
    slides[0].src = `../images/photos/${data.image1}`
    slides[1].src = `../images/photos/${data.image2}`
    slides[2].src = `../images/photos/${data.image3}`
    slides[3].src = `../images/photos/${data.image1}`
    slides[4].src = `../images/photos/${data.image2}`
    slides[5].src = `../images/photos/${data.image3}` 
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }



displayData()
  
  

// Show the initial slide
showSlide(currentIndex);
startAutoScroll();
window.addEventListener('resize', adjustToScreenSize);
adjustToScreenSize()

