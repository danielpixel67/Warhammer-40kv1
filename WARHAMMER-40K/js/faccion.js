// DATOS DE LAS FACCIONES

const datosFacciones = {

    "ultramarines": {
        nombre: "Ultramarines",
        alianza: "IMPERIO",
        primarca: "Roboute Guilliman",
        descripcion: "Horus creía que el poder lo era todo. Nunca entendió que la verdadera fuerza de un imperio no reside en la espada de su conquistador, sino en la justicia de sus leyes.",
        tema: "theme-imperio",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                "Los Ultramarines son la decimotercera legión de Marines Espaciales, creada bajo el mando del primarca Roboute Guilliman. Su mundo natal es Macragge, en el reino de Ultramar.",
                "Tras la Herejía de Horus, Guilliman escribió el Codex Astartes, que dividió las legiones en capítulos de unos mil guerreros. Ese texto sigue siendo la base de la doctrina militar de casi todos los capítulos del Imperium."
            ],

            organizacion: [
                "Siguen el Codex Astartes: un capítulo formado por diez compañías, cada una dirigida por un capitán, y todo el capítulo bajo las órdenes de un Maestro de Capítulo.",
                "Su base principal es la Fortaleza de Hera, en Macragge."
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                { nombre: "Marneus Calgar", texto: "Maestro de Capítulo de los Ultramarines y Señor de Macragge.", imagen: "" },
                { nombre: "Roboute Guilliman", texto: "Primarca de la legión y Lord Comandante del Imperium.", imagen: "" }
            ],

            armamento: [
                { nombre: "Bólter", texto: "Arma básica de los Marines Espaciales; dispara proyectiles explosivos.", imagen: "" },
                { nombre: "Land Raider", texto: "Tanque pesado de asalto, capaz de transportar tropas a primera línea.", imagen: "" }
            ],

            batallas: [
                { nombre: "Caída de Calth", texto: "Traición de los Word Bearers contra los Ultramarines durante la Herejía de Horus.", imagen: "" },
                { nombre: "Batalla de Macragge", texto: "Defensa del mundo natal del capítulo contra la Flota Colmena Behemoth de los Tiránidos.", imagen: "" }
            ]
        },


        galeria: [
            "galeria1.jpg",
            "galeria2.jpg",
            "galeria3.jpg",
            "galeria4.jpg",
        ]
    },

    "blood-angels": {
        nombre: "Blood Angels",
        alianza: "IMPERIO",
        primarca: "Sanguinius",
        descripcion: "Mientras yo respire, ninguno de ustedes caerá solo ante la maldición. Cargaremos juntos con este peso, en la gloria y en la agonía.",
        tema: "theme-imperio",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                "Los Blood Angels fueron la IX Legión de Marines Espaciales que el Emperador creó para su Gran Cruzada. Su Primarca era Sanguinius, y su mundo natal es Baal.",
                "Sin embargo, durante la Herejía de Horus sufrieron un gran golpe: la pérdida de su padre angelical a manos del Señor de la Guerra Horus durante la Batalla de Terra. Su muerte fue tan terrible que dejó una cicatriz en todos y cada uno de los miembros de la Legión y, desde aquel oscuro día, se murmura que los Ángeles Sangrientos portan una terrible maldición en la sangre."
            ],

            organizacion: [
                "Los Blood Angels son un Capítulo de Marines Espaciales del Imperio de la Humanidad, organizado en compañías, cada una dirigida por un capitán. Su máxima autoridad es el Maestro del Capítulo, quien dirige a todos los guerreros y supervisa las decisiones militares. También cuentan con bibliotecarios, capellanes y apotecarios, que cumplen funciones especializadas dentro de la organización.",
                "Su jerarquía militar se basa en rangos y experiencia: desde los exploradores y nuevos integrantes hasta los veteranos, sargentos y capitanes. Además, poseen unidades especiales como la Guardia Sanguinaria, encargada de proteger al Maestro del Capítulo, y la Compañía de la Muerte, formada por guerreros afectados por la maldición de la Rabia Negra. Esta estructura les permite mantener la disciplina y la eficacia en combate."
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                { nombre: "Sanguinius", texto: "Primarca de los Ángeles Sangrientos, conocido por su nobleza, sabiduría y sacrificio durante la Herejía de Horus.", imagen: "sanguinius.jpg" },
                { nombre: "Luis Dante", texto: "Actual Señor del Capítulo de los Ángeles Sangrientos y uno de los Marines Espaciales más antiguos del Imperium.", imagen: "Luis Dante.jpg" },
                { nombre: "Mephiston", texto: "Señor de los Bibliotecarios de los Ángeles Sangrientos, reconocido como uno de los psíquicos más poderosos del Imperium.", imagen: "mephiston.jpg" }

            ],

            armamento: [
                { nombre: "Espada Encarmine", texto: "Arma de energía utilizada por la Guardia Sanguinaria, reconocida por su capacidad para atravesar armaduras enemigas.", imagen: "Espada Encarmine.jpg" },
                { nombre: "Baal Predator", texto: "Tanque de asalto característico de los Ángeles Sangrientos, equipado con armamento pesado para eliminar grandes cantidades de enemigos.", imagen: "Baal Predator.jpg" }
            ],

            batallas: [
                { nombre: "Batalla de Terra", texto: "Los Ángeles Sangrientos, liderados por Sanguinius, defendieron el Palacio Imperial durante la Herejía de Horus, enfrentándose a las fuerzas del Caos.", imagen: "asedio de terra.jpg" },
                { nombre: "Batalla de Baal", texto: "Los Ángeles Sangrientos y sus Capítulos sucesores defendieron su mundo natal, Baal, frente a una invasión masiva de los Tiránidos de la Flota Enjambre Leviatán.", imagen: "batalla de baal.jpg" }
            ],

            acontecimentos: [
                { nombre: "La Herejía de Horus", texto: "Sanguinius murió a manos de Horus durante el enfrentamiento final a bordo de la nave Vengeful Spirit, convirtiéndose en un símbolo eterno de sacrificio para su Capítulo.", imagen: "La Herejía de Horus.jpg" },
                { nombre: "El Despertar de Baal", texto: "Tras la devastadora invasión tiránida, la llegada de los refuerzos imperiales y la intervención de Guilliman permitieron la supervivencia de los Ángeles Sangrientos y el inicio de una nueva etapa para el Capítulo.", imagen: "El Despertar de Baal.jpg" }
            ]
        },


        galeria: [
            "angeles sangrientos1.jpg",
            "angeles sangrientos2.jpg",
            "angeles sangrientos3.jpg",
            "angeles sangrientos4.jpg",
        ]
    },

    "black-templars": {
        nombre: "Black Templars",
        alianza: "IMPERIO",
        primarca: "No tienen primarca propio",
        descripcion: "Helbrecht, Lider de los Black Templars",
        tema: "theme-imperio",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                // "Escribe aquí el primer párrafo.",
            ],

            organizacion: [
                // "Escribe aquí cómo se organiza la facción.",
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                // { nombre: "Nombre", texto: "Descripción.", imagen: "personaje1.jpg" },
            ],

            armamento: [
                // { nombre: "Arma o vehículo", texto: "Descripción.", imagen: "" },
            ],

            batallas: [
                // { nombre: "Batalla", texto: "Descripción.", imagen: "" },
            ]
        },

        galeria: [
            "galeria1.jpg",
            "galeria2.jpg",
            "galeria3.jpg",
            "galeria4.jpg",
        ]
    },

    "world-eaters": {
        nombre: "World Eaters",
        alianza: "CAOS",
        primarca: "Angron",
        descripcion: "Mi padre bajó del cielo como un dios dorado, me arrancó de mis hermanos y dejó que murieran solos en las montañas de Nuceria. Ese día murió el hijo que él quería.",
        tema: "theme-caos",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                // "Escribe aquí el primer párrafo.",
            ],

            organizacion: [
                // "Escribe aquí cómo se organiza la facción.",
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                // { nombre: "Nombre", texto: "Descripción.", imagen: "personaje1.jpg" },
            ],

            armamento: [
                // { nombre: "Arma o vehículo", texto: "Descripción.", imagen: "" },
            ],

            batallas: [
                // { nombre: "Batalla", texto: "Descripción.", imagen: "" },
            ]
        },


        galeria: [
            "galeria1.jpg",
            "galeria2.jpg",
            "galeria3.jpg",
            "galeria4.jpg",
        ]
    },

    "death-guard": {
        nombre: "Death Guard",
        alianza: "CAOS",
        primarca: "Mortarion",
        descripcion: "Mi padre bajó de las estrellas prometiendo liberarnos de los tiranos, pero solo cambió nuestras cadenas por otras más doradas.",
        tema: "theme-caos",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                // "Escribe aquí el primer párrafo.",
            ],

            organizacion: [
                // "Escribe aquí cómo se organiza la facción.",
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                // { nombre: "Nombre", texto: "Descripción.", imagen: "personaje1.jpg" },
            ],

            armamento: [
                // { nombre: "Arma o vehículo", texto: "Descripción.", imagen: "" },
            ],

            batallas: [
                // { nombre: "Batalla", texto: "Descripción.", imagen: "" },
            ]
        },


        galeria: [
            "galeria1.jpg",
            "galeria2.jpg",
            "galeria3.jpg",
            "galeria4.jpg",
        ]
    },

    "thousand-sons": {
        nombre: "Thousand Sons",
        alianza: "CAOS",
        primarca: "Magnus el Rojo",
        descripcion: "Mi padre nos enseñó a conquistar las estrellas, pero nos prohibió mirar más allá del velo. Quiso que fuéramos dioses con los ojos vendados.",
        tema: "theme-caos",

        secciones: {

            // Cada línea de texto entre comillas es un párrafo.
            historia: [
                // "Escribe aquí el primer párrafo.",
            ],

            organizacion: [
                // "Escribe aquí cómo se organiza la facción.",
            ],

            // En estas tres, cada elemento tiene nombre, texto e imagen (opcional).
            personajes: [
                // { nombre: "Nombre", texto: "Descripción.", imagen: "personaje1.jpg" },
            ],

            armamento: [
                // { nombre: "Arma o vehículo", texto: "Descripción.", imagen: "" },
            ],

            batallas: [
                // { nombre: "Batalla", texto: "Descripción.", imagen: "" },
            ]
        },

        galeria: [
            "galeria1.jpg",
            "galeria2.jpg",
            "galeria3.jpg",
            "galeria4.jpg",
        ]
    }

};


