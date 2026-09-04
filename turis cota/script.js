

// ── DATOS ──────────────────────────────────────────────────────────────────────

const destinations = [
    {
        id: 1,
        name: 'Laguna de Guatavita',
        location: 'Sesquilé, Cundinamarca',
        description: 'Cuna de la leyenda de El Dorado. Sus aguas color esmeralda rodeadas de bosque andino ofrecen un sendero circular de 3 km con vistas épicas y una conexión espiritual profunda con la cultura Muisca.',
        category: 'Historia & Naturaleza',
        duration: '1 día',
        imageId: 'photo-1761542547086-fbeb20f23e3a',
        alt: 'Laguna de Guatavita envuelta en niebla andina',
        badge: '#0B5E20',
        emoji: '💧'
    },
    {
        id: 2,
        name: 'Salto del Tequendama',
        location: 'Soacha, Cundinamarca',
        description: '157 metros de caída libre en uno de los saltos de agua más imponentes de Colombia. El vapor del impacto crea arcoíris perpetuos en el bosque nublado, un espectáculo sin igual.',
        category: 'Naturaleza',
        duration: '½ día',
        imageId: 'photo-1679534211899-3ebb5ab42a7f',
        alt: 'Cascada del Salto del Tequendama en toda su majestuosidad',
        badge: '#0277BD',
        emoji: '🌊'
    },
    {
        id: 3,
        name: 'Catedral de Sal de Zipaquirá',
        location: 'Zipaquirá, Cundinamarca',
        description: 'Una catedral gótica construida 200 m bajo la tierra en una mina de sal activa. Primera maravilla de Colombia, visitada por más de 500.000 personas al año. Una experiencia que desafía los sentidos.',
        category: 'Cultura & Arte',
        duration: '1 día',
        imageId: 'photo-1542553824-260b5ac2427f',
        alt: 'Minas de sal de Zipaquirá y paisaje de montañas',
        badge: '#6A1B9A',
        emoji: '🏛️'
    },
    {
        id: 4,
        name: 'Parque Natural Chicaque',
        location: 'La Mesa, Cundinamarca',
        description: 'Bosque de niebla primario a solo 30 minutos de Bogotá. Senderos entre helechos gigantes y árboles centenarios, puentes colgantes sobre el cañón y más de 150 especies de aves en su hábitat natural.',
        category: 'Ecoturismo',
        duration: '1 día',
        imageId: 'photo-1672851612770-f969b3efc02d',
        alt: 'Bosque nublado exuberante del Parque Natural Chicaque',
        badge: '#1B5E20',
        emoji: '🌿'
    },
    {
        id: 5,
        name: 'Cota-Bioparque',
        location: 'Cota, Cundinamarca',
        description: 'Espacio dedicado a la conservación de Fauna y Flora, donde se promueve la educación ambientl y el cuidado de la naturalez',
        category: 'Aventura',
        duration: '1–2 días',
        imageId: 'assets/img/BioparqueCota.jpe',
        alt: 'Escalador en las rocas de arenisca de Suesca',
        badge: '#E65100',
        emoji: '🧗'
    },
    {
        id: 6,
        name: 'Aguas Termales de Choachí',
        location: 'Choachí, Cundinamarca',
        description: 'Aguas termales minerales que brotan naturalmente a 36°C entre palmas y helechos. Siete piscinas escalonadas perfectas para la recuperación muscular y la desconexión total en plena montaña.',
        category: 'Bienestar',
        duration: '1 día',
        imageId: 'photo-1718627830055-fea8ac2c443d',
        alt: 'Piscinas termales naturales de Choachí rodeadas de selva',
        badge: '#00695C',
        emoji: '♨️'
    },
    {
        id: 7,
        name: 'Anapoima — El Paraíso Cálido',
        location: 'Anapoima, Cundinamarca',
        description: 'Con temperatura promedio de 28°C todo el año, Anapoima reúne fincas con piscinas naturales, gastronomía auténtica y el ritmo pausado del campo que revitaliza cuerpo y espíritu.',
        category: 'Descanso',
        duration: '2–3 días',
        imageId: 'photo-1560280450-bad2250e0852',
        alt: 'Piscina tropical en finca de Anapoima con ambiente paradisíaco',
        badge: '#F57F17',
        emoji: '☀️'
    },
    {
        id: 8,
        name: 'Tobia — Aventura Total',
        location: 'Nimaima, Cundinamarca',
        description: 'Rafting en aguas bravas del río Negro, rappel en cascadas de 40 m, torrentismo y caminatas por cañones tropicales. Tobia concentra en un solo lugar toda la adrenalina imaginable.',
        category: 'Aventura',
        duration: '1–2 días',
        imageId: 'photo-1631134953337-b660eda6e87f',
        alt: 'Cascadas y cañones tropicales de Tobia, Cundinamarca',
        badge: '#01579B',
        emoji: '🏄'
    },
    {
        id: 9,
        name: 'Villeta — Capital Panelera',
        location: 'Villeta, Cundinamarca',
        description: 'Ciudad caliente de espíritu festivo y tradición panelera. Sus alrededores guardan cascadas escondidas entre cafetales, trapiches coloniales y la gastronomía más auténtica del centro de Cundinamarca.',
        category: 'Cultura & Gastronomía',
        duration: '1–2 días',
        imageId: 'photo-1768407683153-214ba33ee9af',
        alt: 'Palmas y colinas verdes en los alrededores de Villeta',
        badge: '#558B2F',
        emoji: '🎋'
    },
    {
        id: 10,
        name: 'Laguna del Muña',
        location: 'Sibaté, Cundinamarca',
        description: 'Un lago artificial de 1.600 hectáreas enmarcado por montañas andinas. Punto de encuentro para deportes náuticos, avistamiento de aves migratorias y la contemplación del horizonte bogotano.',
        category: 'Naturaleza',
        duration: '½ día',
        imageId: 'photo-1655918916311-fa460d14838b',
        alt: 'Lago Muña rodeado de montañas y paisaje andino de Cundinamarca',
        badge: '#283593',
        emoji: '🦢'
    }
];

