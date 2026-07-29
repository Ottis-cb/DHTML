//Pour l'affichage de chaque section
/*function afficherPage(id) {
    document.getElementById('acceuil').style.opacity ='0';
    document.getElementById('acceuil').style.visibility='hidden';

    document.getElementById('cramer').style.opacity ='0';
    document.getElementById('cramer').style.visibility='hidden';

    document.getElementById('image').style.opacity ='0';
    document.getElementById('image').style.visibility='hidden';

    document.getElementById('panneau').style.opacity ='0';
    document.getElementById('panneau').style.visibility='hidden';
    
    document.getElementById('datatable').style.opacity ='0';
    document.getElementById('datatable').style.visibility='hidden';

    document.getElementById(id).style.opacity="1";
    document.getElementById(id).style.visibility="visible";
}
*/
function afficherPage(id) {
    $(".page").css({
        opacity: 0,
        visibility: "hidden"
    });

    $("#" + id).css({
        opacity: 1,
        visibility: "visible"
    });
}
//Pour le résolution du système linéaire
function calculer() {
    document.getElementById('resultat').style.display="block";

    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    const a3 = parseFloat(document.getElementById('a3').value);

    const b1 = parseFloat(document.getElementById('b1').value);
    const b2 = parseFloat(document.getElementById('b2').value);
    const b3 = parseFloat(document.getElementById('b3').value);

    const c1 = parseFloat(document.getElementById('c1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const c3 = parseFloat(document.getElementById('c3').value);

    const d1 = parseFloat(document.getElementById('d1').value);
    const d2 = parseFloat(document.getElementById('d2').value);
    const d3 = parseFloat(document.getElementById('d3').value);

    const message=document.getElementById('message');
    const D = a1*(b2*c3 -b3*c2) - b1*(a2*c3 - a3*c2) + c1*(a2*b3 - a3*b2);
    if(isNaN(a1) || isNaN(a2) || isNaN(a3) ||
        isNaN(b1) || isNaN(b2) || isNaN(b3) ||
        isNaN(c1) || isNaN(c2) || isNaN(c3)){
        message.innerHTML='⚠ Veuillez saisir toutes les valeurs';
        document.getElementById('D').innerHTML= " " ;
        document.getElementById('DX').innerHTML= " " ;
        document.getElementById('DY').innerHTML= " " ;
        document.getElementById('DZ').innerHTML= " " ;
        document.getElementById('X').innerHTML= " " ;
        document.getElementById('Y').innerHTML=" " ;
        document.getElementById('Z').innerHTML=" " ;
        return
    }

    if( D===0 ){
        message.innerHTML='❌ pas de solution unique';
        document.getElementById('D').innerHTML= " " ;
        document.getElementById('DX').innerHTML= " " ;
        document.getElementById('DY').innerHTML= " " ;
        document.getElementById('DZ').innerHTML= " " ;
        document.getElementById('X').innerHTML= " " ;
        document.getElementById('Y').innerHTML=" " ;
        document.getElementById('Z').innerHTML=" " ;
        return;
    }
        message.innerHTML='✅Il existe trois solution x, y et z';
    const Dx = d1*(b2*c3 - b3*c2) - b1*(d2*c3 - d3*c2) + c1*(d2*b3 - d3*b2);
    const Dy = a1*(d2*c3 - d3*c2) - d1*(a2*c3 - a3*c2) + c1*(a2*d3 - a3*d2);
    const Dz = a1*(b2*d3 - b3*d2) - b1*(a2*d3 - a3*d2) + d1*(a2*b3 - a3*b2);
    
    const  x= Dx/D;
    const  y= Dy/D;
    const  z= Dz/D;
    document.getElementById('D').innerHTML="D=" + D;
    document.getElementById('DX').innerHTML="Dx=" + Dx;
    document.getElementById('DY').innerHTML="Dy=" + Dy;
    document.getElementById('DZ').innerHTML="Dz=" + Dz;
    document.getElementById('X').innerHTML="X = " + x.toFixed(6);
    document.getElementById('Y').innerHTML="Y = " + y.toFixed(6);
    document.getElementById('Z').innerHTML="Z = " + z.toFixed(6);

}
//Pour réinitialiser tout les valeurs du système
function reinitialiser(){
    document.getElementById('resultat').style.display="none";
    document.getElementById('a1').value=" ";
    document.getElementById('b1').value=" ";
    document.getElementById('c1').value=" ";
    document.getElementById('d1').value=" ";
    document.getElementById('a2').value=" ";
    document.getElementById('b2').value=" ";
    document.getElementById('c2').value=" ";
    document.getElementById('d2').value=" ";
    document.getElementById('a3').value=" ";
    document.getElementById('b3').value=" ";
    document.getElementById('c3').value=" ";
    document.getElementById('d3').value=" ";
}
//Pour ajouter un exemple
function exemple(){
    document.getElementById('a1').value=1;
    document.getElementById('b1').value=0;
    document.getElementById('c1').value=0;
    document.getElementById('d1').value=1;

    document.getElementById('a2').value=0;
    document.getElementById('b2').value=1;
    document.getElementById('c2').value=0;
    document.getElementById('d2').value=2;
    
    document.getElementById('a3').value=0;
    document.getElementById('b3').value=0;
    document.getElementById('c3').value=1;
    document.getElementById('d3').value=3;
}

// Section Redimentionnement d'image
const largeur = document.getElementById('largeur');
const longueur = document.getElementById('longueur');
const photo = document.getElementById('photo');
const largeurval = document.getElementById('largeurval');
const longueurval = document.getElementById('longueurval');

largeur.addEventListener("input" , function(){
    largeurval.textContent = largeur.value +" px";
    photo.style.width = largeur.value + "px";
});
longueur.addEventListener("input" , function(){
    longueurval.textContent = longueur.value + " px";
    photo.style.height = longueur.value + "px";
});

function reinitialiserImg() {
    photo.style.width ='';
    photo.style.height ='';
    largeur.value = 300;
    largeurval.textContent = largeur.value +" px";
    longueur.value = 300;
    longueurval.textContent = largeur.value +" px";

}

// Panneaux publiciaire

const publicite =document.getElementById('publicite');
const photos = publicite.querySelectorAll('.photos');
const total = photos.length;
let index = 0;

const texte = document.querySelector('#panneau .card .texte p');

function carousel() {
    publicite.style.transform = 'translateX(-' + (index * 100) + '%)';
        if (texte) {
            texte.textContent = 'Pas ' + (index + 1) + '/' + total;
        }
}
function next() {
    index =(index + 1) % total;
    carousel();
}
function prev() {
    index =(index - 1 + total) % total;
    carousel();
}

document.getElementById('prev').addEventListener('click' ,prev);
document.getElementById('next').addEventListener('click' ,next);

let autoPlay = setInterval(next, 2000);
carousel();