// RECONOCER LA FACCIÓN SELECCIONADA

const parametros = new URLSearchParams(window.location.search);

const idFaccion = parametros.get("id");

const faccion = datosFacciones[idFaccion];


// MOSTRAR LA INFORMACIÓN

if (faccion) {

    document.body.classList.add(faccion.tema);

    const wikiImage = document.getElementById("wikiImage");

    wikiImage.src = `../assets/images/${idFaccion}/principal.jpg`;

    wikiImage.alt = "Imagen de " + faccion.nombre;

    document.getElementById("wikiName").textContent = faccion.nombre;

    document.getElementById("wikiAlliance").textContent = faccion.alianza;

    document.getElementById("wikiLeader").textContent =
        "Primarca: " + faccion.primarca;

    document.getElementById("wikiDescription").textContent =
        faccion.descripcion;

    document.title = faccion.nombre + " | Wiki Warhammer 40K";

} else {

    document.getElementById("wikiName").textContent =
        "Facción no encontrada";

    document.getElementById("wikiDescription").textContent =
        "No se encontró la información de esta facción.";

}

/* =====================================
   GALERÍA DE IMÁGENES
===================================== */

const wikiGallery = document.getElementById("wikiGallery");

if (faccion && wikiGallery) {

    (faccion.galeria || []).forEach((imagen, indice) => {

        const figura = document.createElement("figure");

        const foto = document.createElement("img");

        foto.src = `../assets/images/${idFaccion}/${imagen}`;

        foto.alt = `Imagen ${indice + 1} de ${faccion.nombre}`;

        foto.loading = "lazy";

        figura.appendChild(foto);

        wikiGallery.appendChild(figura);

    });

}


