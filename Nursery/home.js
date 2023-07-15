
function createListItem(text){
    return `<li><img src="images/misc/Check.svg"><span>${text}</span></li>`
}
function createLayout(layout, title, text, image, version, title2, text2, image2) {


  if (layout === 1) {
    return `
      <section class="layout${layout} v${version}">
        <div class="diamond content">
          <div>
            <h2>${title}</h2>
            <p>${text}</p>
          </div>
        </div>
      </section>
  `;
  }
  else if (layout === 2){
    return `
    <section class="layout${layout} v${version}">

      <div class="text content">
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <img class="image" src="images/photos/${image}">

      <div class="text content">
        <h2>${title2}</h2>
        <p>${text2}</p>
      </div>
      <img class="image" src="images/photos/${image2}">
    </section>
    `
  }
  else if (layout === 3 || layout === 4) {
    return `
      <section class="layout${layout} v${version}">
        <div class="text content">
          <h2>${title}</h2>
          <p>${text}</p>
        </div>
        <div class="image">
          <img src="images/photos/${image}">
        </div>
      </section>
    `;
  }
  else if (layout === 6){

    const listItems = text.map(item => createListItem(item)).join('');
    
    return `
      <section class="layout${layout}">
        <div class="text content">
          <h2>${title}</h2>
          <ul class="list">
            
            ${listItems}
          </ul>
        </div>
        <div class="image">
          <img src="images/photos/image2.png">
        </div>
      </section>
    `
  }


}

fetch('./content/homeContent.json')
  .then(response => response.json())
  .then(data => {

    document.querySelector('.main').innerHTML = '';
    
    data.forEach(section => {
      document.querySelector('.main').innerHTML += createLayout(
        section.layout,
        section.arTitle,
        section.arText,
        section.image,
        section.version,
        section.arTitle2,
        section.arText2,
        section.image2
      );
    });
    
    
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
        
        // Responsiveness
        document.querySelector('.pages').classList.add('hidden')
        document.querySelector('.menu-btn').classList.remove('hidden')
      }else{
        moveIntensity = 33.33;
        numberOfSlides = 4;

        hiddenDots.forEach(dot => {
          dot.classList.add('hidden')
        });

        // Responsiveness
        document.querySelector('.pages').classList.remove('hidden')
        document.querySelector('.menu-btn').classList.add('hidden')
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

    // Show the initial slide
    showSlide(currentIndex);
    startAutoScroll();
    window.addEventListener('resize', adjustToScreenSize);
    adjustToScreenSize()
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

