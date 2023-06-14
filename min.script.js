const burgerBtn=document.querySelector(".burger_btn"),headerBlock=document.querySelector(".header__block"),header=document.querySelector(".header"),navLogo=document.querySelector(".navLogo"),hero=document.querySelector(".hero"),formats=document.querySelector(".formats__block"),containers=document.querySelectorAll(".container"),myBlur=document.querySelector(".blur"),body=document.querySelector(".body"),btnTop=document.querySelector(".button-up"),promoBtn=document.querySelector(".promo-btn"),btnBanner=document.querySelector("#btn-banner"),promoPopup=document.querySelector(".promo-popup"),closePopup=document.querySelector(".close_popup"),promoWrapper=document.querySelector(".promo__wrapper"),closePromo=document.querySelector(".close_promo"),promoForm=document.querySelector("#promo-form"),promoSubmit=document.querySelector(".promo-submit"),loader=document.querySelector(".spinner__wrapper"),formTitle=document.querySelector(".form__title"),formSended=document.querySelector(".form_sended"),idApp=document.querySelector("#idApp"),closeFormSended=document.querySelector(".close_formSended"),videoSlide=document.querySelectorAll(".video-slide");window.addEventListener("keydown",e=>{"Escape"===e.key&&(promoPopup.classList.remove("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide"))});const toggleMobile=()=>{headerBlock.classList.toggle("open"),header.classList.toggle("open"),body.classList.toggle("scroll-hidden"),body.classList.toggle("fixed"),hero.classList.toggle("hero-open"),myBlur.classList.toggle("hide")},toggleMain=()=>{document.querySelectorAll(".nav").forEach(function(e){let o=e.querySelector(".nav-link");o.addEventListener("click",function(e){e.preventDefault();let r=o.getAttribute("href");document.querySelector(r).scrollIntoView()})})},toggleTablet=()=>{header.classList.toggle("open"),headerBlock.classList.toggle("open"),myBlur.classList.toggle("hide"),body.classList.toggle("scroll-hidden"),body.classList.toggle("fixed"),hero.classList.toggle("hero-open")},hideAll=()=>{headerBlock.classList.toggle("open"),header.classList.toggle("open"),body.classList.toggle("scroll-hidden"),body.classList.toggle("fixed")};window.innerWidth<=745&&(burgerBtn.addEventListener("click",()=>hideAll()),document.querySelectorAll(".nav").forEach(function(e){let o=e.querySelector(".nav-link");o.addEventListener("click",()=>hideAll())})),window.innerWidth>745&&window.innerWidth<=995&&(burgerBtn.addEventListener("click",()=>toggleTablet()),document.querySelectorAll(".nav").forEach(function(e){let o=e.querySelector(".nav-link");o.addEventListener("click",e=>{toggleTablet(),e.preventDefault();let r=o.getAttribute("href");document.querySelector(r).scrollIntoView()})})),window.innerWidth>995&&document.querySelectorAll(".nav").forEach(function(e){let o=e.querySelector(".nav-link");o.addEventListener("click",()=>toggleMain())}),document.querySelectorAll("#faq-elem").forEach(function(e){let o=e.querySelector(".faq-title"),r=e.querySelector(".faq-answer"),t=e.querySelector(".plus"),l=e.querySelector(".minus");o.addEventListener("click",()=>{r.classList.toggle("hide"),t.classList.toggle("hide"),l.classList.toggle("hide")})}),document.querySelectorAll(".format").forEach(function(e){let o=e.querySelector(".format-btn"),r=e.querySelector(".popup"),t=e.querySelector(".popup .popup__block"),l=e.querySelector(".close_popup");o.addEventListener("click",()=>{r.classList.toggle("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide")}),l.addEventListener("click",()=>{stopVideo(),r.classList.toggle("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide")}),window.addEventListener("keydown",e=>{"Escape"===e.key&&(r.classList.remove("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide"))}),t.addEventListener("click",e=>{e.isClickOutOfPopup=!0}),r.addEventListener("click",e=>{e.isClickOutOfPopup||(e.currentTarget.classList.remove("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide"))}),new Swiper(".swiperFormats",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewhell:!0})});const models_swiper=new Swiper(".modelsSwiper",{effect:"slide",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewhell:!0});async function promoSend(e){e.preventDefault();let o=formValidate(promoForm),r=new FormData(promoForm);if(o)alert("Заполните все обязательные поля");else{promoForm.classList.add("_sending");let t=await fetch("sendmail.php",{method:"POST",body:r});t.ok?(await t.json(),promoForm.reset(),promoForm.classList.remove("_sending"),hideForm(),console.log(randID())):(alert("Ошибка отправки, повторите попытку позже"),promoForm.classList.remove("_sending"))}}btnBanner.addEventListener("click",()=>{togglePopup(),showForm()}),promoBtn.addEventListener("click",()=>{togglePopup(),showForm()}),closePopup.addEventListener("click",()=>{togglePopup()}),promoForm.addEventListener("submit",promoSend);const togglePopup=()=>{promoPopup.classList.toggle("visible"),body.classList.toggle("scroll-hidden"),btnTop.classList.toggle("topHide")},showForm=()=>{formTitle.classList.remove("hide"),promoForm.classList.remove("hide"),formSended.classList.add("hide")},hideForm=()=>{formTitle.classList.add("hide"),promoForm.classList.add("hide"),formSended.classList.remove("hide")};function formValidate(e){let o=0,r=document.querySelectorAll("._req");for(let t=0;t<r.length;t++){let l=r[t];l.classList.contains("_email")?emailTest(l)?(formAddError(l),o++):(formRemoveError(l),o=0):""===l.value?(formAddError(l),o++):(formRemoveError(l),o=0)}return o}function formAddError(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}function formRemoveError(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")}function emailTest(e){return!/ˆ\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function playVideo(){videoSlide.forEach(e=>{e.classList.contains("swiper-slide-active")?e.children[0].play():e.classList.contains("swiper-slide-active")||(e.children[0].pause(),e.children[0].currentTime=0)})}function stopVideo(){videoSlide.forEach(e=>{e.children[0].pause(),e.children[0].currentTime=0})}const video_swiper=new Swiper(".swiperVideo",{effect:"slide",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewhell:!0,on:{transitionEnd:()=>playVideo()}}),promoAppear=()=>{let e;window.scrollY>=hero.offsetHeight?promoWrapper.classList.add("visible"):promoWrapper.classList.remove("visible")};closePromo.addEventListener("click",()=>{promoWrapper.classList.add("closed"),promoWrapper.classList.remove("visible")}),promoAppear(),window.onscroll=()=>{promoWrapper.classList.contains("closed")||promoAppear(),window.scrollY>700?btnTop.classList.remove("topHide"):window.scrollY<700&&btnTop.classList.add("topHide")},btnTop.addEventListener("click",()=>{document.querySelector("#top").scrollIntoView()});