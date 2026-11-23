// ==============================
// CONSTANTES DE COMBATE
// ==============================

const MAX_ATACANTES = 3;      // atacantes que se pueden elegir por turno
const DANIO_MINIMO = 3;       // un golpe nunca hace menos que esto (evita bloqueos totales)


// ==============================
// DATOS DE LAS FACCIONES
// (las estadísticas del campeón salen de la lista de ejércitos)
// ==============================

const facciones = [
    {
        id: "ultramarines",
        nombre: "Ultramarines",
        alianza: "Imperio",
        campeon: "Marneus Calgar",
        cargo: "Maestro de Capítulo",
        imagen: "marneus-calgar.jpg"
    },
    {
        id: "blood-angels",
        nombre: "Blood Angels",
        alianza: "Imperio",
        campeon: "Commander Dante",
        cargo: "Señor de los Ángeles",
        imagen: "dante.jpg"
    },
    {
        id: "black-templars",
        nombre: "Black Templars",
        alianza: "Imperio",
        campeon: "High Marshal Helbrecht",
        cargo: "Alto Mariscal",
        imagen: "helbrecht.jpg"
    },
    {
        id: "world-eaters",
        nombre: "World Eaters",
        alianza: "Caos",
        campeon: "Khârn el Traidor",
        cargo: "Campeón de Khorne",
        imagen: "kharn.jpg"
    },
    {
        id: "death-guard",
        nombre: "Death Guard",
        alianza: "Caos",
        campeon: "Typhus",
        cargo: "Señor de la Colmena",
        imagen: "typhus.jpg"
    },
    {
        id: "thousand-sons",
        nombre: "Thousand Sons",
        alianza: "Caos",
        campeon: "Ahriman",
        cargo: "Hechicero Exaltado",
        imagen: "ahriman.jpg"
    }
];


// ==============================
// EJÉRCITOS DE CARD FORGE
// CADA FACCIÓN TIENE 6 PERSONAJES
//
// HABILIDAD (se usa en lugar del ataque):
//   curar    -> cura "valor" a un aliado           (1 uso)
//   area     -> golpea a todos los enemigos        (1 uso)  mult = % del daño
//   doble    -> golpea dos veces al mismo enemigo  (1 uso)
//   perforar -> golpe que ignora toda la defensa   (1 uso)
//   sellar   -> impide actuar a un enemigo "duracion" turnos
//               (enfriamiento propio; se rompe si el sellador cae)
//
// PASIVA (siempre activa):
//   reflejo    -> devuelve "valor"% del daño recibido
//   regen      -> recupera "valor" de vida al inicio de su turno
//   curaBaja   -> con cada baja enemiga, cura "valor" a un aliado al azar
//   furia      -> +"valor" de daño con la mitad de vida o menos
//   perforante -> sus golpes ignoran "valor" de defensa
// ==============================

