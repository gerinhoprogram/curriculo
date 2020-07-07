$(function() { 
	var opcoesAcordeao = {
		active: false, 
		animated: 'easeOutBounce', 
		autoHeight: false,
		collapsible: true,
		icons: { 'header': 'ui-icon-plus', 'headerSelected': 'ui-icon-minus' } 
	};
	$('.acordeao').accordion(opcoesAcordeao);
});

$(function() { 
	$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

});


$(document).ready(function(){
    $('.collapsible').collapsible();
  });


jQuery( document ).ready(function( $ ) {
          $(".celular").inputmask({mask: '(99) 99999-9999'});
          $(".telefone").inputmask({mask: '(99) 9999-9999'});  
       });