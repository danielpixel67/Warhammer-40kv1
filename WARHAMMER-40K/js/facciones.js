/* =====================================
   BASE DE DATOS DE FACCIONES
===================================== */

const facciones = [

    // =================================
    // IMPERIO
    // =================================

    {
        id: "ultramarines",
        nombre: "Ultramarines",
        alianza: "imperio",
        simbolo: "✠",
        Primarca: "Roboute Guilliman",
        descripcion: "Uno de los capítulos más importantes del Imperium. Destacan por su disciplina, organización y dominio de la estrategia militar.",
        color: "imperial"
    },

    {
        id: "blood-angels",
        nombre: "Blood Angels",
        alianza: "imperio",
        simbolo: "⚔",
        Primarca: "Sanguinius",
        descripcion: "Capítulo de Marines Espaciales conocido por su nobleza, heroísmo y la sed de sangre que amenaza a sus guerreros.",
        color: "imperial"
    },

    {
        id: "black-templars",
        nombre: "Black Templars",
        alianza: "imperio",
        simbolo: "✠",
        Primarca: "Helbrecht",
        descripcion: "Un capítulo de guerreros fanáticos que emprenden cruzadas interminables en nombre del Emperador.",
        color: "imperial"
    },


    // =================================
    // CAOS
    // =================================

    {
        id: "world-eaters",
        nombre: "World Eaters",
        alianza: "caos",
        simbolo: "☠",
        Primarca: "Angron",
        descripcion: "Legión consumida por la violencia y la adoración a Khorne. Sus guerreros buscan el combate cuerpo a cuerpo.",
        color: "chaos"
    },

    {
        id: "death-guard",
        nombre: "Death Guard",
        alianza: "caos",
        simbolo: "☠",
        Primarca: "Mortarion",
        descripcion: "Guerreros resistentes y corruptos que sirven a Nurgle, extendiendo enfermedades y plagas por la galaxia.",
        color: "chaos"
    },

    {
        id: "thousand-sons",
        nombre: "Thousand Sons",
        alianza: "caos",
        simbolo: "◈",
        Primarca: "Magnus el Rojo",
        descripcion: "Una legión de poderosos hechiceros que utiliza la magia de la disformidad al servicio de Tzeentch.",
        color: "chaos"
    }

];


/* =====================================
   ELEMENTOS HTML
===================================== */

const factionList = document.getElementById("factionList");
const factionSearch = document.getElementById("factionSearch");
const catalogTitle = document.getElementById("catalogTitle");
const factionCount = document.getElementById("factionCount");
const emptyMessage = document.getElementById("emptyMessage");

const allianceButtons = document.querySelectorAll(
    ".alliance-button"
);


/* =====================================
   ESTADO DEL EXPLORADOR
===================================== */

let alianzaSeleccionada = "todas";


/* =====================================
   MOSTRAR FACCIONES
===================================== */

function mostrarFacciones() {

    const busqueda = factionSearch.value.toLowerCase();

    const resultados = facciones.filter(faccion => {

        const coincideAlianza =
            alianzaSeleccionada === "todas" ||
            faccion.alianza === alianzaSeleccionada;

        const coincideBusqueda =
            faccion.nombre.toLowerCase().includes(busqueda) ||
            faccion.Primarca.toLowerCase().includes(busqueda);

        return coincideAlianza && coincideBusqueda;

    });


    factionList.innerHTML = "";


    resultados.forEach(faccion => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add(
            "faction-item",
            faccion.color
        );

        tarjeta.innerHTML = `

        <div class="faction-art">

            <img
                src="../assets/images/${faccion.id}/tarjeta.jpg"
                alt="${faccion.nombre}"
            >

    <small>ARCHIVO DE PERSONAJE</small>

</div>

        </div>

        <div class="faction-info">

            <span class="faction-tag">
                ${faccion.alianza.toUpperCase()}
            </span>

            <h3>${faccion.nombre}</h3>

            <p>${faccion.descripcion}</p>

            <a href="faccion.html?id=${faccion.id}" class="wiki-button">
                VER REGISTRO
            </a>

        </div>
        `;

        factionList.appendChild(tarjeta);

    });


    // Actualizar cantidad de resultados

    factionCount.textContent =
        `${resultados.length} REGISTROS`;


    // Mostrar mensaje cuando no hay resultados

    emptyMessage.hidden = resultados.length !== 0;

}


/* =====================================
   SELECCIONAR ALIANZA
===================================== */

allianceButtons.forEach(button => {

    button.addEventListener("click", () => {

        alianzaSeleccionada = button.dataset.alliance;

        // Cambiar tema visual

        document.body.classList.remove(
            "theme-imperio",
            "theme-caos"
        );

        document.body.classList.add(
            alianzaSeleccionada === "imperio"
                ? "theme-imperio"
                : "theme-caos"
        );


        // Actualizar botones seleccionados

        allianceButtons.forEach(item => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");


        // Cambiar título

        catalogTitle.textContent =
            alianzaSeleccionada === "imperio"
                ? "FUERZAS DEL IMPERIO"
                : "FUERZAS DEL CAOS";


        // Limpiar buscador

        factionSearch.value = "";


        // Actualizar catálogo

        mostrarFacciones();

        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =====================================
   BUSCADOR
===================================== */

factionSearch.addEventListener("input", mostrarFacciones);


/* =====================================
   INICIO
===================================== */

// Al entrar se muestran todas las facciones.

mostrarFacciones();