const ejercitos = {

    // EQUILIBRADOS: estadísticas medias y un poco de todo
    "ultramarines": [
        { nombre: "Marneus Calgar", vida: 120, danio: 32, defensa: 20, campeon: true,
          habilidad: { tipo: "doble", nombre: "Puños de Ultramar" } },
        { nombre: "Capitán de los Ultramarines", vida: 100, danio: 30, defensa: 15,
            imagen: "captain-ultramarine.jpg",
          pasiva: { tipo: "perforante", nombre: "Pistola de Plasma", valor: 5 } },
        { nombre: "Apotecario Ultramarine", vida: 85, danio: 22, defensa: 10, imagen: "apotecario-ultramarine.jpg",
          habilidad: { tipo: "curar", nombre: "Gen-semilla Salvada", valor: 40 },
          pasiva: { tipo: "curaBaja", nombre: "Juramento del Apotecario", valor: 10 } },
        { nombre: "Bibliotecario Ultramarine", vida: 80, danio: 30, defensa: 8, imagen: "bibliotecario-ultramarine.jpg",
          habilidad: { tipo: "sellar", nombre: "Muro Psíquico", duracion: 2, enfriamiento: 3 } },
        { nombre: "Veterano Bladeguard", vida: 95, danio: 30, defensa: 16, imagen: "veterano-bladeguard.jpg",
          pasiva: { tipo: "regen", nombre: "Disciplina del Códex", valor: 5 } },
        { nombre: "Veterano Terminator", vida: 110, danio: 26, defensa: 22, imagen: "veterano-terminator.jpg" }
    ],

    // ASALTO RÁPIDO, FURIA Y CURACIÓN
    "blood-angels": [
        { nombre: "Commander Dante", vida: 105, danio: 38, defensa: 14, campeon: true,
          pasiva: { tipo: "furia", nombre: "Ira del Ángel", valor: 8 } },
        { nombre: "Guardia Sanguinaria", vida: 95, danio: 34, defensa: 16, imagen: "guardia-sanguinaria.jpg",
          pasiva: { tipo: "perforante", nombre: "Lanza Eviscerante", valor: 4 } },
        { nombre: "Capitán de Asalto", vida: 90, danio: 36, defensa: 12, imagen: "capitan-de-asalto.jpg",
          habilidad: { tipo: "doble", nombre: "Descenso Furioso" } },
        { nombre: "Marine de la Compañía de la Muerte", vida: 100, danio: 40, defensa: 8, imagen: "marine-de-la-compania-de-la-muerte.jpg",
          pasiva: { tipo: "furia", nombre: "Rabia Negra", valor: 10 } },
        { nombre: "Apotecario Sanguinario", vida: 85, danio: 24, defensa: 10, imagen: "apotecario-sanguinario.jpg",
          habilidad: { tipo: "curar", nombre: "Sangre del Ángel", valor: 45 },
          pasiva: { tipo: "curaBaja", nombre: "Sed Redentora", valor: 12 } },
        { nombre: "Bibliotecario Sanguinario", vida: 80, danio: 30, defensa: 8, imagen: "bibliotecario-sanguinario.jpg",
          habilidad: { tipo: "sellar", nombre: "Visión de la Muerte", duracion: 2, enfriamiento: 3 } }
    ],

    // FANATISMO Y FE
    "black-templars": [
        { nombre: "High Marshal Helbrecht", vida: 115, danio: 32, defensa: 18, campeon: true,
          pasiva: { tipo: "furia", nombre: "Fervor de la Cruzada", valor: 6 } },
        { nombre: "Castellano Templario", vida: 100, danio: 30, defensa: 17, imagen: "castellano-templario.jpg",
          pasiva: { tipo: "reflejo", nombre: "Fe Inquebrantable", valor: 10 } },
        { nombre: "Hermano de la Espada", vida: 95, danio: 32, defensa: 14, imagen: "hermano-de-la-espada.jpg",
          habilidad: { tipo: "doble", nombre: "Tajo del Cruzado" } },
        { nombre: "Capellán Templario", vida: 90, danio: 26, defensa: 14, imagen: "capellan-templario.jpg",
          habilidad: { tipo: "sellar", nombre: "Letanía de Anatema", duracion: 2, enfriamiento: 3 } },
        { nombre: "Apotecario Templario", vida: 85, danio: 22, defensa: 12, imagen: "apotecario-templario.jpg",
          habilidad: { tipo: "curar", nombre: "Bendición del Emperador", valor: 40 },
          pasiva: { tipo: "curaBaja", nombre: "Gloria del Cruzado", valor: 8 } },
        { nombre: "Iniciado Templario", vida: 80, danio: 24, defensa: 10, imagen: "iniciado-templario.jpg",
          pasiva: { tipo: "regen", nombre: "Voto de Resistencia", valor: 4 } }
    ],

    // MUCHO DAÑO, DOBLE GOLPE Y ATRAVESAR ARMADURA
    "world-eaters": [
        { nombre: "Khârn el Traidor", vida: 100, danio: 52, defensa: 6, campeon: true,
          habilidad: { tipo: "doble", nombre: "Matanza Sin Fin" },
          pasiva: { tipo: "furia", nombre: "Ira de Khorne", valor: 10 } },
        { nombre: "Maestro de Ejecuciones", vida: 95, danio: 44, defensa: 10, imagen: "maestro-de-ejecuciones.jpg",
          habilidad: { tipo: "perforar", nombre: "Hacha del Verdugo" } },
        { nombre: "Guerrero Eightbound", vida: 105, danio: 42, defensa: 12, imagen: "guerrero-eightbound.jpg",
          pasiva: { tipo: "perforante", nombre: "Garras de Poder", valor: 8 } },
        { nombre: "Berserker de Khorne", vida: 90, danio: 40, defensa: 6, imagen: "berserker-de-khorne.jpg",
          habilidad: { tipo: "doble", nombre: "Frenesí Sangriento" } },
        { nombre: "Maestro de los Clavos", vida: 85, danio: 34, defensa: 8, imagen: "maestro-de-los-clavos.jpg",
          habilidad: { tipo: "sellar", nombre: "Clavos del Carnicero", duracion: 2, enfriamiento: 3 } },
        { nombre: "Apotecario Carnicero", vida: 80, danio: 30, defensa: 6, imagen: "apotecario-carnicero.jpg",
          habilidad: { tipo: "curar", nombre: "Cirugía de Campo", valor: 35 },
          pasiva: { tipo: "curaBaja", nombre: "Trofeo de Carne", valor: 8 } }
    ],

    // LOS MÁS RESISTENTES, CENTRADOS EN REFLEJAR DAÑO
    "death-guard": [
        { nombre: "Typhus", vida: 165, danio: 28, defensa: 24, campeon: true,
          pasiva: { tipo: "reflejo", nombre: "Aura de Pestilencia", valor: 25 } },
        { nombre: "Señor del Contagio", vida: 150, danio: 28, defensa: 26, imagen: "senor-del-contagio.jpg",
          pasiva: { tipo: "reflejo", nombre: "Armadura Corrosiva", valor: 20 } },
        { nombre: "Campeón de la Plaga", vida: 135, danio: 26, defensa: 22, imagen: "campeon-de-la-plaga.jpg",
          pasiva: { tipo: "regen", nombre: "Don de Nurgle", valor: 6 } },
        { nombre: "Marine de la Plaga", vida: 130, danio: 24, defensa: 20, imagen: "marine-de-la-plaga.jpg",
          pasiva: { tipo: "reflejo", nombre: "Carne Pútrida", valor: 15 } },
        { nombre: "Hechicero de la Plaga", vida: 100, danio: 30, defensa: 10, imagen: "hechicero-de-la-plaga.jpg",
          habilidad: { tipo: "sellar", nombre: "Fiebre Paralizante", duracion: 2, enfriamiento: 3 } },
        { nombre: "Apotecario de Nurgle", vida: 120, danio: 18, defensa: 16, imagen: "apotecario-de-nurgle.jpg",
          habilidad: { tipo: "curar", nombre: "Ungüento Pestilente", valor: 45 },
          pasiva: { tipo: "curaBaja", nombre: "Cosecha de Plagas", valor: 10 } }
    ],

    // HABILIDADES DE ÁREA Y SELLOS; FRÁGILES
    "thousand-sons": [
        { nombre: "Ahriman", vida: 90, danio: 38, defensa: 8, campeon: true,
          habilidad: { tipo: "area", nombre: "Tormenta Disforme", mult: 0.8 } },
        { nombre: "Hechicero Exaltado", vida: 85, danio: 34, defensa: 6, imagen: "hechicero-exaltado.jpg",
          habilidad: { tipo: "sellar", nombre: "Cadenas de Tzeentch", duracion: 2, enfriamiento: 3 } },
        { nombre: "Maestro Infernal", vida: 95, danio: 32, defensa: 10, imagen: "maestro-infernal.jpg",
          habilidad: { tipo: "area", nombre: "Lluvia de Fuego Warp", mult: 0.7 } },
        { nombre: "Hechicero Terminator", vida: 105, danio: 32, defensa: 18, imagen: "hechicero-terminator.jpg",
          habilidad: { tipo: "sellar", nombre: "Sello de Rubrica", duracion: 2, enfriamiento: 3 } },
        { nombre: "Hechicero Aspirante", vida: 75, danio: 26, defensa: 5, imagen: "hechicero-aspirante.jpg",
          habilidad: { tipo: "curar", nombre: "Cambio de Destino", valor: 35 },
          pasiva: { tipo: "curaBaja", nombre: "Tejido del Cambio", valor: 8 } },
        { nombre: "Marine Rubrica", vida: 100, danio: 24, defensa: 16, imagen: "marine-rubrica.jpg",
          pasiva: { tipo: "regen", nombre: "Alma de Polvo", valor: 4 } }
    ]

};

