/*
date : 20-03-2016
Creatd by : Thibault Meyer
V : 0.0.1

*/

(function ($) {
    'use strict';

    var windowW = window.innerWidth;
    var windowH = window.innerHeight;

    var propCSSBase = {
        lightX:0,
        lightY:0,
        mouse:false,
        position:'absolute',
        transform:'rotate(45deg)',
        shadowColor:'black'
    };

    function isShadow(object,options){
        // on déclare un tableau d'option
        this.options = {};
        //Si certaines options n'existent pas dans l'appel de la fonction, on les remplace par celles par défaut
        this.options = $.extend( {}, propCSSBase, options);
        //Variable de la navigation
        this.object = document.querySelectorAll(object);
        //Lance la fonction
        this.init(isShadow);
    }

    isShadow.prototype = {
        init:function(){
            for(var i=0; i<this.object.length;i++){
                //Récupère les dimensions de l'objet
                var objH = this.object[i].getBoundingClientRect().height;
                var objW = this.object[i].getBoundingClientRect().width;

                //créé une div dans le carré qui sera l'ombre
                this.object[i].innerHTML+='<div class="shadow"></div>';
                //Selection de l'ombre
                var elem = this.object[i].lastChild;
                //applique les propriétés css de bases
                elem.style.width=Math.sqrt((objH*objH)+(objW*objW))+'px';                          //la largeur est la diagonale du bloc
                elem.style.position=this.options.position;                                                     //position
                elem.style.top='0px';                                                                                   //place en haut du bloc
                elem.style.left='0px';                                                                                  //place à droite pour bien couvrir la diagonale
                elem.style.zIndex='-1';                                                                                //positionne derriere le bloc
                elem.style.height='100px';                                                                          //Longueur de l'élément, sera variable
                elem.style.transformOrigin='top left';                                                           //détermine le centre de rotation
                elem.style.transform=this.options.transform;                                               //créé la rotation pour couvrir la diagonale
                elem.style.background=this.options.shadowColor;                                      //longueur de dégradé du background, pareil que le hauteur*/
            }
        }
    };

    window.isShadow = isShadow;
})(jQuery);