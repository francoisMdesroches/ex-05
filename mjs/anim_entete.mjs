export class anim_entete{

    constructor(elmEntete){
        this.elmEntete = elmEntete;
    }

    anim(){
        let elmTitre = this.elmEntete.children[0];
        this.elmEntete.children[1].classList.add('animEntete');
        elmTitre.classList.add('animEntete')
    }

}