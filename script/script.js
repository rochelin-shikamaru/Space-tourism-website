const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const items = document.querySelectorAll(".nav-header a");
const li = document.querySelectorAll("ul li");
const imageSlider = document.querySelector(".img-slider");

const titleSlider = document.querySelector(".title-slider");
const paragrapheSlider = document.querySelector(".paragraphe-slider");
const miniInformation = document.querySelector(".mini-information");

const containerList = document.querySelectorAll(".container-list li");
const sliderCrewDescription = document.querySelector(".slider-crew-description");
const sliderCrewImg = document.querySelector(".slider-img");

const technoSlider = document.querySelector(".techno-slider");
const technoSliderImg = document.querySelector(".techno-img-slider");
const technoButon = document.querySelectorAll(".techno-button li");

const miniBorder = document.querySelector(".mini-border");

// header hamburger onlick and nav slider
burger.onclick = ()=>{
    burger.classList.toggle("active");
    nav.classList.toggle("second");

    if(burger.classList.contains("active")){
        burger.children[0].style.display = "none";
        burger.children[1].style.display = "block";
    }
    else{
        burger.children[1].style.display = "none";
        burger.children[0].style.display = "block";
        
    }
}

items.forEach((item) =>{
    item.addEventListener('click', () => {
        item.classList.add('active-slider');
    })
});

//page destination

li.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('li.active').classList.remove('active');
        item.classList.add('active');

        imageSlider.classList.add("fadeIn");
        titleSlider.classList.add("fadeIn");
        paragrapheSlider.classList.add("fadeIn");
        miniBorder.classList.add("fadeIn");
        miniInformation.classList.add("fadeIn");
        setTimeout(()=>{
            imageSlider.classList.remove("fadeIn");
            titleSlider.classList.remove("fadeIn");
            paragrapheSlider.classList.remove("fadeIn");
            miniBorder.classList.remove("fadeIn");
            miniInformation.classList.remove("fadeIn");
        },600);

        switch(item.innerText){
            case "MOON" :{
                imageSlider.style.transform = "translateX(0)";
                titleSlider.style.transform = "translateX(0)";
                paragrapheSlider.style.transform = "translateX(0)";
                miniInformation.style.transform = "translateX(0)";
            }
            break;
            case "MARS" :{
                imageSlider.style.transform = "translateX(-100%)";
                titleSlider.style.transform = "translateX(-100%)";
                paragrapheSlider.style.transform = "translateX(-99.5%)";
                miniInformation.style.transform = "translateX(-100%)";
            }
            break;
            case "EUROPA" :{
                imageSlider.style.transform = "translateX(-200%)";
                titleSlider.style.transform = "translateX(-200%)";
                paragrapheSlider.style.transform = "translateX(-199%)";
                miniInformation.style.transform = "translateX(-200%)";
            }
            break;
            default :{
                imageSlider.style.transform = "translateX(-300%)";
                titleSlider.style.transform = "translateX(-300%)";
                paragrapheSlider.style.transform = "translateX(-299.9%)";
                miniInformation.style.transform = "translateX(-300%)";
            }
            break;

        }
    })
})

// crew destination
containerList.forEach(item => {
    item.addEventListener('click', ()=>{
        document.querySelector(".slider-list").classList.remove("slider-list");
        item.classList.add("slider-list");

        sliderCrewDescription.classList.add("fadeIn");
        sliderCrewImg.classList.add("fadeIn");
        setTimeout(()=>{
            sliderCrewDescription.classList.remove("fadeIn");
            sliderCrewImg.classList.remove("fadeIn");
        },600);

        switch (item.className) {
            case "un slider-list":{
                sliderCrewDescription.style.transform = "translateX(0)";
                sliderCrewImg.style.transform = "translateX(0)";
            }
            break;
            case "deux slider-list":{
                sliderCrewDescription.style.transform = "translateX(-100%)";
                sliderCrewImg.style.transform = "translateX(-100%)";
            }
            break;
            case "trois slider-list":{
                sliderCrewDescription.style.transform = "translateX(-200%)";
                sliderCrewImg.style.transform = "translateX(-200%)";
            }
            break;
            default:{
                sliderCrewDescription.style.transform = "translateX(-300%)";
                sliderCrewImg.style.transform = "translateX(-300%)";
            }
            break;
        
        }
    });
});

// techonology destination
technoButon.forEach(item =>{
    item.addEventListener('click', ()=>{
        document.querySelector(".button-active").classList.remove("button-active");
        item.classList.add("button-active");

        technoSlider.classList.add("fadeIn");
        technoSliderImg.classList.add("fadeIn");
        setTimeout(()=>{
            technoSlider.classList.remove("fadeIn");
            technoSliderImg.classList.remove("fadeIn");
        },600)
        switch (item.innerText) {
            case "1":{
                technoSlider.style.transform = "translateX(0)";
                technoSliderImg.style.transform = "translateX(0)";
                
            }
            break;
            case "2":{
                technoSlider.style.transform = "translateX(-100%)";
                technoSliderImg.style.transform = "translateX(-100%)";
                
            }
            break;
            default:{
                technoSlider.style.transform = "translateX(-200%)";
                technoSliderImg.style.transform = "translateX(-200%)";
            }
            break;
        }
    })
})