// VitaTop Landing Page - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const form = document.getElementById('leadForm');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextStepBtn = document.getElementById('nextStep');
    const backStepBtn = document.getElementById('backStep');
    const submitFormBtn = document.getElementById('submitForm');
    const inputs = form.querySelectorAll('input, select');
    
    // Dados do formulário
    let formData = {};
    
    // Validação em tempo real dos campos
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    // Navegação entre etapas
    nextStepBtn.addEventListener('click', function() {
        if (validateStep1()) {
            collectFormData();
            showStep2();
        }
    });
    
    backStepBtn.addEventListener('click', function() {
        showStep1();
    });
    
    // Submissão final
    submitFormBtn.addEventListener('click', function() {
        submitForm();
    });
    
    // Funções de navegação entre etapas
    function showStep1() {
        step1.classList.add('active');
        step2.classList.remove('active');
    }
    
    function showStep2() {
        step1.classList.remove('active');
        step2.classList.add('active');
        populateConfirmation();
    }
    
    function collectFormData() {
        formData = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            whatsapp: document.getElementById('whatsapp').value.trim()
        };
    }
    
    function populateConfirmation() {
        document.getElementById('confirmNome').textContent = formData.nome;
        document.getElementById('confirmEmail').textContent = formData.email;
        document.getElementById('confirmWhatsapp').textContent = formData.whatsapp;
    }
    
    function validateStep1() {
        let isValid = true;
        const step1Inputs = step1.querySelectorAll('input, select');
        
        step1Inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showNotification('Por favor, preencha todos os campos corretamente', 'error');
        }
        
        return isValid;
    }
    
    // Validação de campo individual
    function validateField(event) {
        const field = event.target;
        const value = field.value.trim();
        const fieldName = field.name;
        
        // Remove classes de erro anteriores
        field.classList.remove('error');
        
        // Validações específicas
        switch(fieldName) {
            case 'nome':
                if (value.length < 2) {
                    showFieldError(field, 'Nome deve ter pelo menos 2 caracteres');
                    return false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError(field, 'Por favor, insira um e-mail válido');
                    return false;
                }
                break;
                
            case 'whatsapp':
                const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
                if (!phoneRegex.test(value.replace(/\D/g, ''))) {
                    showFieldError(field, 'Por favor, insira um WhatsApp válido');
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    // Mostrar erro no campo
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove mensagem de erro anterior
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Adiciona nova mensagem de erro
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    // Limpar erro do campo
    function clearFieldError(event) {
        const field = event.target;
        field.classList.remove('error');
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    // Formatação automática do WhatsApp
    const whatsappInput = document.getElementById('whatsapp');
    whatsappInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = value;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
        }
        
        e.target.value = value;
    });
    
    // Submissão do formulário
    async function submitForm() {
        // Mostra estado de loading
        submitFormBtn.classList.add('loading');
        submitFormBtn.disabled = true;
        submitFormBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        try {
            // Prepara dados para envio
            const data = {
                ...formData,
                timestamp: new Date().toISOString(),
                source: 'landing-page-profissionais'
            };
            
            // Simula envio (substitua pela sua API real)
            await simulateFormSubmission(data);
            
            // Sucesso
            showNotification('🎉 Parabéns! Seu eBook será enviado em até 5 minutos!', 'success');
            
            // Reset do formulário
            form.reset();
            showStep1();
            
            // Analytics/Tracking (opcional)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'engagement',
                    event_label: 'lead_form_profissionais'
                });
            }
            
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            showNotification('Ops! Algo deu errado. Tente novamente.', 'error');
        } finally {
            // Remove estado de loading
            submitFormBtn.classList.remove('loading');
            submitFormBtn.disabled = false;
            submitFormBtn.innerHTML = '<i class="fas fa-check"></i> Confirmar e Enviar';
        }
    }
    
    // Simula envio do formulário (substitua pela sua API real)
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Aqui você faria a chamada real para sua API
                console.log('Dados do formulário:', data);
                
                // Simula sucesso 90% das vezes
                if (Math.random() > 0.1) {
                    resolve(data);
                } else {
                    reject(new Error('Erro simulado'));
                }
            }, 2000);
        });
    }
    
    // Sistema de notificações
    function showNotification(message, type = 'info') {
        // Remove notificação anterior se existir
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Cria nova notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Estilos da notificação
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            maxWidth: '400px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        });
        
        // Cores baseadas no tipo
        switch(type) {
            case 'success':
                notification.style.background = '#10b981';
                break;
            case 'error':
                notification.style.background = '#ef4444';
                break;
            case 'warning':
                notification.style.background = '#f59e0b';
                break;
            default:
                notification.style.background = '#3b82f6';
        }
        
        // Adiciona ao DOM
        document.body.appendChild(notification);
        
        // Anima entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove após 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy loading para imagens (se houver)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Prevenção de spam no formulário
    let lastSubmissionTime = 0;
    const MIN_SUBMISSION_INTERVAL = 5000; // 5 segundos
    
    form.addEventListener('submit', function(e) {
        const now = Date.now();
        if (now - lastSubmissionTime < MIN_SUBMISSION_INTERVAL) {
            e.preventDefault();
            showNotification('Aguarde alguns segundos antes de enviar novamente.', 'warning');
            return false;
        }
        lastSubmissionTime = now;
    });
    
    // Melhoria de acessibilidade
    document.addEventListener('keydown', function(e) {
        // ESC fecha notificações
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.remove();
            }
        }
    });
    
    // Analytics de tempo na página
    let startTime = Date.now();
    let hasScrolled = false;
    let hasInteracted = false;
    
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            trackEvent('page_scroll');
        }
    });
    
    form.addEventListener('focus', () => {
        if (!hasInteracted) {
            hasInteracted = true;
            trackEvent('form_focus');
        }
    }, true);
    
    // Tracking de eventos (opcional)
    function trackEvent(eventName, properties = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'engagement',
                ...properties
            });
        }
        
        // Log para desenvolvimento
        console.log(`Event tracked: ${eventName}`, properties);
    }
    
    // Track tempo na página ao sair
    window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', {
            value: timeOnPage
        });
    });
    
    console.log('VitaTop Landing Page carregada com sucesso!');
});
