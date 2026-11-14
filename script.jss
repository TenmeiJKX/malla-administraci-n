// Lista de cursos (todos inician como pendientes para que pongas tus notas)
const cursos = [
    // NIVEL 1
    { id: 1, nivel: 1, codigo: "ADMI5449", nombre: "Fundamentos de Gestión Empresarial", creditos: 4, req: "Ninguno" },
    { id: 2, nivel: 1, codigo: "EMPL5396", nombre: "Desarrollo de Habilidades Profesionales I", creditos: 3, req: "Ninguno" },
    { id: 3, nivel: 1, codigo: "INTE5493", nombre: "Negocios Internacionales", creditos: 4, req: "Ninguno" },
    { id: 4, nivel: 1, codigo: "MARK5473", nombre: "Introducción al Marketing", creditos: 3, req: "Ninguno" },
    { id: 5, nivel: 1, codigo: "MATE5487", nombre: "Matemática Aplicada a los Negocios", creditos: 3, req: "Ninguno" },
    { id: 6, nivel: 1, codigo: "SIST5530", nombre: "Software para los Negocios", creditos: 3, req: "Ninguno" },
    // NIVEL 2
    { id: 7, nivel: 2, codigo: "CONT5384", nombre: "Contabilidad General", creditos: 3, req: "Ninguno" },
    { id: 8, nivel: 2, codigo: "EFSR5419", nombre: "Experiencia Formativa en Situación Real de Trabajo", creditos: 1, req: "Ninguno" },
    { id: 9, nivel: 2, codigo: "EMPL8953", nombre: "Desarrollo Habilidades Profesionales II", creditos: 3, req: "Ninguno" },
    { id: 10, nivel: 2, codigo: "FINA5447", nombre: "Fundamentos de Finanzas", creditos: 3, req: "Software para los Negocios" },
    { id: 11, nivel: 2, codigo: "MARK5522", nombre: "Servicio al Cliente", creditos: 4, req: "Ninguno" },
    { id: 12, nivel: 2, codigo: "MATE5418", nombre: "Estadística", creditos: 3, req: "Matemática Aplicada" },
    { id: 13, nivel: 2, codigo: "RRHH5413", nombre: "Diseño Organizacional", creditos: 3, req: "Fundamentos de Gestión" },
    // NIVEL 3
    { id: 14, nivel: 3, codigo: "ADMI5470", nombre: "Gestión de Procesos", creditos: 3, req: "Fund. de Gestión Empresarial" },
    { id: 15, nivel: 3, codigo: "CONT5388", nombre: "Costos y Presupuestos", creditos: 3, req: "Contabilidad General" },
    { id: 16, nivel: 3, codigo: "ECON8964", nombre: "Economía Aplicada a los Negocios", creditos: 3, req: "Ninguno" },
    { id: 17, nivel: 3, codigo: "EFSR8969", nombre: "Experiencia Formativa en Situación Real de Trabajo", creditos: 1, req: "EFSR5419" },
    { id: 18, nivel: 3, codigo: "EMPL8954", nombre: "Desarrollo Habilidades Profesionales III", creditos: 3, req: "Ninguno" },
    { id: 19, nivel: 3, codigo: "FINA5488", nombre: "Matemática Financiera", creditos: 3, req: "Fundamentos de Finanzas" },
    { id: 20, nivel: 3, codigo: "RRHH8945", nombre: "Comportamiento Organizacional", creditos: 4, req: "Diseño Organizacional" },
    // NIVEL 4
    { id: 21, nivel: 4, codigo: "ADMI52049", nombre: "E-Business", creditos: 3, req: "Ninguno" },
    { id: 22, nivel: 4, codigo: "ADMI8936", nombre: "Administración de Operaciones", creditos: 3, req: "Gestión de Procesos" },
    { id: 23, nivel: 4, codigo: "CONT5387", nombre: "Costeo para la Toma de Decisiones", creditos: 3, req: "Costos y Presupuestos" },
    { id: 24, nivel: 4, codigo: "DERE8951", nombre: "Derecho Empresarial", creditos: 3, req: "Ninguno" },
    { id: 25, nivel: 4, codigo: "EFSR8970", nombre: "Experiencias Formativas en Situaciones Reales", creditos: 3, req: "EFSR8969" },
    { id: 26, nivel: 4, codigo: "EMPL8955", nombre: "Desarrollo Habilidades Profesionales IV", creditos: 3, req: "Ninguno" },
    { id: 27, nivel: 4, codigo: "MARK5475", nombre: "Investigación de Mercados", creditos: 3, req: "Ninguno" },
    // NIVEL 5
    { id: 28, nivel: 5, codigo: "ADMI8975", nombre: "Gestión de la Calidad", creditos: 2, req: "Ninguno" },
    { id: 29, nivel: 5, codigo: "EFSR8971", nombre: "Experiencia Formativa en Situación Real de Trabajo", creditos: 4, req: "EFSR8970" },
    { id: 30, nivel: 5, codigo: "EMPR5462", nombre: "Innovación Estratégica de Negocios", creditos: 3, req: "Ninguno" },
    { id: 31, nivel: 5, codigo: "FINA5357", nombre: "Administración Financiera", creditos: 3, req: "Matemática Financiera" },
    { id: 32, nivel: 5, codigo: "INTE5380", nombre: "Comercio Exterior", creditos: 2, req: "Ninguno" },
    { id: 33, nivel: 5, codigo: "LOGI5485", nombre: "Logística", creditos: 3, req: "Ninguno" },
    { id: 34, nivel: 5, codigo: "RRHH8937", nombre: "Administración del Recurso Humano", creditos: 3, req: "Ninguno" },
    // NIVEL 6
    { id: 35, nivel: 6, codigo: "ADMI5385", nombre: "Control de Gestión por Indicadores", creditos: 2, req: "Gestión de la Calidad" },
    { id: 36, nivel: 6, codigo: "ADMI5496", nombre: "Planeamiento Estratégico", creditos: 3, req: "Ninguno" },
    { id: 37, nivel: 6, codigo: "ADMI8985", nombre: "Lean Manufacturing", creditos: 2, req: "Ninguno" },
    { id: 38, nivel: 6, codigo: "EFSR8972", nombre: "Experiencia Formativa en Situación Real", creditos: 8, req: "EFSR8971" },
    { id: 39, nivel: 6, codigo: "EMPR5456", nombre: "Implementación de Nuevos Negocios", creditos: 4, req: "Innovación Estratégica" },
    { id: 40, nivel: 6, codigo: "MARK5494", nombre: "Plan de Marketing", creditos: 2, req: "Ninguno" },
    { id: 41, nivel: 6, codigo: "SPTI5443", nombre: "Gestión de Proyectos", creditos: 3, req: "Administración Financiera" }
];

