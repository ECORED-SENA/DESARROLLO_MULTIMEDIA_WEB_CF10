<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Integración multimedia

    .bg_img_02
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
        .col-lg-8(data-aos="fade")
          p Hacer una integración multimedia consiste en organizar los archivos del proyecto con su respectiva nominación, formato y ubicación al interior de la aplicación o aplicaciones del producto. Igualmente, se realiza la preparación de los programas necesarios para la instalación, accesibilidad y usabilidad de los usuarios. Actualmente, el diseñador cuenta con herramientas que le facilitan la labor de integración de los elementos multimedia (imagen, texto, audio, video), como los CMS - Sistemas de gestión de Contenidos, que se verán más adelante.   
          p.bold Cuando se desarrolla un proyecto #[em web] haciendo uso de lenguajes como el HTML, en el proceso de integración, se requiere utilizar líneas de código, por ejemplo, para:      

      TabsA.color-acento-botones(data-aos="fade")
        .tarjeta.tabs-a__tab_02.p-4(titulo="Integrar contenidos u otros recursos de la <em>web</em>")
          h4.mb-4 Integrar contenidos u otros recursos de la #[em web]
          .row.mb-4
            .col-auto
              .bg--white.brad_01.p-4
                p.mb-0 #[strong.clr--blue &lt;a  href=]"https://www.google.com/chrome/" #[strong.clr--blue &gt;] #[strong.clr--blue &lt;/a &gt;]
          p La etiqueta #[strong &lt;a&gt;] actúa como un ancla para enlazar o vincular; #[strong href] se refiere al contenido que se va a enlazar, que, en este caso, es el navegador #[em web] google chrome. La etiqueta de ancla se cierra con #[strong &lt;/a&gt;].  
          p Si lo que se desea es vincular un texto titulado que está dentro de la misma interfaz, en la instrucción no se incluye el protocolo https://, sino el título que se desea enlazar; por ejemplo: 

          p.bold &lt;a&gt; href=”Descarga”&gt;&lt;/a&gt;          
          p.mb-0 Entonces el cursor nos ubica en el título Descarga.

        .tarjeta.tabs-a__tab_02.p-4(titulo="Integrar imágenes")
          h4.mb-4 Integrar imágenes
          .row.mb-4
            .col-auto
              .bg--white.brad_01.p-4
                p.mb-0 #[strong.clr--blue &lt;img src =] "iconos-recursos-humanos-plana_1284-13057.jpg"  #[strong.clr--blue height =] "300"  #[strong.clr--blue width =]"200"#[strong.clr--blue &gt;]

          p La etiqueta #[strong &lt;img src &gt;] indica que lo que se va a integrar en el proyecto es una imagen, que en este caso se llama “iconos-recursos-humanos-plana_1284-13057.jpg”.

          p Obsérvese que no se ha colocado el protocolo https://, debido a que es una imagen que está descargada en el equipo de cómputo o servidor local  donde se está desarrollando el proyecto.   

          p.mb-0 Las instrucciones #[strong #[em height]] y #[strong #[em width]] se utilizan para proporcionar el alto y el ancho de la imagen, respectivamente.

        .tarjeta.tabs-a__tab_02.p-4(titulo="Integrar video")
          h4.mb-4 Integrar video
          .row.mb-4
            .col-auto
              .bg--white.brad_01.p-4
                p.mb-0 #[strong.clr--blue &lt;video src = "Alturas.ogv" Type="video/ogv"&gt;]
                p.mb-0.ps-4 Este es un elemento de video
                p.mb-0 #[strong.clr--blue &lt;/video&gt;]

          p Las etiquetas #[strong &lt;video&gt;] y #[strong &lt;/video&gt;] indican que lo que se va a incrustar en el proyecto es un video; la etiqueta source src indica la fuente del video, que en este caso se denomina #[strong Alturas.ogv.] 
          p.mb-0 La instrucción #[strong #[em Type]] da cuenta del tipo de formato, ya que hay varias. En este caso, es formato #[strong ogv], representado por la extensión del nombre. No todos los formatos son compatibles con la versión del navegador que se está utilizando; si esto sucede, se debe incluir un mensaje que lo indique.

        .tarjeta.tabs-a__tab_02.p-4(titulo="Integrar audio")
          h4.mb-4 Integrar audio
          .row.mb-4
            .col-auto
              .bg--white.brad_01.p-4
                p.mb-0 #[strong.clr--blue &lt;audio&gt;]
                p.mb-0 #[strong.clr--blue &lt; source src =] "eclipse.ogg" #[strong.clr--blue Type=] "audio/ogg"#[strong.clr--blue &gt;]
                p.mb-0 #[strong.clr--blue &lt;/audio&gt;]


          p.mb-0 Las etiquetas #[strong &lt;audio&gt;] y #[strong &lt;/audio&gt;] indican que lo que se va a incrustar en el proyecto es un audio; la etiqueta source src indica la fuente del audio que en este caso ese denomina eclipse.ogg la instrucción Type da cuenta del tipo de formato del audio y al igual que en video, no todos los formatos son compatibles con la versión del navegador que se está utilizando, para lo cual se debe incluir un mensaje que lo indique.

        .tarjeta.tabs-a__tab_02.p-4(titulo="Integrar animación")
          h4.mb-4 Integrar animación
          .row.mb-4
            .col-auto
              .bg--white.brad_01.p-4
                p.mb-0 #[strong.clr--blue &lt;audio&gt;]
                p.mb-0 #[strong.clr--blue &lt; source src =] "eclipse.ogg" #[strong.clr--blue Type=] "audio/ogg"#[strong.clr--blue &gt;]
                p.mb-0 #[strong.clr--blue &lt;/audio&gt;]

          p.mb-0 Generalmente, las animaciones están creadas en formatos #[strong GIF], o desarrolladas en JavaScript o Adobe. En este caso, como #[strong “pancho.gif”] es una imagen en movimiento, se utiliza la misma etiqueta de imágenes, indicando alto #[strong #[em height]] de 50 pixeles y ancho #[strong #[em width]] de 50 pixeles. Aquí también es importante tener en cuenta los formatos, para que las animaciones se puedan ver en los navegadores sin presentar inconvenientes.

    separador

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 2.1 Formatos para la integración multimedia

    p(data-aos="fade").mb-5 Los productos multimedia que posean elementos visuales de imagen o audio y que vayan a ser publicados en la #[em web] deben integrarse teniendo en cuenta su compatibilidad con los navegadores que se encuentran instalados en el cliente, para que puedan ser vistos por los usuarios sin presentar ningún inconveniente. Actualmente, los formatos de los componentes más utilizados y soportados por la #[em web] son los que se relacionan a continuación.

    .row.mb-4(data-aos="fade")
      .col-auto
        p.custom-H3 Formatos de Imagen 

    p.mb-5(data-aos="fade") Reconozca cuáles son los formatos de imagen:

    .crd.slyderBg_01.brd--rad_02.p-3.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Formato JPG
            p Es un formato que se utiliza para las imágenes y que permite la reducción de tamaño sin pérdida de mucha calidad, por su capacidad de compresión de colores. 
            p.mb-0 Si se debe transmitir un mensaje que demuestre más que muchas palabras, como un banner o pancarta, es recomendable utilizar este tipo de formato, en un tamaño adecuado. 
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/t2_02.png', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Formatos GIF
            p Es un formato que se utiliza para las imágenes en movimiento que manejan pocos colores y fondos que quedan en segundo plano. El hecho de tener movimiento hace que sea más pesado, y necesita de un botón para activar un desplazamiento, por ello, es utilizado cuando sea necesario llamar la atención del usuario sobre algo. 
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/t2_03.png', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Formatos PNG
            p Es el formato que más utilizan los diseñadores por su capacidad de manejar imágenes con efectos de transparencia. Maneja imágenes en blanco y negro y colores reales de hasta 256 niveles, tiene un mecanismo de corrección de errores para garantizar la integridad en el momento de ser incrustada en el producto multimedia.
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/t2_04.png', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Formatos SVG
            p Este tipo de formato trabaja con imágenes vectoriales que se han construido con programas como Photoshop. Una imagen vectorial tiene como base figuras geométricas (círculos, rectángulos, triángulos, etc.) que proporcionan un dibujo muy claro y perfecto para ser interpretado por el navegador #[em web].
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t2/t2_05.png', alt='')

    .row.mb-4(data-aos="fade")
      .col-auto
        p.custom-H3 Formatos de audio

    .crd.slyderBg_01.brd--rad_02.p-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 WAV #[em (Waveform Audio Format)]
            p Creado por Microsoft, incorpora audios sin perder la calidad, ya que no realiza la función de compresión, aspecto que puede llegar a tener un efecto de distorsión en el sonido.   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_06.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 AIFF Audio Interchange File Format
            p Desarrollado por APPLE, por lo tanto, es el que mejor se adapta a este tipo de equipos de cómputo. No pierden calidad, pero ocupan mucha memoria, por lo que se deben trabajar en dispositivos de gran capacidad de almacenamiento.   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_07.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 MP3 MPEG-1 Audiolayer-3
            p Creado por Moving Picture Experts, hace parte del formato de video y posee alta capacidad de compresión. Es el formato de mayor compatibilidad con los dispositivos de #[em hardware] y #[em software] de la #[em web].   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_08.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 ACC Advanced Audio Coding
            p Es la versión mejorada del MP3, ya que posee 48 canales de audio, es decir, diferentes formas de escuchar el sonido, como monofónico, estereofónico, cuadrafónico y en tonos altos hasta de 96 Hz.  
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_09.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 OGG Códec Vorbis
            p Formato de audio que posee hasta 255 canales de audio, es decir, es multisonido, y los tonos del audio alcanzan hasta los 192 Hz, razón por la cual es el más usado en los entornos #[em web].   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_10.svg', alt='')

    .row.mb-4(data-aos="fade")
      .col-auto
        p.custom-H3 Formatos de video

    p(data-aos="fade").mb-5 Ahora puede revisar los formatos de video que se utilizan para este fin:

    .crd.slyderBg_01.brd--rad_02.p-3(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 Formato #[em WebM]
            p Es un formato con extensión #[em .webm,] es soportado sin ningún problema por los navegadores Mozilla, Chrome y Opera, ya que, para ser vistos en los otros, es necesario adicionar un complemento o extensión al navegador. 
            p.mb-0 Es de código abierto, es decir, los desarrolladores pueden hacer modificaciones al código de manera libre.
   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_11.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 Formato MP4 
            p.mb-0 Es un formato muy utilizado cuando se necesita compartir contenidos digitales, y la aplicación YouTube lo recomienda, no solo para contenidos dinámicos (imágenes en movimiento), sino para contenidos estáticos (imágenes fijas). El tamaño de los archivos con esta extensión puede ser pequeño y esto no altera la calidad del video.  
   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_12.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-7.mb-4.mb-lg-0             
            h4 Formato MOV
            p Creado por Apple y utilizado por los equipos MAC, a través del reproductor QuickTime, razón por la cual no son fáciles de integrar con otras marcas y servidores. Se caracteriza por ser de alta calidad para la edición y transmisión en la #[em web], no ocupa mucho espacio de almacenamiento y corre en plataformas Windows, Android y iOS.   
   
          .col-lg-2.col-5
            figure
              img(src='@/assets/curso/temas/t2/t2_13.svg', alt='')

    separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 2.2 Plataformas y gestores de contenido para la integración multimedia

    p(data-aos="fade") En el entorno #[em web], se pueden utilizar plataformas y gestores de contenido para integrar proyectos o productos multimedia, entre los cuales están los portales #[em web], los sitios #[em web] y los CMS.

    p.bold.mb-5 Explore algunas plataformas que permiten integrar proyectos multimedia.

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Plataformas")
        .row.justify-content-center
          .col-lg-6.col-10.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_14.svg', alt='')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Plataformas
            p Una de las plataformas #[em web] para integración multimedia son los sitios #[em web]. Es importante recordar la diferencia entre un sitio #[em web] y una página #[em web], ya que estos dos términos se tienden a confundir.  Un sitio #[em web] está compuesto por varias páginas #[em web], es decir que un sitio #[em web] es todo un conjunto de páginas #[em web] que están conectadas a través de enlaces. 
            p Entonces, una página #[em web] es una unidad de información de un sitio #[em web]. Por ejemplo, al ingresar al espacio #[em web] de una compañía, el primer pantallazo es una página de inicio.
            p.mb-0 En la imagen, se ve un ejemplo de una plataforma, la cual corresponde a un sitio #[em web] conformado por una serie de páginas #[em web].

      .py-3.py-md-4(titulo="Los portales <em>web</em>")
        .row.justify-content-center
          .col-lg-6.col-10.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_15.png', alt='')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Los portales <em>web</em>
            p Son otro tipo de plataformas, caracterizadas por manejar información relacionada con temáticas específicas de interés para los usuarios, ofreciendo una amplia información sobre servicios, proyectos o portafolios.
            p.mb-0 Las grandes empresas suelen tener portal #[em web], porque ofrecen contenidos y ofertas de servicios bastante grandes, por ejemplo las entidades financieras, educativas o informativas (noticias), entre otras.

      .py-3.py-md-4(titulo="Características de los portales <em>web</em>")
        .row.justify-content-center
          .col-lg-6.col-10.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_16.png', alt='')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            h4 Características de los portales #[em web]
            p Los portales #[em web] presentan 3 características especiales para persuadir al usuario:
            p #[strong Información:] buscadores, directorios, noticias, catálogos y servicios.
            p #[strong Participación:] #[em e-mail], foros, #[em chat].
            p #[strong Comodidad:] ofrecer la mayor cantidad de información en un solo sitio y tenerlo disponible.


      .py-3.py-md-4(titulo="Clasificación de los portales <em>web</em>")
        .row.justify-content-center
          .col-lg-6.col-10.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t2/t2_17.png', alt='')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0  
            h4 Clasificación de los portales #[em web]
            p Dependiendo de sus características, los portales se clasifican en:          
            p #[strong Portales horizontales:] son portales con contenidos generales dirigidos a todos los usuarios, tienen servicios de: comunidades virtuales, #[em chat], #[em e-mail], espacio #[em web] gratuito, foros, noticias, información, buscadores. Ejemplos yahoo, MSN.
            p #[strong Portales verticales:] son portales que suministran información y servicios de un gremio puntual, con información específica y enfocados en un tema, como música, empleo, finanzas, deportes, etc.
            p #[strong Portales diagonales:] es un portal que contiene las características tanto del horizontal como del vertical; estos portales utilizan las redes sociales o aplicaciones como Facebook, LinkedIn, Flickr, YouTube, alternados con contenidos o utilidades para un público concreto.
            p #[strong Portales especializados:] aparecen por la demanda de los usuarios de un sitio más especializado en áreas de interés, tanto particulares como profesionales, y que los portales horizontales y verticales no pueden tener contenidos generales o superficiales. Es común encontrarlos exclusivos en temas como deportes, educación, pasatiempos, etc.
            p #[strong Portales corporativos:] estos portales tienen como finalidad potenciar la información de la organización, cercanía con los clientes y proveedores, proteger la información en función del tipo de usuario que previamente solicita información, al ser confidencial.
            p.mb-0 #[strong Portales móviles:] permiten la conexión con los usuarios desde Internet, como desde un teléfono móvil. Hoy en día, es muy común encontrarlos a nivel de empresas, para realizar negocios, ofreciendo productos o servicios.

    separador

    .row.mb-4(data-aos="fade")
      .col-auto
        p.custom-H3 Gestores de contenido (CMS)

    .row.justify-content-center.mb-4
      .col-lg-6.col-12.mb-4.mb-lg-0(data-aos="zoom-in")
        .bg--blue02.hg-100.p-4.p-lg-0
          figure.vh-50
            img(src="@/assets/curso/temas/t2/t2_18.svg", alt="alt").img350.m-auto        
      .col-lg-6(data-aos="zoom-in")       
        .bg--blue.hg-100.p-4
          p Un CMS, siglas en inglés que traducen #[em Content Management System], sistema de gestión de contenidos, es un programa desarrollado para que cualquier usuario pueda administrar y gestionar contenidos de un sitio #[em web], con facilidad y sin conocimientos de programación; para ello, existen CMS de código abierto, es decir, para programar de manera gratuita, y otros con licencia de pago. 
          p.mb-0 Un CMS permite administrar y gestionar contenidos en un medio digital o en el entorno de la #[em web], creando, clasificando o editando información, ya sea en texto, imagen o video. 

    p(data-aos="fade").mb-5 En la figura, se observan las funcionalidades que puede administrar un CMS, como escribir líneas de código HTML, CSS o JavaScript, dado que es de código abierto #[em (open-source)], hacer uso de los servicios de la #[em web] para incorporar elementos visuales, o enlazar sitios #[em web] o un dominio requerido, incorporar archivos PDF, gestionar los datos para el análisis de los usuarios y también elaborar y gestionar contenidos. Dentro de los CMS más utilizados, se encuentra WordPress y Drupal, cuya característica principal, además de todas las anteriores, es que son de fácil configuración para diseños personalizados.

    .bg--mint.p-4.mb-4(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-8.order-2.order-lg-1
          p.bold Características claves a la hora de definir un CMS:
          ul.fa-ul
            li
              i.fa-li.fas.fa-check.clr--orange
              | Potentes herramientas de publicación.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Plantillas responsive (diseño responsivo), que se adaptan a PC, móvil, o tabletas.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Flexibilidad.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Escalabilidad.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Control de publicaciones.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Herramientas SEO integradas.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Integración con redes sociales.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Analítica detallada.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Fácil adaptación a los sistemas.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Seguridad.
        .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
          figure.vh-50
            img(src="@/assets/curso/temas/t2/t2_19.png", alt="alt")

    p.bold.mb-4(data-aos="fade") A continuación, se relacionan algunos de los CMS más utilizados actualmente:

    .bg--blue.p-4.mb-5
      .row.justify-content-center
        .col-lg-11
          .row.justify-content-center.mb-4.pt-4
            .col-lg-8
              h5(data-aos="fade") CMS Joomla
              p(data-aos="fade") Es un gestor de contenidos dinámico, es decir, que permite la creación de elementos interactivos para el usuario.  Joomla es un #[em software] de código abierto, desarrollado en PHP, y en el que pueden trabajar de manera colaborativa varios desarrolladores, implementando cada vez más diferentes funcionalidades. Utiliza un panel de administración o escritorio con el que se puede crear, editar o eliminar contenido de una página #[em web], añadir nuevas funciones a través de los #[em plugins] o programas complementarios, con los que se puede hacer cambios a los sitios #[em web]. 
            .col-lg-4.col-6(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_20.png", alt="alt")

          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade")
              p.bold Con Joomla, se pueden desarrollar:
              ul.fa-ul
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | Páginas #[em web] utilizando las plantillas prediseñadas.
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | Páginas #[em web] personales y #[em blogs].
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | Páginas #[em web] corporativas.
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | #[em Blogs] de empresa.
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | Foros y #[em chats].
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | #[em Web] de noticias o revistas #[em online].
                li
                  i.fa-li.fas.fa-check.clr--orange
                  | Tiendas #[em online].
            .col-lg-7.col-10(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_21.jpg", alt="alt")

          p(data-aos="fade") Para su instalación, solo se necesita un plan de alojamiento o #[em hosting], y, una vez adquirido, se procede a instalar Joomla con un autoinstalador. Los proveedores de #[em hosting] incluyen instaladores automáticos, para hacer el proceso en pocos minutos. #[strong Revise los pasos a continuación:]

          .bg--blue02.brad_02.p-4.mb-4(data-aos="fade")            
            PasosB.color-secundario
              .row(titulo="Acceda al autoinstalador").px-0.px-lg-5
                .col-lg-6.mb-5.mb-lg-0
                  .bg--blue.p-4
                    p.mb-0 Abra el panel de control de #[em hosting] y busque el instalador automático en la sección Sitio #[em web]. 
                  .row
                    .col-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                        span.clr--base Ampliar
                        i.clr--base.fas.fa-search-plus
                        .indicador--click(v-if="mostrarIndicador")          
                .col-md-6
                  figure
                    img(src="@/assets/curso/temas/t2/t2_22.jpg", alt="alt")
                                  

              .row(titulo="Localice Joomla CMS").px-0.px-lg-5
                .col-lg-6.mb-5.mb-lg-0
                  .bg--blue.p-4
                    p.mb-0 Se visualiza una lista de los CMS (#[em scripts]) más conocidos y se selecciona Joomla de la lista, para continuar.   
                  .row
                    .col-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                        span.clr--base Ampliar
                        i.clr--base.fas.fa-search-plus
                        .indicador--click(v-if="mostrarIndicador")
                .col-md-6
                  figure
                    img(src="@/assets/curso/temas/t2/t2_23.jpg", alt="alt") 
              

              .row(titulo="Ejecute el asistente de configuración inicial").px-0.px-lg-5
                .col-lg-6.mb-5.mb-lg-0
                  .bg--blue.p-4
                    p.mb-0 Se debe completar la configuración básica, como la URL de instalación y el idioma; también, se debe asegurar de escribir el #[em email], nombre de usuario y contraseña del administrador. Luego, se hace clic en el botón verde de Instalar, como se muestra en la imagen siguiente.       
                  .row
                    .col-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                        span.clr--base Ampliar
                        i.clr--base.fas.fa-search-plus
                        .indicador--click(v-if="mostrarIndicador")                           
                .col-md-6
                  figure
                    img(src="@/assets/curso/temas/t2/t2_24.jpg", alt="alt")

            ModalA(:abrir-modal.sync="modal1")
              figure
                img(src="@/assets/curso/temas/t2/t2_22.jpg", alt="alt")
            ModalA(:abrir-modal.sync="modal2")
              figure
                img(src="@/assets/curso/temas/t2/t2_23.jpg", alt="alt")
            ModalA(:abrir-modal.sync="modal3")
              figure
                img(src="@/assets/curso/temas/t2/t2_24.jpg", alt="alt")     
                                  

          p.bold.mb-4(data-aos="fade") El proceso para instalar Joomla puede ser de modo automático, aunque también se puede realizar el proceso de instalación manualmente.

    .bg--blue.p-4.mb-5
      .row.justify-content-center
        .col-lg-11          
          .row.justify-content-center.mb-4.pt-4
            .col-lg-8
              h5(data-aos="fade") WordPress
              p(data-aos="fade") WordPress es otro de los CMS más utilizados para la creación de sitios #[em web]. Su uso es gratuito y, al igual que Joomla, permite la creación y edición de contenidos de un sitio #[em web]. Posee una interfaz amigable, fácil de manejar y contiene una gran cantidad de #[em plugins] o complementos para extender su funcionalidad, por ejemplo, para crear una tienda #[em online], enviar formularios de contacto, o galería de fotografías, entre otros.
            .col-lg-4.col-6(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_25.png", alt="alt")

          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              p.bold Con Joomla, se pueden desarrollar:
              p Al igual que Joomla y otros CMS, el procedimiento para la instalación de WordPress comienza con la adquisición de un servicio de #[em hosting], se ingresa al cPanel y se continúa con los pasos tal como lo va solicitando la página de instalación.
              p.bold.mb-0 Observe el siguiente Tutorial, que le indicará cómo descargar Wordpress:

            .col-lg-7.col-10
              figure
                img(src="@/assets/curso/temas/t2/t2_26.jpg", alt="alt")

          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/toPJQ6Lt8_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              
          p.mb-5 Una vez instalado WordPress, se puede hacer uso de todas sus herramientas, como, por ejemplo, escoger una plantilla de cualquier categoría de la lista para la creación del sitio #[em web], incluyendo comercio electrónico, noticias, negocios, finanzas, educación, deportes, y fotografía, entre otras. Es importante definir el objetivo del sitio para que los resultados de utilizar estas herramientas sean realmente efectivos.

          .row.justify-content-center.mb-5
            .col-lg-8.mb-4.mb-lg-0  
              p Al momento de definir la plantilla, se añade y se instalará el tema en WordPress; posteriormente, se va a visualizar la plantilla, su forma, color, tipografías, imágenes, menús, etc. WordPress posee herramientas para la edición de la plantilla escogida, donde se incorporan los textos, las imágenes (logo, colores, fotografías), tipografías, contactos, redes sociales y toda aquella información que se crea importante para el proyecto, como se observa en la siguiente figura.
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal4")
                figure
                  img(src="@/assets/curso/temas/t2/t2_27.jpg", alt="alt")

            .col-lg-4.col-8
              figure
                img(src="@/assets/curso/temas/t2/t2_27.jpg", alt="alt")

          .row.justify-content-center.mb-5
            .col-lg-4.col-8.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t2/t2_28.jpg", alt="alt")
            .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
              p Una de las herramientas importantes de los CMS son los #[em Plugin], o #[em Plug-in], cuyo significado en la lengua inglesa es “inserción”, y es aquella aplicación que añade una funcionalidad adicional o una nueva característica al #[em software]. En nuestro idioma, por lo tanto, puede nombrarse al plugin como un complemento que se añade a una aplicación existente para ampliarla. 

              p Existen más de 50.000 #[em plugins] gratuitos en WordPress, para añadir todo tipo de funcionalidades, pero también se pueden adquirir #[em plugins] de pago, todo queda a elección del cliente.
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal5")
                figure
                  img(src="@/assets/curso/temas/t2/t2_28.jpg", alt="alt")

          p.bold.mb-4(data-aos="fade") Para instalar un plugin desde la interfaz de WordPress, se deben seguir los siguientes pasos: 

          ol.lista-ol--cuadro.mb-5
            li 
              .lista-ol--cuadro__vineta.brad_circle.bg--orange
                span A
              | En la barra de herramientas del administrador WordPress, seleccionar #[em.ms-2 plugins] – dar añadir.
            li 
              .lista-ol--cuadro__vineta.brad_circle.bg--orange
                span B
              | En el buscador, escribir el nombre o palabra clave del plugin.
            li.mb-0
              .lista-ol--cuadro__vineta.brad_circle.bg--orange
                span C
              | Dar clic al botón instalar. Una vez instalado, este mismo botón se activa – dar clic.

          p Después de activar el plugin, se deberá comprobar si se necesita realizar algún ajuste, o si el plugin viene ya configurado para ser utilizado sin necesidad de modificar algún parámetro.    

    .bg--blue.p-5.mb-4
      .row.justify-content-center.mb-4
        .col-lg-12        
          .row.justify-content-center.align-items-center.pt-4
            .col
              h5(data-aos="fade") Drupal
              p.mb-0(data-aos="fade") Drupal es un CMS o sistema  de gestión de contenidos, libre, modular, multipropósito y muy configurable, que permite publicar artículos, imágenes y archivos, y que también ofrece la posibilidad de otros servicios añadidos. Incluye la creación y administración de foros, encuestas, #[em blogs], administración de usuarios, permisos y otras características. Drupal es un CMS muy flexible para ser utilizado por diseñadores #[em web] y usuarios con conocimientos técnicos avanzados.
            .col-lg-auto(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_29.png", alt="alt").img250.m-auto

      p(data-aos="fade") Aunque es un CMS más segmentado y con una comunidad más pequeña que la de WordPress u otras tecnologías, Drupal permite crear proyectos #[em web] complejos, con funcionalidades muy específicas, que reciben grandes cantidades de tráfico y procesan muchos datos. Drupal está muy enfocado a usuarios avanzados y programadores. Lo suelen utilizar grandes empresas que quieren una tecnología muy potente. 

      p(data-aos="fade").bold.mb-4 Las principales características de Drupal

      ul.fa-ul.mb-5(data-aos="fade")
        li
          i.fa-li.fas.fa-check.clr--orange
          | #[strong Facilidad de uso:] para diseñadores o técnicos más avanzados, que pueden utilizar funcionalidades más genéricas. 
        li
          i.fa-li.fas.fa-check.clr--orange
          | #[strong Potencial y funcionalidades:] no se dedica simplemente a la publicación de artículos, pues también permite el diseño y desarrollo de páginas #[em web] de e-commerce. 
        li
          i.fa-li.fas.fa-check.clr--orange
          | #[strong Seguridad:] permite mantener la seguridad en la #[em web] frente a visitantes y posibles amenazas cibernéticas, realizando copias de seguridad y actualizaciones permanentes del #[em software]. 
        li
          i.fa-li.fas.fa-check.clr--orange
          | #[strong Precio: ] se tienen la versión gratuita y la versión de pago con más beneficios, funcionalidades y facilidades de uso.

      p(data-aos="fade").bold.mb-4 A continuación, puede revisar los pasos indicados para lograr la instalación de Drupal desde el Cpanel:

      .bg--blue02.brad_02.p-4.mb-4(data-aos="fade")            
        PasosB.color-secundario
          .row(titulo="Acceda al autoinstalador").px-0.px-lg-5
            .col-lg-6.mb-4.mb-md-0
              .bg--blue.p-4
                p.mb-0 Se abrirá la interfaz del gestor de instalación. Hacer clic en #[em install now] (instalar ahora). 
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")          
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/t2_30.png", alt="alt")

          .row(titulo="Acceda al autoinstalador").px-0.px-lg-5.pb-4
            .col-lg-6.mb-4.mb-md-0
              .bg--blue.p-lg-4.p-3
                p.bold Se solicitará llenar un formulario de instalación:
                ul.fa-ul.mb-0
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Seleccionar la versión a instalar: por defecto se muestra la última versión estable. 
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Seleccionar el protocolo: https:// o https://www.  
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Seleccionar de una lista el dominio disponible, en este dominio se guardará una copia de Drupal. 
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Mantener el directorio predeterminado. 
                  li.mb-0
                    i.fa-li.fas.fa-check.clr--orange
                    | Para terminar, hacer clic en Instalar.                        
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/t2_31.jpg", alt="alt")
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")

          .row(titulo="Acceda al autoinstalador").px-0.px-lg-5
            .col-lg-6.mb-4.mb-md-0
              .bg--blue.p-4
                p.bold Al completar la instalación, se verá un mensaje de instalación exitosa. 
                p.mb-0 Allí se encontrará el enlace al nuevo sitio de Drupal y su URL de administrador; esta última será el portal de acceso a la gestión del sitio Drupal.                        
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/t2_32.jpg", alt="alt")
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")

          .row(titulo="Acceda al autoinstalador").px-0.px-lg-5
            .col-lg-6.mb-4.mb-md-0
              .bg--blue.p-4
                p.mb-0 La instalación de Drupal ha sido completada para ingresar al escritorio Drupal y comenzar a crear la página y administrar el contenido. 

                        
            .col-md-6
              figure
                img(src="@/assets/curso/temas/t2/t2_33.jpg", alt="alt")
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal9 = true")
                    span.clr--base Ampliar
                    i.clr--base.fas.fa-search-plus
                    .indicador--click(v-if="mostrarIndicador")


        
        ModalA(:abrir-modal.sync="modal6")
          figure
            img(src="@/assets/curso/temas/t2/t2_30.png", alt="alt")          
        ModalA(:abrir-modal.sync="modal7")
          figure
            img(src="@/assets/curso/temas/t2/t2_31.jpg", alt="alt")          
        ModalA(:abrir-modal.sync="modal8")
          figure
            img(src="@/assets/curso/temas/t2/t2_32.jpg", alt="alt")          
        ModalA(:abrir-modal.sync="modal9")
          figure
            img(src="@/assets/curso/temas/t2/t2_33.jpg", alt="alt")          





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
