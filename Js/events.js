function createDate(from, to){

    let joiner = ''
    if(currentLang === 'ar'){
      joiner = 'حتى'
    }
    else{
      joiner = 'until'
    }

    if(from === to){
      return `<span>${from}</span>`
    }
    else{
      return `<span>${from}</span><span>${joiner}</span><span>${to}</span>`
    }

}
function createLayout(title, from, to, text, image) {
  
  return `

    <div class="event">
      <div class="event-info">
          <h2>${title}</h2>
          <div class="date">
            ${createDate(from, to)}
          </div>
      </div>

      <div class="event-popup hidden">
          <div>
              <div class="event-popup-text">
                  <div>
                  <h2>${title}</h2>
                      <div class="date">
                        ${createDate(from, to)}
                      </div>
                  </div>
                  <p>${text}</p>
              </div>
              <img src="images/photos/${image}" alt="" class="image">

              <button class="close-btn">
                  <img src="images/misc/x.svg">
              </button>
          </div>
      </div>
  </div>
  `

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
  fetch('../content/eventsContent.json')
  .then(response => response.json())
  .then(data => {

    document.querySelector('.events').innerHTML = '';
    
    data.forEach(event => {
      if(currentLang === "ar"){
        document.querySelector('.events').innerHTML += createLayout(
          event.arTitle,
          event.from,
          event.to,
          event.arText,
          event.image
        )

        document.querySelector('main').classList.remove('flex-reverse')
        document.querySelector('.about-title').innerHTML = 'الفعاليات والأنشطة'

        document.querySelectorAll('*').forEach((element) => {
          element.classList.remove('en')
        })
      }

      else{
        document.querySelector('.events').innerHTML += createLayout(
          event.enTitle,
          event.from,
          event.to,
          event.enText,
          event.image
        )

        document.querySelector('main').classList.add('flex-reverse')
        document.querySelector('.about-title').innerHTML = 'Events'

        document.querySelectorAll('*').forEach((element) => {
          element.classList.add('en')
        })
      }
    });
    
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
      const eventPopup = event.querySelector(".event-popup");

      if (eventPopup) {
        const childDiv = eventPopup.querySelector("div, div > *")
        const close = eventPopup.querySelector(".close-btn");
    
        close.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPopup.classList.add("hidden");
        })

        eventPopup.addEventListener("click", (event) => {
          if(childDiv.contains(event.target)){
            event.stopPropagation();
          }
          else{
            event.stopPropagation();
            eventPopup.classList.add("hidden");
          }

        });
      }
    
      event.addEventListener("click", () => {
        if (eventPopup) {
          eventPopup.classList.remove("hidden");
          console.log('shown')
        }
      });
    })
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
displayData()