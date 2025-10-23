// Datos de las áreas jurídicas
export const areasData = {
  penal: {
    id: 'penal',
    title: 'Derecho Penal',
    number: '01',
    subtitle: 'DEFENSA PENAL ESPECIALIZADA',
    description:
      'Defensa especializada en delitos de todo tipo. Ofrecemos asesoramiento integral y representación legal en procesos penales.',
    metaTitle:
      'Abogados Penalistas en Madrid | Legal Orbis - Defensa Penal Especializada',
    metaDescription:
      'Abogados penalistas especializados en Madrid. Defensa en delitos contra la vida, patrimonio, violencia de género y delitos económicos. Consulta gratuita.',
    metaKeywords: [
      'abogados penalistas Madrid',
      'defensa penal Madrid',
      'abogados delitos Madrid',
      'defensa criminal Madrid',
      'abogados violencia género Madrid',
      'delitos económicos Madrid',
      'abogados delitos informáticos Madrid',
      'defensa penal especializada Madrid',
    ],
    image: '/images/jpg/Legal_01-62.jpg',
    services: [
      'Delitos contra la vida',
      'Delitos contra la libertad sexual',
      'Delitos contra el patrimonio',
      'Delitos contra la salud pública',
      'Delitos económicos y societarios',
      'Delitos contra la administración pública',
      'Delitos informáticos',
      'Violencia de género',
      'Delitos contra la seguridad vial',
      'Delitos contra el medio ambiente',
    ],
  },
  civil: {
    id: 'civil',
    title: 'Derecho Civil',
    number: '02',
    subtitle: 'DERECHO CIVIL INTEGRAL',
    description:
      'Asesoramiento en relaciones jurídicas privadas. Herencias, matrimonial, reclamaciones de cantidad y más.',
    metaTitle:
      'Abogados Civiles en Madrid | Legal Orbis - Derecho Civil Integral',
    metaDescription:
      'Abogados especialistas en derecho civil en Madrid. Herencias, divorcios, derecho inmobiliario, responsabilidad civil y contratos. Asesoramiento legal experto.',
    metaKeywords: [
      'abogados civiles Madrid',
      'derecho civil Madrid',
      'abogados herencias Madrid',
      'abogados divorcios Madrid',
      'derecho inmobiliario Madrid',
      'responsabilidad civil Madrid',
      'abogados contratos Madrid',
      'derecho familiar Madrid',
    ],
    image: '/images/jpg/Legal_01-41.jpg',
    services: [
      'Herencias y sucesiones',
      'Derecho matrimonial y familiar',
      'Reclamaciones de cantidad',
      'Responsabilidad civil',
      'Derecho inmobiliario',
      'Contratos civiles',
      'Derecho de daños',
      'Derecho de consumo',
      'Derecho de personas',
      'Derecho de obligaciones',
    ],
  },
  laboral: {
    id: 'laboral',
    title: 'Derecho Laboral',
    number: '03',
    subtitle: 'DERECHO LABORAL ESPECIALIZADO',
    description:
      'Protección de derechos laborales. Despidos, reclamaciones de cantidad, derechos de conciliación y clasificación profesional.',
    metaTitle:
      'Abogados Laboralistas en Madrid | Legal Orbis - Derecho Laboral Especializado',
    metaDescription:
      'Abogados laboralistas en Madrid especializados en despidos, reclamaciones laborales, conciliación familiar y seguridad social. Defensa de derechos del trabajador.',
    metaKeywords: [
      'abogados laboralistas Madrid',
      'derecho laboral Madrid',
      'abogados despidos Madrid',
      'reclamaciones laborales Madrid',
      'conciliación familiar Madrid',
      'seguridad social Madrid',
      'abogados accidentes trabajo Madrid',
      'derecho sindical Madrid',
    ],
    image: '/images/jpg/Legal_01-48.jpg',
    services: [
      'Despidos y extinciones',
      'Reclamaciones de cantidad',
      'Derechos de conciliación de vida laboral y personal',
      'Clasificación profesional',
      'Discriminación laboral',
      'Accidentes de trabajo',
      'Negociación colectiva',
      'Derecho sindical',
      'Inspección de trabajo',
      'Derecho de la seguridad social',
    ],
  },
  penitenciario: {
    id: 'penitenciario',
    title: 'Derecho Penitenciario',
    number: '04',
    subtitle: 'DERECHO PENITENCIARIO EXPERTO',
    description:
      'Contamos con experiencia en expedientes penitenciarios sustanciados en la Audiencia Nacional (Bárcenas, etc).',
    metaTitle:
      'Abogados Penitenciarios en Madrid | Legal Orbis - Derecho Penitenciario Experto',
    metaDescription:
      'Abogados especialistas en derecho penitenciario en Madrid. Experiencia en Audiencia Nacional, libertad condicional, recursos penitenciarios y asistencia jurídica.',
    metaKeywords: [
      'abogados penitenciarios Madrid',
      'derecho penitenciario Madrid',
      'libertad condicional Madrid',
      'recursos penitenciarios Madrid',
      'audiencia nacional Madrid',
      'asistencia jurídica penitenciaria Madrid',
      'expedientes penitenciarios Madrid',
      'clasificación penitenciaria Madrid',
    ],
    image: '/images/jpg/Legal_01-111.jpg',
    services: [
      'Expedientes penitenciarios sustanciados en la Audiencia Nacional',
      'Recursos de amparo penitenciario',
      'Solicitudes de libertad condicional',
      'Clasificación penitenciaria',
      'Régimen de visitas',
      'Permisos penitenciarios',
      'Recursos contra sanciones disciplinarias',
      'Asistencia jurídica penitenciaria',
    ],
  },
};

