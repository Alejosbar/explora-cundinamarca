

// ── DATOS ──────────────────────────────────────────────────────────────────────

const destinations = [
    {
        id: 1,
        name: 'Parque Montaña del Oso',
        location: 'Cota, Cundinamarca',
        description: 'Espacio natural de Cota con senderos, vegetación y paisajes de montaña para disfrutar de una caminata tranquila cerca de la Sabana.',
        category: 'Naturaleza',
        duration: '1 día',
        image: 'img/Parque montaña del oso .JPG_',
        alt: 'Paisaje del Parque Montaña del Oso en Cota',
        badge: '#0B5E20',
        emoji: '💧'
    },
    {
        id: 2,
        name: 'Castillo Marroquín',
        location: 'Chía, Cundinamarca',
        description: 'Construcción de estilo medieval ubicada en Chía, reconocida por sus torres, jardines y valor histórico y arquitectónico.',
        category: 'Historia & Arquitectura',
        duration: '½ día',
        image: 'img/Castillo-marroqui.jpeg',
        alt: 'Castillo Marroquín en Chía',
        badge: '#0277BD',
        emoji: '🌊'
    },
    {
        id: 3,
        name: 'Plaza de los Comuneros',
        location: 'Zipaquirá, Cundinamarca',
        description: 'Plaza principal de Zipaquirá, rodeada de arquitectura colonial y espacios representativos de la vida cultural del municipio.',
        category: 'Cultura & Historia',
        duration: '1 día',
        image: 'img/Plaza de los comuneros zipa .JPG',
        alt: 'Plaza de los Comuneros en Zipaquirá',
        badge: '#6A1B9A',
        emoji: '🏛️'
    },
    {
        id: 4,
        name: 'Centro Cultural y de Convenciones',
        location: 'Cajicá, Cundinamarca',
        description: 'Espacio de Cajicá destinado a actividades culturales, artísticas, académicas y eventos de encuentro para la comunidad.',
        category: 'Cultura',
        duration: '1 día',
        image: 'img/Centro-convenciones-cajica.jpeg',
        alt: 'Centro Cultural y de Convenciones de Cajicá',
        badge: '#1B5E20',
        emoji: '🌿'
    },
    {
        id: 5,
        name: 'Termales de Tabio',
        location: 'Tabio, Cundinamarca',
        description: 'Destino de bienestar reconocido por sus aguas termales y por el entorno natural que rodea este municipio de la Sabana Centro.',
        category: 'Bienestar',
        duration: '1–2 días',
        image: 'img/Termales de tabio .JPG',
        alt: 'Termales de Tabio',
        badge: '#E65100',
        emoji: '🧗'
    },
    {
        id: 6,
        name: 'Jardín Botánico de Tabio',
        location: 'Tabio, Cundinamarca',
        description: 'Espacio dedicado a la conservación y el reconocimiento de la flora local, ideal para caminar y conectar con la naturaleza de Tabio.',
        category: 'Naturaleza',
        duration: '1 día',
        image: 'img/Jardín botánico de tabio .JPG',
        alt: 'Jardín Botánico de Tabio',
        badge: '#00695C',
        emoji: '♨️'
    },
    {
        id: 7,
        name: 'Peña de Juaica',
        location: 'Tabio, Cundinamarca',
        description: 'Montaña emblemática de Tabio, apreciada por sus paisajes, sus caminos de ascenso y las vistas panorámicas de la Sabana.',
        category: 'Aventura & Naturaleza',
        duration: '1 día',
        image: 'img/Peña de juaica tabio .JPG',
        alt: 'Peña de Juaica en Tabio',
        badge: '#558B2F',
        emoji: '⛰️'
    },
    {
        id: 8,
        name: 'Alto de la Cruz',
        location: 'Cota, Cundinamarca',
        description: 'Mirador de Cota ubicado en la montaña, con una cruz blanca y vistas del paisaje natural que rodea el municipio.',
        category: 'Naturaleza',
        duration: '½ día',
        image: 'img/Alto de la cruz cota.JPG',
        alt: 'Alto de la Cruz en Cota',
        badge: '#01579B',
        emoji: '✝️'
    },
    {
        id: 9,
        name: 'Estación del Tren',
        location: 'Zipaquirá, Cundinamarca',
        description: 'Antigua estación ferroviaria de Zipaquirá, donde se conserva una locomotora y parte de la memoria del transporte regional.',
        category: 'Historia',
        duration: '½ día',
        image: 'img/Estación del tren zipa .JPG',
        alt: 'Estación del tren de Zipaquirá',
        badge: '#558B2F',
        emoji: '🚂'
    },
    {
        id: 10,
        name: 'Centro Histórico de Zipaquirá',
        location: 'Zipaquirá, Cundinamarca',
        description: 'Conjunto de calles, plazas y casas tradicionales que conserva la arquitectura y la memoria histórica de Zipaquirá.',
        category: 'Cultura & Historia',
        duration: '½ día',
        image: 'img/Centro histórico zipa.JPG',
        alt: 'Centro histórico de Zipaquirá',
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

// ── RENDER FUNCTIONS ──────────────────────────────────────────────────────────

function renderDestinations() {
    const container = document.getElementById('destinationsContainer');
    if (!container) return;

    container.innerHTML = destinations.map(dest => `
        <div class="col-md-6 col-lg-4">
            <div class="dest-card">
                <div class="card-img-wrapper">
                    <img src="${dest.image}" alt="${dest.alt}" loading="lazy">
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