const whyData = [
    {
        icon: '🧭',
        title: 'Guías Especializados',
        desc: 'Expertos locales con profundo conocimiento del territorio y la cultura regional.'
    },
    {
        icon: '🛡️',
        title: 'Viajes Seguros',
        desc: 'Protocolo de seguridad certificado y seguros de viaje incluidos en todos los planes.'
    },
    {
        icon: '🌱',
        title: 'Turismo Sostenible',
        desc: 'Comprometidos con la conservación de los ecosistemas y el apoyo a las comunidades locales.'
    },
    {
        icon: '⭐',
        title: 'Experiencia Premium',
        desc: 'Más de 1.200 familias han disfrutado nuestros tours con calificación promedio de 4.9/5.'
    }
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function unsplash(id, w = 800, h = 600) {
    return `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;
}

// ── RENDER FUNCTIONS ──────────────────────────────────────────────────────────

function renderDestinations() {
    const container = document.getElementById('destinationsContainer');
    if (!container) return;

    container.innerHTML = destinations.map(dest => `
        <div class="col-md-6 col-lg-4">
            <div class="dest-card">
                <div class="card-img-wrapper">
                    <img src="${unsplash(dest.imageId, 600, 440)}" alt="${dest.alt}" loading="lazy">
                    <div class="card-img-overlay-gradient"></div>
                    <div class="card-badge">
                        <span style="background-color: ${dest.badge};">${dest.category}</span>
                    </div>
                    <div class="card-duration">
                        <span>⏱ ${dest.duration}</span>
                    </div>
                    <div class="card-emoji">${dest.emoji}</div>
                </div>
                <div class="card-body">
                    <div class="card-location">📍 ${dest.location}</div>
                    <h3 class="card-title">${dest.name}</h3>
                    <p class="card-desc">${dest.description}</p>
                    <button class="btn-reserve" data-destino="${dest.name}">🗓 Reservar Este Destino</button>
                </div>
            </div>
        </div>
    `).join('');

    // Event listeners para botones de reserva
    container.querySelectorAll('.btn-reserve').forEach(btn => {
        btn.addEventListener('click', function() {
            const destino = this.dataset.destino;
            document.getElementById('resDestino').value = destino;
            switchTab('reserve');
            document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function renderWhy() {
    const container = document.getElementById('whyContainer');
    if (!container) return;

    container.innerHTML = whyData.map(item => `
        <div class="col-md-6 col-lg-3">
            <div class="why-card">
                <div class="icon">${item.icon}</div>
                <div class="title">${item.title}</div>
                <p class="desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderFooterDestinos() {
    const col1 = document.getElementById('footerDestinos1');
    const col2 = document.getElementById('footerDestinos2');

    if (col1) {
        col1.innerHTML = destinations.slice(0, 5).map(d => `
            <div class="footer-link"><span>${d.emoji}</span> ${d.name}</div>
        `).join('');
    }

    if (col2) {
        col2.innerHTML = destinations.slice(5).map(d => `
            <div class="footer-link"><span>${d.emoji}</span> ${d.name}</div>
        `).join('');
    }
}

function renderDestinoOptions() {
    const select = document.getElementById('resDestino');
    if (!select) return;

    select.innerHTML = `
        <option value="">— Elige tu destino —</option>
        ${destinations.map(d => `
            <option value="${d.name}">${d.emoji} ${d.name} — ${d.location}</option>
        `).join('')}
    `;
}

// ── TAB SWITCHER ──────────────────────────────────────────────────────────────

function switchTab(tab) {
    const registerForm = document.getElementById('registerForm');
    const reserveForm = document.getElementById('reserveForm');
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    if (tab === 'register') {
        registerForm.style.display = 'block';
        reserveForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        reserveForm.style.display = 'block';
    }
}

// ── TIPO DE VIAJE ─────────────────────────────────────────────────────────────

function initTipoViaje() {
    const options = document.querySelectorAll('.tipo-option');
    options.forEach(opt => {
        opt.addEventListener('click', function() {
            options.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            const radio = this.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

// ── FORMS ─────────────────────────────────────────────────────────────────────

function initForms() {
    // Register
    const registerForm = document.getElementById('registerFormElement');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const alert = document.getElementById('registerAlert');
            alert.classList.remove('d-none');
            this.reset();
            setTimeout(() => alert.classList.add('d-none'), 6000);
        });
    }

    // Reserve
    const reserveForm = document.getElementById('reserveFormElement');
    if (reserveForm) {
        reserveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const alert = document.getElementById('reserveAlert');
            alert.classList.remove('d-none');
            this.reset();
            setTimeout(() => alert.classList.add('d-none'), 6000);
        });
    }

    // Switch to reserve
    document.getElementById('switchToReserve')?.addEventListener('click', () => switchTab('reserve'));
    document.getElementById('switchToRegister')?.addEventListener('click', () => switchTab('register'));

    // Set min date
    const fechaInput = document.getElementById('resFecha');
    if (fechaInput) {
        const today = new Date().toISOString().split('T')[0];
        fechaInput.setAttribute('min', today);
    }
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────────

function initNavbarScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// ── TAB SWITCHER EVENTS ──────────────────────────────────────────────────────

function initTabSwitcher() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    renderDestinations();
    renderWhy();
    renderFooterDestinos();
    renderDestinoOptions();
    initTipoViaje();
    initForms();
    initNavbarScroll();
    initTabSwitcher();
});