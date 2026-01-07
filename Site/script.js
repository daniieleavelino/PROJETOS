// ==================== BANCO DE DADOS DE ESTILOS ====================
// Array contendo 20 estilos aesthetic com suas características e inspirações de doramas
const database = [
    {
        id: "korean-aesthetic",
        style: "Korean Aesthetic",
        desc: "O equilíbrio perfeito entre o minimalismo moderno e a sofisticação de Seoul. Uma estética polida e atemporal.",
        pieces: ["Blazer Oversized", "Tênis Plataforma", "Bolsa Baguete"],
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500",
        dorama: { char: "Hong Cha-young", title: "Vincenzo", dimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
    },
    {
        id: "japandi",
        style: "Japandi",
        desc: "A fusão serena do minimalismo japonês com a funcionalidade escandinava. Tons terrosos e orgânicos.",
        pieces: ["Linho Rústico", "Sandálias de Tiras", "Tons de Areia"],
        img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=500",
        dorama: { char: "Yoo Na-bi", title: "Nevertheless", dimg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400" }
    },
    {
        id: "cyberpunk",
        style: "Cyberpunk",
        desc: "Um visual futurista distópico. Pense em luzes neon, tecidos tecnológicos e uma vibe high-tech.",
        pieces: ["Jaqueta neon", "Calça cargo", "Óculos LED"],
        img: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=500",
        dorama: { char: "Gang Seo-hae", title: "Sisyphus: The Myth", dimg: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=400" }
    },
    {
        id: "vaporwave",
        style: "Vaporwave",
        desc: "Nostalgia digital dos anos 90. Glitch art, estátuas gregas e tons de rosa e ciano neon.",
        pieces: ["Camisa Estampada", "Óculos Retrô", "Cores Pastel Neon"],
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500",
        dorama: { char: "Baek Yi-jin", title: "Twenty-Five Twenty-One", dimg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400" }
    },
    {
        id: "y2k",
        style: "Y2K",
        desc: "O otimismo vibrante dos anos 2000. Brilhos, cinturas baixas e estéticas futuristas retrô.",
        pieces: ["Top Borboleta", "Saia Plissada", "Bolsa Baguette"],
        img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=500",
        dorama: { char: "Na Hee-do", title: "Twenty-Five Twenty-One", dimg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400" }
    },
    {
        id: "dark-aesthetic",
        style: "Dark Aesthetic",
        desc: "Elegância sombria e gótica moderna. Rendas pretas e silhuetas dramáticas com mistério.",
        pieces: ["Sobretudo Preto", "Coturnos", "Correntes Prateadas"],
        img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=500",
        dorama: { char: "Ko Mun-yeong", title: "It's Okay to Not Be Okay", dimg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400" }
    },
    {
        id: "softgirl",
        style: "Soft Girl",
        desc: "A estética da delicadeza extrema. Tons pastéis e acessórios que transmitem doçura.",
        pieces: ["Cardigan lilás", "Presilhas de pérola", "Meias Brancas"],
        img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=500",
        dorama: { char: "Im Ju-kyung", title: "True Beauty", dimg: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=400" }
    },
    {
        id: "grunge",
        style: "Grunge",
        desc: "Rebeldia urbana e conforto desleixado. Camisas de flanela e atitude punk moderna.",
        pieces: ["Camisa Xadrez", "Calça Rasgada", "Tênis surrado"],
        img: "https://images.unsplash.com/photo-1520190282161-0428519e495f?q=80&w=500",
        dorama: { char: "Jo Yi-seo", title: "Itaewon Class", dimg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400" }
    },
    {
        id: "indie",
        style: "Indie",
        desc: "Individualidade e cores retrô. Uma mistura vibrante de vintage com atitude moderna.",
        pieces: ["Bucket Hat", "Calça Patchwork", "Óculos Coloridos"],
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500",
        dorama: { char: "Kim Mi-so", title: "Secretary Kim", dimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
    },
    {
        id: "minimal",
        style: "Minimal",
        desc: "O luxo silencioso. Cortes impecáveis e tons neutros que provam que menos é mais.",
        pieces: ["Alfaiataria", "Cores Neutras", "Camisa Branca"],
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500",
        dorama: { char: "Yoon Hye-jin", title: "Hometown Cha-Cha-Cha", dimg: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=400" }
    },
    {
        id: "retro",
        style: "Retro",
        desc: "Nostalgia charmosa das décadas passadas. Cores quentes e cortes clássicos de Seoul.",
        pieces: ["Pólo Vintage", "Saia Midi", "Lenços"],
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500",
        dorama: { char: "Sung Deok-mi", title: "Her Private Life", dimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
    },
    {
        id: "gothic",
        style: "Gothic",
        desc: "Elegância sombria. Rendas pretas e silhuetas dramáticas para uma alma misteriosa.",
        pieces: ["Corset", "Rendas", "Plataformas"],
        img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=500",
        dorama: { char: "Ko Mun-yeong", title: "It's Okay", dimg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400" }
    },
    {
        id: "kawaii",
        style: "Kawaii",
        desc: "Fofura em cada detalhe. Personagens, cores vibrantes e alegria no visual.",
        pieces: ["Suéter Animado", "Meias 7/8", "Acessórios de Pelúcia"],
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500",
        dorama: { char: "Kim Bok-joo", title: "Weightlifting Fairy", dimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
    },
    {
        id: "cottagecore",
        style: "Cottagecore",
        desc: "Vida simples e camponesa. Estampas florais e tecidos naturais para almas românticas.",
        pieces: ["Vestido Floral", "Cesta de Vime", "Chapéu de Palha"],
        img: "https://images.unsplash.com/photo-1523381235312-3a1683db21c2?q=80&w=500",
        dorama: { char: "Dong-baek", title: "Camellia Blooms", dimg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400" }
    },
    {
        id: "dark-academia",
        style: "Dark Academia",
        desc: "Intelectualismo clássico. Marrons e xadrez inspirados em bibliotecas antigas.",
        pieces: ["Blazer de Lã", "Mocassim", "Saia Xadrez"],
        img: "https://images.unsplash.com/photo-1589363360147-442874f6032b?q=80&w=500",
        dorama: { char: "Kang Ye-seo", title: "Sky Castle", dimg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400" }
    },
    {
        id: "light-academia",
        style: "Light Academia",
        desc: "O lado ensolarado do estudo. Foco em museus e artes clássicas com cores claras.",
        pieces: ["Suéter Tricô", "Saia Bege", "Boina"],
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=500",
        dorama: { char: "Ji-eun", title: "Full House", dimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
    },
    {
        id: "techwear",
        style: "Techwear",
        desc: "Funcionalidade urbana extrema. Roupas projetadas para durar em qualquer cenário.",
        pieces: ["Colete Utilitário", "Cintos Táticos", "Máscara"],
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500",
        dorama: { char: "Seo Ah-ri", title: "Celebrity", dimg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400" }
    },
    {
        id: "neo-futurismo",
        style: "Neo-futurismo",
        desc: "Linhas arrojadas e materiais inovadores. A moda que antecipa o amanhã de Seoul.",
        pieces: ["Prateado", "Metálico", "Botas Transparentes"],
        img: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=500",
        dorama: { char: "Seo Ah-ri", title: "Celebrity", dimg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400" }
    },
    {
        id: "dramatico-urbano",
        style: "Dramático Urbano",
        desc: "A força da mulher de negócios. Ombreiras marcadas e presença marcante.",
        pieces: ["Terno Estruturado", "Scarpin", "Joias de Ouro"],
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=500",
        dorama: { char: "Cheon Seo-jin", title: "The Penthouse", dimg: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=400" }
    },
    {
        id: "fairycore",
        style: "Fairycore",
        desc: "Magia traduzida em moda. Tecidos translúcidos e tons de florestas encantadas.",
        pieces: ["Corselete", "Saia Tule", "Flores"],
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500",
        dorama: { char: "Jin Seon-mi", title: "Korean Odyssey", dimg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" }
    },
    
];

// ==================== SISTEMA DE ROTEAMENTO SPA ====================
// Função para trocar entre seções da página sem recarregar
function router(sectionId) {
    // Esconder todas as secções
    document.querySelectorAll('.page-section').forEach(s => s.classList.add('d-none'));
    
    // Mostrar secção selecionada
    const target = document.getElementById(sectionId);
    if(target) target.classList.remove('d-none');
    
    // Fechar Menu Mobile automaticamente
    const menu = document.getElementById('navbarNav');
    if(menu && menu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
        bsCollapse.hide();
    }
    
    window.scrollTo(0, 0);
}

// ==================== INTERAÇÕES DO MENU ====================
// Fechar menu ao clicar fora
document.addEventListener('click', function (event) {
    const menu = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');
    if (menu && menu.classList.contains('show') && !menu.contains(event.target) && !toggler.contains(event.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
        bsCollapse.hide();
    }
});

// ==================== RENDERIZAÇÃO DOS CARDS ====================
// Função para inicializar e renderizar todos os cards de estilos e inspirações
function init() {
    const styleCont = document.getElementById('styles-container');
    const inspoCont = document.getElementById('inspirations-container');
    
    if(!styleCont || !inspoCont) return;

    const colors = ['#FFB7B2', '#C7B8EA', '#B2F2BB', '#D0EBFF', '#FFF3BF'];

    database.forEach((item, index) => {
        const borderCol = colors[index % colors.length];

        // Cards de Estilo (Página Inicial)
        styleCont.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-5 d-flex">
                <div class="style-card w-100 shadow-sm border-0 d-flex flex-column">
                    <img src="${item.img}" class="card-img-top" alt="${item.style}">
                    <div class="p-4 flex-grow-1 d-flex flex-column">
                        <span class="badge rounded-pill mb-2 align-self-start" style="background-color: ${borderCol}; color: #333">${item.style}</span>
                        <h4 class="fw-bold text-purple">${item.style}</h4>
                        <p class="small text-muted mb-3 flex-grow-1">${item.desc}</p>
                        <div class="mb-3">
                            <small class="fw-bold d-block text-uppercase text-secondary" style="font-size: 0.65rem;">Peças-chave:</small>
                            <span class="text-secondary small">${item.pieces.join(' • ')}</span>
                        </div>
                        <button onclick="goToInspo('${item.id}')" class="btn btn-outline-dark btn-sm rounded-pill w-100 mt-auto">
                            Ver Inspiração <i class="bi bi-heart-fill ms-1 text-pink"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Cards de Inspiração (Página Inspirações)
        inspoCont.innerHTML += `
            <div class="col-md-6 col-lg-3 mb-4 d-flex" id="insp-page-${item.id}">
                <div class="inspo-card-v2 bg-white rounded-4 shadow-sm overflow-hidden w-100 d-flex flex-column">
                    <div class="p-2 text-center bg-light fw-bold text-purple x-small text-uppercase">${item.style}</div>
                    <div class="overflow-hidden" style="height: 320px;">
                        <img src="${item.dorama.dimg}" class="w-100 h-100 object-fit-cover transition-img" alt="${item.dorama.char}">
                    </div>
                    <div class="p-3 text-center mt-auto">
                        <h6 class="fw-bold mb-0 text-dark">${item.dorama.char}</h6>
                        <p class="x-small text-muted mb-0">${item.dorama.title}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// ==================== NAVEGAÇÃO INTERNA ====================
// Função para navegar de um estilo para sua inspiração correspondente
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

// ==================== FUNCIONALIDADE DE BUSCA ====================
// Busca em tempo real na página de inspirações
const searchInput = document.getElementById('searchInspo');
if(searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        const val = e.target.value.toLowerCase();
        document.querySelectorAll('#inspirations-container > div').forEach(card => {
            const txt = card.textContent.toLowerCase();
            card.style.display = txt.includes(val) ? 'flex' : 'none';
        });
    });
}

// ==================== INICIALIZAÇÃO DA APLICAÇÃO ====================
// Executar quando a página carregar completamente
window.onload = init;