// ==============================
// DESCRIPCIONES DE HABILIDADES Y PASIVAS
// ==============================

function describirHabilidad(h) {
    switch (h.tipo) {
        case "curar":
            return `${h.nombre}: cura ${h.valor} de vida a un aliado (1 solo uso).`;
        case "sellar":
            return `${h.nombre}: sella a un enemigo durante ${h.duracion} turnos suyos (enfriamiento ${h.enfriamiento}). El sello se rompe si el sellador cae.`;
        case "area":
            return `${h.nombre}: golpea a todos los enemigos con el ${Math.round(h.mult * 100)}% de su daño (1 solo uso).`;
        case "doble":
            return `${h.nombre}: golpea dos veces al mismo enemigo (1 solo uso).`;
        case "perforar":
            return `${h.nombre}: golpe que ignora toda la defensa (1 solo uso).`;
        default:
            return h.nombre;
    }
}

function describirPasiva(p) {
    switch (p.tipo) {
        case "reflejo":
            return `${p.nombre}: devuelve el ${p.valor}% del daño que recibe al atacante.`;
        case "regen":
            return `${p.nombre}: recupera ${p.valor} de vida al inicio de tu turno.`;
        case "curaBaja":
            return `${p.nombre}: con cada baja enemiga cura ${p.valor} a un aliado al azar.`;
        case "furia":
            return `${p.nombre}: +${p.valor} de daño con la mitad de vida o menos.`;
        case "perforante":
            return `${p.nombre}: sus golpes ignoran ${p.valor} de defensa.`;
        default:
            return p.nombre;
    }
}

function etiquetaHabilidad(personaje) {
    const h = personaje.habilidad;
    const iconos = { curar: "💚", sellar: "🔒", area: "💥", doble: "⚔️", perforar: "🗡️" };
    const nombres = { curar: "Curar", sellar: "Sellar", area: "Área", doble: "Doble", perforar: "Perforar" };

    let estado = "";
    if (h.tipo === "sellar") {
        if (personaje.enfriamiento > 0) estado = ` (CD ${personaje.enfriamiento})`;
    } else if (personaje.usada) {
        estado = " (usada)";
    }

    return `${iconos[h.tipo]} ${nombres[h.tipo]}${estado}`;
}

function etiquetaPasiva(p) {
    switch (p.tipo) {
        case "reflejo": return `🔰 Reflejo ${p.valor}%`;
        case "regen": return `🔰 Regen +${p.valor}`;
        case "curaBaja": return `🔰 Cura por baja`;
        case "furia": return `🔰 Furia +${p.valor}`;
        case "perforante": return `🔰 Perfora ${p.valor}`;
        default: return `🔰 ${p.nombre}`;
    }
}


// ==============================
// ELEMENTOS HTML
// ==============================

const startGameButton = document.getElementById("startGameButton");
const factionSelection = document.getElementById("factionSelection");
const gameIntro = document.querySelector(".game-intro");


// ==============================
// ESTADO DE LA PARTIDA
// ==============================

let partida = {
    jugador1: null,
    jugador2: null,
    turnoActual: 1,
    fase: "seleccion",     // "seleccion" (elegir atacantes) o "ataque" (elegir acción y objetivo)
    modo: "normal",        // "normal" (ataque básico) o "habilidad"
    seleccionados: [],     // índices de mis atacantes elegidos
    cola: [],              // atacantes pendientes (referencias a los personajes)
    mensajeCombate: ""
};

function jugadorDelTurno() {
    return partida.turnoActual === 1 ? partida.jugador1 : partida.jugador2;
}

function rivalDelTurno() {
    return partida.turnoActual === 1 ? partida.jugador2 : partida.jugador1;
}

function agregarMensaje(texto) {
    if (!texto) return;
    partida.mensajeCombate += (partida.mensajeCombate ? "<br>" : "") + texto;
}


// ==============================
// MOSTRAR SELECCIÓN DE FACCIONES
// ==============================

function mostrarSeleccion() {

    gameIntro.style.display = "none";

    factionSelection.innerHTML = `
        <div class="selection-container">

            <h2>ELIGE TUS FACCIONES</h2>

            <p class="selection-description">
                Cada jugador puede elegir libremente su facción.
            </p>

            <div class="players-selection">

                <div class="player-selection">
                    <h3>JUGADOR 1</h3>

                    <label for="factionPlayer1">
                        Selecciona tu facción:
                    </label>

                    <select id="factionPlayer1">
                        <option value="">-- Elegir facción --</option>
                    </select>

                    <div id="championPlayer1" class="champion-preview">
                        <p>Selecciona una facción para conocer a su campeón.</p>
                    </div>
                </div>

                <div class="player-selection">
                    <h3>JUGADOR 2</h3>

                    <label for="factionPlayer2">
                        Selecciona tu facción:
                    </label>

                    <select id="factionPlayer2">
                        <option value="">-- Elegir facción --</option>
                    </select>

                    <div id="championPlayer2" class="champion-preview">
                        <p>Selecciona una facción para conocer a su campeón.</p>
                    </div>
                </div>

            </div>

            <p id="selectionMessage"></p>

            <button id="confirmFactionsButton">
                CONFIRMAR FACCIONES
            </button>

        </div>
    `;

    llenarOpciones();

    mostrarCampeon("factionPlayer1", "championPlayer1");
    mostrarCampeon("factionPlayer2", "championPlayer2");

    configurarConfirmacion();
}


// ==============================
// CARGAR OPCIONES
// ==============================

