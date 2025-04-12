// Funciones principales para el sitio web
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar navegación responsive
    initResponsiveNav();

    // Inicializar formularios
    initForms();

    // Inicializar efectos de scroll
    initScrollEffects();

    // Inicializar lazy loading de imágenes
    initLazyLoading();

    // Inicializar acordeón FAQ
    initAccordion();
});

// Navegación responsive
function initResponsiveNav() {
    const nav = document.querySelector('.navbar-menu');
    if (!nav) return;

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.innerHTML = '☰';

    const navElement = document.querySelector('.navbar');
    if (!navElement) return;

    // Toggle menú
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
        menuButton.setAttribute('aria-expanded', nav.classList.contains('show'));
    });

    // Cerrar menú al hacer click en un enlace
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Cerrar menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    navElement.insertBefore(menuButton, nav);
    menuButton.setAttribute('aria-expanded', 'false');
}

// Manejo de formularios
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);

        // Validación en tiempo real
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
        });
    });
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    try {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Enviando...';

        const response = await fetch('/procesar-cotizacion.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            showNotification('success', result.message);
            form.reset();
        } else {
            showNotification('error', result.message);
            if (result.errors) {
                result.errors.forEach(error => {
                    const input = form.querySelector(`[name="${error.field}"]`);
                    if (input) showFieldError(input, error.message);
                });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('error', 'Hubo un error al enviar el formulario');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Enviar';
    }
}

function validateField(event) {
    const input = event.target;
    const value = input.value.trim();

    clearFieldError(input);

    if (input.required && !value) {
        showFieldError(input, 'Este campo es requerido');
        return false;
    }

    if (input.type === 'email' && value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showFieldError(input, 'Por favor ingrese un email válido');
        return false;
    }

    if (input.type === 'tel' && value && !value.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)) {
        showFieldError(input, 'Por favor ingrese un teléfono válido');
        return false;
    }

    return true;
}

function showFieldError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    input.classList.add('error');
    input.parentNode.appendChild(errorDiv);
}

function clearFieldError(input) {
    const errorDiv = input.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
        input.classList.remove('error');
    }
}

// Acordeón FAQ
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion details');
    accordionItems.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) otherItem.open = false;
                });
            }
        });
    });
}

// Sistema de notificaciones
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Efectos de scroll
function initScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Efecto de header
        if (currentScroll > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Animación de elementos al hacer scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => observer.observe(element));
    }
}

// Lazy loading de imágenes
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if (lazyImages.length === 0) return;

    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        lazyImages.forEach(img => {
            if (img.dataset.src) img.src = img.dataset.src;
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}
