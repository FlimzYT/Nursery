
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
          <img src="images/photos/${image}">
        </div>
      </section>
    `
  }
  else if (layout === 7){
    return`    
      <section class="layout${layout} v${version}">
        <p>${text}</p>
      </section>
    `
  }
  else if (layout === 8){
    const listItems = text.map(item => createListItem(item)).join('');

    return`    
      <section class="layout${layout} v${version}">
        <ul class="list">
          ${listItems}
        </ul>
      </section>
    `
  }

}

const langBtn = document.querySelector('.lang');
let currentLang = 'ar';

langBtn.addEventListener("click", () => {

    if(currentLang === 'ar'){
        langBtn.innerHTML = 'ع'
        currentLang = 'en'

        document.querySelector('.home-link').innerHTML = "Home"
        document.querySelector('.about-link').innerHTML = "About Us"
        document.querySelector('.events-link').innerHTML = "Events"
        document.querySelector('.contact-link').innerHTML = "Contact Us"
        document.querySelector('.nursery-link').innerHTML = "Nursery"
        document.querySelector('.kg1-link').innerHTML = "KG 1"
        document.querySelector('.kg2-link').innerHTML = "KG 2"
        document.querySelector('.programs-link').innerHTML = "<span>▾</span>Programs"
    }
    else{
        langBtn.innerHTML = 'en'
        currentLang = 'ar'

        document.querySelector('.home-link').innerHTML = "الرئيسية"
        document.querySelector('.about-link').innerHTML = "حول"
        document.querySelector('.events-link').innerHTML = "الفعاليات والأنشطة"
        document.querySelector('.contact-link').innerHTML = "اتصل بنا"
        document.querySelector('.nursery-link').innerHTML = "روضة"
        document.querySelector('.kg1-link').innerHTML = "بستان"
        document.querySelector('.kg2-link').innerHTML = "تمهيدي"
        document.querySelector('.programs-link').innerHTML = "<span>▾</span>البرامج"
    }

    displayData()
})


function displayData(){
  fetch('../content/homeContent.json')
  .then(response => response.json())
  .then(data => {

    document.querySelector('.main').innerHTML = '';
    
    data.forEach(section => {
      if(currentLang === "ar"){
        document.querySelector('.main').innerHTML += createLayout(
          section.layout,
          section.arTitle,
          section.arText,
          section.image,
          section.version,
          section.arTitle2,
          section.arText2,
          section.image2
        )
        document.querySelector('.hero-title').innerHTML = 'أكاديمية راية العز';
        document.querySelector('.gallery > h1').innerHTML = 'ألبوم الصور';
        document.querySelector('.layout5 > h1').innerHTML = 'كم عمر طفلك؟';
        document.querySelector('.nursery-card > h2').innerHTML = 'روضة';
        document.querySelector('.kg1-card > h2').innerHTML = 'بستان';
        document.querySelector('.kg2-card > h2').innerHTML = 'تمهيدي';

        document.querySelectorAll('*').forEach((element) => {
          element.classList.remove('en')
        })
      }

      else{
        document.querySelector('.main').innerHTML += createLayout(
          section.layout,
          section.enTitle,
          section.enText,
          section.image,
          section.version,
          section.enTitle2,
          section.enText2,
          section.image2
        )

        document.querySelector('.hero-title').innerHTML = 'Rayat Al Izz Academy';
        document.querySelector('.gallery > h1').innerHTML = 'Gallery';
        document.querySelector('.layout5 > h1').innerHTML = 'How old is your child?';
        document.querySelector('.nursery-card > h2').innerHTML = 'Nursery';
        document.querySelector('.kg1-card > h2').innerHTML = 'KG 1';
        document.querySelector('.kg2-card > h2').innerHTML = 'KG 2';

        document.querySelectorAll('*').forEach((element) => {
          element.classList.add('en')
        })
      }
    });
    
    
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
displayData()