function llenarOpciones() {

    const player1 = document.getElementById("factionPlayer1");
    const player2 = document.getElementById("factionPlayer2");

    facciones.forEach(faccion => {

        const opcion1 = document.createElement("option");
        opcion1.value = faccion.id;
        opcion1.textContent = `${faccion.nombre} (${faccion.alianza})`;

        const opcion2 = document.createElement("option");
        opcion2.value = faccion.id;
        opcion2.textContent = `${faccion.nombre} (${faccion.alianza})`;

        player1.appendChild(opcion1);
        player2.appendChild(opcion2);

    });
}


// ==============================
// MOSTRAR CAMPEONES
// ==============================

function mostrarCampeon(selectId, previewId) {

    const selector = document.getElementById(selectId);
    const preview = document.getElementById(previewId);

    selector.addEventListener("change", () => {

        const faccion = facciones.find(
            f => f.id === selector.value
        );

        if (!faccion) {
            preview.innerHTML = `
                <p>Selecciona una facción para conocer a su campeón.</p>
            `;
            return;
        }

        const campeon = ejercitos[faccion.id].find(p => p.campeon);

        preview.innerHTML = `
            <img
                src="../assets/images/card-forge/${faccion.imagen}"
                alt="${faccion.campeon}"
                onerror="this.style.display='none'"
            >

            <h4>${faccion.campeon}</h4>

            <p>${faccion.cargo}</p>

            <div class="champion-stats">
                <p>❤️ VIDA: ${campeon.vida}</p>
                <p>🛡️ DEFENSA: ${campeon.defensa}</p>
                <p>⚔️ DAÑO: ${campeon.danio}</p>
            </div>

            ${campeon.habilidad
                ? `<p class="champion-skill">✨ ${describirHabilidad(campeon.habilidad)}</p>`
                : ""}

            ${campeon.pasiva
                ? `<p class="champion-skill">🔰 ${describirPasiva(campeon.pasiva)}</p>`
                : ""}
        `;
    });
}


// ==============================
// CONFIRMAR SELECCIÓN
// ==============================

function configurarConfirmacion() {

    const confirmButton = document.getElementById("confirmFactionsButton");

    confirmButton.addEventListener("click", () => {

        const player1 = document.getElementById("factionPlayer1").value;
        const player2 = document.getElementById("factionPlayer2").value;
        const message = document.getElementById("selectionMessage");

        if (!player1 || !player2) {
            message.textContent = "Ambos jugadores deben elegir una facción.";
            message.className = "selection-error";
            return;
        }

        const faccion1 = facciones.find(f => f.id === player1);
        const faccion2 = facciones.find(f => f.id === player2);

        partida.jugador1 = {
            faccion: faccion1,
            ejercito: repartirPersonajes(faccion1)
        };

        partida.jugador2 = {
            faccion: faccion2,
            ejercito: repartirPersonajes(faccion2)
        };

        message.textContent = "¡Los ejércitos están preparados!";
        message.className = "selection-success";

        mostrarPreparacion(1);
    });
}


// ==============================
// REPARTIR PERSONAJES AL AZAR
// ==============================

function repartirPersonajes(faccion) {

    // Clonamos cada personaje para que no se compartan entre jugadores
    // (importante si ambos eligen la misma facción)
    const personajes = ejercitos[faccion.id].map(p => ({ ...p }));

    // Mezclar los seis personajes
    for (let i = personajes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [personajes[i], personajes[j]] = [personajes[j], personajes[i]];
    }

    // Preparar las estadísticas de combate
    personajes.forEach(personaje => {
        personaje.vidaMaxima = personaje.vida;
        personaje.vidaActual = personaje.vida;
        personaje.derrotado = false;
        personaje.usada = false;        // habilidad de un solo uso ya gastada
        personaje.enfriamiento = 0;     // turnos que faltan para volver a sellar
        personaje.sellado = null;       // { turnos, por } si está sellado
    });

    return {
        iniciales: personajes.slice(0, 3),
        reserva: personajes.slice(3, 6)
    };
}


// ==============================
// PREPARACIÓN PRIVADA DE CADA JUGADOR
// ==============================

function mostrarPreparacion(numeroJugador) {

    const jugador = numeroJugador === 1
        ? partida.jugador1
        : partida.jugador2;

    const battleField = document.getElementById("battleField");

    // Ocultar la selección de facciones
    factionSelection.style.display = "none";

    battleField.innerHTML = `
        <div class="private-preparation">

            <h2>PREPARACIÓN DEL JUGADOR ${numeroJugador}</h2>

            <p>
                Facción: ${jugador.faccion.nombre}
            </p>

            <h3>TUS PERSONAJES INICIALES</h3>

            <div class="character-list">
                ${crearTarjetas(
                    jugador.ejercito.iniciales,
                    jugador.faccion
                )}
            </div>

            <h3>TU RESERVA</h3>

            <div class="character-list">
                ${crearTarjetas(
                    jugador.ejercito.reserva,
                    jugador.faccion
                )}
            </div>

            <p class="private-warning">
                Esta información es privada.
                No permitas que el otro jugador vea tus cartas.
            </p>

            <button id="readyPlayerButton">
                ${numeroJugador === 1
                    ? "LISTO - PASAR AL JUGADOR 2"
                    : "LISTO - COMENZAR PARTIDA"
                }
            </button>

        </div>
    `;

    document.getElementById("readyPlayerButton")
        .addEventListener("click", () => {

            if (numeroJugador === 1) {
                mostrarCambioJugador();
            } else {
                iniciarCampoBatalla();
            }

        });

    battleField.scrollIntoView({ behavior: "smooth" });
}


// ==============================
// PANTALLA PARA PASAR EL COMPUTADOR
// ==============================

function mostrarCambioJugador() {

    const battleField = document.getElementById("battleField");

    battleField.innerHTML = `
        <div class="handoff-screen">

            <h2>¡PREPARACIÓN COMPLETADA!</h2>

            <p>¿COMENZAR TURNO DEL JUGADOR 2?</p>

            <p>
                Pasa el computador al siguiente jugador.
                La información del Jugador 1 ya está oculta.
            </p>

            <button id="nextPlayerButton">
                LISTO
            </button>

        </div>
    `;

    document.getElementById("nextPlayerButton")
        .addEventListener("click", () => {
            mostrarPreparacion(2);
        });
}


