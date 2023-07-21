function createDate(from, to){

    if(from === to){
      return `<span>${from}</span>`
    }
    else{
      return `<span>${from}</span><span>حتى</span><span>${to}</span>`
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

fetch('../content/eventsContent.json')
  .then(response => response.json())
  .then(data => {

    document.querySelector('.events').innerHTML = '';
    
    data.forEach(event => {
      document.querySelector('.events').innerHTML += createLayout(
        event.arTitle,
        event.from,
        event.to,
        event.arText,
        event.image
      );
    });



    // POPUP SCRIPT
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
    });
    

    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });