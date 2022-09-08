export default {
  global: {
    componenteFormativo: 'Integración de componentes del proyecto multimedia',
    descripcionCurso:
      'Este contenido está enfocado en la integración de los elementos gráficos y visuales que componen un proyecto que se desarrolle en el entorno web, identificando los formatos que se deben utilizar para una óptima funcionalidad de la interfaz del usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de la arquitectura cliente/servidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de modelos cliente/servidor',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Integración del modelo cliente/servidor',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Funcionamiento del cliente en la <em>web - Frontend</em>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Funcionamiento del cliente en la <em>web – Backend</em> ',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Integración del <em>Frontend</em> y el <em>Backend</em>',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Integración multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Formatos para la integración multimedia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Plataformas y gestores de contenido para la integración multimedia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructuras de las aplicaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Integración del Frontend y el Backend',
      referencia: 'Edteam. (2019). ¿Qué son las APIs y para qué sirven?',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=u2Ms34GE14U ',
    },
    {
      tema: 'Integración del Frontend y el Backend',
      referencia:
        'Reyes, I. (2020). Arquitectura Aplicación <em>Web - Frontend/Backend</em>',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=u2Ms34GE14U ',
    },
    {
      tema: 'Integración Multimedia',
      referencia:
        'Pakiu Reviews. (2020). Tipos de Resoluciones de Pantalla | SD - QHD - HD - FHD - UHD - 4K - 8K ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=mZ1oFNA_-XI ',
    },
    {
      tema:
        'Plataformas y Gestores de Contenido para la Integración Multimedia',
      referencia: 'Avanzapyme. (2008). Gestores de contenidos ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=xUMQ4D96Hq8 ',
    },
    {
      tema:
        'Plataformas y Gestores de Contenido para la Integración Multimedia',
      referencia: 'Gallardo, Y. (2016). Qué es Drupal y cómo funciona ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=NNSsCahPsm4 ',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'Interfaz que tiene como función la comunicación de una aplicación con otra.',
    },
    {
      termino: '<em>Back-end</em>',
      significado: 'Tareas realizadas del lado del servidor (Valdivia, 2016).',
    },
    {
      termino: 'CMS',
      significado:
        'Un CMS (<em>Content Management System</em>), o Sistema de Gestión de Contenidos, es un sistema <em>online</em> que permite poner en marcha una página web de forma sencilla y rápida. Se trata de un <em>software</em> que ayuda a administrar contenidos dinámicos, por ejemplo, un <em>blog</em>, un <rm>e-commerce</em> o cualquier tipo de página <em>web</em>. (Bello, 2021) ',
    },
    {
      termino: 'Cpanel',
      significado:
        ' Cpanel es básicamente un panel de control para administrar un servicio de alojamiento. Permite administrar todos los aspectos de un servicio de alojamiento <em>web</em>, sin la necesidad de habilidades técnicas avanzadas. (Neubox, 2020). ',
    },
    {
      termino: 'Diseño modular',
      significado:
        'Como su propio nombre lo dice, una página <em>web</em> modular consiste en diagramar cada uno de sus elementos en módulos. Es posible apreciarlo cuando se entra a una página web con varios bloques que interactúan con el usuario, ya sea que ese bloque se haga más grande, se ilumine mientras se pone el cursor sobre ellos o, inclusive, se oscurezca un poco y dé la opción de guardar, tal como lo hace Pinterest.Este diseño modular está pensado mucho en el comportamiento actual de las personas, ya que, como consumidores, se busca la manera más rápida de encontrar los servicios de una <em>web</em>, y normalmente se hace a través de los celulares. (Guerrero, 2018).',
    },
    {
      termino: '<em>Front-end</em>',
      significado:
        'Conjunto de tecnologías con las que interactúa el usuario (Valdivia, 2016).',
    },
    {
      termino: '<em>Leads</em>',
      significado:
        'Contacto o registro en función del momento de la campaña de <em>marketing</em>. El proceso de compra del propio usuario o el nivel de implicación que este ha demostrado con la marca. Es por ello que, incluso dentro del propio ámbito de <em>marketing online</em>, se suele crear cierta claridad al hablar de <em>leads</em>. Un <em>lead</em> es un usuario que ha entregado sus datos a una empresa y que, como consecuencia, pasa a ser un registro de su base de datos con el que la organización puede interactuar.  Este registro puede realizarse de forma física, con papel, o de manera online, a través de un formulario. (Bels, 2018).',
    },
    {
      termino: 'Pixel',
      significado:
        'El término surge por la combinación de dos palabras inglesas comunes, <em>«picture»</em> (imagen) y <em>«element»</em> (elemento). Un píxel es una unidad física, un punto cuadrado o rectangular que utiliza el lenguaje informático para definir la parte más pequeña de una pantalla de computador o un dispositivo móvil.',
    },
    {
      termino: '<em>Plugin</em>',
      significado:
        'Que también puede mencionarse como <em>plug-in</em>. Se trata de un concepto de la lengua inglesa que puede entenderse como “inserción” y que se emplea en el campo de la informática. Un plugin es aquella aplicación que, en un programa informático, añade una funcionalidad adicional o una nueva característica al <em>software</em>. En nuestro idioma, por lo tanto, puede nombrarse al plugin como un complemento. ',
    },
    {
      termino: 'SEO',
      significado:
        'SEO, o <em>Search Engine Optimization</em> (Optimización en Motores de Búsqueda), es un conjunto de técnicas y de herramientas que sirven para optimizar tanto las páginas web como las <em>landing pages</em>, para que los buscadores, como Google, puedan leerlas de forma más fácil y rápida. SEO no solo se utiliza para los buscadores, sino también para los usuarios. Es fundamental que cada página sea relevante con el contenido y que estas hablen de forma clara y concreta. (SN, 2012).',
    },
  ],
  referencias: [
    {
      referencia:
        'Aranda, J. (2014). Desarrollo y reutilización de componentes <em>software</em> y multimedia mediante lenguajes de guión. IC Editorial. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8654 ',
    },
    {
      referencia:
        'Bel, O. (2020). ¿Qué es un lead, qué tipos hay y para qué sirven? Inboundcycle.',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-un-lead',
    },
    {
      referencia:
        'Bello, E. (2021). Qué es un CMS, características y cuáles son los más populares. IEBS. ',
      link: 'https://www.iebschool.com/blog/que-es-un-cms-e-commerce/',
    },
    {
      referencia:
        'Casas, V. (2019). Qué es Joomla y para qué sirve. LucusHost.',
      link: 'https://www.lucushost.com/blog/que-es-joomla-y-para-que-sirve/',
    },
    {
      referencia:
        'DSI-EIE-FCEIA. (2015). Interfaces para los programas de aplicación (APIs). FCEIA. ',
      link:
        'https://www.dsi.fceia.unr.edu.ar/images/downloads/InfoElectronica/APIs2015.pdf',
    },
    {
      referencia:
        'Guebs. (2014). Como instalar y activar un <em>plugin</em> en WordPress',
      link: 'https://ayuda.guebs.com/como-instalar-plugin-en-wordpress/',
    },
    {
      referencia: 'Guerrero, E. (2018). Diseño Web Modular. Wataweb.',
      link: 'https://www.wataweb.com/blog/diseno-web-modular/',
    },
    {
      referencia:
        'Heilborn, C. (2012). ¿Qué es SEO y para qué funciona? MD Marketing Digital.',
      link:
        'https://www.mdmarketingdigital.com/blog/que-es-seo-y-para-que-funciona/',
    },
    {
      referencia:
        'Human Level. (s. f.). ¿Qué es un gestor de contenidos (CMS)?',
      link:
        'https://www.humanlevel.com/diccionario-marketing-online/gestor-de-contenidos-cms',
    },
    {
      referencia:
        'López, F. (2015). Sistemas Distribuidos. Universidad Autónoma Metropolitana.',
      link:
        'http://dccd.cua.uam.mx/libros/archivos/03IXStream_sistemas_distribuidos.pdf ',
    },
    {
      referencia:
        'López, M. (2016). Programación web en el entorno del cliente. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7955 ',
    },
    {
      referencia: 'Neubox. (2020). ¿Qué es cPanel y para qué sirve?',
      link:
        'https://neubox.com/tutoriales/base-de-conocimientos/que-es-cpanel-y-para-que-sirve/',
    },
    {
      referencia:
        'Recio, J. (2018). HTML5, CSS3 y Jquery. Curso práctico. Ediciones de la U',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8000 ',
    },
    {
      referencia:
        'Valdivia, J. (2016). Modelo de Procesos para el Desarrollo del Front-End de Aplicaciones Web.Ulima.',
      link:
        'https://revistas.ulima.edu.pe/index.php/Interfases/article/view/1245/1205 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