// ==============================
// INICIO DEL CAMPO DE BATALLA
// ==============================

function iniciarCampoBatalla() {
    partida.turnoActual = 1;
    reiniciarTurno();
    partida.mensajeCombate = "";
    mostrarCampoBatalla();
    document.getElementById("battleField").scrollIntoView({ behavior: "smooth" });
}

function reiniciarTurno() {
    partida.fase = "seleccion";
    partida.modo = "normal";
    partida.seleccionados = [];
    partida.cola = [];
}


// ==============================
// MOSTRAR CAMPO DE BATALLA
// ==============================

function habilidadDisponible(personaje) {

    const h = personaje.habilidad;

    if (!h || personaje.sellado) return false;

    if (h.tipo === "sellar") return personaje.enfriamiento === 0;

    return !personaje.usada;
}

function textoInstruccionHabilidad(atacante) {

    const h = atacante.habilidad;

    switch (h.tipo) {
        case "curar":
            return `${atacante.nombre} usa ${h.nombre}: elige un aliado para curar ${h.valor} de vida.`;
        case "sellar":
            return `${atacante.nombre} usa ${h.nombre}: elige un enemigo para sellarlo ${h.duracion} turnos.`;
        case "area":
            return `${atacante.nombre} usa ${h.nombre}: golpeará a todos los enemigos. Pulsa LANZAR para confirmar.`;
        case "doble":
            return `${atacante.nombre} usa ${h.nombre}: elige un enemigo, será golpeado dos veces.`;
        case "perforar":
            return `${atacante.nombre} usa ${h.nombre}: elige un enemigo, su defensa será ignorada.`;
        default:
            return `${atacante.nombre} usa ${h.nombre}.`;
    }
}

function mostrarCampoBatalla() {

    const battleField = document.getElementById("battleField");

    const enSeleccion = partida.fase === "seleccion";

    const numActual = partida.turnoActual;
    const numEnemigo = numActual === 1 ? 2 : 1;

    const jugadorActual = jugadorDelTurno();
    const enemigo = rivalDelTurno();

    const atacante = enSeleccion ? null : partida.cola[0];
    const indiceAtacante = atacante
        ? jugadorActual.ejercito.iniciales.indexOf(atacante)
        : null;

    const modoHabilidad = !enSeleccion && partida.modo === "habilidad";
    const tipoHabilidad = modoHabilidad ? atacante.habilidad.tipo : null;

    // Qué cartas se pueden pulsar según la fase
    let modoEnemigos = "";
    let modoPropios = "";

    if (enSeleccion) {
        modoPropios = "seleccion";
    } else if (!modoHabilidad) {
        modoEnemigos = "objetivo-enemigo";
    } else if (tipoHabilidad === "curar") {
        modoPropios = "objetivo-aliado";
    } else if (tipoHabilidad !== "area") {
        modoEnemigos = "objetivo-enemigo";
    }

    // Instrucción
    let instruccion;
    if (enSeleccion) {
        const sellados = jugadorActual.ejercito.iniciales.every(p => p.sellado);
        instruccion = sellados
            ? "Todos tus personajes están sellados. Debes pasar el turno."
            : `Elige de 1 a ${MAX_ATACANTES} de tus personajes para atacar.`;
    } else if (modoHabilidad) {
        instruccion = textoInstruccionHabilidad(atacante);
    } else {
        instruccion = `${atacante.nombre} ataca: elige un enemigo como objetivo o usa su habilidad.`;
    }

    // Botones
    let botones = "";

    if (enSeleccion) {
        botones += `
            <button id="confirmAttackersButton"
                ${partida.seleccionados.length === 0 ? "disabled" : ""}>
                CONFIRMAR ATACANTES (${partida.seleccionados.length}/${MAX_ATACANTES})
            </button>
            <button id="endTurnButton">PASAR TURNO</button>
        `;
    } else {
        botones += `
            <button id="normalAttackButton"
                class="${!modoHabilidad ? "active" : ""}">
                ATAQUE NORMAL
            </button>
        `;

        if (habilidadDisponible(atacante)) {
            botones += `
                <button id="abilityButton"
                    class="${modoHabilidad ? "active" : ""}"
                    title="${describirHabilidad(atacante.habilidad)}">
                    ✨ ${atacante.habilidad.nombre.toUpperCase()}
                </button>
            `;
        }

        if (modoHabilidad && tipoHabilidad === "area") {
            botones += `<button id="confirmAreaButton">LANZAR HABILIDAD</button>`;
        }
    }

    botones += `<button id="surrenderButton">RENDIRSE</button>`;

    // Enemigo ARRIBA, jugador del turno ABAJO (cara a cara)
    battleField.innerHTML = `
        <div class="battle-screen">

            <div class="turn-indicator">
                TURNO DEL JUGADOR ${numActual} · ${jugadorActual.faccion.nombre}
            </div>

            <div class="battle-side enemy-side">
                <div class="side-header">
                    <span>JUGADOR ${numEnemigo} · ${enemigo.faccion.nombre}</span>
                    <span class="reserve-counter">
                        RESERVA: ${enemigo.ejercito.reserva.length}
                    </span>
                </div>
                <div class="character-list battle-row">
                    ${crearTarjetas(
                        enemigo.ejercito.iniciales,
                        enemigo.faccion,
                        { modo: modoEnemigos }
                    )}
                </div>
            </div>

            <div class="battle-center">

                <p class="battle-instruction">${instruccion}</p>

                ${partida.mensajeCombate
                    ? `<p class="combat-message">${partida.mensajeCombate}</p>`
                    : ""}

                <div class="battle-actions">
                    ${botones}
                </div>

            </div>

            <div class="battle-side player-side">
                <div class="character-list battle-row">
                    ${crearTarjetas(
                        jugadorActual.ejercito.iniciales,
                        jugadorActual.faccion,
                        {
                            modo: modoPropios,
                            seleccionados: partida.seleccionados,
                            activo: indiceAtacante
                        }
                    )}
                </div>
                <div class="side-header">
                    <span>JUGADOR ${numActual} · ${jugadorActual.faccion.nombre}</span>
                    <span class="reserve-counter">
                        RESERVA: ${jugadorActual.ejercito.reserva.length}
                    </span>
                </div>
            </div>

        </div>
    `;

    // Fase 1: seleccionar atacantes propios
    battleField.querySelectorAll(".character-card.selectable").forEach(carta => {
        carta.addEventListener("click", () => {
            alternarAtacante(Number(carta.dataset.index));
        });
    });

    // Fase 2: seleccionar objetivo enemigo o aliado
    battleField.querySelectorAll(".character-card.targetable, .character-card.ally-targetable").forEach(carta => {
        carta.addEventListener("click", () => {
            realizarAccion(Number(carta.dataset.index));
        });
    });

    document.getElementById("surrenderButton")
        .addEventListener("click", rendirse);

    if (enSeleccion) {
        document.getElementById("confirmAttackersButton")
            .addEventListener("click", confirmarAtacantes);

        document.getElementById("endTurnButton")
            .addEventListener("click", () => {
                partida.mensajeCombate = "El jugador pasó su turno.";
                finalizarTurno();
            });
    } else {
        document.getElementById("normalAttackButton")
            .addEventListener("click", () => {
                partida.modo = "normal";
                mostrarCampoBatalla();
            });

        const botonHabilidad = document.getElementById("abilityButton");
        if (botonHabilidad) {
            botonHabilidad.addEventListener("click", () => {
                partida.modo = modoHabilidad ? "normal" : "habilidad";
                mostrarCampoBatalla();
            });
        }

        const botonArea = document.getElementById("confirmAreaButton");
        if (botonArea) {
            botonArea.addEventListener("click", () => realizarAccion(null));
        }
    }

    // Sin scrollIntoView aquí: así la pantalla no salta en cada clic
}


