const animalsData = [
    // --- MAMÍFEROS (4) ---
    {
        name: "León",
        category: "Mamíferos",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80",
        description: "El gran felino conocido como el rey de la selva.",
        habitat: "Sabana africana",
        features: "Melena densa en machos, caza social en manada.",
        diet: "Carnívoro"
    },
    {
        name: "Elefante",
        category: "Mamíferos",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80",
        description: "El mamífero terrestre más grande del mundo.",
        habitat: "Bosques y sabanas",
        features: "Trompa multifuncional y colmillos de marfil.",
        diet: "Herbívoro"
    },
    {
        name: "Jirafa",
        category: "Mamíferos",
        image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=500&q=80",
        description: "El animal más alto de la Tierra.",
        habitat: "Praderas africanas",
        features: "Cuello extremadamente largo y patrón único de manchas.",
        diet: "Herbívoro"
    },
    {
        name: "Tigre",
        category: "Mamíferos",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=500&q=80",
        description: "Superdepredador de pelaje anaranjado con rayas negras.",
        habitat: "Bosques densos y selvas",
        features: "Excelente nadador y cazador solitario.",
        diet: "Carnívoro"
    },

    // --- AVES (4) ---
    {
        name: "Águila Real",
        category: "Aves",
        image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=500&q=80",
        description: "Una de las aves de presa más impresionantes.",
        habitat: "Montañas y acantilados",
        features: "Visión agudísima y garras poderosas.",
        diet: "Carnívoro"
    },
    {
        name: "Flamenco",
        category: "Aves",
        image: "https://media.istockphoto.com/id/616135474/es/foto/flamencos-en-el-lago-kenia-%C3%A1frica.jpg?s=1024x1024&w=is&k=20&c=2FgWJEaiQrLtqUEnGoTApNV8_yaD_qby12whD1tjdEQ=",
        description: "Ave acuática conocida por su característico color rosado.",
        habitat: "Lagos salobres y humedales",
        features: "Pico curvo adaptado para filtrar alimento y cuello esbelto.",
        diet: "Filtrador (crustáceos y algas)"
    },
    {
        name: "Búho Real",
        category: "Aves",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7sPccjR10nmkMZvCb_onGtCEtmnQEAyW1rAqVtKbVkhAzYL9bXKyUQQ&s=10",
        description: "Rapaz nocturna de mirada penetrante.",
        habitat: "Bosques, zonas rocosas y tundras",
        features: "Vuelo totalmente silencioso y penachos en las orejas.",
        diet: "Carnívoro"
    },
    {
        name: "Tucán",
        category: "Aves",
        image: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&w=500&q=80",
        description: "Ave tropical famosa por su pico largo y colorido.",
        habitat: "Selvas tropicales",
        features: "Pico ligero de queratina y plumaje de colores vivos.",
        diet: "Frugívoro (frutas e insectos)"
    },

    // --- REPTILES (4) ---
    {
        name: "Tortuga Marina",
        category: "Reptiles",
        image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=500&q=80",
        description: "Reptil ancestral que migra miles de kilómetros.",
        habitat: "Arrecifes y océanos abiertos",
        features: "Caparazón hidrodinámico y grandes aletas.",
        diet: "Omnívoro (medusas, algas)"
    },
    {
        name: "Cocodrilo",
        category: "Reptiles",
        image: "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?auto=format&fit=crop&w=500&q=80",
        description: "Gran reptil semiacuático con una mordida devastadora.",
        habitat: "Ríos, pantanos y zonas costeras",
        features: "Piel escamosa y dura, ojos y fosas nasales superiores.",
        diet: "Carnívoro"
    },
    {
        name: "Camaleón",
        category: "Reptiles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPAr5eUlrF9iF5v1S5VuKDE10gj6QJ-7Mel7P57ONORE5n7nhSM49_76O&s=10",
        description: "Pequeño reptil famoso por su capacidad de cambiar de color.",
        habitat: "Bosques tropicales y matorrales",
        features: "Ojos con movimiento independiente y lengua retráctil larga.",
        diet: "Insectívoro"
    },
    {
        name: "Iguana Verde",
        category: "Reptiles",
        image: "https://www.shutterstock.com/image-photo/young-green-iguana-perched-on-260nw-2700496977.jpg",
        description: "Gran lagarto arborícola nativo de América Central y del Sur.",
        habitat: "Copas de los árboles cerca del agua",
        features: "Cresta dorsal de espinas y cola larga para defensa.",
        diet: "Herbívoro"
    },

    // --- ANIMALES ACUÁTICOS (4) ---
    {
        name: "Delfín",
        category: "Acuáticos",
        image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=500&q=80",
        description: "Mamífero acuático altamente inteligente.",
        habitat: "Océanos y mares",
        features: "Comunicación mediante ecolocalización y saltos acrobáticos.",
        diet: "Piscívoro"
    },
    {
        name: "Tiburón Blanco",
        category: "Acuáticos",
        image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=500&q=80",
        description: "El depredador marino de gran tamaño más emblemático.",
        habitat: "Aguas templadas de todos los océanos",
        features: "Esqueleto de cartílago y múltiples filas de dientes aserrados.",
        diet: "Carnívoro"
    },
    {
        name: "Manta Raya",
        category: "Acuáticos",
        image: "https://capuchino.mx/wp-content/uploads/2022/12/Rayas-aguila.jpg",
        description: "Gigante pacífico del océano que 'vuela' en el agua.",
        habitat: "Aguas tropicales y subtropicales",
        features: "Cuerpo aplanado con aletas pectorales triangulares gigantes.",
        diet: "Filtrador (plancton)"
    },
    {
        name: "Pez Payaso",
        category: "Acuáticos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiO58aVTR0Gy-AGtmCNJJ-qn4luiqDNrk0Dmo0Gobdq98CKLCzK6tF_th&s=10",
        description: "Pequeño pez de brillantes colores naranja y blanco.",
        habitat: "Arrecifes de coral e anémonas",
        features: "Inmune al veneno de las anémonas gracias a su mucosa.",
        diet: "Omnívoro"
    }
];

