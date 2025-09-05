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
        
        // Hide any existing messages when showing step 1
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
    }
    
    function showStep2() {
        step1.classList.remove('active');
        step2.classList.add('active');
        populateConfirmation();
        
        // Hide any existing messages when showing step 2
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
    }
    
    function collectFormData() {
        formData = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            whatsapp: document.getElementById('whatsapp').value.trim()
        };
    }
    
    function populateConfirmation() {
        document.getElementById('confirmNome').value = formData.nome;
        document.getElementById('confirmEmail').value = formData.email;
        document.getElementById('confirmWhatsapp').value = formData.whatsapp;
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
    
    // Formatação do telefone
    document.getElementById('whatsapp').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        e.target.value = value;
    });
    
    // Formatação do telefone na etapa 2
    document.getElementById('confirmWhatsapp').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        e.target.value = value;
    });
    
    // Submissão do formulário
    async function submitForm() {
        const button = document.querySelector('#submitForm');
        const buttonText = document.querySelector('.button-text');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        
        // Reset messages
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
        
        // Create loading element
        const loading = document.createElement('span');
        loading.className = 'loading-spinner';
        loading.innerHTML = '⏳';
        loading.style.marginRight = '8px';
        loading.style.animation = 'spin 1s linear infinite';
        
        // Show loading
        if (buttonText) {
            buttonText.innerHTML = '⏳ Processando...';
        }
        button.disabled = true;
        
        // Collect form data from confirmation step
        const formData = {
            nome: document.getElementById('confirmNome').value,
            email: document.getElementById('confirmEmail').value,
            telefone: 55 + document.getElementById('confirmWhatsapp').value.replace(/\D/g, ''),
            timestamp: new Date().toISOString(),
            source: 'ebook_landing_page',
            lead_magnet: 'guia_afiliados_produtos_naturais'
        };
        
        try {
            // Simular envio para backend
            const response = await fetch('https://nodesapi.tecskill.com.br/webhook/4b5e947d-3132-4415-a82a-828348c9da9e/4b5e947d-3132-4415-a82a-828348c9da9e/MESSAGES_UPSERT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Hide loading and show success
                if (buttonText) {
                    buttonText.innerHTML = '<i class="fas fa-check"></i> Confirmar e Enviar';
                }
                button.disabled = false;
                
                if (successMessage) successMessage.style.display = 'block';
                form.reset();
                
                // Reset to step 1 after 3 seconds
                setTimeout(() => {
                    showStep1();
                }, 3000);
                
                // Google Analytics tracking (se implementado)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
                    });
                }
                
                // Facebook Pixel tracking (se implementado)
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'Lead');
                }
            } else {
                throw new Error('Erro no servidor');
            }
        } catch (error) {
            console.error('Erro:', error);
            if (errorMessage) errorMessage.style.display = 'block';
            
            // Reset button only on error
            if (buttonText) {
                buttonText.innerHTML = '<i class="fas fa-check"></i> Confirmar e Enviar';
            }
            button.disabled = false;
        }
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