// ==============================
// SELECCIÓN DE ATACANTES (1 a 3)
// ==============================

function alternarAtacante(index) {

    const personaje = jugadorDelTurno().ejercito.iniciales[index];

    if (!personaje || personaje.sellado) return;

    const pos = partida.seleccionados.indexOf(index);

    if (pos !== -1) {
        partida.seleccionados.splice(pos, 1);              // deseleccionar
    } else if (partida.seleccionados.length < MAX_ATACANTES) {
        partida.seleccionados.push(index);                 // seleccionar
    }

    mostrarCampoBatalla();
}

function confirmarAtacantes() {

    if (partida.seleccionados.length === 0) return;

    const iniciales = jugadorDelTurno().ejercito.iniciales;

    // La cola guarda a los personajes mismos, no su posición,
    // así sigue siendo correcta aunque alguien caiga a mitad de turno.
    partida.cola = partida.seleccionados
        .map(i => iniciales[i])
        .filter(Boolean);

    partida.fase = "ataque";
    partida.modo = "normal";
    partida.mensajeCombate = "";

    mostrarCampoBatalla();
}

function limpiarCola() {

    const iniciales = jugadorDelTurno().ejercito.iniciales;

    partida.cola = partida.cola.filter(p => iniciales.includes(p));
}


// ==============================
// COMBATE
// ==============================

function curar(personaje, cantidad) {

    const antes = personaje.vidaActual;

    personaje.vidaActual = Math.min(
        personaje.vidaMaxima,
        personaje.vidaActual + cantidad
    );

    return personaje.vidaActual - antes;
}

// Un golpe: aplica furia, perforante y reflejo.
function golpear(atacante, defensor, opciones = {}) {

    const { mult = 1, ignorarDefensa = false } = opciones;

    const pasivaAtacante = atacante.pasiva;

    let base = atacante.danio * mult;

    if (pasivaAtacante && pasivaAtacante.tipo === "furia"
        && atacante.vidaActual <= atacante.vidaMaxima / 2) {
        base += pasivaAtacante.valor;
    }

    base = Math.round(base);

    let defensa = ignorarDefensa ? 0 : defensor.defensa;

    if (!ignorarDefensa && pasivaAtacante && pasivaAtacante.tipo === "perforante") {
        defensa = Math.max(0, defensa - pasivaAtacante.valor);
    }

    const real = Math.max(DANIO_MINIMO, base - defensa);

    defensor.vidaActual = Math.max(0, defensor.vidaActual - real);

    // Reflejo: parte del daño recibido vuelve al atacante
    let reflejado = 0;
    const pasivaDefensor = defensor.pasiva;

    if (pasivaDefensor && pasivaDefensor.tipo === "reflejo") {
        reflejado = Math.max(1, Math.round(real * pasivaDefensor.valor / 100));
        atacante.vidaActual = Math.max(0, atacante.vidaActual - reflejado);
    }

    return { real, reflejado };
}

function textoGolpe(atacante, defensor, resultado) {

    let texto = `${atacante.nombre} golpea a ${defensor.nombre} (-${resultado.real})`;

    if (resultado.reflejado > 0) {
        texto += ` y recibe ${resultado.reflejado} de daño reflejado`;
    }

    return texto;
}

// Quita del campo a los personajes sin vida, rompe sus sellos
// y hace entrar a la reserva. Devuelve cuántas bajas hubo.
function resolverBajas(duenio, mensajes) {

    const iniciales = duenio.ejercito.iniciales;
    const reserva = duenio.ejercito.reserva;

    let bajas = 0;
    let i = 0;

    while (i < iniciales.length) {

        const personaje = iniciales[i];

        if (personaje.vidaActual > 0) {
            i++;
            continue;
        }

        personaje.derrotado = true;
        bajas++;
        mensajes.push(`¡${personaje.nombre} fue derrotado!`);

        liberarSellos(personaje, mensajes);

        if (reserva.length > 0) {
            const reemplazo = reserva.shift();
            iniciales[i] = reemplazo;
            mensajes.push(`Entra ${reemplazo.nombre} desde la reserva.`);
            i++;
        } else {
            iniciales.splice(i, 1);
        }
    }

    return bajas;
}