// --- COMPONENTES ---

function HomeComponent() {
    return `
        <section class="hero-banner">
            <h2>Un encuentro salvaje con la naturaleza</h2>
            <p>Descubre la biodiversidad y aprende a proteger nuestro planeta.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="navigate('animals')">Ver Animales</button>
                <button class="btn btn-secondary" onclick="navigate('services')">Planear Visita</button>
            </div>
        </section>

        <section class="section">
            <h3 class="section-title">Sobre EcoZoo</h3>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 30px auto; line-height: 1.6;">
                EcoZoo es un santuario biológico comprometido con el rescate, rehabilitación y conservación 
                de especies amenazadas. Con más de 50 hectáreas de hábitats recreados, ofrecemos una experiencia
                educativa e inmersiva para toda la familia.
            </p>

            <h3 class="section-title">Información Destacada</h3>
            <div class="grid">
                <div class="card">
                    <h4>🌱 Programa de Conservación</h4>
                    <p>Más de 30 especies rescatadas y reintegradas a sus hábitats naturales este año.</p>
                </div>
                <div class="card">
                    <h4>🦁 Experiencias Interactivas</h4>
                    <p>Recorridos guiados al atardecer para conocer el comportamiento nocturno de los grandes felinos.</p>
                </div>
                <div class="card">
                    <h4>🎟️ Descuentos Especiales</h4>
                    <p>Entrada gratuita para niños menores de 3 años y tarifas reducidas para grupos escolares.</p>
                </div>
            </div>
        </section>
    `;
}

function AnimalsComponent(filter = "Todos") {
    const categories = ["Todos", "Mamíferos", "Aves", "Reptiles", "Acuáticos"];
    
    const filteredAnimals = filter === "Todos" 
        ? animalsData 
        : animalsData.filter(a => a.category === filter);

    const filterButtonsHTML = categories.map(cat => `
        <button class="filter-btn ${cat === filter ? 'active' : ''}" onclick="filterAnimals('${cat}')">
            ${cat}
        </button>
    `).join('');

    const cardsHTML = filteredAnimals.map(animal => `
        <div class="card">
            <img src="${animal.image}" alt="${animal.name}">
            <span class="badge">${animal.category}</span>
            <h3>${animal.name}</h3>
            <p><strong>Descripción:</strong> ${animal.description}</p>
            <p><strong>Hábitat:</strong> ${animal.habitat}</p>
            <p><strong>Características:</strong> ${animal.features}</p>
            <p><strong>Alimentación:</strong> ${animal.diet}</p>
        </div>
    `).join('');

    return `
        <section class="section">
            <h2 class="section-title">Nuestros Animales</h2>
            <div class="category-filter">
                ${filterButtonsHTML}
            </div>
            <div class="grid">
                ${cardsHTML}
            </div>
        </section>
    `;
}

