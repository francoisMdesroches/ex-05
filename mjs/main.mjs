import {anim_entete} from "./anim_entete.mjs";


///Query Sélecteur
let elmEntete = document.querySelector("header .global")

const animEntete = new anim_entete(elmEntete);
animEntete.anim();