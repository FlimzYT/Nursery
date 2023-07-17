
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

fetch('../content/homeContent.json')
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
    
    
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

