//creare una griglia formata da 8x8 quadratini tutti bianchi
//15 di questi quadratini (scelti a caso dall inizio)
//SE cliccati diventano ROSSI
//E gli altri diventano verdi
//PLUS : Sopra alla griglia c è un contatore
//       che conta quanti rossi e verdi sono stati scoperti


alert("Scegli 15 caselle");

// .elemento.hasClass('active')
// console.log(griglia.hasClass('active'));
// true;false
// $('.griglia .square')hasClass(active)) {

var griglia = $('#pippo')

//se cliccati diventano rossi
$('.griglia .square').click(function(){
  if ($(this).hasClass('pippo')) {
    $(this).addClass('red').show(6000)
    alert('Hai perso!')
  }
  else { //altrimenti verdi (GLI ALTRI)
    $(this).addClass('green')
  }
});


// 
// $(document).ready(function() {
// var count = 0;
//
//   $("#update").click(function() {
//     count++;
//     $("#counter").html("I quadratini premuti verdi sono : "+count);
//   }
//
// });