function ServicesComponent() {
    return `
        <section class="section">
            <h2 class="section-title">Servicios para Visitantes</h2>
            <div class="grid">
                <div class="card">
                    <h3>🚶‍♂️ Visitas Guiadas</h3>
                    <p>Acompaña a nuestros biólogos en recorridos temáticos de 90 minutos.</p>
                </div>
                <div class="card">
                    <h3>🎓 Recorridos Educativos</h3>
                    <p>Diseñados para escuelas, enfocados en biología, ecología y preservación.</p>
                </div>
                <div class="card">
                    <h3>🍔 Zona de Alimentación</h3>
                    <p>Restaurantes y áreas de picnic con opciones saludables y vegetarianas.</p>
                </div>
                <div class="card">
                    <h3>🎁 Tienda de Recuerdos</h3>
                    <p>Adquiere souvenirs ecológicos; tus compras apoyan la conservación.</p>
                </div>
                <div class="card">
                    <h3>🎉 Eventos Especiales</h3>
                    <p>Celebración de cumpleaños y eventos corporativos en espacios al aire libre.</p>
                </div>
                <div class="card">
                    <h3>🎈 Actividades para Niños</h3>
                    <p>Talleres de arte, granja interactiva y zonas de juegos infantiles.</p>
                </div>
            </div>

            <div style="margin-top: 40px;" class="grid">
                <div class="info-box">
                    <h3>⏰ Horarios de Atención</h3>
                    <p><strong>Lunes a Viernes:</strong> 9:00 AM - 5:00 PM</p>
                    <p><strong>Sábados, Domingos y Festivos:</strong> 8:30 AM - 6:00 PM</p>
                </div>
                <div class="info-box">
                    <h3>🎟️ Precios de Entrada</h3>
                    <p><strong>Adultos (12+ años):</strong> $15.00</p>
                    <p><strong>Niños (3-11 años):</strong> $8.00</p>
                    <p><strong>Adultos Mayores / Estudiantes:</strong> $10.00</p>
                </div>
            </div>
        </section>
    `;
}

function EducationComponent() {
    return `
        <section class="section">
            <h2 class="section-title">Educación y Conservación</h2>
            <div class="grid">
                <div class="card">
                    <h3>🛡️ Protección de Especies</h3>
                    <p>Participamos en programas internacionales de reproducción en cautiverio para reintroducir especies en peligro.</p>
                </div>
                <div class="card">
                    <h3>🌍 Cuidado del Medio Ambiente</h3>
                    <p>EcoZoo funciona con un 100% de energía renovable y aplica programas de cero residuos de plástico.</p>
                </div>
                <div class="card">
                    <h3>📚 Programas Educativos</h3>
                    <p>Ofrecemos voluntariados, campamentos de verano y conferencias gratuitas sobre la fauna silvestre.</p>
                </div>
            </div>

            <div style="margin-top: 40px;">
                <h3 class="section-title">💡 Datos Interesantes & Consejos</h3>
                <div class="grid">
                    <div class="info-box">
                        <h4>¿Sabías qué?</h4>
                        <p>Las huellas de la nariz de las jirafas son únicas, equivalente a las huellas dactilares humanas.</p>
                    </div>
                    <div class="info-box">
                        <h4>Consejo Eco</h4>
                        <p>Reduce el uso de plásticos de un solo uso para evitar la contaminación de mares y hábitats terrestres.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function ContactComponent() {
    return `
        <section class="section">
            <h2 class="section-title">Contacto y Ubicación</h2>
            <div class="contact-container">
                <form onsubmit="handleContactSubmit(event)">
                    <h3>Envíanos un mensaje</h3>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" required placeholder="Tu nombre completo">
                    </div>
                    <div>
                        <label>Correo Electrónico:</label>
                        <input type="email" required placeholder="tu@email.com">
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input type="tel" placeholder="(+593) 999999999">
                    </div>
                    <div>
                        <label>Mensaje:</label>
                        <textarea rows="4" required placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                </form>

                <div class="info-box">
                    <h3>Información del Zoológico</h3>
                    <p><strong>📍 Dirección:</strong> Av. Los Biomas #123, Reserva Ecología Verde</p>
                    <p><strong>🕒 Horarios:</strong> Lun-Dom 9:00 AM - 5:00 PM</p>
                    <p><strong>📞 Teléfono:</strong> (02) 2345-6789</p>
                    <p><strong>✉️ Email:</strong> contacto@ecozoo.org</p>
                    <br>
                    <h4>Redes Sociales</h4>
                    <p>Síguenos en @EcoZooOficial en todas las plataformas.</p>
                    <br>
                </div>
            </div>
        </section>
    `;
}

// --- SISTEMA DE ENRUTAMIENTO Y NAVEGACIÓN ---

function navigate(view) {
    const app = document.getElementById("app-content");
    
    switch (view) {
        case "home":
            app.innerHTML = HomeComponent();
            break;
        case "animals":
            app.innerHTML = AnimalsComponent();
            break;
        case "services":
            app.innerHTML = ServicesComponent();
            break;
        case "education":
            app.innerHTML = EducationComponent();
            break;
        case "contact":
            app.innerHTML = ContactComponent();
            break;
        default:
            app.innerHTML = HomeComponent();
    }
    
    window.scrollTo(0, 0);
}

// Función auxiliar para filtrar animales
function filterAnimals(category) {
    const app = document.getElementById("app-content");
    app.innerHTML = AnimalsComponent(category);
}

// Manejo del formulario de contacto
function handleContactSubmit(event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
    event.target.reset();
}

// Inicializar la aplicación en la pantalla de inicio
document.addEventListener("DOMContentLoaded", () => {
    navigate("home");
});