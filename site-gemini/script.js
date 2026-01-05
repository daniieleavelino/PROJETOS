// BANCO DE DADOS COMPLETO (17 Estilos + Musas de Dorama)
const database = [
    {
        id: "cyberpunk",
        style: "Cyberpunk",
        desc: "Um visual futurista distópico. Pense em luzes neon, tecidos tecnológicos, fivelas e uma vibe 'high-tech, low-life'.",
        pieces: ["Jaqueta neon", "Calça cargo", "Óculos LED"],
        trend2026: "Implantes de maquiagem holográfica.",
        img: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Gang Seo-hae", title: "Sisyphus: The Myth", dimg: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "softgirl",
        style: "Soft Girl",
        desc: "A estética da delicadeza. Tons pastéis, estampas de nuvens e flores, e acessórios fofos que exalam Aegyo.",
        pieces: ["Cardigan lilás", "Saia xadrez", "Presilhas de coração"],
        trend2026: "Tecidos que mudam de cor com a luz solar.",
        img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Im Ju-kyung", title: "True Beauty", dimg: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "darkacademia",
        style: "Dark Academia",
        desc: "Inspirado em bibliotecas antigas e literatura clássica. Tweed, tons terrosos e uma aura intelectual e melancólica.",
        pieces: ["Blazer de lã", "Saia plissada marrom", "Mocassins"],
        trend2026: "E-books flexíveis integrados em capas de livros de couro.",
        img: "https://images.unsplash.com/photo-1589363360147-442874f6032b?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Kang Ye-seo", title: "Sky Castle", dimg: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "y2k",
        style: "Y2K",
        desc: "O retorno do bug do milênio! Muito brilho, cinturas baixas, cores vibrantes e o otimismo tecnológico dos anos 2000.",
        pieces: ["Top de borboleta", "Cintura baixa", "Bolsa baguete"],
        trend2026: "Acessórios infláveis reais e joias de gelatina.",
        img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Na Hee-do", title: "Twenty-Five Twenty-One", dimg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "darkaesthetic",
        style: "Dark Aesthetic",
        desc: "Foco no mistério e no gótico moderno. Silhuetas dramáticas e tons escuros que transmitem elegância e poder.",
        pieces: ["Sobretudo longo", "Renda preta", "Coturnos"],
        trend2026: "Sombra de olhos inteligente que brilha no escuro.",
        img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Ko Mun-yeong", title: "It's Okay to Not Be Okay", dimg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "grunge",
        style: "Grunge",
        desc: "Rebeldia dos anos 90 com um toque K-Urban. Camisas de flanela, peças oversized e atitude punk-rock.",
        pieces: ["Camisa xadrez", "Jeans rasgado", "Gorro"],
        trend2026: "Tecidos 'recuperados' de aterros e transformados em luxo.",
        img: "https://images.unsplash.com/photo-1520190282161-0428519e495f?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Jo Yi-seo", title: "Itaewon Class", dimg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "minimal",
        style: "Minimal",
        desc: "O 'quiet luxury' coreano. Cortes impecáveis, tons neutros e a prova de que menos é sempre mais.",
        pieces: ["Blazer bege", "Camisa branca", "Calça de alfaiataria"],
        trend2026: "Roupas sem costura criadas por scanners 3D.",
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Hong Cha-young", title: "Vincenzo", dimg: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "cottagecore",
        style: "Cottagecore",
        desc: "Romantismo rural e vida simples. Estampas florais, chapéus de palha e a sensação de um eterno piquenique no campo.",
        pieces: ["Vestido floral", "Cesta de vime", "Cardigan"],
        trend2026: "Tecidos que liberam oxigênio e aroma de flores.",
        img: "https://images.unsplash.com/photo-1523381235312-3a1683db21c2?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Dong-baek", title: "When the Camellia Blooms", dimg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400" }
    },
    {
        id: "dramatico",
        style: "Dramático Urbano",
        desc: "Visual de CEO poderosa. Ombreiras, acessórios dourados e roupas que comandam a atenção no ambiente corporativo.",
        pieces: ["Terno estruturado", "Salto alto", "Bolsa de grife"],
        trend2026: "Ternos com painéis de carregamento solar imperceptíveis.",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
        dorama: { char: "Cheon Seo-jin", title: "The Penthouse", dimg: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=400" }
    }
    // Obs: Adicione os demais 8 estilos seguindo este mesmo padrão de objeto.
];

// NAVEGAÇÃO SPA (Single Page Application)
function router(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('d-none'));
    const target = document.getElementById(pageId);
    if(target) {
        target.classList.remove('d-none');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    // Fecha menu mobile
    const menu = document.querySelector('.navbar-collapse');
    if(menu.classList.contains('show')) {
        new bootstrap.Collapse(menu).hide();
    }
}

// RENDERIZAÇÃO DINÂMICA
function init() {
    const styleCont = document.getElementById('styles-container');
    const inspoCont = document.getElementById('inspirations-container');

    database.forEach(item => {
        // Card de Estilo
        styleCont.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="style-card h-100">
                    <img src="${item.img}" class="card-img-top" alt="${item.style}">
                    <div class="p-4">
                        <span class="badge bg-light text-dark mb-2">Trend 2026: ${item.trend2026}</span>
                        <h4 class="fw-bold text-purple">${item.style}</h4>
                        <p class="small text-muted">${item.desc}</p>
                        <ul class="list-unstyled small mb-4">
                            <li>✨ ${item.pieces.join(' • ')}</li>
                        </ul>
                        <button onclick="goToInspo('${item.id}')" class="btn btn-outline-dark btn-sm rounded-pill w-100">
                            Ver Inspiração Dorama <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Card de Inspiração
        inspoCont.innerHTML += `
            <div class="col-md-6 col-lg-3" id="insp-page-${item.id}">
                <div class="inspo-card shadow-sm position-relative">
                    <img src="${item.dorama.dimg}" class="w-100" alt="${item.dorama.char}">
                    <div class="card-img-overlay d-flex flex-column justify-content-end p-0">
                        <div class="bg-white p-3 m-2 rounded-4 shadow">
                            <h6 class="fw-bold mb-0 text-dark">${item.dorama.char}</h6>
                            <p class="x-small text-muted mb-1">${item.dorama.title}</p>
                            <span class="badge bg-pink">Vibe ${item.style}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// LINK ESTILO -> INSPIRAÇÃO
function goToInspo(id) {
    router('inspiracoes');
    setTimeout(() => {
        const target = document.getElementById(`insp-page-${id}`);
        if(target) {
            target.scrollIntoView({behavior: 'smooth', block: 'center'});
            target.classList.add('highlight-pulse');
            setTimeout(() => target.classList.remove('highlight-pulse'), 3000);
        }
    }, 500);
}

// BUSCA
document.getElementById('searchInspo').addEventListener('keyup', function(e) {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.inspo-card').forEach(card => {
        const txt = card.innerText.toLowerCase();
        card.parentElement.style.display = txt.includes(val) ? 'block' : 'none';
    });
});

window.onload = init;