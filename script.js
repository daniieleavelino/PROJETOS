
        const SIGN = document.getElementById('sign');
        const POWER_BTN = document.getElementById('powerBtn');
        let isPoweredOn = false;
        let randomFlickerTimeout = null;
        let startupTimeouts = [];
        let currentPageId = 'home';

        // ------------------- LÓGICA DO MENU MOBILE -------------------
        function toggleMenu() {
            const menuBtn = document.getElementById('menuBtn');
            const navLinks = document.getElementById('navLinks');
            const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('nav-active');
            menuBtn.classList.toggle('active');
        }

        // Event listener para botão do menu
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menuBtn');
            if (menuBtn) {
                menuBtn.addEventListener('click', toggleMenu);
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
            // Efeito de flicker rápido no texto para simular instabilidade
            neonText.classList.add('flicker-effect');
            setTimeout(() => neonText.classList.remove('flicker-effect'), 70);
        }

        function runStartupSequence() {
            clearAllTimers();
            if (!SIGN) return;
            SIGN.classList.remove('neon-on');

            // Sequência de pisca ao ligar (mantida)
            let delay = 0;
            const steps = [50, 150, 300, 450, 600, 700];

            steps.forEach((time, index) => {
                const state = index % 2 === 0 ? 'add' : 'remove';
                const id = setTimeout(() => SIGN.classList[state]('neon-on'), time);
                startupTimeouts.push(id);
                delay = time;
            });

            // Liga definitivo e inicia flicker aleatório
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

        function togglePower() {
            if (!POWER_BTN) return;
            if (!isPoweredOn) {
                isPoweredOn = true;
                POWER_BTN.classList.add('active');
                const btnTextOn = POWER_BTN.querySelector('.btn-text');
                if (btnTextOn) btnTextOn.textContent = 'ONLINE'; else POWER_BTN.textContent = 'ONLINE';
                POWER_BTN.setAttribute('aria-pressed', 'true');
                // Apenas executa a sequência de startup se estiver na Home
                if (currentPageId === 'home') runStartupSequence();
            } else {
                isPoweredOn = false;
                POWER_BTN.classList.remove('active');
                const btnTextOff = POWER_BTN.querySelector('.btn-text');
                if (btnTextOff) btnTextOff.textContent = 'OFFLINE'; else POWER_BTN.textContent = 'OFFLINE';
                POWER_BTN.setAttribute('aria-pressed', 'false');
                clearAllTimers();
                if (SIGN) SIGN.classList.remove('neon-on');
                flicker();
            }
        }

        // ------------------- FUNÇÃO DE TROCA DE PÁGINA -------------------
        function handlePageChange(newId) {
            // Fecha o menu mobile se estiver aberto ao clicar em um link
            const menuBtn = document.getElementById('menuBtn');
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }

            if (newId === currentPageId) return; // Não faz nada se for a mesma página

            // MUDANÇA: Lógica para trocar o fundo
            const bgOverlay = document.querySelector('.bg-overlay');
            if (newId === 'home') {
                // Ao ir para Home, usa o fundo padrão (sua foto)
                bgOverlay.classList.remove('alt-bg');
                bgOverlay.classList.add('default-bg');
            } else {
                // Ao ir para outra seção, usa o fundo alternativo
                bgOverlay.classList.remove('default-bg');
                bgOverlay.classList.add('alt-bg');
            }

            const currentPage = document.getElementById(currentPageId);
            const nextPage = document.getElementById(newId);

            if (!currentPage || !nextPage) return;

            // 1. Remove a classe 'active' da página atual (inicia o fade-out/scale-down e visibility: hidden)
            currentPage.classList.remove('active');

            // 2. Espera o tempo da transição CSS (0.35s)
            setTimeout(() => {
                // 3. Adiciona a classe 'active' na nova página (inicia o fade-in/scale-up e visibility: visible)
                nextPage.classList.add('active');
                updatePageState(newId); // Atualiza o estado da aplicação e links
            }, 350); // Deve corresponder ao var(--transition-duration)
        }

        function updatePageState(id) {
            // 1. Remove o destaque de todos os links de navegação
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active-link'));

            // 2. Adiciona o destaque ao link correspondente
            const targetLink = document.getElementById(`link-${id}`);
            if (targetLink) {
                targetLink.classList.add('active-link');
            }

            currentPageId = id;
            const target = document.getElementById(id);

            // 3. Controle do Neon na Home
            if (SIGN) {
                if (id === 'home' && isPoweredOn) {
                    // Se voltar para a Home e estiver ligado, religa o neon
                    SIGN.classList.add('neon-on');
                    triggerRandomFlicker();
                } else {
                    // Se sair da Home, para o flicker
                    SIGN.classList.remove('neon-on');
                    clearAllTimers();
                }
            }

            // 4. Acessibilidade: foca no título da nova seção (usado para leitores de tela)
            const focusable = target.querySelector('.section-title, .neon-text');
            if (focusable) {
                setTimeout(() => {
                    // O contorno de foco visual foi removido no CSS para o .neon-text
                    if (typeof focusable.focus === 'function') focusable.focus();
                }, 0);
            }
        }


        // Garante que ao carregar a página, a Home seja exibida
        window.addEventListener('load', () => {
            const homePage = document.getElementById('home');
            homePage.classList.add('active');
            updatePageState('home');
        });

        // Event listeners para navegação com href
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const pageId = href.substring(1);
                        handlePageChange(pageId);
                    }
                });
            });
        });

        // ------------------- FUNÇÃO COPIAR EMAIL -------------------
       function copyEmail() {
    const email = 'contato@danieleavelino.dev';
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

