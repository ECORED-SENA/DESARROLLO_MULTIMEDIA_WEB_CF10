<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col
        p.mb-0 Bienvenido a este nuevo componente formativo, que le permitirá continuar con el recorrido por las herramientas tecnológicas que conforman el entorno web para el desarrollo de proyectos multimedia. El conocer cómo operan estas tecnologías le permitirá una apropiación sobre lo que ocurre en el funcionamiento por parte de los usuarios y lo que ocurre al interior de la red de Internet donde se encuentran los servidores que prestan los servicios que solicitan los clientes día a día.  

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en #[span.clr--blue.bold integración de componentes del proyecto multimedia], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del #[span.clr--blue.bold desarrollo Multimedia y Web.]
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
