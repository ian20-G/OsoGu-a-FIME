/*
 * ============================================================
 *  BASE DE DATOS INTEGRAL · FIME UANL
 *  Información académica, contactos, trámites, mapas y guías
 * ============================================================
 */
const FACULTAD = {
  nombre: "FIME",
  nombreLargo: "Facultad de Ingeniería Mecánica y Eléctrica (UANL)",
  lema: "Alere Flammam Veritatis",
  bienvenida: "Bienvenido a la FIME. Consulta mapas de aulas, teléfonos, correos y la guía paso a paso para tus trámites académicos: AFIs, becas, servicio social, prácticas y titulación.",

  ubicacion: {
    direccion: "Pedro de Alba S/N, Niños Héroes, Ciudad Universitaria, 66455 San Nicolás de los Garza, N.L.",
    consulta: "Facultad de Ingeniería Mecánica y Eléctrica, Pedro de Alba S/N, Niños Héroes, Ciudad Universitaria, 66455 San Nicolás de los Garza, N.L."
  },

  atencion: {
    conmutador: "(81) 8329-4020",
    ventanillas: "Lunes a viernes de 8:00 a 20:00 h",
    cajas: "Lunes a viernes de 8:00 a 19:30 h"
  },

  calendarioOficial: {
    periodo: "Agosto - Diciembre 2026",
    aprobadoPor: "Comisión Académica de la FIME UANL"
  },

  fechas: [
    {
      fechaInicio: "2026-08-03",
      dia: "3",
      mes: "ago",
      mesNum: 8,
      texto: "Inicio de clases",
      tipo: "clases",
      tipoEtiqueta: "Clases"
    },
    {
      fechaInicio: "2026-08-10",
      dia: "10",
      mes: "ago",
      mesNum: 8,
      texto: "Inicio de laboratorios",
      tipo: "clases",
      tipoEtiqueta: "Laboratorios"
    },
    {
      fechaInicio: "2026-08-17",
      dia: "17 al 21",
      mes: "ago",
      mesNum: 8,
      texto: "Periodo de bajas parciales",
      tipo: "tramite",
      tipoEtiqueta: "Bajas"
    },
    {
      fechaInicio: "2026-08-26",
      dia: "26 ago - 2 sep",
      mes: "ago",
      mesNum: 8,
      texto: "Fecha para baja total como alumno sin perder derechos",
      tipo: "tramite",
      tipoEtiqueta: "Baja Total"
    },
    {
      fechaInicio: "2026-09-07",
      dia: "7 al 11",
      mes: "sep",
      mesNum: 9,
      texto: "Primer examen de regularización 3.ª op. (plan 103) y 3.ª / 5.ª op. (planes 401, 420 y 440) para alumnos NO inscritos en clase ordinaria o curso de asesoría ordinaria (sabatino)",
      tipo: "examen",
      tipoEtiqueta: "Regularización"
    },
    {
      fechaInicio: "2026-09-16",
      dia: "16",
      mes: "sep",
      mesNum: 9,
      texto: "Receso académico y administrativo (Día inhábil - Independencia de México)",
      tipo: "asueto",
      tipoEtiqueta: "Día Inhábil"
    },
    {
      fechaInicio: "2026-09-22",
      dia: "22 sep - 2 oct",
      mes: "sep",
      mesNum: 9,
      texto: "Periodo de exámenes de Medio Curso (Clases sabatinas ordinarias: 26 de septiembre)",
      tipo: "examen",
      tipoEtiqueta: "Medio Curso"
    },
    {
      fechaInicio: "2026-10-05",
      dia: "5",
      mes: "oct",
      mesNum: 10,
      texto: "Reinicio de clases y laboratorios",
      tipo: "clases",
      tipoEtiqueta: "Clases"
    },
    {
      fechaInicio: "2026-10-12",
      dia: "12 al 16",
      mes: "oct",
      mesNum: 10,
      texto: "Segundo examen de regularización 4.ª op. (plan 103) y 4.ª / 6.ª op. (plan 401) para alumnos NO inscritos en clase ordinaria o asesoría ordinaria (sabatino)",
      tipo: "examen",
      tipoEtiqueta: "Regularización"
    },
    {
      fechaInicio: "2026-11-02",
      dia: "2 al 6",
      mes: "nov",
      mesNum: 11,
      texto: "Inscripción a examen de regularización 5.ª y 6.ª oportunidad (plan 103 o anteriores)",
      tipo: "tramite",
      tipoEtiqueta: "Inscripción"
    },
    {
      fechaInicio: "2026-11-07",
      dia: "7",
      mes: "nov",
      mesNum: 11,
      texto: "Concurso de ingreso a licenciatura EXANI-II",
      tipo: "ingreso",
      tipoEtiqueta: "EXANI-II"
    },
    {
      fechaInicio: "2026-11-09",
      dia: "9 al 13",
      mes: "nov",
      mesNum: 11,
      texto: "Aplicación de exámenes de regularización 5.ª y 6.ª oportunidad (plan 103 o anteriores)",
      tipo: "examen",
      tipoEtiqueta: "Regularización"
    },
    {
      fechaInicio: "2026-11-16",
      dia: "16",
      mes: "nov",
      mesNum: 11,
      texto: "Receso académico y administrativo (Día inhábil - Revolución Mexicana)",
      tipo: "asueto",
      tipoEtiqueta: "Día Inhábil"
    },
    {
      fechaInicio: "2026-11-20",
      dia: "20",
      mes: "nov",
      mesNum: 11,
      texto: "Último día de clases y laboratorios",
      tipo: "clases",
      tipoEtiqueta: "Fin Clases"
    },
    {
      fechaInicio: "2026-11-23",
      dia: "23 al 27",
      mes: "nov",
      mesNum: 11,
      texto: "Preinscripción por abandono de estudios (todos los planes) y/o aprobar materia(s) en 5.ª y/o 6.ª oportunidad (plan 103 o anteriores)",
      tipo: "tramite",
      tipoEtiqueta: "Preinscripción"
    },
    {
      fechaInicio: "2026-11-23",
      dia: "23 nov - 3 dic",
      mes: "nov",
      mesNum: 11,
      texto: "Periodo de exámenes Ordinarios (Clases sabatinas ordinarias: 28 de noviembre)",
      tipo: "examen",
      tipoEtiqueta: "Ordinarios"
    },
    {
      fechaInicio: "2026-12-04",
      dia: "4 al 16",
      mes: "dic",
      mesNum: 12,
      texto: "Periodo de exámenes Extraordinarios (Clases sabatinas extraordinarias: 12 de diciembre)",
      tipo: "examen",
      tipoEtiqueta: "Extraordinarios"
    },
    {
      fechaInicio: "2026-12-18",
      dia: "18",
      mes: "dic",
      mesNum: 12,
      texto: "Fin oficial del semestre Agosto - Diciembre 2026",
      tipo: "clases",
      tipoEtiqueta: "Fin Semestre"
    }
  ],

  pendientesSugeridos: [
    "Entregar papelería oficial en Servicios Escolares",
    "Cubrir cuota de Rectoría y cuota interna FIME (o solicitar prórroga/beca)",
    "Tomarse la fotografía para la credencial universitaria",
    "Activar correo institucional universitario (@uanl.edu.mx)",
    "Consultar horario de clases y salones en SIASE",
    "Acreditar al menos 2 AFIs durante este semestre",
    "Iniciar preparación de inglés (EXCI / TOEFL en CAADI o FFyL)",
    "Revisar el periodo de exámenes de Medio Curso (22 sep - 2 oct)",
    "Confirmar asistencias a eventos en SIASE antes de 3 días hábiles"
  ],

  mapa: "img/mapa-fime.jpg",
  lugares: [
    {
      id: "e1",
      corto: "1",
      nombre: "Edificio 1 · Titulación y Aulas",
      x: 664, y: 621, w: 193, h: 45,
      desc: "Planta alta: Coordinación de Titulación y Movilidad de Licenciatura. Aulas de clase.",
      horario: "Lun-Vie 8:00-20:00"
    },
    {
      id: "e2",
      corto: "2",
      nombre: "Edificio 2 · Aulas y Departamentos",
      x: 562, y: 493, w: 400, h: 46,
      desc: "Salones de clase de diversas carreras, cubículos docentes y pasillos de conexión.",
      horario: "Lun-Sáb 7:00-21:00"
    },
    {
      id: "e3",
      corto: "3",
      nombre: "Edificio 3 · Aulas de Ingeniería",
      x: 672, y: 305, w: 290, h: 52,
      desc: "Aulas de clase del ciclo básico e intermedio.",
      horario: "Lun-Sáb 7:00-21:00"
    },
    {
      id: "e4",
      corto: "4",
      nombre: "Edificio 4 · Aulas y Posgrado",
      x: 637, y: 93, w: 148, h: 150,
      desc: "Edificio de aulas con patio central y áreas de posgrado.",
      horario: "Lun-Vie 7:00-21:00"
    },
    {
      id: "e5",
      corto: "5",
      nombre: "Edificio 5 · Aulas y Laboratorios",
      x: 326, y: 403, w: 141, h: 227,
      desc: "Laboratorios de computación, electrónica y aulas multimedia.",
      horario: "Lun-Vie 7:00-21:00"
    },
    {
      id: "e6",
      corto: "6",
      nombre: "Edificio 6 · Aulas",
      x: 365, y: 265, w: 120, h: 122,
      desc: "Aulas de formación profesional para ingenierías.",
      horario: "Lun-Sáb 7:00-21:00"
    },
    {
      id: "e7",
      corto: "7",
      nombre: "Edificio 7 · Laboratorios y Talleres Pesados",
      x: 97, y: 392, w: 214, h: 353,
      desc: "Talleres mecánicos, manufactura, máquinas herramientas y laboratorios de pruebas.",
      horario: "Lun-Vie 7:00-21:00"
    },
    {
      id: "e8",
      corto: "8",
      nombre: "Edificio 8 · Laboratorios de Cómputo e Investigación",
      x: 165, y: 90, w: 135, h: 232,
      desc: "Laboratorios de sistemas, redes, software e investigación tecnológica.",
      horario: "Lun-Vie 7:00-21:00"
    },
    {
      id: "e9",
      corto: "9",
      nombre: "Edificio 9 · Coordinaciones Académicas",
      x: 838, y: 348, w: 124, h: 145,
      desc: "Aulas, salas de juntas y coordinaciones académicas de carrera.",
      horario: "Lun-Vie 8:00-19:00"
    },
    {
      id: "e11",
      corto: "11",
      nombre: "Edificio 11 · Aulas",
      x: 818, y: 540, w: 124, h: 80,
      desc: "Aulas de clase del sector oriente de FIME.",
      horario: "Lun-Vie 7:00-20:00"
    },
    {
      id: "e12",
      corto: "12",
      nombre: "Edificio 12 · Aulas y Especialidades",
      x: 220, y: 90, w: 170, h: 80,
      desc: "Aulas especializadas y laboratorios avanzados de ingeniería.",
      horario: "Lun-Vie 7:00-20:00"
    },
    {
      id: "cidet",
      corto: "CIDET",
      nombre: "CIDET · Centro de Investigación y Desarrollo Tecnológico",
      x: 326, y: 630, w: 220, h: 118,
      desc: "Desarrollo de proyectos científicos, innovación tecnológica y posgrados de excelencia.",
      horario: "Lun-Vie 8:00-19:00"
    },
    {
      id: "biblio",
      corto: "BIB",
      nombre: "Biblioteca Ing. Guadalupe E. Cedillo",
      x: 473, y: 97, w: 122, h: 133,
      desc: "Acervo bibliográfico de ingeniería, cubículos de estudio, préstamos de libros y computadoras.",
      horario: "Lun-Vie 7:00-21:00 · Sáb 8:00-14:00"
    },
    {
      id: "cafe",
      corto: "CAF",
      nombre: "Cafetería & Snack FIME",
      x: 500, y: 440, w: 195, h: 52,
      desc: "Área de alimentos, desayunos, comidas corridas, bebidas y snacks.",
      horario: "Lun-Vie 7:00-19:00"
    },
    {
      id: "audi",
      corto: "AUD",
      nombre: "Auditorio Jorge Urencio",
      x: 560, y: 540, w: 105, h: 80,
      desc: "Sede de congresos, conferencias magistrales, eventos de bienvenida y ceremonias.",
      horario: "Según agenda de eventos"
    },
    {
      id: "oso",
      corto: "OSO",
      nombre: "Jardín del Oso de FIME",
      x: 700, y: 730, w: 235, h: 60,
      desc: "Espacio emblemático al aire libre para convivencia y descanso estudiantil.",
      horario: "Acceso libre"
    },
    {
      id: "cecopro",
      corto: "CEC",
      nombre: "Centro de Competitividad y Productividad (CECOPRO)",
      x: 863, y: 625, w: 100, h: 115,
      desc: "Vinculación empresarial, cursos de certificación y asesoría para la industria.",
      horario: "Lun-Vie 8:00-18:00"
    },
    {
      id: "estac",
      corto: "EST",
      nombre: "Estacionamiento de Alumnos y Docentes",
      x: 230, y: 320, w: 130, h: 70,
      desc: "Acceso con calcomanía y credencial vigente de la facultad.",
      horario: "Lun-Sáb 6:30-22:00"
    }
  ],

  /*
   * DIRECTORIO COMPLETO EXTRAÍDO DEL DOCUMENTO OFICIAL FIME
   */
  contactos: [
    {
      grupo: "Atención Inmediata y Emergencias",
      items: [
        {
          nombre: "Conmutador Central FIME",
          detalle: "Enlace directo con todas las extensiones de la facultad",
          tels: ["(81) 8329-4020"],
          horario: "Lunes a viernes 8:00 a 20:00 h",
          lugar: "Edificio Administrativo"
        },
        {
          nombre: "Seguridad y Protección del Campus",
          detalle: "Vigilancia, rondines y emergencias dentro de Ciudad Universitaria",
          tels: ["(81) 8329-4000", "911"],
          horario: "Atención 24 horas los 365 días",
          lugar: "Módulo Central de Seguridad UANL"
        },
        {
          nombre: "Servicio Médico FIME",
          detalle: "Primeros auxilios, atención médica preventiva y valoraciones",
          tels: ["(81) 8329-4020"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Planta baja, Edificio de Servicios Escolares"
        }
      ]
    },
    {
      grupo: "Servicios Escolares y Gestión Administrativa",
      items: [
        {
          nombre: "Servicios Escolares (General)",
          titular: "M.A. José Luis Torres Garza",
          detalle: "Inscripciones, documentación oficial, kárdex y archivo",
          extension: "Ext. 5704",
          tels: ["(81) 8329-4020"],
          correos: ["jose.torresg@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 20:00 h",
          lugar: "Planta baja, Edificio de Servicios Escolares"
        },
        {
          nombre: "Escolar Licenciatura (Administrativo)",
          titular: "M.A. Jesús Rafael González Castillo",
          detalle: "Atención en ventanilla para trámites de alumnos de licenciatura",
          extension: "Ext. 5704",
          tels: ["(81) 8329-4020"],
          correos: ["jesus.gonzalezcst@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 20:00 h",
          lugar: "Ventanillas de Servicios Escolares Licenciatura"
        },
        {
          nombre: "Subdirección Académica",
          titular: "Dirección de Licenciatura",
          detalle: "Resolución de situaciones académicas, planes de estudio y comités",
          tels: ["(81) 8329-4020"],
          correos: ["contacto@fime.uanl.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Edificio Administrativo",
          teams: "yy455a5"
        },
        {
          nombre: "Cajas de la Facultad",
          detalle: "Cobro de cuotas internas, boletas de examen y constancias oficiales",
          tels: ["(81) 8329-4020"],
          horario: "Lunes a viernes 8:00 a 19:30 h",
          lugar: "Edificio Administrativo / Servicios Escolares"
        }
      ]
    },
    {
      grupo: "Titulación, Servicio Social y Prácticas",
      items: [
        {
          nombre: "Coordinación de Titulación y Movilidad Licenciatura",
          titular: "M.A. Karla Nathali Porras Vázquez",
          detalle: "Validación de expedientes, proyectos terminales, tesis y protocolo de titulación",
          extension: "Ext. 5925 / 5728",
          tels: ["(81) 8329-4020"],
          correos: ["karla.porrasv@uanl.mx", "egresados.fime@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Edificio 1, Primer Piso"
        },
        {
          nombre: "Coordinación de Servicio Social",
          titular: "M.A. Missael Antonio Guevara Correa",
          detalle: "Preinscripción SIASE, revisión de reportes mensuales y cartas de liberación",
          extension: "Ext. 5722 / 5731",
          tels: ["(81) 8329-4020"],
          correos: ["servicio.fime@uanl.mx", "missael.guevarac@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Ventanilla de Servicio Social",
          teams: "rg36t3s"
        },
        {
          nombre: "Coordinación de Prácticas Profesionales y Vinculación",
          titular: "M.A. Cristina Saraí Villegas Guzmán",
          detalle: "Convenios empresariales, prácticas curriculares y no curriculares",
          extension: "Ext. 5747 / 5748",
          tels: ["(81) 8329-4020"],
          correos: ["cristina.villegasg@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Coordinación de Prácticas Profesionales y Vinculación"
        },
        {
          nombre: "Bolsa de Trabajo y Egresados",
          titular: "M.C. Blanca Idalia Pérez Pérez",
          detalle: "Vacantes de empleo, vinculación con empresas e inserción laboral",
          extension: "Ext. 5970",
          tels: ["(81) 8329-4020"],
          correos: ["blanca.perezp@uanl.mx"],
          horario: "Lunes a viernes 8:00 a 17:00 h",
          lugar: "Edificio de Vinculación Tecnológica"
        }
      ]
    },
    {
      grupo: "Becas, Financiamiento y Exenciones",
      items: [
        {
          nombre: "Coordinación de Becas FIME",
          titular: "M.C. Elisa Janeth Garza Martínez",
          detalle: "Programa BECA-T, prórrogas de pago, becas de Rectoría y apoyos académicos",
          extension: "Ext. 5719 / 5729",
          tels: ["(81) 8329-4020"],
          correos: ["becas.fime@uanl.mx", "fimebecat@gmail.com"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Ventanilla de Becas FIME",
          teams: "g2c504c"
        }
      ]
    },
    {
      grupo: "Formación Integral (AFIs) y Deportes",
      items: [
        {
          nombre: "Coordinación de Formación Integral (AFIs) y Deportes",
          titular: "M.C. Raúl Alejandro González Garza",
          detalle: "Validación de eventos culturales, cívicos, científicos y acreditación de AFIs",
          extension: "Ext. 5917",
          tels: ["(81) 8329-4020"],
          correos: ["rgonzalezg@uanl.edu.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Coordinación de Formación Integral / Canal AFIs"
        }
      ]
    },
    {
      grupo: "Idiomas y Soporte Tecnológico",
      items: [
        {
          nombre: "CAADI / Educación Continua FIME",
          detalle: "Cursos y acreditaciones de inglés EXCI y TOEFL para requisito de titulación",
          tels: ["(81) 8329-4020"],
          correos: ["contacto@fime.uanl.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Centro de Autoaprendizaje de Idiomas (CAADI)"
        },
        {
          nombre: "Soporte de TI e Informática",
          detalle: "Restablecimiento de contraseñas SIASE, correo universitario y Wi-Fi institucional",
          tels: ["(81) 8329-4020"],
          correos: ["soporte@fime.edu.mx"],
          horario: "Lunes a viernes 8:00 a 18:00 h",
          lugar: "Edificio 5 / Laboratorios de Cómputo"
        }
      ]
    }
  ],

  /*
   * GUÍA PASO A PASO (PROCEDIMIENTOS ACADÉMICOS ESENCIALES)
   */
  guias: [
    {
      id: "ruta-semestral",
      categoria: "planificacion",
      icono: "",
      titulo: "Ruta Semestral Estratégica",
      resumen: "Planifica tus trámites semestre por semestre para egresar y titularte a tiempo sin contratiempos.",
      contenidoHtml: `
        <div class="timeline">
          <div class="time-step">
            <span class="step-badge">Semestres 1 a 4</span>
            <h4>Consolidación Formativa (80 a 90 créditos)</h4>
            <ul>
              <li><b>Acredita 2 AFIs cada semestre</b>: No lo dejes para el final.</li>
              <li><b>Inicia inglés temprano</b>: Prepárate en CAADI o Facultad de Filosofía y Letras (FFyL) para alcanzar 50 pts en EXCI o 460 en TOEFL.</li>
              <li><b>¡No repruebes!</b>: Llevar materias en segundas u otras oportunidades te impedirá acceder al programa BECA-T en semestres posteriores.</li>
            </ul>
          </div>

          <div class="time-step">
            <span class="step-badge">Semestres 5 y 6</span>
            <h4>Prácticas Profesionales y Becas (Superar 110 créditos)</h4>
            <ul>
              <li><b>Alcanza 110 créditos</b> para tener derecho a inscribir Prácticas Profesionales.</li>
              <li><b>Asiste a las pláticas obligatorias</b> de vinculación en marzo o septiembre.</li>
              <li><b>Aprovecha la BECA-T</b>: Si llevas tu kárdex limpio en primera oportunidad, obtén hasta un 50% de descuento en tu cuota interna.</li>
              <li><b>Entrega tu expediente</b> de prácticas antes del 25 de noviembre (ciclo Ene-Jun) o 25 de mayo (ciclo Ago-Dic).</li>
            </ul>
          </div>

          <div class="time-step">
            <span class="step-badge">Semestres 7 y 8</span>
            <h4>Servicio Social Obligatorio (70% de créditos = 154 créditos)</h4>
            <ul>
              <li><b>Requisito indispensable</b>: Tener 154 créditos mínimos y ser alumno regular (cero materias en 3.ª a 6.ª oportunidad).</li>
              <li><b>Preinscríbete en SIASE</b> en las fechas oficiales y sube tu boleta firmada con <b>tinta azul</b> en formato PDF al formulario indicado.</li>
              <li><b>Cumple con 480 horas</b> en un periodo de 6 a 24 meses continuos.</li>
              <li><b>Alerta crítica</b>: Sube tus 6 reportes mensuales obligatorios en SIASE durante los últimos 5 días naturales de cada mes. Omitirlos causa baja definitiva.</li>
            </ul>
          </div>

          <div class="time-step">
            <span class="step-badge">Semestres 9 y 10</span>
            <h4>Egreso y Protocolo de Grado (100% de créditos)</h4>
            <ul>
              <li><b>Verifica requisitos</b>: 16 AFIs validadas en SIASE, inglés acreditado, servicio social y prácticas liberadas.</li>
              <li><b>Presenta tu examen EGEL / EXENS</b> del CENEVAL.</li>
              <li><b>Modalidad de titulación</b>: Valida tu Proyecto Integrador con tu profesor o inscribe Tesis Profesional en el décimo semestre (similitud Turnitin &lt; 20%).</li>
              <li><b>Programa TITULA-T</b>: Solicita hasta 100% de exención en los costos de certificación de egreso (hasta un año después de egresar).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: "afis",
      categoria: "tramites",
      icono: "",
      titulo: "Actividades de Formación Integral (AFIs)",
      resumen: "¿Cuántas necesitas, cómo se acreditan en SIASE y qué pasa si te atrasas?",
      contenidoHtml: `
        <div class="doc-block">
          <h4>¿Cuántas AFIs debo acreditar para titularme?</h4>
          <p>Son obligatorias para obtener el título universitario. La cantidad requerida depende de la duración de tu plan de estudios:</p>
          <div class="chips-row">
            <span class="chip">10 semestres: <b>16 AFIs</b></span>
            <span class="chip">9 semestres: <b>14 AFIs</b></span>
            <span class="chip">8 semestres: <b>12 AFIs</b></span>
          </div>
          <p class="muted">La meta recomendada es validar formalmente <b>2 AFIs por semestre</b>.</p>

          <h4>Temáticas válidas</h4>
          <ul>
            <li>Eventos académicos y congresos técnicos.</li>
            <li>Competencias científicas y de innovación.</li>
            <li>Manifestaciones artísticas y culturales.</li>
            <li>Voluntariado y responsabilidad social universitaria.</li>
            <li>Torneos deportivos y equipos representativos de FIME.</li>
          </ul>

          <h4>Tiempos y validación en SIASE</h4>
          <p>Las organizadas por FIME tardan en promedio <b>10 días hábiles</b> en verse reflejadas en la pestaña AFIs de SIASE. En actividades externas de UANL, debes confirmar asistencia en SIASE en un plazo no mayor a 3 días hábiles.</p>

          <div class="alert-box">
            <b>Regla de reposición:</b> Si tienes atraso, el reglamento te autoriza acreditar hasta un máximo de <b>2 AFIs de reposición por semestre</b>, fijando un tope global de <b>4 AFIs por semestre</b> (2 ordinarias + 2 recuperadas).
          </div>
        </div>
      `
    },
    {
      id: "becas",
      categoria: "apoyos",
      icono: "",
      titulo: "Sistema de Becas, BECA-T y Prórrogas",
      resumen: "Conoce las opciones de apoyo socioeconómico, mérito y descuentos en cuotas escolares.",
      contenidoHtml: `
        <div class="doc-block">
          <h4>1. Becas Socioeconómicas de Rectoría</h4>
          <p>Se tramitan ante el Departamento de Becas de Rectoría. Para recibir la <b>beca complementaria en la cuota interna de FIME</b>, debes contar con la asignación institucional bajo las claves <b>01, 02, 25 o 75</b>.</p>

          <h4>2. Becas por Reconocimiento y Desempeño</h4>
          <ul>
            <li><b>Alto Promedio</b>: Promedio global acumulado en kárdex &ge; 90 a partir de 3.er semestre, con todas las materias en 1.ª oportunidad.</li>
            <li><b>Mérito Académico UANL</b>: Reconocimiento a los mejores promedios de su generación.</li>
            <li><b>Grupo de los 100 y Grupo Talentos</b>: Asignación directa según listas publicadas semestralmente por la dirección.</li>
          </ul>

          <h4>3. Programa BECA-T (A partir de 5.º semestre)</h4>
          <p>Descuentos escalonados en la cuota interna para alumnos regulares que aprueban oportunamente:</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Semestre</th>
                  <th>Todo en 1.ª Op.</th>
                  <th>Máx. 1 en 2.ª Op.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>5.º y 6.º</b></td>
                  <td><span class="badge-tag green">50% exención</span></td>
                  <td><span class="badge-tag yellow">25% exención</span></td>
                </tr>
                <tr>
                  <td><b>7.º y 8.º</b></td>
                  <td><span class="badge-tag green">75% exención</span></td>
                  <td><span class="badge-tag yellow">50% exención</span></td>
                </tr>
                <tr>
                  <td><b>9.º y 10.º</b></td>
                  <td><span class="badge-tag green">100% exención</span></td>
                  <td><span class="badge-tag yellow">75% exención</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>4. Prórrogas de Pago de Cuotas Internas</h4>
          <p>Si no alcanzas beca, puedes solicitar convenio de prórroga en línea:</p>
          <ul>
            <li>Ser alumno de reingreso.</li>
            <li>Tener saldada al 100% la boleta de Rectoría.</li>
            <li>Cubrir un pago inicial no menor al 50% de la boleta de cuota interna FIME.</li>
            <li>Presentar identificación oficial del tutor y no tener adeudos vencidos.</li>
            <li><b>Código Teams para prórrogas:</b> <code class="code-pill">g2c504c</code></li>
          </ul>
        </div>
      `
    },
    {
      id: "practicas",
      categoria: "tramites",
      icono: "",
      titulo: "Prácticas Profesionales: Curriculares vs No Curriculares",
      resumen: "Requisitos, periodos de inscripción y diferencias para vincularte con la industria.",
      contenidoHtml: `
        <div class="doc-block">
          <h4>Requisitos generales de registro</h4>
          <ul>
            <li>Tener al menos <b>110 créditos acumulados</b> en kárdex.</li>
            <li>Cuotas escolares del semestre cubiertas.</li>
            <li>Asistencia obligatoria a las pláticas de vinculación (marzo o septiembre).</li>
            <li>Se recomienda realizar entre el 6.º y 9.º semestre.</li>
          </ul>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th>Prácticas Curriculares</th>
                  <th>Prácticas No Curriculares</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Créditos requeridos</b></td>
                  <td>110 créditos</td>
                  <td>110 créditos</td>
                </tr>
                <tr>
                  <td><b>Duración</b></td>
                  <td>6 meses continuos (480 h mín.)</td>
                  <td>2 a 6 meses (prorrogables a 6 más)</td>
                </tr>
                <tr>
                  <td><b>Jornada</b></td>
                  <td>4 a 6 horas diarias</td>
                  <td>4 a 6 horas diarias</td>
                </tr>
                <tr>
                  <td><b>Valor en Kárdex</b></td>
                  <td><b>Sí acredita créditos</b> como unidad de aprendizaje</td>
                  <td><b>No aporta créditos</b> curriculares</td>
                </tr>
                <tr>
                  <td><b>Periodos de entrega</b></td>
                  <td>1 oct a 25 nov (Ene-Jun)<br>1 abr a 25 may (Ago-Dic)</td>
                  <td>Abierto en cualquier mes del año</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="muted"><b>Importante:</b> Por reglamento, los periodos realizados como No Curriculares no pueden convalidarse posteriormente como Prácticas Curriculares.</p>
        </div>
      `
    },
    {
      id: "servicio-social",
      categoria: "tramites",
      icono: "",
      titulo: "Servicio Social Obligatorio",
      resumen: "Pasos exactos, reportes mensuales en SIASE y requisitos normativos para liberarlo.",
      contenidoHtml: `
        <div class="doc-block">
          <h4>Condiciones para solicitar plaza</h4>
          <ul>
            <li><b>Avance mínimo:</b> 70% de créditos del plan de estudios (mínimo <b>154 créditos aprobados</b> en kárdex).</li>
            <li><b>Estatus académico:</b> Alumno regular (sin materias activas en 3.ª a 6.ª oportunidad).</li>
            <li><b>Horas obligatorias:</b> Mínimo <b>480 horas</b> en un periodo de 6 meses continuos a 24 meses como máximo.</li>
          </ul>

          <h4>Procedimiento paso a paso</h4>
          <ol class="step-list">
            <li><b>Preinscripción en SIASE:</b> Se abre 2 veces al año (ej. Ago-Sep para iniciar en ciclo Ene-Jun). Entra a <i>Registro al Servicio Social</i>, genera la boleta, fírmala en <b>tinta azul</b> y súbela en PDF al formulario Forms de la coordinación.</li>
            <li><b>Asignación y Plaza:</b> Recibe tu plaza y formaliza con la dependencia o empresa receptora.</li>
            <li><b>6 Reportes Mensuales en SIASE:</b> Se capturan <b>exclusivamente durante los últimos 5 días naturales de cada mes</b>. Acumular 3 faltas o no capturarlos causa <b>baja administrativa irrevocable</b>.</li>
            <li><b>Oficio de Terminación:</b> Al terminar las 480 horas, entrega el oficio firmado y sellado a la Coordinación de Servicio Social para emitir el certificado oficial de la UANL.</li>
          </ol>
          <p><b>Canal de Microsoft Teams de Servicio Social:</b> <code class="code-pill">rg36t3s</code></p>
        </div>
      `
    },
    {
      id: "titulacion",
      categoria: "titulacion",
      icono: "",
      titulo: "Titulación Profesional y Estímulo TITULA-T",
      resumen: "Modalidades autorizadas, requisitos de inglés, trámite DEyA y cómo exentar pagos.",
      contenidoHtml: `
        <div class="doc-block">
          <h4>Modalidades para planes vigentes (103, 401 y 440)</h4>
          <ul>
            <li><b>Proyecto Integrador / Terminal:</b> Modalidad estándar cursada en las materias finales de tu especialidad (Proyecto IME, IMA II, Integrador II para IAS/ITS, Comunicaciones IEC, IMT 2). La lista la envía directamente el profesor a la coordinación.</li>
            <li><b>Tesis Profesional:</b> Trabajo de investigación formal. Requiere inscripción presencial en el último mes del 10.º semestre, carta de aceptación y revisión con <b>Turnitin con similitud menor al 20%</b>.</li>
          </ul>

          <h4>Requisito indispensable: Segundo Idioma</h4>
          <p>Debes contar con cualquiera de estas certificaciones aprobadas:</p>
          <ul>
            <li><b>EXCI UANL:</b> Mínimo <b>50 puntos</b>.</li>
            <li><b>TOEFL (Institucional o Internacional):</b> Mínimo <b>460 puntos</b>.</li>
            <li><b>FFyL UANL:</b> Al menos <b>6 niveles aprobados</b> en kárdex.</li>
          </ul>

          <h4>Secuencia del trámite de titulación</h4>
          <ol class="step-list">
            <li>Llenar Encuesta de Seguimiento de Egresados y enviar CV con kárdex a <a href="mailto:egresados.fime@uanl.mx">egresados.fime@uanl.mx</a>.</li>
            <li>Registrar pre-solicitud en SIASE en el módulo <i>Trámites DEyA</i>.</li>
            <li>Acudir a la Ventanilla de Titulación (Edificio 1, 1.er piso) con kárdex reciente (&lt; 6 meses), comprobante EGEL/EXENS, cartas de servicio y prácticas, e inglés.</li>
            <li>Liquidación de aportación y toma de fotografía institucional en la Torre de Rectoría (vestimenta formal oscura).</li>
            <li>Emisión de Cédula Profesional Electrónica ante la SEP vía web con tu <b>e.firma vigente del SAT</b>.</li>
          </ol>

          <h4>Programa TITULA-T (Beca de Exención)</h4>
          <p>La FIME apoya a sus egresados exentando hasta el 100% de la Certificación de Egreso si se solicita dentro del primer año posterior a egresar:</p>
          <ul>
            <li><b>100% de Beca:</b> Por Trayectoria Excelente (kardex limpio en 1.ª oportunidad), por Tesis Profesional o por dictamen <b>Sobresaliente en EXENS/CENEVAL</b>.</li>
            <li><b>75% de Beca:</b> Por Trayectoria Notable en 1.ª oportunidad.</li>
            <li><b>50% o 25% de Beca:</b> Por trayectorias con máximo 2 extraordinarios.</li>
          </ul>
        </div>
      `
    }
  ],

  faq: [
    {
      q: "¿Dónde consulto mi salón y qué significa el número (ej. 2103)?",
      a: "El número de salón de 4 dígitos indica: 1.er dígito = Edificio, 2.º dígito = Piso, 3.er y 4.º dígitos = Número de aula. Ejemplo: 2103 es Edificio 2, Piso 1, Salón 03. Puedes probar cualquier código en el decodificador de la pestaña Mapa."
    },
    {
      q: "¿Cuántas AFIs debo hacer y en qué semestres?",
      a: "Debes realizar 2 AFIs por semestre (16 totales en 10 semestres, 14 en 9 semestres o 12 en 8 semestres). No las acumules para el final, ya que por reglamento solo puedes reponer máximo 2 atrasadas por semestre."
    },
    {
      q: "¿Cuándo y cómo puedo solicitar la BECA-T?",
      a: "A partir de 5.º semestre si has cursado tus materias en primera oportunidad o máximo una en segunda oportunidad. El beneficio otorga desde un 25% hasta un 100% de exención en tu cuota interna según tu semestre y regularidad."
    },
    {
      q: "¿Cuáles son los requisitos para iniciar Servicio Social y Prácticas?",
      a: "Para Prácticas Profesionales necesitas al menos 110 créditos acumulados. Para Servicio Social requieres el 70% de la carrera (mínimo 154 créditos) y ser alumno regular sin materias en 3.ª a 6.ª oportunidad."
    },
    {
      q: "¿Qué puntaje necesito de inglés para poder titularme?",
      a: "50 puntos en EXCI UANL, 460 puntos en TOEFL (institucional/internacional) o acreditar al menos 6 niveles de idioma en la Facultad de Filosofía y Letras (FFyL)."
    },
    {
      q: "¿Cómo contacto a las coordinaciones si no estoy en la facultad?",
      a: "En la pestaña 'Contactos' tienes el conmutador general (81) 8329-4020, extensiones, correos de los titulares y códigos de Microsoft Teams oficiales para Servicio Social (rg36t3s), Becas (g2c504c) y Subdirección (yy455a5)."
    }
  ],

  enlaces: [
    { texto: "Sitio Web Oficial de FIME", url: "https://www.fime.uanl.mx" },
    { texto: "Portal SIASE UANL", url: "https://www.uanl.mx/enlinea/" },
    { texto: "Trámites Generales de FIME", url: "https://www.fime.uanl.mx/tramites/tramites-generales/" },
    { texto: "Coordinación de Becas FIME", url: "https://www.fime.uanl.mx/tramites/becas/" },
    { texto: "Servicio Social FIME", url: "https://www.fime.uanl.mx/tramites/servicio-social/" },
    { texto: "Prácticas Profesionales FIME", url: "https://www.fime.uanl.mx/tramites/practicas-profesionales/" },
    { texto: "Titulación de Licenciatura", url: "https://www.fime.uanl.mx/tramites/titulacion-de-licenciatura/" },
    { texto: "Programa TITULA-T", url: "https://www.fime.uanl.mx/tramites/titulat/" },
    { texto: "Actividades de Formación Integral (AFIs)", url: "https://www.fime.uanl.mx/afis/" }
  ]
};