// Tipos para TypeScript
export interface AreaData {
  id: string;
  title: string;
  number: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  image: string;
  services: string[];
}

export interface Branch {
  id: string;
  branch: string;
  description: string;
  details: string;
  services: string[];
}

// Función para obtener las ramas específicas de cada área jurídica
export const getAreaBranches = (areaId: string): Branch[] => {
  const branches = {
    penal: [
      {
        id: 'delitos-vida',
        branch: 'Delitos contra la vida',
        description:
          'Defensa especializada en homicidios, asesinatos y otros delitos contra la vida humana.',
        details:
          'Nuestra experiencia incluye defensa en casos de homicidio doloso, imprudente, asesinato, parricidio, infanticidio y otros delitos contra la vida. Trabajamos con peritos forenses, reconstrucciones de hechos y análisis de pruebas para construir la mejor estrategia de defensa.',
        services: [
          'Homicidio doloso',
          'Homicidio imprudente',
          'Asesinato',
          'Parricidio',
          'Infanticidio',
          'Asistencia al suicidio',
        ],
      },
      {
        id: 'delitos-sexuales',
        branch: 'Delitos contra la libertad sexual',
        description:
          'Asistencia jurídica en casos de agresiones sexuales, abusos y otros delitos sexuales.',
        details:
          'Especialización en delitos sexuales con enfoque en la protección de víctimas y defensa de acusados. Incluye agresiones sexuales, abusos sexuales, acoso sexual, exhibicionismo y otros delitos contra la libertad sexual.',
        services: [
          'Agresiones sexuales',
          'Abusos sexuales',
          'Acoso sexual',
          'Exhibicionismo',
          'Prostitución de menores',
          'Trata de personas',
        ],
      },
      {
        id: 'delitos-patrimonio',
        branch: 'Delitos contra el patrimonio',
        description:
          'Defensa en robos, hurtos, estafas, apropiación indebida y otros delitos patrimoniales.',
        details:
          'Defensa especializada en todos los delitos contra el patrimonio, desde robos con fuerza hasta estafas sofisticadas. Incluye análisis de pruebas documentales, peritajes contables y estrategias de defensa específicas.',
        services: [
          'Robo con fuerza',
          'Hurto',
          'Estafa',
          'Apropiación indebida',
          'Usurpación',
          'Daños',
        ],
      },
      {
        id: 'delitos-economicos',
        branch: 'Delitos económicos',
        description:
          'Especialización en blanqueo de capitales, insolvencias punibles y delitos societarios.',
        details:
          'Defensa en delitos económicos complejos que requieren conocimiento especializado en derecho mercantil, fiscal y contable. Incluye casos de blanqueo de capitales, insolvencias punibles y delitos societarios.',
        services: [
          'Blanqueo de capitales',
          'Insolvencias punibles',
          'Delitos societarios',
          'Alzamiento de bienes',
          'Fraude fiscal',
          'Corrupción empresarial',
        ],
      },
      {
        id: 'delitos-informaticos',
        branch: 'Delitos informáticos',
        description:
          'Defensa en ciberdelitos, fraudes online y delitos relacionados con las nuevas tecnologías.',
        details:
          'Especialización en delitos informáticos y cibernéticos, incluyendo fraudes online, suplantación de identidad, hacking, ciberacoso y otros delitos relacionados con las nuevas tecnologías.',
        services: [
          'Fraudes online',
          'Suplantación de identidad',
          'Hacking',
          'Ciberacoso',
          'Pornografía infantil',
          'Delitos de propiedad intelectual',
        ],
      },
      {
        id: 'violencia-genero',
        branch: 'Violencia de género',
        description:
          'Asistencia especializada en violencia doméstica y delitos contra la mujer.',
        details:
          'Defensa especializada en violencia de género con enfoque en la protección de víctimas y defensa de acusados. Incluye violencia doméstica, maltrato psicológico, acoso y otros delitos contra la mujer.',
        services: [
          'Violencia doméstica',
          'Maltrato psicológico',
          'Acoso',
          'Amenazas',
          'Coacciones',
          'Quebrantamiento de medidas',
        ],
      },
    ],
    civil: [
      {
        id: 'derecho-familia',
        branch: 'Derecho de familia',
        description:
          'Divorcios, separaciones, custodia de menores, pensiones alimenticias y régimen de visitas.',
        details:
          'Especialización completa en derecho de familia, incluyendo procesos de divorcio, separación, custodia de menores, pensiones alimenticias, régimen de visitas y medidas cautelares.',
        services: [
          'Divorcios',
          'Separaciones',
          'Custodia de menores',
          'Pensiones alimenticias',
          'Régimen de visitas',
          'Medidas cautelares',
        ],
      },
      {
        id: 'derecho-sucesorio',
        branch: 'Derecho sucesorio',
        description:
          'Herencias, testamentos, legados, aceptación y renuncia de herencias.',
        details:
          'Asesoramiento completo en derecho sucesorio, desde la aceptación o renuncia de herencias hasta la distribución de bienes según testamento o ley.',
        services: [
          'Herencias',
          'Testamentos',
          'Legados',
          'Aceptación de herencias',
          'Renuncia de herencias',
          'Partición de herencias',
        ],
      },
      {
        id: 'derecho-inmobiliario',
        branch: 'Derecho inmobiliario',
        description:
          'Compraventas, arrendamientos, hipotecas, servidumbres y propiedad horizontal.',
        details:
          'Especialización en derecho inmobiliario, incluyendo transacciones inmobiliarias, arrendamientos, hipotecas, servidumbres y gestión de comunidades de propietarios.',
        services: [
          'Compraventas',
          'Arrendamientos',
          'Hipotecas',
          'Servidumbres',
          'Propiedad horizontal',
          'Usufructo',
        ],
      },
      {
        id: 'responsabilidad-civil',
        branch: 'Responsabilidad civil',
        description:
          'Daños y perjuicios, accidentes, responsabilidad contractual y extracontractual.',
        details:
          'Defensa especializada en responsabilidad civil, incluyendo daños y perjuicios, accidentes de tráfico, responsabilidad médica y otros casos de responsabilidad.',
        services: [
          'Daños y perjuicios',
          'Accidentes de tráfico',
          'Responsabilidad médica',
          'Responsabilidad contractual',
          'Responsabilidad extracontractual',
          'Seguros',
        ],
      },
      {
        id: 'derecho-obligaciones',
        branch: 'Derecho de obligaciones',
        description:
          'Contratos civiles, cumplimiento e incumplimiento, mora y resolución contractual.',
        details:
          'Asesoramiento en derecho de obligaciones, incluyendo contratos civiles, cumplimiento e incumplimiento, mora, resolución contractual y garantías.',
        services: [
          'Contratos civiles',
          'Cumplimiento contractual',
          'Incumplimiento contractual',
          'Mora',
          'Resolución contractual',
          'Garantías',
        ],
      },
      {
        id: 'derecho-consumo',
        branch: 'Derecho de consumo',
        description:
          'Protección del consumidor, garantías, cláusulas abusivas y reclamaciones.',
        details:
          'Defensa de los derechos del consumidor, incluyendo garantías, cláusulas abusivas, reclamaciones y protección contra prácticas comerciales desleales.',
        services: [
          'Garantías',
          'Cláusulas abusivas',
          'Reclamaciones',
          'Prácticas desleales',
          'Protección del consumidor',
          'Derecho de desistimiento',
        ],
      },
    ],
    laboral: [
      {
        id: 'derecho-individual',
        branch: 'Derecho individual del trabajo',
        description:
          'Contratos de trabajo, modificaciones contractuales, clasificación profesional y salarios.',
        details:
          'Asesoramiento completo en derecho individual del trabajo, incluyendo contratos, modificaciones contractuales, clasificación profesional y cuestiones salariales.',
        services: [
          'Contratos de trabajo',
          'Modificaciones contractuales',
          'Clasificación profesional',
          'Salarios',
          'Jornada laboral',
          'Vacaciones',
        ],
      },
      {
        id: 'extincion-contrato',
        branch: 'Extinción del contrato',
        description:
          'Despidos, dimisiones, finiquitos, indemnizaciones y procedimientos de extinción.',
        details:
          'Especialización en extinción de contratos de trabajo, incluyendo despidos, dimisiones, finiquitos, indemnizaciones y procedimientos de extinción.',
        services: [
          'Despidos',
          'Dimisiones',
          'Finiquitos',
          'Indemnizaciones',
          'Procedimientos de extinción',
          'ERES',
        ],
      },
      {
        id: 'derecho-colectivo',
        branch: 'Derecho colectivo',
        description:
          'Negociación colectiva, convenios, huelgas, conflictos colectivos y representación sindical.',
        details:
          'Asesoramiento en derecho colectivo del trabajo, incluyendo negociación colectiva, convenios, huelgas, conflictos colectivos y representación sindical.',
        services: [
          'Negociación colectiva',
          'Convenios',
          'Huelgas',
          'Conflictos colectivos',
          'Representación sindical',
          'Comités de empresa',
        ],
      },
      {
        id: 'seguridad-social',
        branch: 'Seguridad social',
        description:
          'Prestaciones, cotizaciones, incapacidades, jubilación y prestaciones por desempleo.',
        details:
          'Especialización en seguridad social, incluyendo prestaciones, cotizaciones, incapacidades, jubilación y prestaciones por desempleo.',
        services: [
          'Prestaciones',
          'Cotizaciones',
          'Incapacidades',
          'Jubilación',
          'Prestaciones por desempleo',
          'Maternidad y paternidad',
        ],
      },
      {
        id: 'prevencion-riesgos',
        branch: 'Prevención de riesgos',
        description:
          'Accidentes de trabajo, enfermedades profesionales y responsabilidad empresarial.',
        details:
          'Defensa especializada en prevención de riesgos laborales, incluyendo accidentes de trabajo, enfermedades profesionales y responsabilidad empresarial.',
        services: [
          'Accidentes de trabajo',
          'Enfermedades profesionales',
          'Responsabilidad empresarial',
          'Prevención de riesgos',
          'Inspección de trabajo',
          'Sanciones',
        ],
      },
      {
        id: 'conciliacion-familiar',
        branch: 'Conciliación familiar',
        description:
          'Permisos, excedencias, reducción de jornada y derechos de conciliación.',
        details:
          'Asesoramiento en derechos de conciliación familiar, incluyendo permisos, excedencias, reducción de jornada y otros derechos de conciliación.',
        services: [
          'Permisos',
          'Excedencias',
          'Reducción de jornada',
          'Derechos de conciliación',
          'Maternidad y paternidad',
          'Cuidado de familiares',
        ],
      },
    ],
    penitenciario: [
      {
        id: 'ejecucion-penal',
        branch: 'Ejecución penal',
        description:
          'Cumplimiento de condenas, clasificación penitenciaria y régimen de cumplimiento.',
        details:
          'Especialización en ejecución penal, incluyendo cumplimiento de condenas, clasificación penitenciaria y régimen de cumplimiento.',
        services: [
          'Cumplimiento de condenas',
          'Clasificación penitenciaria',
          'Régimen de cumplimiento',
          'Ejecución de penas',
          'Suspensión de condenas',
          'Sustitución de penas',
        ],
      },
      {
        id: 'libertad-condicional',
        branch: 'Libertad condicional',
        description:
          'Solicitudes de libertad condicional, seguimiento y revocación de medidas.',
        details:
          'Asesoramiento en libertad condicional, incluyendo solicitudes, seguimiento y revocación de medidas de libertad condicional.',
        services: [
          'Solicitudes de libertad condicional',
          'Seguimiento',
          'Revocación de medidas',
          'Condiciones',
          'Supervisión',
          'Reinserción',
        ],
      },
      {
        id: 'regimen-penitenciario',
        branch: 'Régimen penitenciario',
        description:
          'Derechos y deberes de los internos, visitas, permisos y comunicaciones.',
        details:
          'Defensa de los derechos de los internos, incluyendo visitas, permisos, comunicaciones y otros derechos penitenciarios.',
        services: [
          'Derechos de los internos',
          'Visitas',
          'Permisos',
          'Comunicaciones',
          'Trabajo penitenciario',
          'Educación',
        ],
      },
      {
        id: 'recursos-penitenciarios',
        branch: 'Recursos penitenciarios',
        description:
          'Recursos contra sanciones disciplinarias y decisiones administrativas.',
        details:
          'Defensa especializada en recursos penitenciarios, incluyendo recursos contra sanciones disciplinarias y decisiones administrativas.',
        services: [
          'Recursos contra sanciones',
          'Decisiones administrativas',
          'Recursos de alzada',
          'Recursos contenciosos',
          'Recursos de amparo',
          'Recursos de revisión',
        ],
      },
      {
        id: 'audiencia-nacional',
        branch: 'Audiencia Nacional',
        description:
          'Expedientes penitenciarios especiales y casos de alta relevancia.',
        details:
          'Experiencia en expedientes penitenciarios sustanciados en la Audiencia Nacional, incluyendo casos de alta relevancia y expedientes especiales.',
        services: [
          'Expedientes especiales',
          'Casos de alta relevancia',
          'Audiencia Nacional',
          'Expedientes complejos',
          'Casos mediáticos',
          'Expedientes Bárcenas',
        ],
      },
      {
        id: 'asistencia-juridica',
        branch: 'Asistencia jurídica',
        description:
          'Defensa de derechos fundamentales y recursos de amparo penitenciario.',
        details:
          'Defensa especializada en asistencia jurídica penitenciaria, incluyendo defensa de derechos fundamentales y recursos de amparo penitenciario.',
        services: [
          'Derechos fundamentales',
          'Recursos de amparo',
          'Asistencia jurídica',
          'Defensa de derechos',
          'Recursos constitucionales',
          'Protección de derechos',
        ],
      },
    ],
  };

  return branches[areaId as keyof typeof branches] || [];
};