/* =====================================
   SECCIONES DE TEXTO (historia, armamento, etc.)
===================================== */

// Dibuja una lista de párrafos o de elementos {nombre, texto, imagen}
function dibujarSeccion(idContenedor, elementos) {

    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (!elementos || elementos.length === 0) {
        const vacio = document.createElement("p");
        vacio.className = "wiki-empty";
        vacio.textContent = "Información próximamente.";
        contenedor.appendChild(vacio);
        return;
    }

    elementos.forEach(elemento => {

        // Un texto simple es un párrafo
        if (typeof elemento === "string") {
            const parrafo = document.createElement("p");
            parrafo.textContent = elemento;
            contenedor.appendChild(parrafo);
            return;
        }

        // Un objeto es una ficha con nombre, texto e imagen opcional
        const ficha = document.createElement("div");
        ficha.className = "wiki-item";

        if (elemento.imagen) {
            const foto = document.createElement("img");
            foto.src = `../assets/images/${idFaccion}/${elemento.imagen}`;
            foto.alt = elemento.nombre;
            foto.loading = "lazy";
            foto.onerror = () => foto.remove();
            ficha.appendChild(foto);
        }

        const titulo = document.createElement("h4");
        titulo.textContent = elemento.nombre;
        ficha.appendChild(titulo);

        const texto = document.createElement("p");
        texto.textContent = elemento.texto;
        ficha.appendChild(texto);

        contenedor.appendChild(ficha);
    });
}

if (faccion && faccion.secciones) {
    dibujarSeccion("wikiHistoria", faccion.secciones.historia);
    dibujarSeccion("wikiOrganizacion", faccion.secciones.organizacion);
    dibujarSeccion("wikiPersonajes", faccion.secciones.personajes);
    dibujarSeccion("wikiArmamento", faccion.secciones.armamento);
    dibujarSeccion("wikiBatallas", faccion.secciones.batallas);
    dibujarSeccion("wikiAcontecimientos", faccion.secciones.acontecimentos);
}