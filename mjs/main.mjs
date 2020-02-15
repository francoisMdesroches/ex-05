import {anim_entete} from "./anim_entete.mjs";
import {configSlider} from "./configSlider.mjs";
import {slider} from "./slider.mjs";

///Query Sélecteur
let elmEntete = document.querySelector("header .global")

const animEntete = new anim_entete(elmEntete);
animEntete.anim();

const leSlider = new slider();
