<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Estructuras de las aplicaciones

    p(data-aos="fade").mb-5 Para definir los diseños de los proyectos multimedia, se deben contemplar estructuras y arquitecturas que permitan una experiencia de uso funcional y accesible para los usuarios, de acuerdo con el dispositivo cliente que utilicen. Para lo anterior, se utilizan lenguajes de programación y maquetación como HTML, CSS y JavaScript. Revíselos a continuación: 

    TabsB.color-primario.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Maquetación HTML5" :icono="require('@/assets/curso/temas/recursos/tabs_t3_01.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Maquetación HTML5 
            p En HTML, la maquetación #[em web], principalmente, se trata de alimentar de estilo a los elementos de un sitio #[em web], para que estos se vean lo más llamativos posible, según sean los objetivos. Esto implica un proceso creativo, en el que se definen colores, tamaños, márgenes, rellenos, bordes, hasta efectos especiales y mucho más. 
            p.mb-0 Con HTML, se puede incorporar estilo a los elementos HTML mediante ciertos atributos. No sería para nada cómodo poner todos los estilos dentro de un atributo y, aún peor, si la estructura de la página se va complicando aún más y más, a medida que se vayan incorporando nuevos elementos.        
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_01.svg', alt='')

      .py-4.py-md-5(titulo="Maquetación CSS" :icono="require('@/assets/curso/temas/recursos/tabs_t3_02.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Maquetación CSS 
            p Esta maquetación le ofrece al usuario que las páginas #[em web] sean gráficamente estéticas y atractivas, de forma que le permiten identificar cada parte del contenido, destacando los elementos que son importantes en cada caso.        
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_02.svg', alt='')

      .py-4.py-md-5(titulo="Maquetación CSS3" :icono="require('@/assets/curso/temas/recursos/tabs_t3_03.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4  Maquetación CSS3 
            p CSS es el lenguaje de estilos que permite seleccionar los elementos HTML. Una vez se selecciona, comienza a indicar las características o estilos que dicho elemento tendrá, como la posición, el color, el color de fondo, el borde, el color de borde, el grosor de borde, las dimensiones, el margen de cada elemento, las animaciones, los efectos, etc. 
            p El objetivo de la maquetación CSS es ofrecer al usuario una estructura visual de página avanzada, personalizada y persuasiva gráficamente, donde sea fácil identificar cada parte del contenido, destacando los elementos que sean importantes en cada caso.

            p.mb-0 Al hacer la combinación de maquetas HTML y CSS, se observa el estilo que toma la página:
        
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_03.jpg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t3/t3_04.jpg', alt='')
      .col-lg-6(data-aos="fade")
        .bg--mint.p-4
          p.mb-0 Antes de comenzar a maquetar o a distribuir una página #[em web], se debe tener claro cómo se desea diseñar (secciones, elementos, formas); se recomienda hacer un boceto previamente, un mapa de navegación pensado estratégicamente, para dar relevancia a la información que se pretende comunicar, teniendo en cuenta los logos, el menú de navegación y, en sí, el contenido en general.

    p.text-center.mb-5(data-aos="fade") A continuación, observe un ejemplo de una maquetación simple:


    .bg_img_04
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-8
          figure
            img(src="@/assets/curso/temas/t3/t3_05.jpg", alt="alt")

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-a.cstm--color_02.p-4.p-lg-5.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Utilizar algunas de las mejores prácticas de diseño #[em web] para garantizar que los sitios #[em web] sean persuasivos. Esto, en el campo digital, significa atraer usuarios para finalmente convertirlos en clientes potenciales. 
            .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/t3_06.svg', alt='')

    p.bold.mb-4(data-aos="fade") Entendiendo este concepto, se describirán algunas de las recomendaciones a la hora de iniciar un proyecto de diseño y desarrollo #[em web]: 

    .bg--blue.p-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Contar con un ícono de página o ícono de inicio
          p Llamado también Favicon, este símbolo es una imagen asociada a un sitio #[em web] y aparece en la pestaña, en la barra de direcciones y en los marcadores del navegador. 
          p.mb-0 Aunque, en cierta manera, puede parecer sólo un símbolo decorativo, este Favicon permite asociar una marca a un logotipo, identificar una #[em web] rápidamente entre otras pestañas y entre los favoritos de los navegadores. 
        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_07.jpg", alt="alt")

    .bg--paleOrange.p-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-2.order-lg-1
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t3/t3_08.svg", alt="alt").img350.m-auto
        .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
          h4 Concentrarse en un público objetivo
          p Un sitio #[em web] exitoso no debe ser solo atractivo visualmente, también debe persuadir a un público objetivo y suministrarle la información que necesita, para finalmente convertirlo en clientes potenciales.
          p Antes de comenzar un nuevo diseño #[em web], se debe definir el grupo objetivo al cual se quiere comunicar, a partir de preguntas claves como:
          .bg--paleOrange_02.p-4
            p.bold.mb-0 ¿Conocen la marca o los servicios de la compañía?
            p.bold.mb-0 ¿Existen varios mercados objetivos diferentes?
            p.bold.mb-0 ¿Qué creen que diferencia a la marca?
            p.bold.mb-0 ¿Qué es lo que les importa?
      .row.justify-content-center
        .col-lg-10
          p.bold Mantener siempre presente a la audiencia objetiva es importante, aún cuando se realicen cambios en el diseño, tanto de los contenidos como de las imágenes.

    .bg--blue.p-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Mantener la coherencia en el concepto de la marca
          p Una buena práctica en el diseño de sitios #[em web] es mantener el concepto de la marca en todo el sitio, usando solo los colores predeterminados y los logotipos correspondientes.  
          p.mb-0 Esto se debe aplicar a todas las imágenes, iconografías, tipografías y videos que se presentan como contenidos en la página #[em web]. La historia de una marca debe ser evidente y respaldada en el diseño.
        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_09.jpg", alt="alt")   

    .bg--paleOrange.p-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_10.jpg", alt="alt").img350.m-auto
        .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
          h4 Simplificar el diseño
          p La simplicidad se está volviendo cada vez más importante en el diseño #[em web]. Los sitios #[em web] llamativos y complicados generalmente ofrecen una experiencia pobre al cliente y terminan siendo confusos visualmente.
          p.mb-0 Los sitios #[em web] efectivos tienen diseños simplificados, que son fáciles de navegar y permiten que cada elemento del diseño brille. Si en una #[em web] se colocan demasiados elementos de diseño que compiten para atraer la atención del usuario, finalmente, ninguno de ellos hará su trabajo, es decir, ninguno conseguirá involucrar al usuario.

    .bg--blue.p-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Crear #[em Call to Action] (llamados a la acción) potentes y convincentes
          p.mb-0 Los objetivos de un sitio #[em web] son atraer un mercado objetivo, brindar contenido relevante y convencer al visitante para completar una acción, ya sea para suscribirse a un boletín de noticias, descargar un #[em e-book] o realizar una consulta. Los llamados a la acción son esenciales para convertir a los visitantes del sitio #[em web] en clientes potenciales o nuevos clientes, y deben ubicarse en un lugar apropiado de la página #[em web] para que tengan sentido para el mercado objetivo.
        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_11.jpg", alt="alt")   

    .bg--paleOrange.p-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_12.jpg", alt="alt").img350.m-auto
        .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
          h4 Utilizar imágenes o videos de alta calidad          
          p.mb-0 Los móviles, en la actualidad, han pasado a ocupar prácticamente el lugar de los computadores personales; las personas se informan, se relacionan y compran a través del móvil. Es imperativo que el diseño de la #[em web] tenga muy presente los dispositivos móviles y que todas las imágenes, videos y fotos sean de alta calidad. Una imagen borrosa o una imagen desenfocada afecta negativamente la estética de una #[em web].

    .bg--blue.p-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Mejorar la experiencia del usuario
          p.mb-0 El diseño #[em web] es eficaz, va un paso más allá y mejora la experiencia del usuario cuando es capaz de contar una historia convincente y ofrecer lo que el usuario está buscando en el momento que lo quiere ver. Por esta misma razón, los diseñadores #[em web] experimentados se interesan por la experiencia del usuario, para garantizar que sus diseños anticipen las necesidades del mercado objetivo.
        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_14.png", alt="alt")   

    .bg--paleOrange.p-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-2.order-lg-1(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_13.png", alt="alt").img350.m-auto
        .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
          h4 Seguir las mejores prácticas de SEO         
          p Si un sitio #[em web] tiene una apariencia innovadora y agradable, pero nadie lo ve, no es efectivo. Los sitios #[em web] bien diseñados atraen y convierten a los visitantes en clientes. Por esta misma razón, el diseño #[em web] debe seguir las mejores prácticas de SEO, para garantizar que el sitio #[em web] aparezca para el mercado objetivo.
          p.mb-0 Si bien la lista de mejores prácticas de SEO para el diseño #[em web] puede ser bastante larga, algunas buenas acciones son:

      .row
        .col-12 
          p.bold Si bien la lista de mejores prácticas de SEO para el diseño #[em web] puede ser bastante larga, algunas buenas acciones son:
          p #[strong Dimensionamiento de imágenes] para tiempos de carga más rápidos, #[strong hacer enlaces internos] para mantener a los usuarios comprometidos en el sitio y #[strong etiquetar correctamente] las imágenes para los motores de búsqueda.


 

          

      


</template>

<script>
export default {
  name: 'Tema3',
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
