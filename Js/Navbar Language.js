let langBtn = document.querySelector('.lang');
let currentLang = 'ar';

langBtn.addEventListener("click", () => {

    if(currentLang === 'ar'){
        langBtn.innerHTML = 'ar'
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
    console.log('clicked')

})
