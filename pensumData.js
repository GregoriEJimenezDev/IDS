(function () {
  const PENSUM_OFICIAL = [
    { codigo: "TI-101", nombre: "Fundamentos del computador", creditos: 4, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "TDS-001", nombre: "Introduccion a la elaboracion de Algoritmos", creditos: 4, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "HIS-101", nombre: "Historia Universal", creditos: 3, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "ESP-101", nombre: "Redaccion Castellana", creditos: 4, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "MAT-001", nombre: "Pre-calculo", creditos: 5, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "OAI-001", nombre: "Orientacion Institucional", creditos: 1, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "CBG-110", nombre: "Etica 1", creditos: 3, periodo: 1, prerrequisitos: [], corequisitos: [] },
    { codigo: "ING-001", nombre: "Ingles Nivel 1-3", creditos: 0, periodo: 1, prerrequisitos: [], corequisitos: [] },

    { codigo: "HIS-102", nombre: "Historia Dominicana", creditos: 3, periodo: 2, prerrequisitos: ["HIS-101"], corequisitos: [] },
    { codigo: "MAT-101", nombre: "Calculo Diferencial", creditos: 5, periodo: 2, prerrequisitos: ["MAT-001"], corequisitos: [] },
    { codigo: "TI-115", nombre: "Contabilidad Financiera", creditos: 4, periodo: 2, prerrequisitos: ["MAT-001"], corequisitos: [], error_mensaje: "Debes aprobar Pre-calculo (MAT-001) primero" },
    { codigo: "ING-002", nombre: "Ingles Nivel 4-6", creditos: 0, periodo: 2, prerrequisitos: ["ING-001"], corequisitos: [] },
    { codigo: "TDS-002", nombre: "Fundamentos de programacion", creditos: 4, periodo: 2, prerrequisitos: ["TI-101", "TDS-001"], corequisitos: [] },
    { codigo: "CBG-115", nombre: "Etica 2", creditos: 3, periodo: 2, prerrequisitos: ["CBG-110"], corequisitos: [] },
    { codigo: "TDS-101", nombre: "Introduccion a las bases de Datos", creditos: 4, periodo: 2, prerrequisitos: ["TDS-001"], corequisitos: [] },

    { codigo: "CBG-210", nombre: "Probabilidad y estadistica", creditos: 3, periodo: 3, prerrequisitos: ["MAT-101"], corequisitos: [] },
    { codigo: "TDS-003", nombre: "Programacion I", creditos: 4, periodo: 3, prerrequisitos: ["TDS-002", "TDS-101"], corequisitos: [] },
    { codigo: "TDS-004", nombre: "Analisis y Diseno de Sistemas", creditos: 4, periodo: 3, prerrequisitos: ["TDS-002"], corequisitos: [] },
    { codigo: "MAT-102", nombre: "Calculo Integral", creditos: 5, periodo: 3, prerrequisitos: ["MAT-101"], corequisitos: [] },
    { codigo: "FIS-110", nombre: "Fisica General", creditos: 4, periodo: 3, prerrequisitos: ["MAT-101"], corequisitos: [] },
    { codigo: "FIS-110-L", nombre: "Laboratorio Fisica General", creditos: 1, periodo: 3, prerrequisitos: ["MAT-101"], corequisitos: ["FIS-110"] },
    { codigo: "ING-003", nombre: "Ingles Nivel 7-9", creditos: 0, periodo: 3, prerrequisitos: ["ING-002"], corequisitos: [] },
    { codigo: "CBG-120", nombre: "Etica 3", creditos: 3, periodo: 3, prerrequisitos: ["CBG-115"], corequisitos: [] },

    { codigo: "TDS-005", nombre: "Diseno Centrado en el usuario", creditos: 4, periodo: 4, prerrequisitos: ["TDS-003", "TDS-004"], corequisitos: [] },
    { codigo: "CBG-215", nombre: "Metodologia de la Investigacion", creditos: 3, periodo: 4, prerrequisitos: ["CBG-210"], corequisitos: [] },
    { codigo: "TDS-102", nombre: "Base de Datos Avanzada", creditos: 4, periodo: 4, prerrequisitos: ["TDS-101", "TDS-002"], corequisitos: [] },
    { codigo: "TDS-006", nombre: "Programacion II", creditos: 4, periodo: 4, prerrequisitos: ["TDS-003", "TDS-004"], corequisitos: [] },
    { codigo: "TDS-201", nombre: "Inteligencia Artificial", creditos: 4, periodo: 4, prerrequisitos: ["TDS-003", "TDS-004", "CBG-210"], corequisitos: [] },
    { codigo: "ING-004", nombre: "Ingles Nivel 10-12", creditos: 0, periodo: 4, prerrequisitos: ["ING-003"], corequisitos: [] },

    { codigo: "TDS-301", nombre: "Auditoria Informatica", creditos: 4, periodo: 5, prerrequisitos: ["TDS-102", "TDS-006"], corequisitos: [] },
    { codigo: "TDS-007", nombre: "Programacion III", creditos: 4, periodo: 5, prerrequisitos: ["TDS-005", "TDS-006", "TDS-102"], corequisitos: [] },
    { codigo: "TDS-103", nombre: "Mineria de Datos e Inteligencia de Negocios", creditos: 4, periodo: 5, prerrequisitos: ["TDS-102", "TDS-006"], corequisitos: [] },
    { codigo: "TME-001", nombre: "Fundamentos de Electronica", creditos: 4, periodo: 5, prerrequisitos: ["MAT-001"], corequisitos: [] },
    { codigo: "TME-001-L", nombre: "Laboratorio Fundamentos de Electronica", creditos: 1, periodo: 5, prerrequisitos: ["MAT-001"], corequisitos: ["TME-001"] },
    { codigo: "TDS-008", nombre: "Programacion Web", creditos: 4, periodo: 5, prerrequisitos: ["TDS-102", "TDS-003"], corequisitos: [] },
    { codigo: "TDS-015", nombre: "Electiva 1", creditos: 3, periodo: 5, prerrequisitos: [], corequisitos: [], esElectiva: true, error_mensaje: "Debes completar todo el 2do cuatrimestre para desbloquear esta electiva" },

    { codigo: "TDS-009", nombre: "Programacion Paralela", creditos: 4, periodo: 6, prerrequisitos: ["TDS-102", "TDS-006"], corequisitos: [] },
    { codigo: "TDS-303", nombre: "Introduccion a la ingenieria de software", creditos: 4, periodo: 6, prerrequisitos: ["TDS-007", "TDS-103", "TDS-301"], corequisitos: [] },
    { codigo: "TDS-016", nombre: "Electiva 2", creditos: 3, periodo: 6, prerrequisitos: ["TDS-015"], corequisitos: [], esElectiva: true, error_mensaje: "Debes completar todo el 2do cuatrimestre para desbloquear esta electiva" },
    { codigo: "DEP-101", nombre: "Educacion Fisica", creditos: 0, periodo: 6, prerrequisitos: [], corequisitos: [] },
    { codigo: "ADM-110", nombre: "Desarrollo de Emprendedores", creditos: 3, periodo: 6, prerrequisitos: ["CBG-215"], corequisitos: [], error_mensaje: "Debes aprobar Metodologia de la Investigacion (CBG-215) primero" },
    { codigo: "ING-110", nombre: "Ingles Tecnico", creditos: 4, periodo: 6, prerrequisitos: ["ING-004"], corequisitos: [] },

    { codigo: "TDS-010", nombre: "Estructura de Datos", creditos: 4, periodo: 7, prerrequisitos: ["TDS-007"], corequisitos: [] },
    { codigo: "TDS-302", nombre: "Administracion de Proyectos de Software", creditos: 4, periodo: 7, prerrequisitos: ["TDS-007"], corequisitos: [] },
    { codigo: "TDS-011", nombre: "Introduccion al desarrollo de aplicaciones moviles", creditos: 4, periodo: 7, prerrequisitos: ["TDS-007"], corequisitos: [] },
    { codigo: "ADM-111", nombre: "Plan de Negocios", creditos: 3, periodo: 7, prerrequisitos: ["ADM-110"], corequisitos: [] },
    { codigo: "TDS-601", nombre: "Proyecto Final TDS", creditos: 3, periodo: 7, prerrequisitos: ["TDS-009", "TDS-303"], corequisitos: [] }
  ];

  const SEGUNDO_PERIODO_COMPLETO = ["HIS-102", "MAT-101", "TI-115", "ING-002", "TDS-002", "CBG-115", "TDS-101"];

  function buildPensumValidacion(materiasAprobadas) {
    const aprobadasSet = new Set(Array.isArray(materiasAprobadas) ? materiasAprobadas : []);

    return PENSUM_OFICIAL.map((m) => {
      const faltantesPrereq = m.prerrequisitos.filter((pre) => !aprobadasSet.has(pre));
      const faltantesElectiva = m.esElectiva ? SEGUNDO_PERIODO_COMPLETO.filter((pre) => !aprobadasSet.has(pre)) : [];
      const canBeSelected = faltantesPrereq.length === 0 && faltantesElectiva.length === 0;

      return {
        ...m,
        canBeSelected,
        bloqueada: !canBeSelected && !aprobadasSet.has(m.codigo),
        faltantesPrereq,
        faltantesReglaElectiva: faltantesElectiva,
        error_mensaje: canBeSelected
          ? ""
          : (m.error_mensaje || `Debes aprobar primero: ${faltantesPrereq.concat(faltantesElectiva).join(", ")}`)
      };
    });
  }

  const PENSUM_OFICIAL_UI = PENSUM_OFICIAL.map((m) => ({
    ...m,
    id: m.codigo,
    prereqs: [...m.prerrequisitos],
    coReqs: [...(m.corequisitos || [])],
    errorMensaje: m.error_mensaje || "",
    cero: m.creditos === 0
  }));

  window.PENSUM_VALIDACION_BASE = Object.freeze(PENSUM_OFICIAL);
  window.PENSUM_OFICIAL = Object.freeze(PENSUM_OFICIAL_UI);
  window.buildPensumValidacion = buildPensumValidacion;
})();
