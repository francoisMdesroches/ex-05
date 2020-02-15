import { configSlider } from "./configslider.mjs";

export class slider{
    
    constructor(){
        const nbSlides = configSlider.list_slide.length;
        
        let lesSlidesEnHtml = "<div class='slides'>";

        let lesNoEnHaut = "";

        for (let i = 0; i < configSlider.list_slide.length; i++) {
            const element = configSlider.list_slide[i];
            lesSlidesEnHtml += `<div id="slide-${i}" style="background-image: url(images/${configSlider.list_slide[i].img})">
                                    <h2>${configSlider.list_slide[i].titre}</h2>
                                    <p>${configSlider.list_slide[i].sousTitre}</p>
                                </div>`;
            
            lesNoEnHaut += `<a href="#slide-${i}">${i+1}</a>`

        }

        lesSlidesEnHtml+= `</div>`;

        document.querySelector(".mon-slider>.slider").innerHTML = lesNoEnHaut+lesSlidesEnHtml;


    }



}