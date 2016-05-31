<!DOCTYPE html>
<html>
<head>
  <title>Matilde: Tu acento mexicano</title>
  <link rel="icon" type="image/jpg" href="img/faviconv2.jpg">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--<link rel="stylesheet" type="text/css" href="http://static1.squarespace.com/static/sitecss/53e406bfe4b0dc68473fc98c/6/515c7bd0e4b054dae3fcf003/54cd2708e4b0c650e13d5272/2696-05142015/1458617872555/site.css?&filterFeatures=false">-->
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="css/scrolling-nav.css">
  <link rel="stylesheet" href="css/flexslider.css" type="text/css">
  <link rel="stylesheet" type="text/css" href="css/parallax-nav.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">

  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/bootbox.min.js"></script>
  <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
  <script src="js/scrolling-nav.js"></script>
  <script src="js/jquery.easing.min.js"></script>
  <script src="js/parallax.min.js"></script>
  <script type="text/javascript" src="js/contact.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  
</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">


    <div id="home">
      <div class="container">
            <div class="col-lg-12 home-color">
                <!--<ul class="home-color">
                  <li><a class="page-scroll" href="#inicio"> <img class="turquesa" src="img/turquesa.jpg" onclick="removeHome(1);"></a></li>
                  <li><a class="page-scroll" href="#inicio"> <img class="verde" src="img/verde.jpg" onclick="removeHome(2);"></a></li>
                  <li><a class="page-scroll" href="#inicio"> <img class="amarillo" src="img/amarillo.jpg" onclick="removeHome(3);"></a></li>
                  <li><a class="page-scroll" href="#inicio"> <img class="rosa" src="img/rosa.jpg" onclick="removeHome(4);"></a></li>
                  <li><a class="page-scroll" href="#inicio"> <img class="naranja" src="img/naranja.jpg" onclick="removeHome(5);"></a></li>
                </ul>-->
                <!--onclick="removeHome(1);"-->
                <!--class="page-scroll" -->
                <a href=""> <img src="img/turquesa.jpg" onclick="reloadHome(1)" class="parallax-turquesa" alt="Turquesa"></a>
                <a href="" > <img src="img/verde.jpg" onclick="reloadHome(2)" class="parallax-verde" alt="Verde"></a>
                <a href="" > <img  src="img/amarillo.jpg" onclick="reloadHome(3)" class="parallax-amarillo" alt="Amarillo"></a>
                <a href=""> <img class="parallax-rosa" src="img/rosa.jpg" onclick="reloadHome(4);" alt="Rosa"></a>
                <a href=""> <img class="parallax-naranja" src="img/naranja.jpg" onclick="reloadHome(5);" alt="Naranja"></a>
            </div>
          <div class="col-lg-12 color">
            <img src="img/color.jpg">
          </div>
        </div>
      </div>


          <nav id="parallax-nav" style="margin-top: -61px;" class="color-weight-light">
            <ul>
              <!--<li id="parallax-nav-item-seleccion" class="active"><a class="page-scroll" href="#page-top"><span class="nav-title">seleccion de color</span></a></li>
            
              <li id="parallax-nav-item-inicio"><a class="page-scroll" href="#inicio"><span class="nav-title">Portada</span></a></li>-->
            
              <li id="parallax-nav-item-hola"><a class="page-scroll" href="#hola"><span class="nav-title">hola</span></a></li>
            
              <li id="parallax-nav-item-ayuda" class=""><a class="page-scroll"  href="#como-ayudamos"><span class="nav-title">Como Te ayudamos</span></a></li>
            
              <li id="parallax-nav-item-hacemos" class=""><a class="page-scroll" href="#amamos-lo-que-hacemos"><span class="nav-title">Amamos lo que hacemos</span></a></li>
            
              <li id="parallax-nav-item-grito" class=""><a class="page-scroll" href="#echanos-un-grito"><span class="nav-title">Échanos un grito</span></a></li>
            
            </ul>
          </nav>  

          <!--data-image-src="img/portada_turquesa.jpg"-->
          <!--parallax-window-->
      <div id="inicio" data-parallax="scroll">
        <nav class="navbar navbar-default"  role="navigation">
            <!--<div class="container">-->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-matilde-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-matilde-collapse navbar-right" aria-expanded="false">
                    <ul class="nav navbar-nav menu-matilde">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                        <li class="hidden">
                            <a data-toggle="collapse" class="page-scroll" href="#page-top"></a>
                        </li>
                        <li>
                            <a data-toggle="collapse" class="page-scroll" href="#hola">¡Hola!</a>
                        </li>
                        <li>
                            <a data-toggle="collapse" class="page-scroll" href="#como-ayudamos">¿Cómo te ayudamos?</a>
                        </li>
                        <li>
                            <a data-toggle="collapse" class="page-scroll" href="#amamos-lo-que-hacemos">Amamos lo que hacemos</a>
                        </li>
                        <li>
                            <a data-toggle="collapse" class="page-scroll" href="#echanos-un-grito">Échanos un grito</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            <!--</div>-->
            <!-- /.container -->
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-xs-6">
            </div>
            <div class="col-xs-6">
              <p class="text-center">
                <a class="page-scroll" href="#page-top"><img class="inner-image" alt="Logo de Matilde"></a>
              </p>
              <p class="text-center">
                <a class="page-scroll" href="#hola"><img class="inner-image-flecha" alt="Hacia Hola"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    
    <!-- Intro Section -->
    <section id="hola" class="hola-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="hola-image" alt="Hola">
                    <p class="hola-p">Somos un estudio de diseño y comunicación visual <br>donde conjugamos como equipo, nuestras <br>mejores cualidades creativas.</p>
                    <p class="hola-p">Cada día comprobamos más que trabajamos <br>en lo que más nos gusta hacer... el diseño.</p>
                    <p class="hola-p">Nos esforzamos por dar un servicio <br>rápido, conciso y con atención personalizada. <br>Dando resultados creativos y originales, <br>logrando hacer de esto la mejor de las experiencias.</p>
                </div>
            </div>
        </div>
    </section>




    <div id="como-ayudamos" class="parallax-window" data-parallax="scroll">
      <div class="container">
        <div class="row">
          <img src="img/letrero_ayudamos.png" class="inner-ayudamos" alt="Como ayudamos">
        </div>
        <div class="row">
          <a class="page-scroll" href="#lista-trabajos"><img class="inner-flecha" alt="Hacia Lista"></a>
        </div>
      </div>
    </div>  
    <section id="lista-trabajos" class="como-ayudamos-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 como-ayudamos-list">
                    <h2>Imagen Corporativa</h2>
                    <h2>Papelería</h2>
                    <h2>Diseño Web</h2>
                    <h2>Mailing</h2>
                    <h2>Diseño Editorial</h2>
                    <h2>Invitaciones Sociales</h2>
                    <h2>Invitaciones Corporativas</h2>
                    <h2>Tarjetas Personalizadas</h2>
                    <h2>Bolos</h2>
                    <h2>Regalos Empresariales</h2>
                    <h2>Promocionales</h2>
                    <h2>Kit para Hospital</h2>
                    <h2>Servicios de Imprenta</h2>
                    <h2>Producción en Lonas / Viniles / Acrílicos</h2>
                    <h2>Diseño y Producción de Cajas</h2>
                </div>
            </div>
        </div>
    </section>


    <!--<img src="img/letrero_amamos.png" class"inner-servimos">-->
    
    <!-- Services Section -->
    <div id="amamos-lo-que-hacemos" class="parallax-window" data-parallax="scroll">
      <div class="container">
        <div class="row">
          <img src="img/letrero_amamos.png" class="inner-amamos" alt="Amamos">
        </div>
        <div class="row">
          <a class="page-scroll" href="#trabajos-realizados"><img src="img/flecha-abajo_turquesa.png" class="inner-flecha" alt="Hacia trabajos"></a>
        </div>
      </div>
    </div> 
    <section id="trabajos-realizados" class="amamos-lo-que-hacemos-section">
        <div class="container">
            <div class="row">
              <div class="col-lg-10 col-md-10"></div>
              <div class="col-lg-1 col-md-1"><span class="filter filter-grafico active">Gráfico</span></div>
              <div class="col-lg-1 col-md-1"><span class="filter filter-web">Web</span></div>
            </div>

            <div class="row">
                <div class="col-lg-12 gallery">

                      <div class="flexslider grafico">
                            <ul class="slides">
                                <li ><img class="grafico" src="img/grafico1.jpg" alt="grafico1"></li>
                                <li ><img class="grafico" src="img/grafico2.jpg" alt="grafico2"></li>
                                <li ><img class="grafico" src="img/grafico3.jpg" alt="grafico3"></li>
                                <li ><img class="grafico" src="img/grafico4.jpg" alt="grafico4"></li>
                                <li ><img class="grafico" src="img/grafico5.jpg" alt="grafico5"></li>
                                <li ><img class="grafico" src="img/grafico6.jpg" alt="grafico6"></li>
                            </ul>
                        <ul class="flex-direction-nav"><li class="fxEmbossBtn prev_btn"> <a class="btn_icon prev" href="#!"></a> <span class="btn_hover"></span> </li><li class="fxEmbossBtn next_btn"> <a class="btn_icon next" href="#!"></a> <span class="btn_hover"></span> </li></ul>
                        <ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul>
                      </div>

                </div>
            </div>
        </div>
    </section>


    <div id="echanos-un-grito" class="parallax-window" data-parallax="scroll">
      <div class="container">
        <div class="row">
          <img src="img/letrero_grito.png" class="inner-grito" alt="grito">
        </div>
        <div class="row">
          <a class="page-scroll" href="#contacto"><img src="img/flecha-abajo_turquesa.png" class="inner-flecha" alt="hacia formulario"></a>
        </div>
      </div>
    </div> 
    <section id="contacto" class="echanos-un-grito-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <form id="contact_form" method="post" action="">
                      <label class="text-uppercase">Nombre</label>
                      <input type="text" name="nombre" id="nombre" required>
                      <label class="text-uppercase">Apellidos</label>
                      <input type="text" name="apellidos" id="apellidos" required>
                      <label class="text-uppercase">Correo Electrónico</label>
                      <input type="email" name="email" id="email" required>
                      <label class="text-uppercase">Teléfono / Celular</label>
                      <input type="tel" name="telefono" id="telefono" required>
                      <label class="text-uppercase">Mensaje</label>
                      <textarea name="mensaje" id="mensaje" required></textarea> 
                    </form>
                    <p class="text-center enviar-row">
                      <!--<input type="submit" class="btn btn-link enviar" value="Enviar">-->
                      <label class="text-uppercase enviar">Enviar</label>
                    </p>
                </div>
            </div>
            <div class="row">
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-xs-4 contacto"></div>
              <div class="col-lg-4 col-md-4 col-xs-4 facebook"></div>
              <div class="col-lg-4 col-md-4 col-xs-4 instagram"></div>
            </div>
        </div>
    </section>
    <footer></footer>
</body>
</html>
<script>
</script>


<script type="text/javascript">

</script>