const container = document.getElementById('malla-container');
const modal = document.getElementById('modal');
let cursoSeleccionadoId = null;

// Función para obtener las notas guardadas en el navegador
function obtenerNotasGuardadas() {
    const notas = localStorage.getItem('notasMalla');
    return notas ? JSON.parse(notas) : {};
}

// Función para renderizar la malla en pantalla
function renderizarMalla() {
    container.innerHTML = ''; // Limpiar contenedor
    const notasGuardadas = obtenerNotasGuardadas();
    const niveles = [1, 2, 3, 4, 5, 6];

    niveles.forEach(nivel => {
        const semestreDiv = document.createElement('div');
        semestreDiv.classList.add('semestre');
        
        const titulo = document.createElement('h3');
        titulo.textContent = `Nivel ${nivel}`;
        semestreDiv.appendChild(titulo);

        const cursosFiltrados = cursos.filter(c => c.nivel === nivel);
        
        cursosFiltrados.forEach(curso => {
            const cursoDiv = document.createElement('div');
            
            // Determinar el color según la nota
            const nota = notasGuardadas[curso.id];
            let estadoClass = 'pendiente';
            if (nota !== undefined && nota !== '') {
                estadoClass = nota >= 13 ? 'aprobado' : 'reprobado';
            }

            cursoDiv.classList.add('curso', estadoClass);
            
            // Mostrar nombre y nota en el recuadro
            cursoDiv.innerHTML = `${curso.nombre} ${nota ? `<br><strong>Nota: ${nota}</strong>` : ''}`;
            
            // Evento clic para abrir modal
            cursoDiv.addEventListener('click', () => {
                cursoSeleccionadoId = curso.id;
                document.getElementById('modal-title').textContent = curso.nombre;
                document.getElementById('modal-code').textContent = curso.codigo;
                document.getElementById('modal-credits').textContent = curso.creditos;
                document.getElementById('modal-reqs').textContent = curso.req;
                
                // Cargar la nota actual en el input
                document.getElementById('input-nota').value = notasGuardadas[curso.id] || '';
                
                modal.style.display = 'block';
            });

            semestreDiv.appendChild(cursoDiv);
        });

        container.appendChild(semestreDiv);
    });
}

// Evento para guardar la nota
document.getElementById('btn-guardar-nota').addEventListener('click', () => {
    const inputNota = document.getElementById('input-nota').value;
    const notasGuardadas = obtenerNotasGuardadas();
    
    if (inputNota === '') {
        delete notasGuardadas[cursoSeleccionadoId]; // Si está vacío, borra la nota
    } else {
        notasGuardadas[cursoSeleccionadoId] = parseInt(inputNota); // Guarda la nota
    }
    
    localStorage.setItem('notasMalla', JSON.stringify(notasGuardadas)); // Guardar en navegador
    modal.style.display = 'none';
    renderizarMalla(); // Volver a dibujar la malla con el nuevo color
});

// Cerrar modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Iniciar la malla al cargar la página
renderizarMalla();
