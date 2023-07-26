const langBtn = document.querySelector('.lang');
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

        document.querySelector('.about-title').innerHTML = "Contact Us"
        document.querySelector('.FirstName').innerHTML = "First Name"
        document.querySelector('.LastName').innerHTML = "Last Name"
        document.querySelector('.phone').innerHTML = "Mobile Number"
        document.querySelector('.email').innerHTML = "Email"
        document.querySelector('.message').innerHTML = "Message"
        document.querySelector('.submit-btn').value = "Send"

        document.querySelectorAll('*').forEach((element) => {
          element.classList.add('en')
        })
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

        document.querySelector('.about-title').innerHTML = "تواصل معنا"
        document.querySelector('.FirstName').innerHTML = "الإسم الأول"
        document.querySelector('.LastName').innerHTML = "الإسم الأخير"
        document.querySelector('.phone').innerHTML = "رقم الهاتف"
        document.querySelector('.email').innerHTML = "البريد الإلكتروني"
        document.querySelector('.message').innerHTML = "نص الرسالة"
        document.querySelector('.submit-btn').value = "ارسل"

        document.querySelectorAll('*').forEach((element) => {
          element.classList.remove('en')
        })
    }
})