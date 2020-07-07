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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

jQuery(document).ready(function() {

    $('#idPerfil').click(function() {
			var num = $('#perfil').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});
	
    $('#idExp').click(function() {
			var num = $('#experiencia').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idForm').click(function() {
			var num = $('#formacao').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idComp').click(function() {
			var num = $('#complementar').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idInf').click(function() {
			var num = $('#informatica').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idProj').click(function() {
			var num = $('#projetos').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idObj').click(function() {
			var num = $('#objetivo').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	$('#idCont').click(function() {
			var num = $('#contato').offset();
			var top = num.top;
			$('html, body')
  			.animate({scrollTop: top}, 1500)
		});	
	
	
	})



