// Si cae un sellador, todos los sellos que puso se rompen
function liberarSellos(sellador, mensajes) {

    [partida.jugador1, partida.jugador2].forEach(jugador => {

        jugador.ejercito.iniciales.concat(jugador.ejercito.reserva).forEach(p => {

            if (p.sellado && p.sellado.por === sellador) {
                p.sellado = null;
                mensajes.push(`El sello sobre ${p.nombre} se rompe al caer ${sellador.nombre}.`);
            }

        });

    });
}

// Pasiva curaBaja: por cada baja enemiga, cura a un aliado al azar
function aplicarCuraPorBajas(equipo, bajas, mensajes) {

    if (bajas <= 0) return;

    const iniciales = equipo.ejercito.iniciales;
    const curanderos = iniciales.filter(p => p.pasiva && p.pasiva.tipo === "curaBaja");

    for (let b = 0; b < bajas; b++) {

        curanderos.forEach(curandero => {

            if (curandero.vidaActual <= 0) return;

            const vivos = iniciales.filter(p => p.vidaActual > 0);
            const aliado = vivos[Math.floor(Math.random() * vivos.length)];
            const cantidad = curar(aliado, curandero.pasiva.valor);

            if (cantidad > 0) {
                mensajes.push(`${curandero.nombre} (${curandero.pasiva.nombre}) cura ${cantidad} a ${aliado.nombre}.`);
            }
        });
    }
}

// Resuelve todo lo que pasó tras una acción. Devuelve true si la partida terminó.
function resolverTurno() {

    const jugador = jugadorDelTurno();
    const rival = rivalDelTurno();
    const mensajes = [];

    const bajasRival = resolverBajas(rival, mensajes);
    const bajasPropias = resolverBajas(jugador, mensajes);

    aplicarCuraPorBajas(jugador, bajasRival, mensajes);
    aplicarCuraPorBajas(rival, bajasPropias, mensajes);

    mensajes.forEach(agregarMensaje);

    if (rival.ejercito.iniciales.length === 0) {
        mostrarVictoria(partida.turnoActual);
        return true;
    }

    if (jugador.ejercito.iniciales.length === 0) {
        mostrarVictoria(partida.turnoActual === 1 ? 2 : 1);
        return true;
    }

    return false;
}

// Ejecuta la acción del atacante actual (ataque normal o habilidad)
function realizarAccion(indiceObjetivo) {

    const jugador = jugadorDelTurno();
    const rival = rivalDelTurno();

    const atacante = partida.cola[0];

    if (!atacante) return;

    const aliados = jugador.ejercito.iniciales;
    const enemigos = rival.ejercito.iniciales;

    const habilidad = atacante.habilidad;
    const usaHabilidad = partida.modo === "habilidad" && habilidadDisponible(atacante);

    let texto = "";

    if (usaHabilidad && habilidad.tipo === "curar") {

        const aliado = aliados[indiceObjetivo];
        if (!aliado) return;

        const cantidad = curar(aliado, habilidad.valor);
        atacante.usada = true;

        texto = `${atacante.nombre} usa ${habilidad.nombre}: ${aliado.nombre} recupera ${cantidad} de vida.`;

    } else if (usaHabilidad && habilidad.tipo === "area") {

        atacante.usada = true;

        const partes = enemigos.map(enemigo => {
            const r = golpear(atacante, enemigo, { mult: habilidad.mult });
            return `${enemigo.nombre} (-${r.real}${r.reflejado ? `, reflejo ${r.reflejado}` : ""})`;
        });

        texto = `${atacante.nombre} usa ${habilidad.nombre}: ${partes.join(", ")}.`;

    } else {

        const objetivo = enemigos[indiceObjetivo];
        if (!objetivo) return;

        if (usaHabilidad && habilidad.tipo === "sellar") {

            if (objetivo.sellado) {
                agregarMensaje(`${objetivo.nombre} ya está sellado. Elige otro objetivo.`);
                mostrarCampoBatalla();
                return;
            }

            objetivo.sellado = { turnos: habilidad.duracion, por: atacante };
            atacante.enfriamiento = habilidad.enfriamiento;

            texto = `${atacante.nombre} usa ${habilidad.nombre}: ${objetivo.nombre} queda sellado ${habilidad.duracion} turnos.`;

        } else if (usaHabilidad && habilidad.tipo === "doble") {

            atacante.usada = true;

            const primero = golpear(atacante, objetivo);
            texto = `${atacante.nombre} usa ${habilidad.nombre}: ${textoGolpe(atacante, objetivo, primero)}`;

            if (objetivo.vidaActual > 0 && atacante.vidaActual > 0) {
                const segundo = golpear(atacante, objetivo);
                texto += ` y otra vez (-${segundo.real}${segundo.reflejado ? `, reflejo ${segundo.reflejado}` : ""})`;
            }

            texto += ".";

        } else if (usaHabilidad && habilidad.tipo === "perforar") {

            atacante.usada = true;

            const r = golpear(atacante, objetivo, { ignorarDefensa: true });
            texto = `${atacante.nombre} usa ${habilidad.nombre}: ${textoGolpe(atacante, objetivo, r)}, ignorando su defensa.`;

        } else {

            const r = golpear(atacante, objetivo);
            texto = `${textoGolpe(atacante, objetivo, r)}.`;
        }
    }

    agregarMensaje(texto);

    partida.cola.shift();
    partida.modo = "normal";

    if (resolverTurno()) return;

    limpiarCola();

    if (partida.cola.length > 0) {
        mostrarCampoBatalla();
    } else {
        finalizarTurno();
    }
}

function rendirse() {

    const perdedor = partida.turnoActual;
    const ganador = perdedor === 1 ? 2 : 1;

    if (!confirm(`Jugador ${perdedor}, ¿seguro que quieres rendirte?`)) return;

    partida.mensajeCombate = `El jugador ${perdedor} se rindió.`;

    mostrarVictoria(ganador, true);
}

