const menu = document.querySelector('.menu');
   	window.addEventListener('scroll', () => {
       if(window.scrollY > 120){
       	menu.style.top = "0px";
       	menu.style.transition = 'all 1s ease';
        menu.style.background = '#fff';
        menu.active.style = "black";
        menu.style.boxShadow = '2px 4px 1px 0px rbg(0, 0, 0, 0.9)';
       }
       else{
       	menu.style.top = "1px";
         menu.style.background = '#009688';
       }
   	});

   	var tableauMois=new Array(
     "Janvier",
     "Fevrier",
     "Mars",
     "Avril",
     "Mai",
     "Juin",
     "Juillet",
     "Aout",
     "Septembre",
     "Octobre",
     "Novembre",
     "Decembre"
	);
var tableauJour=new Array(
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
	);

function afficheDateHeure(){

 var dateGlobal=new Date();
 var annee=dateGlobal.getFullYear();
 var mois=dateGlobal.getMonth();
 var jour=dateGlobal.getDay();
 var numjour=dateGlobal.getDate();
 var heure=dateGlobal.getHours();
 var minute=dateGlobal.getMinutes();
 var seconde=dateGlobal.getSeconds();

if(heure < 10) {
	heure="0" + heure.toString();
}
if(minute < 10) {
	minute="0" + minute.toString();
}
if(seconde < 10) {
	seconde="0" + seconde.toString();
}

 mois=tableauMois[mois];
 jour=tableauJour[jour];
 var dateHeure=document.getElementById("date_heure");
 dateHeure.innerHTML="Nous sommes le " + jour + " " + numjour + " " + mois + " " + annee + " et il est " + heure + ":" + minute + ":" + seconde + " !" ;

}
 function afficheChaqueSecondeHeure(){
  var delais=1000;
  afficheDateHeure();
  setInterval("afficheDateHeure()",delais);
}

   