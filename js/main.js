

  var color;
  var carga;



  var removeHome = function (color) {

    switch(color) {
      case 1:
         $('#inicio').parallax({imageSrc:'img/portada_turquesa.jpg'});

			$('.inner-image').attr('src','img/logo-solo.png');
			$('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//
			$('.inner-flecha').attr('src','img/flecha-abajo_turquesa.png');

			$('.nav-title').css('color','#71cbd2');
			$('.navbar-default .navbar-nav>li>a').removeClass('menu-green menu-yellow menu-pink menu-orange').addClass('menu-turquesa');

			$('.hola-image').attr('src','img/hola-matilde.jpg');
			$('.hola-p').css('color','#002D55');//


			$('.como-ayudamos-list > h2:nth-child(even)').css('color','#71cbd2');
			$('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//


			$('#parallax-nav ul li a').removeClass('green yellow pink orange').addClass('turquesa');
			$('.flex-direction-nav a').removeClass('green-arrow yellow-arrow pink-arrow orange-arrow').addClass('turquesa-arrow');

			$('.filter-web, .filter-grafico').parent().removeClass('green-gallery yellow-gallery pink-gallery orange-gallery').addClass('turquesa-gallery');

			$('.ir a').removeClass('enlace-green enlace-yellow enlace-pink enlace-orange').addClass('enlace-turquesa');


			$('label').css('color','#002D55')//
			$('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(113, 203, 210,0.3)'});

			$('textarea, input').css('color','#002D55');//
			$('.enviar').removeClass('send-green send-yellow send-pink send-orange').addClass('send-turquesa');
			$('.enviar').css('color','#002D55')
			$('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_turquesa.jpg" alt="contacto"></a>');
			$('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_turquesa.jpg" alt="fb"></a>');
			$('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_turquesa.jpg" alt="instragram"></a>');

          break;
      case 2:
         $('#inicio').parallax({imageSrc:'img/portada_verde.jpg'});

          $('.inner-image').attr('src','img/logo-solo_verde.png');
		      $('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//
          $('.inner-flecha').attr('src','img/flecha-abajo_verde.png');

          $('.nav-title').css('color','#C1D42F');
          $('.navbar-default .navbar-nav>li>a').removeClass('menu-turquesa menu-yellow menu-pink menu-orange').addClass('menu-green');

          $('.hola-image').attr('src','img/hola-matilde_verde.jpg');
          $('.hola-p').css('color','#002D55');//

          $('.como-ayudamos-list > h2:nth-child(even)').css('color','#C1D42F');
          $('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//

          $('#parallax-nav ul li a').removeClass('turquesa yellow pink orange').addClass('green');
          $('.flex-direction-nav a').removeClass('turquesa-arrow yellow-arrow pink-arrow orange-arrow').addClass('green-arrow');

          $('.filter-web, .filter-grafico').parent().removeClass('turquesa-gallery yellow-gallery pink-gallery orange-gallery').addClass('green-gallery');

          $('.ir a').removeClass('enlace-turquesa enlace-yellow enlace-pink enlace-orange').addClass('enlace-green');

          $('.enviar').removeClass('send-turquesa send-yellow send-pink send-orange').addClass('send-green');
          $('.enviar').css('color','#002D55')

          $('label').css('color','#002D55')//
          $('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(193, 212, 47,0.3)'});
          $('textarea, input').css('color','#002D55');//
      
          $('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_verde.jpg" alt="contacto"></a>');
          $('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_verde.jpg" alt="fb"></a>');
          $('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_verde.jpg" alt="instragram"></a>');

  
          break;
      case 3:

         $('#inicio').parallax({imageSrc:'img/portada_amarillo.jpg'});

          $('.inner-image').attr('src','img/logo_amarillo.jpg');
          $('.inner-flecha').attr('src','img/flecha-abajo_amarillo.png');
		      $('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//

          $('#parallax-nav ul li a').removeClass('turquesa green pink orange').addClass('yellow');

          $('.nav-title').css('color','#FFDA00');
          $('.navbar-default .navbar-nav>li>a').removeClass('menu-turquesa menu-green menu-pink menu-orange').addClass('menu-yellow');

          $('.hola-image').attr('src','img/hola-matilde_amarillo.jpg');
          $('.hola-p').css('color','#002D55');//

          $('.como-ayudamos-list > h2:nth-child(even)').css('color','#FFDA00');
          $('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//

          $('.flex-direction-nav a').removeClass('turquesa-arrow green-arrow pink-arrow orange-arrow').addClass('yellow-arrow');

          $('.filter-web, .filter-grafico').parent().removeClass('turquesa-gallery green-gallery pink-gallery orange-gallery').addClass('yellow-gallery');

          $('.ir a').removeClass('enlace-turquesa enlace-green enlace-pink enlace-orange').addClass('enlace-yellow');

          $('.enviar').removeClass('send-turquesa send-green send-pink send-orange').addClass('send-yellow');
          $('.enviar').css('color','#002D55');

          $('label').css('color','#002D55');//
          
          $('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(255, 218, 0,0.3)'});
          $('textarea, input').css('color','#002D55');//
      
          $('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_amarillo.jpg" alt="contacto"></a>');
          $('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_amarillo.jpg" alt=fb></a>');
          $('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_amarillo.jpg" alt="instagram"></a>');

          break;
      case 4:
//          $('#inicio').removeClass('portada-turquesa portada-green portada-yellow portada-orange').addClass('portada-pink');
          $('#inicio').parallax({imageSrc:'img/portada_rosa.jpg'});

          $('.inner-image').attr('src','img/logo-solo_rosa.jpg');
		      $('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//
          $('.inner-flecha').attr('src','img/flecha-abajo_rosa.png');

          $('#parallax-nav ul li a').removeClass('turquesa green yellow orange').addClass('pink');

          $('.nav-title').css('color','#D51968');
          $('.navbar-default .navbar-nav>li>a').removeClass('menu-turquesa menu-green menu-yellow menu-orange').addClass('menu-pink');

          $('.hola-image').attr('src','img/hola-matilde_rosa.jpg');
          $('.hola-p').css('color','#002D55');//

          $('.como-ayudamos-list > h2:nth-child(even)').css('color','#D51968');
          $('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//


          $('.flex-direction-nav a').removeClass('turquesa-arrow green-arrow yellow-arrow orange-arrow').addClass('pink-arrow');

          $('.filter-web, .filter-grafico').parent().removeClass('turquesa-gallery yellow-gallery green-gallery-gallery orange-gallery').addClass('pink-gallery');


          $('.ir a').removeClass('enlace-turquesa enlace-green enlace-yellow enlace-orange').addClass('enlace-pink');

          $('label').css('color','#002D55');//

          $('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(213, 25, 104,0.3)'});
          $('textarea, input').css('color','#002D55');//
          $('.enviar').removeClass('send-turquesa send-green send-yellow send-orange').addClass('send-pink');
          $('.enviar').css('color','#002D55');

          $('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_rosa.jpg" alt="contacto"></a>');
          $('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_rosa.jpg" alt="fb"></a>');
          $('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_rosa.jpg" alt="instragram"></a>');


          break;
      case 5:

//          $('#inicio').removeClass('portada-turquesa portada-green portada-yellow portada-pink').addClass('portada-orange');
          $('#inicio').parallax({imageSrc:'img/portada_naranja.jpg'});


          $('.inner-image').attr('src','img/logo_naranja.png');
		      $('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//
          $('.inner-flecha').attr('src','img/flecha-abajo_naranja.png');

          $('#parallax-nav ul li a').removeClass('turquesa green yellow pink').addClass('orange');

          $('.nav-title').css('color','#F5821F');
          $('.navbar-default .navbar-nav>li>a').removeClass('menu-turquesa menu-green menu-yellow menu-pink').addClass('menu-orange');

          $('.hola-image').attr('src','img/hola-matilde_naranja.jpg');
          $('.hola-p').css('color','#002D55');//

          $('.como-ayudamos-list > h2:nth-child(even)').css('color','#F5821F');
          $('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//

          $('.flex-direction-nav a').removeClass('turquesa-arrow green-arrow yellow-arrow pink-arrow').addClass('orange-arrow');

          $('.filter-web, .filter-grafico').parent().removeClass('turquesa-gallery green-gallery yellow-gallery pink-gallery').addClass('orange-gallery');

          $('.ir a').removeClass('enlace-turquesa enlace-green enlace-yellow enlace-pink').addClass('enlace-orange');

          $('label').css('color','#002D55');//


          $('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(245, 130, 31,0.3)'});
          $('textarea, input').css('color','#002D55');//

          $('.enviar').removeClass('send-turquesa send-green send-yellow send-pink').addClass('send-orange');
          $('.enviar').css('color','#002D55');

          $('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_naranja.png" alt="contacto"></a>');
          $('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_naranja.png" alt="fb"></a>');
          $('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_naranja.png" alt="instagram"></a>');

          break;
      default:
          
         $('#inicio').parallax({imageSrc:'img/portada_turquesa.jpg'});
  
          $('.inner-image').attr('src','img/logo-solo.png');
          $('.inner-image-flecha').attr('src','img/flecha-abajo-amarino.png');//
          $('.inner-flecha').attr('src','img/flecha-abajo_turquesa.png');

          $('.nav-title').css('color','#71cbd2');
          $('.navbar-default .navbar-nav>li>a').removeClass('menu-green menu-yellow menu-pink menu-orange').addClass('menu-turquesa');
          
          $('.hola-image').attr('src','img/hola-matilde.jpg');
          $('.hola-p').css('color','#002D55');//


          $('.como-ayudamos-list > h2:nth-child(even)').css('color','#71cbd2');
          $('.como-ayudamos-list > h2:nth-child(odd)').css('color','#002D55');//


          $('#parallax-nav ul li a').removeClass('green yellow pink orange').addClass('turquesa');
          $('.flex-direction-nav a').removeClass('green-arrow yellow-arrow pink-arrow orange-arrow').addClass('turquesa-arrow');
          
          $('.filter-web, .filter-grafico').parent().removeClass('green-gallery yellow-gallery pink-gallery orange-gallery').addClass('turquesa-gallery');

          $('.ir a').removeClass('enlace-green enlace-yellow enlace-pink enlace-orange').addClass('enlace-turquesa');


          $('label').css('color','#002D55')//
          $('textarea, input[type="text"], input[type="tel"], input[type="email"]').css({'border':'none','background-color':'rgba(113, 203, 210,0.3)'});

          $('textarea, input').css('color','#002D55');//
          $('.enviar').removeClass('send-green send-yellow send-pink send-orange').addClass('send-turquesa');
          $('.enviar').css('color','#002D55')
          $('.contacto').html('<a href="mailto:contacto@matilde.com.mx"><img src="img/contacto_turquesa.jpg" alt="contacto"></a>');
          $('.facebook').html('<a href="https://www.facebook.com/matildedesignstudio/?fref=ts" target="_blank"><img src="img/fb_turquesa.jpg" alt="fb"></a>');
          $('.instagram').html('<a href="https://www.instagram.com/matildedesignstudio/" target="_blank"><img src="img/instagram_turquesa.jpg" alt="instagram"></a>');


    }
  };

  function removeCarga() {
    localStorage.removeItem('carga');
  }


  var reloadHome = function(number) {
  	carga = -1;
  	localStorage.setItem('color',JSON.stringify(number));
  	localStorage.setItem('carga',JSON.stringify(carga));
  	location.reload();
  };


	function loadPortada(){
      try{
          color = JSON.parse(localStorage.getItem('color')) || 1;
          
      } catch (err) {
          color = 1;
      }  
      return color;
	}

	function loadCarga () {
      try{
          carga = JSON.parse(localStorage.getItem('carga')) || 1;
          
      } catch (err) {
          carga = 1;
      } 
      return carga;
	}

$(document).ready(function(){


	var positionSelectColor = $('#page-top').offset();
	var positionInicio = $('#inicio').offset();
	var positionHola = $('#hola').offset();
	var positionAyuda = $('#como-ayudamos').offset();
	var positionAmamos = $('#amamos-lo-que-hacemos').offset();
	var positionGrito = $('#echanos-un-grito').offset();


	var c = loadPortada();

	removeHome(c);

	var primeravez;

	primeravez = loadCarga();


	if(primeravez==1){
		$(window).on('beforeunload', function() {
	    	$(window).scrollTop(0);
		});
	}else{
		$(window).ready(function() {
			$('html, body').animate({
	        scrollTop: $("#inicio").offset().top}, 2000);
		});
    removeCarga();
	}





    if(c==1){
    	$('#inicio').parallax({imageSrc:'img/portada-turquesa.jpg'});
    	$('#como-ayudamos').parallax({imageSrc:'img/servimos_turquesa.jpg'});
    	$('#amamos-lo-que-hacemos').parallax({imageSrc:'img/amamos_turquesa.jpg'});
    	$('#echanos-un-grito').parallax({imageSrc:'img/grito_turquesa.jpg'})
    }

    if(c==2){
    	$('#inicio').parallax({imageSrc:'img/portada-verde.jpg'});
    	$('#como-ayudamos').parallax({imageSrc:'img/servimos_verde.jpg'});
    	$('#amamos-lo-que-hacemos').parallax({imageSrc:'img/amamos_verde.jpg'});
    	$('#echanos-un-grito').parallax({imageSrc:'img/grito_verde.jpg'})
    }

    if(c==3){
    	$('#inicio').parallax({imageSrc:'img/portada-amarillo.jpg'});
    	$('#como-ayudamos').parallax({imageSrc:'img/servimos_amarillo.jpg'});
    	$('#amamos-lo-que-hacemos').parallax({imageSrc:'img/amamos_amarillo.jpg'});
    	$('#echanos-un-grito').parallax({imageSrc:'img/grito_amarillo.jpg'})
    }

    if(c==4){
    	$('#inicio').parallax({imageSrc:'img/portada-rosa.jpg'});
    	$('#como-ayudamos').parallax({imageSrc:'img/servimos_rosa.jpg'});
    	$('#amamos-lo-que-hacemos').parallax({imageSrc:'img/amamos_rosa.jpg'});
    	$('#echanos-un-grito').parallax({imageSrc:'img/grito_rosa.jpg'})
    }

    if(c==5){
    	$('#inicio').parallax({imageSrc:'img/portada-naranja.jpg'});
    	$('#como-ayudamos').parallax({imageSrc:'img/servimos_naranja.jpg'});
    	$('#amamos-lo-que-hacemos').parallax({imageSrc:'img/amamos_naranja.jpg'});
    	$('#echanos-un-grito').parallax({imageSrc:'img/grito_naranja.jpg'})
    }




	$('.flexslider').flexslider({
		controlNav: false,
		slideshow: false,
		keyboard: false
	});

	$('#parallax-nav').hide();



	 $(window).scroll(function(){
        /*if($(document).scrollTop()>=positionSelectColor.top&&$(document).scrollTop()<positionInicio.top){
        	$('#parallax-nav-item-seleccion').parent().children('li').removeClass('active');
        	$('#parallax-nav-item-seleccion').addClass('active');
        }
        if($(document).scrollTop()>=positionInicio.top-1&&$(document).scrollTop()<positionHola.top){
			$('#parallax-nav-item-inicio').parent().children('li').removeClass('active');
			$('#parallax-nav-item-inicio').addClass('active');
        }*/
        if($(document).scrollTop()>=positionSelectColor.top&&$(document).scrollTop()<positionInicio.top){
            $('#parallax-nav').hide();
        }
        if($(document).scrollTop()>=positionInicio.top-1&&$(document).scrollTop()<positionHola.top){
            $('#parallax-nav').hide();
        }
        if($(document).scrollTop()<positionHola.top-1){
            $('#parallax-nav ul li').removeClass('active');
        }
        if($(document).scrollTop()>=positionHola.top-1&&$(document).scrollTop()<positionAyuda.top){
            $('#parallax-nav-item-hola').parent().children('li').removeClass('active');
            $('#parallax-nav-item-hola').addClass('active');
            $('#parallax-nav').show();
        }
        if($(document).scrollTop()>=positionAyuda.top-1&&$(document).scrollTop()<positionAmamos.top){
            $('#parallax-nav-item-ayuda').parent().children('li').removeClass('active');
            $('#parallax-nav-item-ayuda').addClass('active');
//          $('#parallax-nav').show();
        }
        if($(document).scrollTop()>=positionAmamos.top-1&&$(document).scrollTop()<positionGrito.top){
            $('#parallax-nav-item-hacemos').parent().children('li').removeClass('active');
            $('#parallax-nav-item-hacemos').addClass('active');
//          $('#parallax-nav').show();
        }
        if($(document).scrollTop()>=positionGrito.top-1){
            $('#parallax-nav-item-grito').parent().children('li').removeClass('active');
            $('#parallax-nav-item-grito').addClass('active');
//          $('#parallax-nav').show();
        }

    });

	$('#parallax-nav-item-seleccion').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
	});

	$('#parallax-nav-item-inicio').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('#parallax-nav-item-hola').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
	});

	$('#parallax-nav-item-ayuda').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
	});

	$('#parallax-nav-item-hacemos').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
	});

	$('#parallax-nav-item-grito').click(function(){
		$(this).parent().children('li').removeClass('active');		
		$(this).addClass('active');
	});

	$('.filter-grafico').click(function () {
		
		//if ($('.filter-grafico').parent().hasClass('turquesa-gallery')) {
			$('.gallery').empty().append('<div class="flexslider grafico">'+
                            '<ul class="slides">'+
                                '<li ><img class="grafico" src="img/grafico1.jpg" alt="grafico1"></li>'+
                                '<li ><img class="grafico" src="img/grafico2.jpg" alt="grafico2"></li>'+
                                '<li ><img class="grafico" src="img/grafico3.jpg" alt="grafico3"></li>'+
                                '<li ><img class="grafico" src="img/grafico4.jpg" alt="grafico4"></li>'+
                                '<li ><img class="grafico" src="img/grafico5.jpg" alt="grafico5"></li>'+
                                '<li ><img class="grafico" src="img/grafico6.jpg" alt="grafico6"></li>'+
                            '</ul>'+
                        '<ul class="flex-direction-nav"><li class="fxEmbossBtn prev_btn"> <a class="btn_icon prev" href="#!"></a> <span class="btn_hover"></span> </li><li class="fxEmbossBtn next_btn"> <a class="btn_icon next" href="#!"></a> <span class="btn_hover"></span> </li></ul>'+
                      	'<ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul>'+
                      '</div>');
			if ($('.filter-grafico').parent().hasClass('turquesa-gallery')) {
				$('.flex-direction-nav a').addClass('turquesa-arrow');
			};
			if ($('.filter-grafico').parent().hasClass('green-gallery')) {
				$('.flex-direction-nav a').addClass('green-arrow');
			};
			if ($('.filter-grafico').parent().hasClass('yellow-gallery')) {
				$('.flex-direction-nav a').addClass('yellow-arrow');
			};
			if ($('.filter-grafico').parent().hasClass('pink-gallery')) {
				$('.flex-direction-nav a').addClass('pink-arrow');
			};
			if ($('.filter-grafico').parent().hasClass('orange-gallery')) {
				$('.flex-direction-nav a').addClass('orange-arrow');
			};
			
		//};


		$('.grafico').flexslider({
			controlNav: false,
			slideshow: false,
			keyboard: false
		});
		$(this).parent().parent().find('.col-lg-1').children().removeClass('active');
		$('.ir').removeClass('flex-caption')
		$(this).addClass('active');
	});


	$('.filter-web').click(function(){
		var h = $('.gallery').height();
		$('.gallery').empty().append('<div class="flexslider web">'+
                            '<ul class="slides"> '+
                                '<li><img class="" src="img/web1.jpg" alt="web1"><p class="text-right ir"><a target="_blank" href="http://bordapardinas.com/">échale un vistazo</a></p></li>'+
                                '<li><img class="" src="img/web2.jpg" alt="web2"><p class="text-right ir"><a target="_blank" href="http://bordapardinas.com/">échale un vistazo</a></p></li>'+
                                '<li><img class="" src="img/web3.jpg" alt="web3"><p class="text-right ir"><a target="_blank" href="http://bordapardinas.com/">échale un vistazo</a></p></li>'+
                                '<li><img class="" src="img/web4.jpg" alt="web4"><p class="text-right ir"><a target="_blank" href="http://arteymaterial.com/">échale un vistazo</a></p></li>'+
                                '<li><img class="" src="img/web5.jpg" alt="web5"><p class="text-right ir"><a target="_blank" href="http://arteymaterial.com/">échale un vistazo</a></p></li>'+
                                '<li><img class="" src="img/web6.jpg" alt="web6"><p class="text-right ir"><a target="_blank" href="http://arteymaterial.com/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web7.jpg" alt="web7"><p class="text-right ir"><a target="_blank" href="http://cofee-fer.com/">échale un vistazo</a></p></li>'+                           
                                '<li><img class="" src="img/web8.jpg" alt="web8"><p class="text-right ir"><a target="_blank" href="http://cofee-fer.com/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web9.jpg" alt="web9"><p class="text-right ir"><a target="_blank" href="http://cofee-fer.com/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web10.jpg" alt="web10"><p class="text-right ir"><a target="_blank" href="http://cubo-b.com/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web11.jpg" alt="web11"><p class="text-right ir"><a target="_blank" href="http://cubo-b.com/">échale un vistazo</a></p></li>'+                           
                                '<li><img class="" src="img/web12.jpg" alt="web12"><p class="text-right ir"><a target="_blank" href="http://cubo-b.com/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web13.jpg" alt="web13"><p class="text-right ir"><a target="_blank" href="http://creativeriasocial.org/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web14.jpg" alt="web14"><p class="text-right ir"><a target="_blank" href="http://creativeriasocial.org/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web15.jpg" alt="web15"><p class="text-right ir"><a target="_blank" href="http://creativeriasocial.org/">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web16.jpg" alt="web16"><p class="text-right ir"><a target="_blank" href="http://grupociima.com/ciimasustentable.html">échale un vistazo</a></p></li>'+                            
                                '<li><img class="" src="img/web17.jpg" alt="web17"><p class="text-right ir"><a target="_blank" href="http://grupociima.com/ciimasustentable.html">échale un vistazo</a></p></li>'+                           
                                '<li><img class="" src="img/web18.jpg" alt="web18"><p class="text-right ir"><a target="_blank" href="http://grupociima.com/ciimasustentable.html">échale un vistazo</a></p></li>'+                            
                              '</ul>'+
                        '<ul class="flex-direction-nav"><li class="fxEmbossBtn prev_btn"> <a class="btn_icon prev" href="#!"></a> <span class="btn_hover"></span> </li><li class="fxEmbossBtn next_btn"> <a class="btn_icon next" href="#!"></a> <span class="btn_hover"></span> </li></ul>'+
                    	'<ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul>'+  
                  	'</div> ');
		if ($('.filter-web').parent().hasClass('turquesa-gallery')) {
			$('.flex-direction-nav a').addClass('turquesa-arrow');			
				$('.ir a').removeClass('enlace-green enlace-yellow enlace-pink enlace-orange').addClass('enlace-turquesa');		
		};
		if ($('.filter-web').parent().hasClass('green-gallery')) {
			$('.flex-direction-nav a').addClass('green-arrow');			
			$('.ir a').removeClass('enlace-turquesa enlace-yellow enlace-pink enlace-orange').addClass('enlace-green');
		};
		if ($('.filter-web').parent().hasClass('yellow-gallery')) {
			$('.flex-direction-nav a').addClass('yellow-arrow');			
			$('.ir a').removeClass('enlace-turquesa enlace-green enlace-pink enlace-orange').addClass('enlace-yellow');
		};
		if ($('.filter-web').parent().hasClass('pink-gallery')) {
			$('.flex-direction-nav a').addClass('pink-arrow');			
			$('.ir a').removeClass('enlace-turquesa enlace-green enlace-yellow enlace-orange').addClass('enlace-pink');
		};
		if ($('.filter-web').parent().hasClass('orange-gallery')) {
			$('.flex-direction-nav a').addClass('orange-arrow');			
			$('.ir a').removeClass('enlace-turquesa enlace-green enlace-yellow enlace-pink').addClass('enlace-orange');
		};
		$('.web').flexslider({
			controlNav: false,
			slideshow: false,
			keyboard: false
		});
		$(this).parent().parent().find('.col-lg-1').children().removeClass('active');
		$('.ir').addClass('flex-caption').removeClass('text-right');
		$(this).addClass('active');
		$('.gallery').height(h);
	});




});