function mostrarVictoria(numeroGanador, porRendicion = false) {

    const ganador = numeroGanador === 1 ? partida.jugador1 : partida.jugador2;

    const resumen = porRendicion
        ? `${ganador.faccion.nombre} gana la batalla.`
        : `${ganador.faccion.nombre} ha aniquilado al enemigo.`;

    document.getElementById("battleField").innerHTML = `
        <div class="handoff-screen victory-screen">
            <h2>¡VICTORIA DEL JUGADOR ${numeroGanador}!</h2>

            <img
                class="victory-image"
                src="../assets/images/${ganador.faccion.id}/victoria.jpg"
                alt="Victoria de ${ganador.faccion.nombre}"
                onerror="this.style.display='none'"
            >

            <p>${resumen}</p>
            <p class="combat-message">${partida.mensajeCombate}</p>
            <button id="restartButton">VOLVER A JUGAR</button>
        </div>
    `;

    document.getElementById("restartButton")
        .addEventListener("click", () => location.reload());
}


// ==============================
// CAMBIAR DE TURNO
// ==============================

function finalizarTurno() {

    // 1) Termina el turno del jugador actual: sus sellos pierden un turno
    const terminado = jugadorDelTurno();

    terminado.ejercito.iniciales.concat(terminado.ejercito.reserva).forEach(p => {

        if (!p.sellado) return;

        p.sellado.turnos--;

        if (p.sellado.turnos <= 0) {
            p.sellado = null;
            agregarMensaje(`${p.nombre} se libera del sello.`);
        }
    });

    // 2) Cambia el turno
    partida.turnoActual = partida.turnoActual === 1 ? 2 : 1;
    reiniciarTurno();

    // 3) Inicio del turno del nuevo jugador: enfriamientos y regeneración
    const nuevo = jugadorDelTurno();

    nuevo.ejercito.iniciales.concat(nuevo.ejercito.reserva).forEach(p => {
        if (p.enfriamiento > 0) p.enfriamiento--;
    });

    nuevo.ejercito.iniciales.forEach(p => {

        if (p.pasiva && p.pasiva.tipo === "regen" && p.vidaActual > 0) {

            const cantidad = curar(p, p.pasiva.valor);

            if (cantidad > 0) {
                agregarMensaje(`${p.nombre} regenera ${cantidad} de vida (${p.pasiva.nombre}).`);
            }
        }
    });

    document.getElementById("battleField").innerHTML = `
        <div class="handoff-screen">

            <h2>CAMBIO DE JUGADOR</h2>

            ${partida.mensajeCombate
                ? `<p class="combat-message">${partida.mensajeCombate}</p>`
                : ""}

            <p>¿COMENZAR TURNO DEL JUGADOR ${partida.turnoActual}?</p>
            <p>Pasa el computador al siguiente jugador.</p>

            <button id="beginTurnButton">LISTO</button>

        </div>
    `;

    document.getElementById("beginTurnButton")
        .addEventListener("click", () => {
            partida.mensajeCombate = "";   // el nuevo jugador ya leyó el resumen
            mostrarCampoBatalla();
        });
}


// ==============================
// CREAR TARJETAS DE PERSONAJES
// modo: "seleccion" | "objetivo-enemigo" | "objetivo-aliado" | ""
// ==============================

function crearTarjetas(personajes, faccion, opciones = {}) {

    const { modo = "", seleccionados = [], activo = null } = opciones;

    return personajes.map((personaje, index) => {

        // Imagen de la carta: el campeón usa la de su facción;
        // los demás pueden tener la suya con el campo opcional "imagen"
        // (por ejemplo: imagen: "apotecario.jpg" dentro de assets/images/card-forge/).
        const archivoImagen = personaje.campeon ? faccion.imagen : personaje.imagen;

        const imagenHTML = `
            <div class="character-placeholder">${personaje.campeon ? "★" : "⚔"}</div>
            ${archivoImagen
                ? `<img
                        src="../assets/images/card-forge/${archivoImagen}"
                        alt="${personaje.nombre}"
                        onerror="this.style.display='none'"
                   >`
                : ""}
        `;

        const porcentaje = Math.round(
            (personaje.vidaActual / personaje.vidaMaxima) * 100
        );

        const clases = ["character-card"];

        if (modo === "seleccion" && !personaje.sellado) clases.push("selectable");
        if (modo === "objetivo-enemigo") clases.push("targetable");
        if (modo === "objetivo-aliado") clases.push("ally-targetable");
        if (personaje.sellado) clases.push("sealed");
        if (seleccionados.includes(index)) clases.push("selected");
        if (activo === index) clases.push("attacking");

        const vidaBaja = porcentaje <= 30 ? " low" : "";

        // Etiquetas de habilidad y pasiva
        let etiquetas = "";

        if (personaje.habilidad) {
            const usada = !habilidadDisponible(personaje) && !personaje.sellado ? " used" : "";
            etiquetas += `
                <span class="tag tag-skill${usada}"
                      title="${describirHabilidad(personaje.habilidad)}">
                    ${etiquetaHabilidad(personaje)}
                </span>
            `;
        }

        if (personaje.pasiva) {
            etiquetas += `
                <span class="tag tag-passive"
                      title="${describirPasiva(personaje.pasiva)}">
                    ${etiquetaPasiva(personaje.pasiva)}
                </span>
            `;
        }

        const selloHTML = personaje.sellado
            ? `<span class="seal-badge" title="Sellado por ${personaje.sellado.por.nombre}">🔒 ${personaje.sellado.turnos}</span>`
            : "";

        return `
            <article class="${clases.join(" ")}" data-index="${index}">

                <div class="card-art">
                    ${imagenHTML}
                    ${selloHTML}
                    <span class="stat stat-life${vidaBaja}" title="Vida">${personaje.vidaActual}</span>
                    <span class="stat stat-def" title="Defensa">${personaje.defensa}</span>
                    <span class="stat stat-dmg" title="Daño">${personaje.danio}</span>
                </div>

                <div class="health-bar" title="${personaje.vidaActual} / ${personaje.vidaMaxima}">
                    <div class="health-fill" style="width: ${porcentaje}%"></div>
                </div>

                <h4>${personaje.campeon ? "★ " : ""}${personaje.nombre}</h4>

                <div class="card-tags">
                    ${etiquetas}
                </div>

            </article>
        `;

    }).join("");
}


// ==============================
// INICIO
// ==============================

startGameButton.addEventListener("click", mostrarSeleccion);