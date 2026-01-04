const SIGN = document.getElementById('sign');
const POWER_BTN = document.getElementById('powerBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

let isPoweredOn = false;
let randomFlickerTimeout = null;
let startupTimeouts = [];
let currentPageId = 'home';

// ------------------- LÓGICA DO MENU MOBILE -------------------
// --- LÓGICA DO MENU MOBILE UNIFICADA (CORRIGIDA) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active'); // Abre/fecha o menu
            menuBtn.classList.toggle('active');  // <--- ESSA LINHA FAZ A COR MUDAR
            
            const isExpanded = navLinks.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Fechar ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active'); // <--- Remove a cor ao clicar no link
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Fechar ao clicar fora do menu
        document.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active'); // <--- Remove a cor ao clicar fora
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    }
});

// ------------------- FUNÇÕES DE EFEITO NEON -------------------
function clearAllTimers() {
    if (randomFlickerTimeout) clearTimeout(randomFlickerTimeout);
    startupTimeouts.forEach(id => clearTimeout(id));
    startupTimeouts = [];
}

function flicker() {
    const neonText = SIGN ? SIGN.querySelector('.neon-text') : null;
    if (!neonText) return;
    neonText.classList.add('flicker-effect');
    setTimeout(() => neonText.classList.remove('flicker-effect'), 70);
}

function runStartupSequence() {
    clearAllTimers();
    if (!SIGN) return;
    SIGN.classList.remove('neon-on');
    let delay = 0;
    const steps = [50, 150, 300, 450, 600, 700];

    steps.forEach((time, index) => {
        const state = index % 2 === 0 ? 'add' : 'remove';
        const id = setTimeout(() => SIGN.classList[state]('neon-on'), time);
        startupTimeouts.push(id);
        delay = time;
    });

    const finalId = setTimeout(() => {
        if (isPoweredOn) {
            SIGN.classList.add('neon-on');
            triggerRandomFlicker();
        }
    }, delay + 150);
    startupTimeouts.push(finalId);
}

function triggerRandomFlicker() {
    if (!isPoweredOn || !SIGN || !SIGN.classList.contains('neon-on')) return;
    const timeToNext = Math.random() * 7000 + 3000;
    randomFlickerTimeout = setTimeout(() => {
        flicker();
        if (Math.random() < 0.33) setTimeout(() => flicker(), 250);
        triggerRandomFlicker();
    }, timeToNext);
}

// LÓGICA DO INTERRUPTOR
if (POWER_BTN) {
    POWER_BTN.addEventListener('change', () => {
        if (POWER_BTN.checked) {
            isPoweredOn = true;
            if (currentPageId === 'home') runStartupSequence();
        } else {
            isPoweredOn = false;
            clearAllTimers();
            if (SIGN) SIGN.classList.remove('neon-on');
            flicker();
        }
    });
}

// ------------------- NAVEGAÇÃO ENTRE PÁGINAS -------------------
function handlePageChange(newId) {
    if (newId === currentPageId) return;

    const bgOverlay = document.querySelector('.bg-overlay');
    if (newId === 'home') {
        bgOverlay.classList.remove('alt-bg');
        bgOverlay.classList.add('default-bg');
    } else {
        bgOverlay.classList.remove('default-bg');
        bgOverlay.classList.add('alt-bg');
    }

    const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(newId);

    if (currentPage && nextPage) {
        currentPage.classList.remove('active');
        setTimeout(() => {
            nextPage.classList.add('active');
            updatePageState(newId);
        }, 350);
    }
}

function updatePageState(id) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active-link'));
    const targetLink = document.getElementById(`link-${id}`);
    if (targetLink) targetLink.classList.add('active-link');

    currentPageId = id;

    if (SIGN) {
        if (id === 'home' && isPoweredOn) {
            SIGN.classList.add('neon-on');
            triggerRandomFlicker();
        } else {
            SIGN.classList.remove('neon-on');
            clearAllTimers();
        }
    }
}

// Event Listeners de inicialização
document.addEventListener('DOMContentLoaded', () => {
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                handlePageChange(href.substring(1));
            }
        });
    });

    // Inicia na Home
    const homePage = document.getElementById('home');
    if (homePage) {
        homePage.classList.add('active');
        updatePageState('home');
    }
});

// Função de copiar e-mail
function copyEmail() {
    const email = 'daniele.avelino@outlook.com';
    const btn = document.querySelector('.btn-copy-pill');
    const btnText = btn.querySelector('span');
    navigator.clipboard.writeText(email).then(() => {
        const originalText = btnText.textContent;
        btn.classList.add('copied');
        btnText.textContent = 'Copiado!';
        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.textContent = originalText;
        }, 2000);
    });
}  