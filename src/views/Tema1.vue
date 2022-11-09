<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la arquitectura cliente/servidor 

    .row.mb-5(data-aos="fade-left")
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
      .col
        p.mb-0 Todos los servicios que ofrece la #[em web] se basan en una relación directa entre los servidores remotos que atienden las peticiones que hacen los usuarios o clientes para acceder a una aplicación, sitio o producto multimedia que se encuentra en Internet. Para entender dicha relación, es necesario apropiar los conceptos de servidor y de cliente en el ecosistema de las redes:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in").mb-5
      .row.justify-content-around(titulo="1. Servidor")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Es un equipo de cómputo que presta sus servicios a otros equipos que están conectados a él, de manera física o virtual, a través de la red de Internet, donde se alojan sitios #[em web], aplicaciones y archivos que son almacenados sin importar su formato (html, .css, .js, .jpg, etc.).       
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_01.svg', alt='')

      .row.justify-content-around(titulo="2. Red IP")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Cada ordenador que está conectado a la red de Internet tiene una dirección IP en la #[em web], ya sea un servidor o un usuario cualquiera, de tal manera que, al establecerse comunicación entre unos y otros, se puedan resolver solicitudes que estos tengan.       
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_02.svg', alt='')

      .row.justify-content-around(titulo="3. Almacenamiento de información")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Los servidores deben poseer programas que les permitan operar los archivos que tienen almacenados y prestar el servicio que espera el usuario; por ejemplo, procesar un formulario enviado, acceder a una aplicación cuando ingresa una contraseña o hacer un pago en línea, entre muchas otras acciones. Ejemplos de programas que puede poseer el servidor para ejecutar estas solicitudes son PHP, JavaScript, Python, entre otros.           
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_03.svg', alt='')

      .row.justify-content-around(titulo="4. Cliente")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Es el equipo utilizado por el usuario para conectarse a la red de Internet y hacer peticiones de diferente índole a los servidores remotos que también están conectados al ecosistema de la #[em web]. Al establecerse la conexión, los proveedores de Internet asignan al cliente una dirección IP dinámica, es decir, que cambia cada vez que el usuario establece una nueva conexión con el mismo servidor u otro diferente.            
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_04.svg', alt='')

      .row.justify-content-around(titulo="5. Comunicación en red")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Al igual que los servidores, el cliente también debe poseer programas en su ordenador que le permitan establecer comunicación con la red y solicitar servicios de esta a los servidores; por ejemplo, los navegadores (Chrome, Firefox, Edge, Android, etc.), para establecer comunicación con los servidores o el programa de Outlook para enviar correos electrónicos, entre otros más.            
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_05.svg', alt='')

      .row.justify-content-around(titulo="6. Servicios en red")
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 Es claro entonces que el cliente es el medio o dispositivo (PC, móvil, tablet, etc.) por medio del cual se establece una comunicación con un equipo servidor a través de la red de Internet, con el objeto de solicitar algún tipo de servicio de este.           
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_06.svg', alt='')

    .row.justify-content-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-0 De acuerdo con lo anterior, el modelo #[span.clr--blue.bold cliente/servidor] es una configuración arquitectónica de elementos, que se lleva a cabo en el entorno de la #[em web]. Dichos elementos se componen de equipos o dispositivos que operan los usuarios, equipos servidores con funciones especiales, que prestan servicios a los clientes de manera remota, y redes de Internet que se encargan de establecer la comunicación entre unos y otros respectivamente. Este modelo constituye, entonces, un sistema en el cual se distribuye una infraestructura de elementos, donde los datos parten, hacen un recorrido, se procesan y regresan convertidos en información útil.
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt")

    separador

    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Tipos de modelos cliente/servidor
    
    p.bold En los modelos, se pueden encontrar diferentes tipos, los cuales se conocerán a continuación:

    TabsB.color-primario
      .py-4.py-md-5(titulo=" Modelo tradicional o modelo de dos capas" :icono="require('@/assets/curso/temas/recursos/tabsA_01.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Modelo tradicional o modelo de dos capas
            p En el modelo tradicional, hay dos niveles, comúnmente llamados capas, en los que hay dos equipos de cómputo que realizan una función diferente para el usuario.
            p  #[span.clr--blue.bold El nivel 1 corresponde al cliente] y está representado por el dispositivo (cliente) que utiliza el usuario para solicitar un servicio a través de la red, que se comunica con el dispositivo (servidor) del nivel 2, el cual recibe la petición, ejecuta un proceso para devolver la respuesta; por ejemplo, cuando se solicita una página #[em web].
            p.mb-0 La arquitectura física de este sistema es de dos capas, porque se utilizan dos elementos de #[em hardware], que corresponden al PC o el celular y al servidor remoto.        
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_08.svg', alt='')

      .py-4.py-lg-5(titulo="Modelo de tres capas" :icono="require('@/assets/curso/temas/recursos/tabsA_01.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Modelo de tres capas 
            p La arquitectura física de este sistema es de tres capas, porque se utilizan tres componentes de #[em hardware] que corresponden al PC o el celular, al servidor #[em web] y al servidor BD.
            p Generalmente, #[span.bold.clr--blue el servidor del nivel 2] presta el servicio de aceptar y resolver las peticiones dadas en la #[em web], a través de enviar a otro servidor el requerimiento de procesar la información solicitada. Este último está en el nivel 3, puesto que es el tercer dispositivo de #[em hardware] que interviene en el modelo completo. 
            p Esto puede suceder, por ejemplo, cuando el usuario diligencia un formulario que debe ser procesado para acceder a un sitio #[em web] o para ser aceptado en una plataforma determinada.        
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_09.svg', alt='')

      .py-4.py-lg-5(titulo="Modelo de cuatro capas" :icono="require('@/assets/curso/temas/recursos/tabsA_01.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Modelo de cuatro capas 
            p En la figura, se puede observar que hay cuatro tipos de equipos conectados, que cumplen diferentes funciones y roles dentro de la arquitectura del sistema completo, por lo que se le llama modelo de cuatro (4) niveles. 
            p.mb-0 En este modelo, por ejemplo, si un usuario va a realizar una compra en línea, #[span.bold.clr--blue en el primer nivel], el cliente hace la petición del sitio #[em web], utilizando como programa el navegador del dispositivo; #[span.bold.clr--blue en el segundo nivel], el servidor #[em web] recibe la petición y devuelve al cliente el sitio solicitado; #[span.bold.clr--blue en el tercer nivel], el servidor de bases de datos (BD) provee el catálogo de productos para la selección del usuario; y #[span.bold.clr--blue en el cuarto nivel], el servidor de aplicaciones permite ejecutar el servicio de pago en línea para terminar la transacción. 
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_10.svg', alt='')

    separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.2 Interacción del modelo cliente/servidor

    p.mb-5(data-aos="fade") Con lo que se ha explicado hasta ahora del modelo cliente/servidor, se puede determinar que, en el funcionamiento del sistema como tal, se produce una intercomunicación de los dispositivos de #[em hardware] que intervienen, los cuales requieren de componentes de #[em software] para completar el ciclo de petición del cliente. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-a.cstm--color_02.p-4.p-lg-5.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para lograr la interacción del lado del cliente, se requiere de un navegador que abra el #[span.bold.clr--blue HTML, CSS y JavaScript], que son los lenguajes de programación básicos que se utilizan para el desarrollo de  #[span.bold.clr--blue sitios #[em web]] y, a través de los cuales, se puede establecer contacto con los servidores remotos.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_11.svg', alt='')

        .bg--paleYellow.p-4(data-aos="zoom-in")
          .row.align-items-center
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 Del lado del servidor, la interacción se logra cuando en estos dispositivos se incorpora #[em software] que procese lenguajes de programación y bases de datos como PHP, MySQL, MongoDB, entre otras. 

    .row.justify-content-center.mb-5
      .col-lg-6.col-12.mb-4.mb-lg-0(data-aos="zoom-in")
        .bg--blue.hg-100.p-4.p-lg-0
          figure.vh-50
            img(src="@/assets/curso/temas/t1/t1_12.svg", alt="alt").img350.m-auto        
      .col-lg-6    
        .bg--mint.p-4.mb-4(data-aos="zoom-in")
          p.mb-0 El servidor ejecuta las acciones necesarias mediante el #[em software] que posee, es decir, el sistema operativo Linux y el #[em software] de servidor #[em web] Apache, el cual interpreta y ejecuta el lenguaje de programación PHP, los cuales se conectan con la base de datos MySQL, realizando un proceso para generar un archivo resultante HTML, CSS y JavaScript, que es el que envían al navegador para devolver el sitio #[em web] solicitado por el cliente. 
        p.mb-0(data-aos="fade") Las combinaciones de las herramientas tecnológicas -servidor #[em web], sistema operativo, lenguaje de programación, base de datos- del lado del servidor, llamadas Stack, pueden ser otras diferentes a las que se muestran en el ejemplo, esto depende de los lenguajes de programación y bases de datos que utiliza la entidad para la prestación de servicios #[em web]. 

    p.mb-5(data-aos="fade") El proceso anterior muestra la interacción que se lleva a cabo entre #[span.bold.txt--blue cliente y servidor(es)], cuando se hace una solicitud a la #[em web], la cual es un ciclo de desarrollo cliente-servidor-cliente para acceder a las bases de datos, y, una vez resuelta la solicitud, el ciclo se rompe. Lo anterior significa que el ciclo solamente se activa cuando el servidor ejecuta las instrucciones del lenguaje en el que están escritas las páginas #[em web] solicitadas por el navegador, es decir, que el cliente nunca puede acceder directamente a las bases de datos de los servidores. 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5(data-aos="fade") 
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_01.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Sistemas Distribuidos
                    p.mb-0 Para profundizar en los conceptos del modelo cliente/servidor consultar: Capítulo 3. Modelos de Arquitecturas.(página 37 a la 52)
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/03IXStream_sistemas_distribuidos.pdf')" target="_blank")
                      span.clr--base Descargar 
                      i.clr--base.fas.fa-file-download

    separador

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.3 Funcionamiento del cliente en la #[em web - #[em Frontend]]

    p.mb-5(data-aos="fade") Como se explicó antes, el cliente es un dispositivo de #[em hardware] que dispone de herramientas de #[em software] para establecer comunicación con el usuario y los servidores de la #[em web]. 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .cajon.cjn--grayBlue.p-4.mb-0
          p.mb-0 Para que el cliente pueda iniciar un ciclo de interacción con la #[em web], debe poseer un navegador, dentro del cual se ejecuten lenguajes de código que no solo configuren la apariencia de lo que el usuario ve en la interfaz (pantalla), sino que realice peticiones de servicios a los equipos remotos en la red, y a esta forma de funcionamiento del cliente se le llama #[bold #[em Frontend]].

    p.bold A continuación, podrá observar un video explicativo sobre #[em Backend] y #[em Frontend]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ygzDmMLAoGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-12.mb-4.mb-lg-0(data-aos="zoom-in")
        .bg--gray.hg-100.p-4.p-lg-0
          figure.vh-50
            img(src="@/assets/curso/temas/t1/t1_13.svg", alt="alt").img350.m-auto 
      .col-lg-7(data-aos="flip-left")
        .bg--blue.p-4
          p.mb-0 El #[em Frontend] es entonces la forma de funcionamiento del cliente dentro del ciclo de interacción cliente-servidor-cliente, y se lleva a cabo en el navegador en el que se ejecutan el lenguaje de etiquetas HTML, para estructurar y organizar el contenido de la #[em web], el lenguaje de código de estilo CSS, para darle el formato visual al contenido, y el lenguaje de programación JavaScript, que contiene los scripts que, al ser activados a través de una petición, conectan al cliente con el servidor.

    .row.mb-5
      .col-auto
        figure
          img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
      .col
        p Para que desde el cliente se pueda realizar la conexión con los servidores remotos, existen varios métodos, los más utilizados son: #[strong #[em Get, Post, AJAX, Sockets]]. Estos métodos consisten en incluir líneas de código que se activarán para establecer contacto con los servidores y entregar la información solicitada al cliente. #[strong A continuación, se explicarán GET y POST, que son los métodos más comunes.]

    .crd.slyderBg_01.brd--rad_02.p-3
      SlyderA(tipo="b")
        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Método GET
            p Este método es usado cuando el usuario debe diligenciar algún tipo de formato con datos solicitados por el sitio #[em web], los cuales son enviados a un servidor a través del navegador por el protocolo http. 
            p.mb-0 Estos datos deben ser procesados y devueltos como respuesta al cliente.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_14.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Método GET
            p En la figura, se observa que en el sitio #[em web] se solicita llenar unos datos de contacto, que consisten en el nombre, mail, objeto de la comunicación y el mensaje o tipo de información que se requiera; entonces la línea de código HTML que se debería escribir sería:
            p #[strong &lt;form action =www.lei.com/contact method =”get”&gt;]

            p.mb-0 Esta etiqueta indica que, cuando un usuario del sitio www.lei.com/contact necesite contactar al proveedor, este debe obtener sus datos, o “get”, cuando se haga click en #[em SEND MESSAGE.]
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_15.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Método POST
            p Este método es usado cuando el usuario debe ingresar datos en el sitio #[em web] que no deben ser visualizados en la dirección URL del navegador que esté utilizando, ya que serían vistos en cualquier servidor y su privacidad sería vulnerada.  
            p.mb-0 En la figura se observan los datos que debe ingresar un usuario para registrarse en una cuenta. Entre los datos que se piden, se encuentra el diligenciamiento de una contraseña, la cual no debe ser visualizada por ningún servidor.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_16.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Método POST
            p Entonces, en la línea de código HTML, se debe indicar que este formato es de tipo Post:

            p #[strong &lt;form action =www.lei.com/newuser method =”Post”&gt;]

            p.mb-0 Esta etiqueta indica que, cuando un usuario nuevo del sitio www.lei.com/newuser necesite crear una cuenta para realizar cualquier tipo de transacción, este debe obtener sus datos o “Post” de manera oculta o cifrada, para que ningún servidor intente vulnerar la información, a menos que utilice métodos o algoritmos matemáticos para hacerlo.
            
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_16A.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Diferencia entre GET y POST
            p #[strong La diferencia radica en que:]

            p #[strong GET] envía los datos al servidor remoto en forma visible a través de la URL del navegador del cliente, el cual lo hace también visible para el usuario, proporcionándole la capacidad de modificarlos en la línea de código que observa.

            p.mb-0 #[strong POST] envía los datos al servidor remoto de manera oculta, para que no se puedan visualizar en la URL del navegador del cliente y, por supuesto, el usuario no tiene la capacidad de verlos y mucho menos de modificarlos.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_17.svg', alt='')

    separador

    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.4 Funcionamiento del servidor en la #[em web - Backend]

    .bg_img_05
      .row.justify-content-center.mb-5
        .col-lg-4.order-2.order-lg-1.col-8(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/t1_18.png', alt='')
        .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          p El servidor #[em web] es un dispositivo de #[em hardware] que dispone de herramientas de #[em software] para establecer comunicación con el cliente y las bases de datos de la #[em web]. Para que el servidor pueda seguir con el ciclo de interacción que ha iniciado el cliente en la #[em web], requiere de #[em software] compuesto por lenguajes de código que procesen los datos enviados y que se conecte con las bases de datos para devolver la respuesta a la petición. A esta forma de funcionamiento del servidor se le llama #[em #[strong Backend]]. 
          p.mb-0 El #[em #[strong Backend]] es entonces la forma de funcionamiento del servidor #[em web] dentro del ciclo de interacción cliente-servidor-cliente, en el que se lleva a cabo el procesamiento de los datos que recibe utilizando lenguajes de código (Java, PHP, Python y Node Js, entre los más conocidos), para conectar al cliente con las bases datos que solicita. 

        .col-lg-10.order-3.pt-5(data-aos="fade")
          .bg--blue02.p-4
            p.mb-0 A diferencia del #[em #[strong Frontend]] que se ejecuta en el navegador, de manera visible para el usuario, el #[em #[strong Backend]] se ejecuta en el servidor #[em web], de manera invisible para este, ya que no tiene forma de comprobar los procesos que realiza para proveer los servicios de las bases de datos que le son solicitados. 

      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-4.mb-lg-0
          .bg--grayBlue.text-center.p-4           
            figure.mb-4(data-aos="zoom-in")
              img(src='@/assets/curso/temas/t1/t1_19A.svg', alt='')            
            h4 Navegador            
        .col-lg-3.col-6.mb-4.mb-lg-0
          .bg--grayBlue.text-center.p-4
            figure.mb-4(data-aos="zoom-in")
              img(src='@/assets/curso/temas/t1/t1_19B.svg', alt='')            
            h4 #[em Frontend]
            p.mb-0 HTML, CSS, JavaScript
        .col-lg-3.col-6
          .bg--grayBlue.text-center.p-4
            figure.mb-4(data-aos="zoom-in")
              img(src='@/assets/curso/temas/t1/t1_19C.svg', alt='')            
            h4 #[em Backend]
            p.mb-2 Sistema operativo<br>(Linux, Windows, iOS, etc.)
            p.mb-0 Lenguajes de programación<br>(Java, Node js, PHP, Phyton, etc.)
        .col-lg-3.col-6
          .bg--grayBlue.text-center.p-4
            figure.mb-4(data-aos="zoom-in")
              img(src='@/assets/curso/temas/t1/t1_19D.svg', alt='')            
            h4 Base de datos
            p.mb-0 MySQL, MongoDB, Oracle, Etc.

      p.mb-5(data-aos="fade") En la figura, se observa el recorrido que debe hacer el cliente para poder conectarse con las bases de datos de un servidor: primero tiene que pasar, a través del navegador, por el #[em #[strong Frontend]], cuyas tecnologías son el HTML, CSS, JavaScript; seguir a través del #[em #[strong Backend]], el cual recibe los datos y los procesa con tecnologías como el sistema operativo #[em #[strong (Linux, Windows, iOS, etc.)]] y los lenguajes de programación #[em #[strong (Java, Node Js, PHP, Python, etc.)]]; para finalmente enviarlos a las bases de datos #[em #[strong (MySQL, MongoDB, Oracle, etc.).]] Es claro entonces que el cliente no puede acceder a las bases de datos directamente, sino a través del #[em #[strong Backend]], además, no puede acceder a toda la base de datos, sino a la información específica que está solicitando. Esto quiere decir que el #[em #[strong Backend]] actúa como un filtro que direcciona al cliente hacia los datos que está buscando en el servidor de bases de datos.

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade") 
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/recursos/cta_01.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Para profundizar en los conceptos #[em Frontend] y #[em Backend]
                      p.mb-0  Modelo de procesos para el desarrollo de #[em Frontend] de aplicaciones #[em web]
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/1245_articulo-4310-1-10-20170329.pdf')" target="_blank")
                        span.clr--base Descargar 
                        i.clr--base.fas.fa-file-download

      separador

    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.5 Integración del #[em Frontend] y el #[em Backend]

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p(data-aos="fade") La integración entre el #[em #[strong frontend]] y el #[em #[strong backend]] se da cuando se establece la comunicación entre las tecnologías del lado del cliente (HTML, CSS, JavaScript) y las tecnologías del lado del servidor (lenguajes de programación, bases de datos, servidor #[em web]). Las primeras se llevan a cabo en el navegador y las segundas, en el servidor, y para que se comuniquen se utilizan aplicaciones que actúan como intermediarias entre unos y otros. A estas aplicaciones se les conoce como API (Application Programming Interfaces) o Interfaz de Programación de Aplicaciones. 
        
        .bg--paleYellow.p-4(data-aos="zoom-in")
          p.bold La API entonces es una interfaz de comunicación entre aplicaciones que requieren compartir datos. 
          p.mb-0 Un ejemplo de API es la plataforma de pago PayPal, la cual permite conectar la tienda #[em online] con las entidades financieras, para recibirle el pago al usuario. En vez de que cada proveedor desarrolle su propia pasarela de pagos, puede utilizar la que ya está creada, pagando los derechos de uso y ahorrando tiempo y dinero de desarrollo.

      .col-lg-6.col-12(data-aos="zoom-in")
        .bg--blue.hg-100.p-4.p-lg-0
          figure.vh-50
            img(src="@/assets/curso/temas/t1/t1_20.svg", alt="alt").img350.m-auto 

    p.bold.mb-5(data-aos="fade") De acuerdo con el entorno de comunicación que utilicen las aplicaciones, las API pueden ser locales o remotas. Conozca algunas:

    .crd.slyderBg_01.brd--rad_02.p-3(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            h4 Locales
            p Esta API se encuentra en el mismo entorno donde se está ejecutando la aplicación. 
            p.mb-0 Lo anterior significa que la API no requiere los servicios de un servidor remoto, ya que en el mismo lugar de almacenamiento se encuentran los servicios que requiere para ser activada. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_21.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0             
            p En la figura, se muestra un celular que emite un sonido cada vez que recibe un mensaje de WhatsApp. Para que esto ocurra, dentro del mismo teléfono, se encuentra una API con una línea de código que indica al teléfono que active un sonido a la llegada del mensaje.  
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_22.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0     
            h4 Remotas    
            p Esta API requiere de los servicios de un servidor remoto, que puede estar en cualquier parte del mundo; por ello, debe establecer conexión con la #[em web], utilizando protocolos como el llamado REST o Representación de Transferencia de Estado, basado en HTTP y URI o Identificador de Recurso Uniforme. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_23.svg', alt='')

        .row.justify-content-around.p-4
          .col-lg-6.mb-4.mb-lg-0                  
            p.mb-0 En la imagen, aparece el tipo de error que un usuario observa cuando se dirige a un sitio #[em web] que no es encontrado por el servidor. Esto suele suceder con frecuencia y las API REST prestan el servicio de enviar al #[em Frontend] el mensaje “ERROR 404”, indicando que no existe el recurso, de acuerdo con los procesos de búsqueda en las bases de datos que hizo el #[em Backend].
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/t1_24.svg', alt='')     

    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
